import React, { useState } from 'react';
import Notifications from './Notifications';
import './Profile.css';

const Profile = () => {
    // State for user data
    const [user, setUser] = useState({
        name: 'Saif Ali',
        email: 'saif.ali@example.com',
        profilePicture: 'https://placehold.co/150x150/007BFF/FFFFFF?text=SA'
    });

    // State to manage edit mode
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ name: user.name, email: user.email });

    // Sample appointment data
    const upcomingAppointments = [
        { id: 1, doctor: 'Dr. Smith', service: 'General Checkup', date: '2025-07-20', time: '10:00 AM' }
    ];

    const handleEditClick = () => {
        setFormData({ name: user.name, email: user.email }); // Reset form data to current user data
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = (e) => {
        e.preventDefault();
        setUser({ ...user, name: formData.name, email: formData.email });
        setIsEditing(false);
        // In a real app, you would send this to a server
    };

    return (
        <div className="profile-container">
            <div className="profile-sidebar">
                <div className="profile-card">
                    <img src={user.profilePicture} alt="User Profile" className="profile-pic" />
                    
                    {isEditing ? (
                        <form className="edit-form" onSubmit={handleSave}>
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                            <div className="edit-buttons">
                                <button type="submit" className="save-btn">Save</button>
                                <button type="button" onClick={handleCancelClick} className="cancel-btn">Cancel</button>
                            </div>
                        </form>
                    ) : (
                        <>
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                            <button onClick={handleEditClick} className="edit-profile-btn">Edit Profile</button>
                        </>
                    )}
                    
                    <button className="logout-btn">Logout</button>
                </div>
            </div>
            <div className="profile-main-content">
                <div className="appointments-list">
                    <h3>Upcoming Appointments</h3>
                    {upcomingAppointments.map(appt => (
                        <div key={appt.id} className="appointment-card">
                            <p><strong>Doctor:</strong> {appt.doctor}</p>
                            <p><strong>Service:</strong> {appt.service}</p>
                            <p><strong>Date:</strong> {appt.date} at {appt.time}</p>
                        </div>
                    ))}
                </div>
                <Notifications />
            </div>
        </div>
    );
};

export default Profile;
