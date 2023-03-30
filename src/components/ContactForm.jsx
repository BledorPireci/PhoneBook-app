import React, {useState} from 'react';
import './ContactForm.scss'

const ContactForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        email: '',
        number: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="contactForm">
            <form className="form" onSubmit={handleSubmit}>
                <legend>Add Contact</legend>
                <label htmlFor="name">Name</label>
                <input type="text" name="name"
                       placeholder="Enter your name"
                       value={formData.name}
                       onChange={handleInputChange}
                />

                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName"
                       placeholder="Enter your last name"
                       value={formData.lastName}
                       onChange={handleInputChange}
                />

                <label htmlFor="address">Address</label>
                <input type="text" name="address"
                       placeholder="Enter your address"
                       value={formData.address}
                       onChange={handleInputChange}
                />

                <label htmlFor="city">City</label>
                <input type="text" name="city"
                       placeholder="Enter your city"
                       value={formData.city}
                       onChange={handleInputChange}
                />

                <label htmlFor="country">Country</label>
                <input type="text" name="country"
                       placeholder="Enter your country"
                       value={formData.country}
                       onChange={handleInputChange}
                />

                <label htmlFor="email">Email</label>
                <input type="email" name="email"
                       placeholder="Enter your email"
                       value={formData.email}
                       onChange={handleInputChange}
                />

                <label htmlFor="number">Number</label>
                <input type="text" name="number"
                       placeholder="Enter your number"
                       value={formData.number}
                       onChange={handleInputChange}
                />

                <button className="submitBtn">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;

