import React from 'react';
import RatiIcons from '../RatiIcons';

const SkillCards = ({skill}) => {
    const {skillName,price,rating}=skill;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{skillName}</h2>
    <div>
        <span className='flex items-center gap-3 text-lg font-semibold'><RatiIcons></RatiIcons>{rating}</span>
        <p className='text-xl font-bold pt-3'>${price}</p> 
       
    </div>
    <div className="card-actions justify-center">
        <button className="px-6 py-2 text-white font-semibold rounded-lg 
bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
shadow-lg 
">
 View Details
</button>
  
    </div>
  </div>
</div>
    );
};

export default SkillCards;