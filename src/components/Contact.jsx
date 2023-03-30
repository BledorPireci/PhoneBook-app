import React, {useState} from 'react';
import Header from "./Header";
import './Contact.scss'
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";

const Contact = () => {
    const [open, setOpen] = useState(false);
    const [contacts, setContacts] = useState([]);

    const handleAddContact = (newContact) => {
        setContacts([...contacts, newContact]);
        setOpen(false);
    };

    return (
        <div className="contactPage">
            <Header />
            <div className="contentWrapper">
                <div className="contactTitle">
                    <h2>Contacts</h2>
                    <button className="addContactBtn" onClick={() => setOpen(true)}>
                        Add Contact
                    </button>
                    {open && <ContactForm onSubmit={handleAddContact} />}
                </div>
                <ContactList contacts={contacts} setContacts={setContacts}/>
            </div>
        </div>
    );
};

export default Contact;
