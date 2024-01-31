import './TransportationDetails.scss';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TransportationDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const option = location.state?.option;

    const handleBack = () => {
        navigate(-1);
    };

    const handleBooking = () => {
        // Assuming a basic structure for a new booking
        const newBooking = {
            id: Math.floor(Date.now() / 10000), // Unique ID for the booking (for example, current timestamp)
            transportationId: option.id,
            description: option.description,
            numberOfPassengers: 1 // Default number of passengers
            // Add other relevant details if needed
        };
        navigate('/booking', { state: { newBooking } });
    };

    if (!option) {
        return <div>Transportation option not found.</div>;
    }

    return (
        <div>
            <h2>{option.description}</h2>
            <p>Provider: {option.providerName}</p>
            <p>Vehicle Type: {option.vehicleType}</p>
            <p>Price: {option.price}$</p>
            <p>Duration: {option.duration}</p>
            <p>Origin: {option.origin}</p>
            <p>Destination: {option.destination}</p>
            <p>Date: {option.date}</p>
            <p>Time: {option.time}</p>
            <button onClick={handleBooking}>Book This Option</button>
            <button onClick={handleBack}>Back to Transportation Options</button>
        </div>
    );
};

export default TransportationDetails;
