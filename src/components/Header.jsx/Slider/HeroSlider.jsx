import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import guiterImg from "../../../assets/guiter.jpg" 
import englishImg from "../../../assets/englishle.jpg";
import codingImg from "../../../assets/Coding.webp";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaArrowRight } from 'react-icons/fa';


const HeroSlider = () => {
    return (
        <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      navigation
      loop={true}
      className="h-[720px]"
    >
    
      <SwiperSlide>
        <div className="relative h-full">
          <img
            src={guiterImg}
            className="w-full h-full  object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
            <div className="text-center">
              <h1 className="text-4xl font-bold pb-5">Learn Guitar</h1>
              <p className='pb-5'>Start your music journey today</p> 
             <button className="flex items-center gap-2 text-white px-5 py-2 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
             Explore Skills <FaArrowRight />
            </button> 

            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative h-full">
          <img
        src={englishImg}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
            <div className="text-center">
              <h1 className="text-4xl font-bold pb-5">Practice English</h1>
              <p className='pb-5'>Improve your communication skills</p> 
                 <button className="flex justify-center items-center gap-2 text-white px-5 py-2 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
             Explore Skills <FaArrowRight />
            </button> 
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="relative h-full">
          <img
            src={codingImg}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
            <div className="text-center">
              <h1 className="text-4xl font-bold pb-5">Learn Coding</h1>
              <p className='pb-5'>Build your future with tech skills</p> 
               <button className="flex items-center gap-2 text-white px-5 py-2 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
             Explore Skills <FaArrowRight />
            </button> 
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    );
};

export default HeroSlider;