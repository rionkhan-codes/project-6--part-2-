import React from 'react'
import { Link } from 'react-router'
import logo1 from '../assets/images/logo.png'
import logo2 from '../assets/images/logo copy.png'
import logo3 from '../assets/images/logo copy 2.png'
import logo4 from '../assets/images/logo copy 3.png'
import bannerbg from '../assets/images/image.png'
export const Banner = () => {
  return (
    <>
    <section id='banner' className='pt-[112px] pb-[219px] relative'>
        <div className='absolute top-0 right-0'><img src={bannerbg} alt="banner" /></div>
        <div className='container'>
            <div className='row'>
                <h1 className='w-[526px] font-manrope font-extrabold text-[56px] text-second mb-[33px]'>Task Management Assistant You Gonna Love</h1>
                <p className='w-[526px] font-manrope font-normal text-[18px] text-primary mb-[48px]'>We offer you a new generation of task management system. Plan, manage & track all your tasks in one flexible tool.</p>
                <Link className='w-[210px] h-[52px] bg-[#6366F1] flex justify-center items-center rounded-[7px] text-[#fff] text-[18px] font-semibold font-manrope mb-[113px]'>Ger started for free</Link>
                <h2 className='font-manrope font-extrabold text-[18px] text-second mb-[40px]'>Largest companies use our tool to work efficiently</h2>
                <div className='flex gap-[25px] items-center'>
                    <div><img src={logo1} alt="logo" /></div>
                    <div><img src={logo2} alt="logo" /></div>
                    <div><img src={logo3} alt="logo" /></div>
                    <div><img src={logo4} alt="logo" /></div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
