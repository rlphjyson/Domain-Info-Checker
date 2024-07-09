type DomainInfoTableProps = {
    domainInfo: {
        domainName: string;
        registryData: {
            registrarName: string;
            createdDate: string;
        };
        expiresDate: string;
        estimatedDomainAge: number;
        nameServers: {
            hostNames: string[];
        };
    };
};

const DomainInfoTable: React.FC<DomainInfoTableProps> = ({ domainInfo }) => {
    const {
        domainName,
        registryData,
        expiresDate,
        estimatedDomainAge,
        nameServers
    } = domainInfo;

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Domain Name</th>
                    <th>Registrar</th>
                    <th>Registration Date</th>
                    <th>Expiration Date</th>
                    <th>Estimated Domain Age</th>
                    <th>Hostnames</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{domainName}</td>
                    <td>{registryData.registrarName}</td>
                    <td>{registryData.createdDate}</td>
                    <td>{expiresDate}</td>
                    <td>{estimatedDomainAge}</td>
                    <td>{nameServers.hostNames.join(', ')}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default DomainInfoTable;