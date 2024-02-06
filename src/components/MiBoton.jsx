import React from 'react'

const MiBoton = ({imagen}) => {
  return (
    <div className='cursor-pointer flex items-center justify-center gap-3 bg-black hover:bg-[#96d9c9] text-white  font-semibold hover:font-extrabold py-3 w-[260px] rounded-[5px] text-[24px]' >
    <img src={imagen} alt="" />
    <p>DOWNLOAD</p>
  </div>
  )
}

export default MiBoton