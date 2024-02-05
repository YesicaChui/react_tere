import React from 'react'
import playStore from "../assets/play_store.png"
import banner from "../assets/banner.png"

const Contenido = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex flex-col w-[557px] '>
        <h1 className='text-[52px] font-[700]'>DOWNLOAD APP, SAVE MONEY, MAKE FRIENDS!</h1>
        <p>Its simple and its free. Play your part in reducing Carbon Footprint and help Mother Nature to sustain its beauty. So what are you waiting for ?
          Lets ride together</p>
        <div>
          <div>
            <img src={playStore} alt="" />
            <p>DOWNLOAD</p>
          </div>
        </div>
      </div>
      <img className='w-[553px] h-[582.81px]' src={banner} alt="" />

    </div>
  )
}

export default Contenido