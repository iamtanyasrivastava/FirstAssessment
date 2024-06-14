import React  from 'react'


const Navbar = () => {
  return (
    <div className='bg-white shadow-lg mx-20 my-10 py-6'>
    <nav className='flex mx-4'>
        <h1 className='w-2/5 mx-8 font-sans font-md text-xl'>Photon Insight</h1>
        <ul className='flex  w-4/5 space-x-16 ml-8'>
            <li>Home</li>
            <li>Product</li>
            <li>Resource</li>
            <li>About us</li>
        </ul>
        <div className='flex justify-end'>
        <button className='bg-white px-2 py-2 border-2 rounded-md border-gray-200 mx-2'>SignIn</button>
        <button className='bg-blue-800 text-white rounded-md px-2 py-2'>RequestDemo</button>
        
        </div>
        
        

    </nav>
    </div>
  )
}

export default Navbar
