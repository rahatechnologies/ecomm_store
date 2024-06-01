import { Outlet } from 'react-router-dom';
import React from 'react'

const HomeLayout = () => {
  return (
    <>
        <nav>
            <span className='text-4xl text-primary'>Ecomm Store</span>
            <Outlet/>
        </nav>
    </>
  );
}

export default HomeLayout