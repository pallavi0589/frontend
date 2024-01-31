import './BookingForm.scss'
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PaymentForm from '../payment/PaymentForm'; 
import BookingConfirmation from '../payment/BookingConfirmation'; 
const BookingForm = ({ booking, onSave, onCancel, isPaymentSubmitted }) => {
    const [numberOfPassengers, setNumberOfPassengers] = useState(booking.numberOfPassengers);

    

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...booking, numberOfPassengers });
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Number of Passengers:</label>
                <input
                    type="number"
                    value={numberOfPassengers}
                    onChange={(e) => setNumberOfPassengers(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Save Booking</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default BookingForm;
