const API_BASE_URL = 'https://localhost:7048/api';

// Get getTransportationOptions
export const getTransportationOptions = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/Transportation`, {
            method: 'GET',
            //mode: 'no-cors',
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Response data:", data);  // Now it should log the actual data
        return data;
    } catch (error) {
        console.error("Error fetching transportation options:", error);
    }
};
// Get a single transportation option by ID
export const getTransportationOptionById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/transportation/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching transportation option with ID ${id}:`, error);
    }
};

// Update a transportation option
export const updateTransportationOption = async (id, optionData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/transportation/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', mode: 'no-cors' },
            body: JSON.stringify(optionData)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error updating transportation option with ID ${id}:`, error);
    }
};

// Delete a transportation option
export const deleteTransportationOption = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/transportation/${id}`, {
            mode: 'no-cors',
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error deleting transportation option with ID ${id}:`, error);
    }
};
export const confirmBooking = async (paymentDetails) => {
    try {
        const response = await fetch(`${API_BASE_URL}/bookings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' , 'Accept': 'application/json' },
            body: JSON.stringify(paymentDetails),
            mode: 'no-cors',
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error confirming booking with ID`, error);
    }
};

export const cancelBooking = async (bookingId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/bookings/cancel/${bookingId}`, {
            method: 'PUT'
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error cancelling booking with ID ${bookingId}:`, error);
    }
};
