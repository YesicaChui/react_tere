import React from 'react'
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className='flex justify-between py-8'>
      <img className='w-[180px] h-[51px]' src={logo} alt="Logo de la Empresa"/>
      <div  className='flex justify-between items-center gap-6'>
        <p className='cursor-pointer hover:font-semibold'>Home</p>
        <p className='cursor-pointer hover:font-semibold'>How tere works</p>
        <p className='cursor-pointer hover:font-semibold'>Tere benefits</p>
        <button className='bg-[#75BF7A] cursor-pointer hover:font-bold text-white rounded-[5.95px] w-[182px] h-[50px]'>Help Center</button>
      </div>
    </div>
  )
}

export default Header