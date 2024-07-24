import React from 'react';

const Nav = () => {
  return (
    <div className='w-full bg-[#152129] top-0 h-[12vh] shadow-lg'>
      <div className='flex items-center justify-between w-[90%] mx-auto h-[100%]'>
        <h1 className='font-bold md:text-[30px] flex-[0.8] cursor-pointer text-[#4F8FC0]'>
          MONTHLY <span className='text-[#26648E]'>BUDGETING</span> TOOL
        </h1>
        <div className='nav-link'>Home</div>
        <div className='nav-link'>ABOUT</div>
      </div>
    </div>
  );
};

export default Nav;
