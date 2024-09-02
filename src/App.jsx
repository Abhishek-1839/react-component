import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import './App.css'

function App() {
    return (
        <>
            <Navbar />
            <Header />
            <Features />
            <Showcase />
            <Testimonials />
            <CallToAction />
            <Footer />
        </>
    );
}

export default App;
