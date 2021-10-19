import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from "../Hero/Hero";

function LandingPage() {
    return (
        <Router>
            <Hero />
        </Router>
    );
}

export default LandingPage;