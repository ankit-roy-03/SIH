import React, { useState } from 'react';

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        companyName: '',
        phoneNumber: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        let formErrors = {};
        if (!form.name.trim()) formErrors.name = 'Name is required';
        if (!form.email.trim()) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            formErrors.email = 'Email address is invalid';
        }
        if (!form.companyName.trim()) formErrors.companyName = 'Company Name is required';
        if (!form.phoneNumber.trim()) {
            formErrors.phoneNumber = 'Phone Number is required';
        } else if (!/^\d{10}$/.test(form.phoneNumber)) {
            formErrors.phoneNumber = 'Phone Number must be 10 digits';
        }
        if (!form.message.trim()) formErrors.message = 'Message is required';
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Handle form submission (e.g., send data to the server)
            setSubmitted(true);
            alert('Message sent successfully!');
            // Reset form after submission
            setForm({ name: '', email: '', companyName: '', phoneNumber: '', message: '' });
        }
    };

    return (
        <div className="max-w-3xl mx-auto mt-5 p-6 bg-gray-100 shadow-lg rounded-lg border border-gray-300">
            <h2 className="text-2xl font-bold mb-6 text-teal-600">Contact Us</h2>
            {submitted && (
                <div className="bg-green-100 text-green-700 border border-green-300 rounded p-4 mb-6">
                    Thank you for reaching out! We'll get back to you shortly.
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={`block w-full border rounded-md p-2 ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-teal-500 focus:border-teal-500`}
                        required
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                </div>
                <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`block w-full border rounded-md p-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-teal-500 focus:border-teal-500`}
                        required
                    />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                </div>
                <div className="space-y-1">
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={form.companyName}
                        onChange={handleChange}
                        className={`block w-full border rounded-md p-2 ${errors.companyName ? 'border-red-500' : 'border-gray-300'} focus:ring-teal-500 focus:border-teal-500`}
                        required
                    />
                    {errors.companyName && <span className="text-red-500 text-sm">{errors.companyName}</span>}
                </div>
                <div className="space-y-1">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={form.phoneNumber}
                        onChange={handleChange}
                        className={`block w-full border rounded-md p-2 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} focus:ring-teal-500 focus:border-teal-500`}
                        required
                    />
                    {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber}</span>}
                </div>
                <div className="space-y-1">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className={`block w-full border rounded-md p-2 ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-teal-500 focus:border-teal-500 resize-none min-h-[120px]`}
                        rows="4"
                        required
                    />
                    {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                </div>
                <button
                    type="submit"
                    className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
