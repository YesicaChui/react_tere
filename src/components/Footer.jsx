import React from 'react'

const Footer = () => {
  return (
    <div className='flex rounded-md border-2 bg-[#75BF7A] p-10 my-8 justify-between'>
      <p className='text-white font-[600] text-[24px] w-[230px] leading-7'>Let’s go. Get a link to download the app.</p>
      <div className='flex gap-4'>
        <input className='w-[499px] h-[50px] rounded-[5px] px-5' type="text" placeholder='Enter mobile number' />
        <button className='bg-[#000000] hover:font-extrabold text-white rounded-[5.95px] w-[182px] h-[50px]'>APPLY TO DRIVE</button>
      </div>
    </div>
  )
}

export default Footer