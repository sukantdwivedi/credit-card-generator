import React, { useState } from 'react';

const Form = (props) => {

    const[error,seterror] = useState();
    const [name, setName] = useState("")


  return (
    <div>
        <form className='flex flex-col justify-center ml-auto gap-8 max-w-lg lg:h-screen font-semibold'>
            <div>
                <label htmlFor="cardholder_name" className='block uppercase tracking-widest mb-2 text-sm text-slate-800'>Cardholder Name</label>
                <input type="text" id='cardholder_name' placeholder='e.g. Jane Appleseed' required  className='border-2  block py-3 px-4 outline-none w-full border-slate-300 rounded-xl' value={name} onChange={(e)=> setName(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="cardnumber" className='block uppercase tracking-wider mt-2 mb-2 text-sm text-slate-800'>Card Number</label>
                <input type="text" id='cardnumber' placeholder='e.g. 1234 5678 9123 0000' required  className='border-2 block py-3 px-4 outline-none w-full border-slate-300 rounded-xl' maxLength={19}/>
            </div>

            <div className='flex items-center gap-8'>
                <div className='flex-1'>
                    <label htmlFor="expiry" className='block uppercase tracking-wider mt-2 mb-2 text-sm text-slate-800'>Exp. Date (MM/YY)</label>
                    <div className='flex w-full gap-4'>
                        <input type="text" id='expiry' placeholder='MM' required  className='border-2 block py-3 px-4 outline-none w-full border-slate-300 rounded-xl'/>
                        <input type="text" id='expiry' placeholder='YY' required  className='border-2 block py-3 px-4 outline-none w-full border-slate-300 rounded-xl'/>
                    </div>
                </div>

                <div className='flex-1'>
                    <label htmlFor="cvc" className='block uppercase tracking-wider mt-2 mb-2 text-sm text-slate-800'>CVC</label>
                    <input type="text" id='cvc' placeholder='e.g. 123' required  className='border-2 block py-3 px-4 outline-none w-full border-slate-300 rounded-xl' maxLength={3}/>
                </div>
            </div>

            <button type='submit' className='bg-[#220930] py-3 px-6 rounded-md text-white text-lg tracking-wider mt-4'>Confirm</button>
        </form>
    </div>
  )
}

export default Form