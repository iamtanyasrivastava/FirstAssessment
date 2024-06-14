import React from 'react'
import Seconds from './second.jpeg';

const Second = () => {
  return (
    <div className='flex justify-center flex-col'>
      <img className='mx-24 w-4/5 md:mx-24 lg:mx-28 xl:mx-40 ' src={Seconds} alt=""></img>
      <h1 className='text-gray-600 flex justify-center'>Loved By Our Customers</h1>
        <ul className='flex flex-row justify-center space-x-24 text-sm md:text-md lg:text-lg' >
            <li>image</li>
            <li>Forgepoint</li>
            <li>Forgepoint</li>
            <li>Forgepoint</li>
        </ul>
    
    
    </div>
  )
}

export default Second
