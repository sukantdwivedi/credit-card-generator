import React from 'react'
import cardBack from '../images/cardback.png'

const BackCard = () => {
  return (
    <div className='relative mt-80 ml-72 shadow-2xl rounded-lg'>
        <img src={cardBack} alt="" width={500} height={300} className=''/>
        <h2 className='absolute text-white tracking-widest text-xl -mt-[152px] ml-[400px]'>000</h2>
    </div>
  )
}

export default BackCard