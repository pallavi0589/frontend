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
// BookingForm.js



/*const BookingForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const bookingDetails = location.state?.option;

    const [paymentDetails, setPaymentDetails] = useState(null);
    const [isPaymentSubmitted, setIsPaymentSubmitted] = useState(false);

    const handlePaymentSuccess = (paymentInfo) => {
        setPaymentDetails(paymentInfo);
        setIsPaymentSubmitted(true);
    };

    const handleConfirmBooking = () => {
        // api call for 
        console.log('Booking confirmed:', bookingDetails, paymentDetails);
        navigate('/BookingConfirmation', { state: { bookingDetails, paymentDetails } });
    };

    const handleCancelBooking = () => {
        // Booking cancellation logic
        console.log('Booking cancelled');
        navigate('/transportations'); 
    };

    // Rest of your component...

    return (
        <div>
            {isPaymentSubmitted && paymentDetails ? (
                <BookingConfirmation
                    bookingDetails={bookingDetails}
                    paymentDetails={paymentDetails}
                    onCancel={handleCancelBooking}
                    onConfirm={handleConfirmBooking}
                />
            ) : (
                <PaymentForm
                    bookingDetails={bookingDetails}
                    onPaymentSuccess={handlePaymentSuccess}
                />
            )}
        </div>
    );
};

export default BookingForm;*/

