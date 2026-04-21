import React from 'react';
import logoImg from '../../assets/skill-swap.jpeg';
import { Link } from 'react-router';

const Navbar = () => {  

    const links = <> 

     <Link className='mr-4' to='/'>Home</Link> 
     <Link to='/profile'>My Profile</Link>
    </>
  
    return (
        <div className="navbar bg-[#F0FFFF] shadow-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         
        {links}
      </ul>
    </div>
   <div className='flex'>
    <img className='w-[70px] h-[70px] rounded-full '  src={logoImg} alt="" />
   
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
      
    </ul>
  </div>
  <div className="navbar-end gap-4">
  <Link  className="btn btn-outline btn-info rounded-3xl  w-28" to='/login'>Login</Link> 
  <Link className='btn btn-active btn-success text-white rounded-3xl w-28' to='/signup'>SignUp</Link>
  </div>
</div>
    );
};

export default Navbar;