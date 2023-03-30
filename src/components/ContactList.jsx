import React, {useState} from 'react';
import './ContactList.scss'
import Popup from "reactjs-popup";
import trashCan from '../assets/Featured-icon.png'
import EditContactForm from "./EditContactForm";

const ContactList = ({ contacts, setContacts}) => {
    const [showPopup, setShowPopup] = useState(false);
    const [contactToDelete, setContactToDelete] = useState(null);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [contactToEdit, setContactToEdit] = useState();


    const handleDelete = () => {
        setContacts(contacts.filter((contact) => contact !== contactToDelete));
        setShowPopup(false);
        setContactToDelete(null);
    };

    const handleEdit = (contact) => {
        setContactToEdit(contact);
        setShowEditPopup(true);
    };

    const handleEditSubmit = (editedContact) => {
        setContacts(
            contacts.map((contact) =>
                contact === contactToEdit ? { ...contact, ...editedContact } : contact
            )
        );
        setShowEditPopup(false);
    };


    return (
        <div className="contactList">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>dummy</td>
                    <td>data</td>
                    <td>so</td>
                    <td>table</td>
                    <td>wont</td>
                    <td>be@empty.com</td>
                    <td>:)</td>
                    <td>:)</td>
                    <td>:)</td>
                </tr>

                {contacts.map((contact, index) => (
                    <tr key={index}>
                        <td>{contact.name}</td>
                        <td>{contact.lastName}</td>
                        <td>{contact.address}</td>
                        <td>{contact.city}</td>
                        <td>{contact.country}</td>
                        <td>{contact.email}</td>
                        <td>{contact.number}</td>
                        <td>
                            <button className="editBtn" onClick={() => handleEdit(contact)}>Edit</button>
                        </td>

                        <td>
                            <button className="deleteBtn"
                                onClick={() => {
                                    setContactToDelete(contact);
                                    setShowPopup(true);
                                }}
                            >Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className="wrapper" style={{ display: showPopup ? "block" : "none" }} />
            <Popup open={showPopup} onClose={() => setShowPopup(false)}>
                <div className="popupCard">
                    <div className="popupWrapper">
                        <img src={trashCan}  alt="trash Can"/>
                        <h2>Delete Task</h2>
                        <p>Are you sure you want to delete this task? This action cannot be undone.</p>
                        <div className="buttonWrapper">
                            <button className="DeclineBtn" onClick={() => setShowPopup(false)}>Cancel</button>
                            <button className="ConfirmBtn" onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </Popup>

            <Popup open={showEditPopup} onClose={() => setShowEditPopup(false)}>
                <EditContactForm contact={contactToEdit} onSave={handleEditSubmit}  onClose={() => setShowEditPopup(false)}/>
            </Popup>

        </div>
    );
}
export default ContactList
