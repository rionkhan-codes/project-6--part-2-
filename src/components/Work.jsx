import React from 'react'
import image from '../assets/images/image copy.png'
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

export const Work = () => {
  return (
    <>
    <section id='work' className='pt-[113px]'>
        <div className='container'>
            <div className='row flex justify-between'>
                <div><img src={image} alt="image" /></div>
            <div className='mt-[133px]'>
                <h2 className='font-manrope font-extrabold text-[33px] text-second mb-[33px]'>Manage Your Work</h2>
                <p className='flex items-center gap-[7px] font-manrope text-primary text-[16px] font-normal mb-[13px]'><IoCheckmarkDoneCircleOutline className='text-[#6366F1] text-[21px]' />Powerful project management</p>
                <p className='flex items-center gap-[7px] font-manrope text-primary text-[16px] font-normal mb-[13px]'><IoCheckmarkDoneCircleOutline className='text-[#6366F1] text-[21px]' />Transparent work management</p>
                <p className='flex items-center gap-[7px] font-manrope text-primary text-[16px] font-normal mb-[13px]'><IoCheckmarkDoneCircleOutline className='text-[#6366F1] text-[21px]' />Manage work & focus on the most important tasks</p>
                <p className='flex items-center gap-[7px] font-manrope text-primary text-[16px] font-normal mb-[13px]'><IoCheckmarkDoneCircleOutline className='text-[#6366F1] text-[21px]' />Track your progress with interactive charts</p>
                <p className='flex items-center gap-[7px] font-manrope text-primary text-[16px] font-normal mb-[13px]'><IoCheckmarkDoneCircleOutline className='text-[#6366F1] text-[21px]' />Easiest way to track time spent on tasks</p>
            </div>
            </div>
       
        </div>
    </section>
    </>
  )
}
