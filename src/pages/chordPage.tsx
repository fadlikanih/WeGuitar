export default function ChordPage() {

  return (
    <div>
      <nav className='sticky top-0 z-50 flex items-center justify-between bg-black bg-opacity-50 backdrop-blur-lg rounded-full mx-10 px-6 py-3 mt-5'>
        <div className='flex items-center'>
          <img src="img/logo.png" alt="Logo" height={60} width={60} className="brightness-95" />
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
          <li className="">
            <a href='search'>Search Cord</a>
          </li>
        </ul>
      </nav>

      <div className='grid grid-cols-5 gap-4 mx-10 mt-[5rem] px-[rem] '>
        <div className='col-span-3 h-[34rem] bg-black backdrop-blur-sm bg-black/60 ms-7 h-19 text-white font-family:regular'>
          <h1 className="text-2xl text-white font-bold mt-[1rem] mx-4 text-center">Kekasih Bayangan</h1>
            <p className='py-2 mt-[2rem] mx-20 text-[#FBA834] text-bold'>C    G </p>
            <p className='mx-8'> Padamu, pemilik</p>
            <p className='py-2 mt-[rem] mx-20 text-[#FBA834] text-bold'>Am Em </p>
            <p className='mx-8'> hati yang tak pernah ku miliki</p>
            <p className='py-2 mt-[rem] mx-20 text-[#FBA834] text-bold'>F Em Am </p>
            <p className='mx-8'> yang hadir sebagai</p>
            <p className='py-2 mt-[rem] mx-20 text-[#FBA834] text-bold'>Dm F C G </p>
            <p className='mx-8'> bagian dari kisah hidupku</p>
            <p className='py-2 mt-[rem] mx-20 text-[#FBA834] text-bold'>C G </p>
            <p className='mx-8'> engkau aku cinta</p>
            <p className='py-2 mt-[rem] mx-20 text-[#FBA834] text-bold'>Am Em </p>
            <p className='mx-8'> dengan segenap rasa di hati</p>
            <p className='py-2 mt-[rem] mx-20 text-[#FBA834] text-bold'>F Em Am </p>
            <p className='mx-8'> slalu ku mencoba</p>
            <p className='py-2 mt-[rem] mx-20 text-[#FBA834] text-bold'>Dm F C </p>
            <p className='mx-8'> menjadi seperti yang kau minta</p>
            <p className='py-2 mt-[2rem] mx-20 text-[#FBA834] text-bold'>C    G </p>
            <p className='mx-8'> Padamu, pemilik</p>
            <p className='py-2 mt-[rem] mx-20 text-[#FBA834] text-bold'>Am Em </p>
            <p className='mx-8'> hati yang tak pernah ku miliki</p>
            <p className='py-2 mt-[rem] mx-20 text-[#FBA834] text-bold'>F Em Am </p>
            <p className='mx-8'> yang hadir sebagai</p>
            <p className='py-2 mt-[rem] mx-20 text-[#FBA834] text-bold'>Dm F C G </p>
            <p className='mx-8'> bagian dari kisah hidupku</p>
            <p className='py-2 mt-[rem] mx-20 text-[#FBA834] text-bold'>C G </p>
            <p className='mx-8'> engkau aku cinta</p>
            <p className='py-2 mt-[rem] mx-20 text-[#FBA834] text-bold'>Am Em </p>
            <p className='mx-8'> dengan segenap rasa di hati</p>
            <p className='py-2 mt-[rem] mx-20 text-[#FBA834] text-bold'>F Em Am </p>
            <p className='mx-8'> slalu ku mencoba</p>
            <p className='py-2 mt-[rem] mx-20 text-[#FBA834] text-bold'>Dm F C </p>
            <p className='mx-8'> menjadi seperti yang kau minta</p>
        </div>
        <div className='col-span-2 h-[34rem] bg-black backdrop-blur-lg rounded bg-black/60  '>
          <input type="text" placeholder='pencarian lagu ' className='bg-black/90 text-white px-4 m-1 focus:text-white focus:outline-none' />
          <input type="text" placeholder='cari' className='bg-black/90 mt-3 w-[4rem] px-4 m-1 ' />
          <div className='text-white text-bold] m-10'>
            <p><a href="">1'st Album: Kekasih Yang Tak Dianggap  <br />  </a>
              <a href="">2007 Rintang</a> <br />
              <a href="">*Selamat Tinggal Kekasih yang Baik</a> <br />
              <a href=""> *Saat Teleponku Tak Kau Angkat *Tentangmu</a> <br />
              <a href="">*Tanya Air Mata</a> <br />
              <a href="">*Inikah Nikmatnya Bercinta</a> <br />
              <a href="">*Ampuni Aku</a> <br />
              <a href="">*Kekasih yang Tak Dianggap</a> <br />
              <a href="">*Piluphobia</a> <br />
              <a href="">*Benih Kita</a> <br />
              <a href="">*Penantianku</a> <br />
              <a href="">*Intrologi</a> <br />
              2'nd Album: Balas Dendam - 2008 <br />
              <a href="">*Hilang</a> <br />
              <a href="">*Inikah Nikmat Bercinta</a> <br />
              <a href="">*Piluphobia</a> <br />
              <a href="">*Tanya Air Mata</a> <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}