import './BookingList.scss';
import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { cancelBooking } from '../../services/transportationServices';

const BookingList = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [bookings, setBookings] = useState([]);
    const [editingBooking, setEditingBooking] = useState(null);
    const [isPaymentPage, setPaymentPage] = useState(false);

    useEffect(() => {
        if (location.state?.bookings) {
            setBookings(location.state.bookings);
        }
    }, [location.state?.bookings]);

    useEffect(() => {
        if (location.state?.newBooking && !bookings.some(b => b.id === location.state.newBooking.id)) {
            setBookings(prevBookings => [ location.state.newBooking]);
        }
    }, [location.state?.newBooking, bookings]);

    const handleEdit = (booking) => {
        setEditingBooking(booking);
    };

    const handlePayment  = (booking) => {
        navigate('/paymentform', { state: { bookingDetails: booking } });
   
    };

    const handleDelete = async (bookingId) => {
        try {
            await cancelBooking(bookingId);
            setBookings(prevBookings => prevBookings.filter(b => b.id !== bookingId));
        } catch (error) {
            console.error('Failed to delete booking:', error);
        }
    };

    const handleSave = (updatedBooking) => {
        setBookings(prevBookings =>
            prevBookings.map(booking => booking.id === updatedBooking.id ? updatedBooking : booking)
        );
        setEditingBooking(null);
    };

    return (
        <div className="booking-list">
            <h1>Booking List</h1>
            {(editingBooking || isPaymentPage )  ? (
                <BookingForm
                    booking={editingBooking}
                    onSave={handleSave}
                    onCancel={() => setEditingBooking(null)}
                    isPaymentPage = {isPaymentPage}
                />
            ) : (
                <div>
                    {bookings.map((booking) => (
                        <div key={booking.id} className="booking-item">
                            <span><strong>Booking ID:</strong> {booking.id}</span>
                            <span><strong>Transportation ID:</strong> {booking.transportationId}</span>
                            <span><strong>Passengers:</strong> {booking.numberOfPassengers}</span>
                            <div>
                                <button onClick={() => handleEdit(booking)}>Edit</button>
                                <button onClick={() => handleDelete(booking.id)}>Delete</button>
                                <button onClick={() => handlePayment(booking)}>Make Payment</button>
                            </div>
                        </div>
                    ))}
                    {!bookings.length && <div>No bookings found.</div>}
                </div>
            )}
        </div>
    );
};

export default BookingList;
