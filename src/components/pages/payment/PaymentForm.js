import React, { useState,useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { confirmBooking } from '../../services/transportationServices'
import { useLocation } from 'react-router-dom';

const PaymentForm = ({ onPaymentSuccess }) => {
    const location = useLocation();
    const bookingDetails = location.state.bookingDetails;
    const { user } = useContext(AuthContext);
    const [paymentDetails, setPaymentDetails] = useState({
        BookingId: bookingDetails?.id || '',
        TransportOptionId: bookingDetails.transportationId,
        PassengerCount: bookingDetails.numberOfPassengers,
        UserName: user?.email || 'pallavi@example.com'
    });

    const [cardDetail, setCardDetail] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    })

    const handleChange = (e) => {
        setCardDetail({ ...paymentDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await confirmBooking(paymentDetails);
            if (response) {
                onPaymentSuccess(response); 
            } else {
                console.error('Payment confirmation failed');
            }
        } catch (error) {
            console.error('Error during payment confirmation:', error);
        }
    };

    return (
        <div>
            <h2>Payment Information</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Card Number:</label>
                    <input
                        name="cardNumber"
                        type="text"
                        value={cardDetail.cardNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Expiry Date:</label>
                    <input
                        name="expiryDate"
                        type="text"
                        value={cardDetail.expiryDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>CVV:</label>
                    <input
                        name="cvv"
                        type="text"
                        value={cardDetail.cvv}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Submit Payment</button>
                </div>
            </form>
        </div>
    );
};

export default PaymentForm;
