function Navbar() {
    return (
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
                <li className="mx-8">
                    <a href='tutorial'>Tutorial</a>
                </li>
                <li className="mr-4">
                    <a href='search'>Search</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar