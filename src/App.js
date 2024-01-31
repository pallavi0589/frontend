import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import { AuthProvider } from './context/AuthContext';
import TransportationList from './components/pages/transportation/TransportationList';
import TransportationDetails from './components/pages/transportation/TransportationDetails';
import BookingList from './components/pages/booking/BookingList';
import BookingConfirmation from './components/pages/payment/BookingConfirmation';
import PaymentForm from './components/pages/payment/PaymentForm';

function App() {
    return (
        <Router>
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/transportations" element={<TransportationList />} />
                <Route path="/transportation/:id" element={<TransportationDetails />} />
                <Route path="/booking" element={<BookingList />} />
                <Route path="/confirmation" element={<BookingConfirmation />} />
                <Route path="/paymentform" element={<PaymentForm />} />
            </Routes>
        </AuthProvider>
        </Router>
    );
}

export default App;

