import React from 'react';

const BookingConfirmation = ({ bookingDetails, paymentDetails, onCancel, onConfirm }) => {

    return (
        <div >
            <h2>Booking Confirmation Page</h2>
            <p><strong>Transportation:</strong> {bookingDetails.description}</p>
            <p><strong>Price:</strong> ${bookingDetails.price}</p>
            <p><strong>Payment Card:</strong> **** **** **** {paymentDetails.cardNumber.slice(-4)}</p>
            <p><strong>Expiry Date:</strong> {paymentDetails.expiryDate}</p>
            <button onClick={onCancel}>Cancel</button>
            <button onClick={onConfirm}>Confirm Booking</button>
        </div>
    );
};

export default BookingConfirmation;
