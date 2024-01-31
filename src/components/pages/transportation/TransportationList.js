import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTransportationOptions } from '../../services/transportationServices';
import './TransportationList.scss';

const TransportationList = () => {
    const [transportationOptions, setTransportationOptions] = useState([]);
    const [selectedDestination, setSelectedDestination] = useState('');
    const [searchDate, setSearchDate] = useState('');
    const [searchTime, setSearchTime] = useState('');

    useEffect(() => {
        getTransportationOptions().then(options => {
            setTransportationOptions(options);
        });
    }, []);

    const handleDestinationChange = (e) => {
        setSelectedDestination(e.target.value);
    };
    const handleSearch = () => {
        const filtered = transportationOptions.filter(option => {
            return (!searchDate || option.date === searchDate) && (!searchTime || option.time === searchTime);
        });
        setTransportationOptions(filtered);
    };
    const filteredOptions = selectedDestination
        ? transportationOptions.filter(option => option.destination === selectedDestination)
        : transportationOptions;

    return (
        <div className="transportation-list">
            <h2>Transportation Options</h2>
            <div>
                <label htmlFor="date-search">Date:</label>
                <input
                    type="date"
                    id="date-search"
                    value={searchDate}
                    onChange={(e) => setSearchDate(e.target.value)}
                />
                <label htmlFor="time-search">Time:</label>
                <input
                    type="time"
                    id="time-search"
                    value={searchTime}
                    onChange={(e) => setSearchTime(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Provider</th>
                        <th>Vehicle Type</th>
                        <th>Price ($)</th>
                        <th>Duration</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredOptions && filteredOptions.length > 0 ? filteredOptions.map(option => (
                        <tr key={option.id}>
                            <td>{option.id}</td>
                            <td>
                            <Link to={`/transportation/${option.id}`} state={{ option }}>
                                     {option.description} - {option.price}$
                            </Link>
                            </td>
                            <td>{option.providerName}</td>
                            <td>{option.vehicleType}</td>
                            <td>{option.price}</td>
                            <td>{option.duration}</td>
                            <td>{option.origin}</td>
                            <td>{option.destination}</td>
                            <td>{option.date}</td>
                            <td>{option.time}</td>
                        </tr>
                    )) : <tr><td colSpan="10">No Data Found. Please try again later.</td></tr>}
                </tbody>
            </table>
        </div>
    );
};

export default TransportationList;
