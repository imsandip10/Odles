import React from 'react';
import Services from '../Component/Services';
import Navbar from '../Component/Navbar';
import Treands from '../Component/Treands';
import Footer from '../Component/Footer';

export function Home() {
    return (
        <div>
            <Navbar />
            <Services />
            <Treands />
            <Footer />
        </div>
    )
}

export default Home;