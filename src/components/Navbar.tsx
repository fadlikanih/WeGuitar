import React from 'react';


export default function Navbar() {
  return (
    <nav className='relative flex items-center justify-between bg-black bg-opacity-50 backdrop-blur-lg rounded-full mx-10 px-6 py-3 h-20 mt-5'>
      <div className='flex items-center'>
        <img src="/img/logo.png" alt="" height={60} width={60} />
        <p className='text-[#fff] text-xl'> <a href="WeGuitar">WeGuitar</a></p>
      </div>
      <ul className='flex text-white text-lg'>
        <li>
          <a href='/'>Beranda</a>
        </li>
        <li className=''>
          <a href=''>Cord</a>
        </li>
        <li>
          <a href=''>Tutorial</a>
        </li>
      </ul>
    </nav>
  );
};

        