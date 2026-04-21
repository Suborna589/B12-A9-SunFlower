import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Header.jsx/Navbar';
import Footer from '../components/Header.jsx/Footer';
import HeroSlider from '../components/Header.jsx/Slider/HeroSlider';
import PopularSkill from '../components/Header.jsx/PopularSkill/PopularSkill';


const HomeLayouts = () => {
    return (
        <div className=' max-w-8xl mx-auto sapce-y-5'> 
            <header className='min-h-screen'>
               
                <Navbar></Navbar>
                <section className='mt-0'>
                    <HeroSlider></HeroSlider>
                 
                </section>
            </header> 

             
            <main>  
                <PopularSkill></PopularSkill>
                <Outlet></Outlet>
                
                </main> 
            <footer>
                <Footer></Footer>
            </footer>
            
        </div>
    );
};

export default HomeLayouts;