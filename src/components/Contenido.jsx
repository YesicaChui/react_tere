import React from 'react'
import playStore from "../assets/play_store.png"
import banner from "../assets/banner.png"
import appStore from "../assets/app_store.png"

const Contenido = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex flex-col w-[557px] '>
        <h1 className='text-[52px]  font-[700] leading-[65.91px] mt-16'>DOWNLOAD APP, SAVE MONEY, MAKE FRIENDS!</h1>
        <p className='text-[26px] font-extralight py-10'>Its simple and its free. Play your part in reducing Carbon Footprint and help Mother Nature to sustain its beauty. So what are you waiting for ?
          Lets ride together</p>
        <div className='flex gap-5 mt-5'>
          <div className='flex items-center justify-center gap-3 bg-black text-white  font-semibold py-3 w-[260px] rounded-[5px] text-[24px]' >
            <img src={playStore} alt="" />
            <p>DOWNLOAD</p>
          </div>
          <div className='flex items-center justify-center gap-3 bg-black text-white  font-semibold py-3 w-[260px] rounded-[5px] text-[24px]' >
            <img src={appStore} alt="" />
            <p>DOWNLOAD</p>
          </div>
        </div>
      </div>
      <img className='w-[553px] h-[582.81px]' src={banner} alt="" />

    </div>
  )
}

export default Contenido