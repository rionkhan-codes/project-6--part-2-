import React from 'react'

export const CommonHead = ({heading}) => {
  return (
   <>
   <div className='container'>
    <div><h2 className='font-manrope font-extrabold text-[40px] text-second flex justify-center'>{heading}</h2></div>
   </div>
   </>
  )
}
