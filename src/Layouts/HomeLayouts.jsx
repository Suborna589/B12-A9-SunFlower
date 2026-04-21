import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Header.jsx/Navbar';
import Footer from '../components/Header.jsx/Footer';

const HomeLayouts = () => {
    return (
        <div className=' max-w-8xl mx-auto'> 
            <header className='min-h-screen'>
                <Navbar></Navbar>
            </header>
            <main> 
                <Outlet></Outlet>
                
                </main> 
            <footer>
                <Footer></Footer>
            </footer>
            
        </div>
    );
};

export default HomeLayouts;