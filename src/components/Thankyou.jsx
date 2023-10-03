import React from 'react'

const Thankyou = ({setConfirmed}) => {
  return (
    <div className="flex flex-col items-center justify-center lg:h-screen max-w-lg mx-auto">
        <h1 className="text-3xl my-6 text-slate-800 uppercase text-center">
          Thank you!
        </h1>
        <button
          onClick={() => setConfirmed(false)}
          className="bg-[#220930] py-3 px-6 rounded-md text-white text-lg tracking-wider mt-4"
        >
          Continue
        </button>
    </div>
  )
}

export default Thankyou