import React from 'react'
import cardFront from '../images/cardfront.png';
import cardLogo from '../images/cardLogo.svg'

const FrontCard = () => {
  return (
    <div className='relative mt-24 ml-40'>
        <img src={cardFront} alt="" width={500} height={300} className='absolute shadow-2xl rounded-lg z-0' />
        <div className='absolute'>
          <img src={cardLogo} alt="" className='p-6'/>
          <div className='p-10'>
            <h2 className='mt-6 text-4xl tracking-widest text-white'>0000 0000 0000 0000</h2>

            <ul className='flex justify-between w-full mt-8 text-white uppercase tracking-widest'>
              <li>Sukant Dwivedi</li>
              <li>00/00</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default FrontCard