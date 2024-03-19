export default function TentangPage() {
  return (
    <div>
       <nav className='relative flex items-center justify-between bg-black bg-opacity-50 backdrop-blur-lg rounded-full mx-10 px-6 py-3 h-20 mt-5'>
      <div className='flex items-center'>
        <img src="img/logo.png" alt="Logo" height={60} width={60} className="brightness-95"/>
    
        <p className='text-[#fff] text-xl'> <a href="home">WeGuitar</a></p>
      </div>
      <ul className='flex text-white text-lg '>
        <li>
          <a href='home'>Beranda</a>
        </li>
        <li className='mx-8'>
          <a href='chord'>Cord</a>
        </li>
        <li className="">
          <a href='tutorial'>Tutorial</a>
        </li>
      </ul>
    </nav>
    <div className='grid grid-cols-5 gap-4 mx-10 mt-[5rem] '>
      <div className='col-span-3 h-[40rem] bg-black backdrop-blur-sm bg-white/20 ms-7 h-[17rem] text-white '>
     
        

      </div>
      <div className='col-span-2 h-[30rem] bg-black backdrop-blur-lg rounded bg-white/20  '>
      <div className='text-white m-10'></div>
      </div>
      </div>
    </div>
  );
}
