import React from 'react'
import { MdOutlineMail } from "react-icons/md";

export const GetStarted = () => {
  return (
    <>
    <section id='started' className='mt-[113px] py-[96px] bg-second rounded-[9px]'>
        <div className='container'>
            <div className='row'>
                <h2 className='font-manrope font-extrabold text-[#fff] text-[40px] flex justify-center mb-[35px]'>Ready to Get Started? </h2>
                <p className='font-manrope font-normal text-[18px] text-[#fff] mb-[40px] flex justify-center'>Organize your tasks with a 14-day free trial</p>
                <div className='flex justify-center' >
                    <div className='w-[636px] h-[52px] bg-[#fff] rounded-[9px] flex justify-between border border-[#D4D7E5]'>
                        <div className='flex items-center gap-[8px] pl-[16px] text-[#B4B7C9]'>
                            <MdOutlineMail className='text-[21px]' /><input className='w-[425px] outline-none border-none font-manrope font-normal text-[16px] ' type="text" placeholder='Your Email' />
                        </div>
                        <button className='w-[211px] h-[50px] bg-[#6366F1] rounded-[9px] font-manrope font-semibold text-[16px] text-[#fff] cursor-pointer'>Get started for free</button>
                    </div>
                </div>
                <p className='text-[15px] font-manrope text-[#fff] font-normal mt-[17px] flex justify-center'>No subscriptions. No annual fees. No lock-ins.</p>
            </div>
        </div>
    </section>
    </>
  )
}
