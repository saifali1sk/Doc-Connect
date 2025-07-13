import React, { useState } from 'react';
import './Appointments.css';

const Appointments = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        service: '',
        doctor: '',
        date: '',
        time: '',
        name: '',
        email: ''
    });

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Appointment Confirmed! A confirmation has been sent to your email.');
        // Here you would typically send the data to a server
        console.log('Form Data Submitted:', formData);
    };

    return (
        <div className="appointment-container">
            <h1>Book an Appointment</h1>
            <div className="progress-bar">
                <div className={`step ${step >= 1 ? 'active' : ''}`}>Step 1</div>
                <div className={`step ${step >= 2 ? 'active' : ''}`}>Step 2</div>
                <div className={`step ${step >= 3 ? 'active' : ''}`}>Step 3</div>
            </div>

            {step === 1 && (
                <div className="form-step">
                    <h2>Select Service & Doctor</h2>
                    <label>Service</label>
                    <select name="service" value={formData.service} onChange={handleChange}>
                        <option value="">Choose a service...</option>
                        <option value="general">General Checkup</option>
                        <option value="dental">Dental Care</option>
                        <option value="cardiology">Cardiology</option>
                    </select>
                    <label>Doctor</label>
                    <select name="doctor" value={formData.doctor} onChange={handleChange}>
                        <option value="">Choose a doctor...</option>
                        <option value="smith">Dr. Smith</option>
                        <option value="jones">Dr. Jones</option>
                    </select>
                    <button onClick={handleNext}>Next</button>
                </div>
            )}

            {step === 2 && (
                <div className="form-step">
                    <h2>Choose Date & Time</h2>
                    <label>Date</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} />
                    <label>Time</label>
                    <input type="time" name="time" value={formData.time} onChange={handleChange} />
                    <div className="button-group">
                        <button onClick={handleBack}>Back</button>
                        <button onClick={handleNext}>Next</button>
                    </div>
                </div>
            )}

            {step === 3 && (
                <form className="form-step" onSubmit={handleSubmit}>
                    <h2>Patient Details</h2>
                    <label>Full Name</label>
                    <input type="text" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                    <label>Email</label>
                    <input type="email" name="email" placeholder="john.doe@example.com" value={formData.email} onChange={handleChange} required />
                    <div className="button-group">
                        <button type="button" onClick={handleBack}>Back</button>
                        <button type="submit">Confirm Appointment</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Appointments;
