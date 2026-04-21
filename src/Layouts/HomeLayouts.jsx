import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Header.jsx/Navbar';
import Footer from '../components/Header.jsx/Footer';
import HeroSlider from '../components/Header.jsx/Slider/HeroSlider';


const HomeLayouts = () => {
    return (
        <div className=' max-w-8xl mx-auto'> 
            <header className='min-h-screen'>
               
                <Navbar></Navbar>
                <section className='mt-0'>
                    <HeroSlider></HeroSlider>
                 
                </section>
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