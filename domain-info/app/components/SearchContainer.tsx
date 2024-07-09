"use client";

import React, { useState } from 'react';
import SearchField from './SearchField';
import PopupDialog from './PopupDialog';
import DomainInfoTable from './DomainInfoTable';
import ContactInfoTable from './ContactInfoTable';
import env from '../utils/env';

const SearchContainer: React.FC = () => {

    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const [popupMessage, setPopupMessage] = useState<string>('');
    const [domainInfo, setDomainInfo] = useState<any>(null);
    const [contactInfo, setContactInfo] = useState<any>(null);
    const [showDomainTable, setShowDomainTable] = useState<boolean>(true);

    const handleSearch = (textInput: string) => {

        const api_key = env.API_KEY;
        const api_url = env.API_URL;
        const endpoint = `${api_url}/whoisserver/WhoisService?apiKey=${api_key}&domainName=${textInput}&outputFormat=json`;

        // Perform API call
        fetch(endpoint)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Handle API response data here
                if (data.WhoisRecord.ErrorMessage) {
                    setPopupMessage(data.WhoisRecord.ErrorMessage);
                    setIsPopupOpen(true);
                } else {
                    setDomainInfo({

                        domainName: data.WhoisRecord.domainName,
                        registryData: {
                            registrarName: data.WhoisRecord.registryData?.registrarName || '',
                            createdDate: data.WhoisRecord.registryData?.createdDate || '',
                        },
                        expiresDate: data.WhoisRecord.expiresDate || '',
                        estimatedDomainAge: data.WhoisRecord.estimatedDomainAge || 0,
                        nameServers: {
                            hostNames: data.WhoisRecord.nameServers?.hostNames || [],
                        },
                    });

                    setContactInfo({
                        registrant: {
                            name: data.WhoisRecord.registrant?.name || '',
                        },
                        technicalContact: {
                            name: data.WhoisRecord.technicalContact?.name || '',
                        },
                        administrativeContact: {
                            name: data.WhoisRecord.administrativeContact?.name || '',
                        },
                        contactEmail: data.WhoisRecord.contactEmail || '',
                    });
                }
            })
            .catch(error => {
                console.error('Error fetching WHOIS data:', error);
                setPopupMessage('Failed to fetch WHOIS data. Please try again later.');
                setIsPopupOpen(true);
            });
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleToggleTable = () => {
        setShowDomainTable(!showDomainTable);
    };

    return (
        <div className='flex flex-col gap-10'>

            <SearchField onSearch={handleSearch} />

            {domainInfo && contactInfo && (
                <button className='btn btn-primary w-40 ' onClick={handleToggleTable}>
                    {showDomainTable ? 'Show Contact Info' : 'Show Domain Info'}
                </button>
            )}
            {showDomainTable && domainInfo && (
                <DomainInfoTable domainInfo={domainInfo} />
            )}
            {!showDomainTable && contactInfo && (
                <ContactInfoTable contactInfo={contactInfo} />
            )}
            <PopupDialog isOpen={isPopupOpen} onClose={closePopup} message={popupMessage} />
        </div>
    );
};

export default SearchContainer;