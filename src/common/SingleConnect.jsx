import React from 'react'

export const SingleConnect = ({icon,head,para}) => {
  return (
    <>
    <div className='container'>
        <div className='text-center w-[299px]'>
            <div className='main3 w-[64px] h-[64px] rounded-[100px] bg-[#F3F6FF] flex justify-center items-center m-auto'>
                {icon}
            </div>
           <div>
             <h2 className='font-manrope font-extrabold text-[20px] text-second mb-[13px] mt-[25px]'>{head}</h2>
            <p className='w-[298px] font-manrope font-normal text-[14px] text-primary'>{para}</p>
           </div>
        </div>
    </div>
    </>
  )
}
