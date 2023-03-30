import React, {useState} from 'react';
import './ContactForm.scss'

const EditContactForm = ({ contact, onSave ,onClose }) => {
    const [name, setName] = useState(contact.name);
    const [lastName, setLastName] = useState(contact.lastName);
    const [address, setAddress] = useState(contact.address);
    const [city, setCity] = useState(contact.city);
    const [country, setCountry] = useState(contact.country);
    const [email, setEmail] = useState(contact.email);
    const [number, setNumber] = useState(contact.number);
    console.log(contact)
    const handleSubmit = (event) => {
        event.preventDefault();
        onSave({
            id: contact.id,
            name,
            lastName,
            address,
            city,
            country,
            email,
            number,
        });
        onClose();
    };


    return (
        <div className="contactForm" >
            <form className="form" onSubmit={handleSubmit}>
                <legend>Add Contact</legend>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />

                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <label htmlFor="city">City</label>
                <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                <label htmlFor="country">Country</label>
                <input
                    type="text"
                    name="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="number">Number</label>
                <input
                    type="text"
                    name="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />

                <button className="submitBtn">Submit</button>
            </form>
        </div>
    );
}
export default EditContactForm;