import React, { useState } from 'react';
import './Reviews.css';

const Reviews = () => {
    // Sample initial reviews
    const [reviews, setReviews] = useState([
        { id: 1, author: 'Jane Doe', rating: 5, text: 'Dr. Smith was wonderful! Very attentive and professional.' },
        { id: 2, author: 'John Smith', rating: 4, text: 'A great experience overall. The clinic was clean and the staff were friendly.' }
    ]);

    const [newReview, setNewReview] = useState({ author: '', rating: 5, text: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newReview.author && newReview.text) {
            setReviews([...reviews, { ...newReview, id: Date.now() }]);
            setNewReview({ author: '', rating: 5, text: '' }); // Reset form
        }
    };

    return (
        <div className="reviews-container">
            <h1>Patient Reviews</h1>
            
            <div className="reviews-list">
                {reviews.map(review => (
                    <div key={review.id} className="review-card">
                        <div className="review-rating">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
                        <p className="review-text">"{review.text}"</p>
                        <p className="review-author">- {review.author}</p>
                    </div>
                ))}
            </div>

            <div className="add-review-form">
                <h2>Leave a Review</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="author" 
                        placeholder="Your Name" 
                        value={newReview.author} 
                        onChange={handleInputChange} 
                        required 
                    />
                    <select 
                        name="rating" 
                        value={newReview.rating} 
                        onChange={handleInputChange}
                    >
                        <option value="5">5 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="2">2 Stars</option>
                        <option value="1">1 Star</option>
                    </select>
                    <textarea 
                        name="text" 
                        placeholder="Write your review here..." 
                        value={newReview.text} 
                        onChange={handleInputChange} 
                        required 
                    />
                    <button type="submit">Submit Review</button>
                </form>
            </div>
        </div>
    );
};

export default Reviews;
