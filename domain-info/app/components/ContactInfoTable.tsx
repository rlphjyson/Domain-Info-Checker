type ContactInfoTableProps = {
    contactInfo: {
        registrant: {
            name: string;
        };
        technicalContact: {
            name: string;
        };
        administrativeContact: {
            name: string;
        };
        contactEmail: string;
    };
};

const ContactInfoTable: React.FC<ContactInfoTableProps> = ({ contactInfo }) => {
    const {
        registrant,
        technicalContact,
        administrativeContact,
        contactEmail
    } = contactInfo;

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Registrant Name</th>
                    <th>Technical Contact Name</th>
                    <th>Administrative Contact Name</th>
                    <th>Contact Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{registrant.name}</td>
                    <td>{technicalContact.name}</td>
                    <td>{administrativeContact.name}</td>
                    <td>{contactEmail}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default ContactInfoTable;