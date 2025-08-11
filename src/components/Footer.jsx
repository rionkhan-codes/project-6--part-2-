import React from 'react'
import logo from '../assets/images/solid.png'
import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router';
export const Footer = () => {
  return (
    <footer id='footerNav' className='pt-[73px] pb-[65px]'>
        <div className='container'>
            <div className='row flex justify-between'>
                <div>
                    <div className='mb-[25px]'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        <p className='w-[416px] font-manrope font-normal text-[14px] text-primary mb-[40px]'>Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget eu vitae nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum dolor ullamcorper sodales ultrices eros. </p>
                    </div>
                    <div>
                    <label className='font-manrope font-semibold text-[15px] text-second'>Subscribe to our newsletter</label>
                    <div className='w-[416px] h-[44px] bg-[#fff] rounded-[9px] flex justify-between border border-[#D4D7E5] mt-[8px] mb-[72px]'>
                        <div className='flex items-center gap-[8px] pl-[16px] text-[#B4B7C9]'>
                            <MdOutlineMail className='text-[21px]' /><input className='w-[250px] outline-none border-none font-manrope font-normal text-[16px] ' type="text" placeholder='Your Email' />
                        </div>
                            <button className='w-[124px] h-[44px] bg-[#6366F1] rounded-[9px] font-manrope font-semibold text-[14px] text-[#fff] cursor-pointer'>Subscribe</button>
                    </div>
                    </div>
                    <div>
                        <p className='font-manrope font-normal text-[13px] text-[#9397AD]'>2021. All rights reserved. Silicon Template</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                        <Link className='font-manrope font-semibold text-[16px] text-[#3E4265] mb-[8px]'>Home</Link>
                        <Link className='font-manrope font-semibold text-[16px] text-[#3E4265] mb-[8px]'>Features</Link>
                        <Link className='font-manrope font-semibold text-[16px] text-[#3E4265] mb-[8px]'>Integrations</Link>
                        <Link className='font-manrope font-semibold text-[16px] text-[#3E4265] mb-[8px]'>Our Clients</Link>
                        <Link className='font-manrope font-semibold text-[16px] text-[#3E4265] mb-[8px]'>Blog</Link>
                        <div className='mt-[40px] flex flex-col'>
                            <Link className='font-manrope font-semibold text-[16px] text-[#3E4265] mb-[8px]'>Terms & Conditions</Link>
                            <Link className='font-manrope font-semibold text-[16px] text-[#3E4265] mb-[8px]'>Privacy Policy</Link>
                        </div>  
                </div>
                <div className='flex flex-col'>
                        <Link className='font-manrope font-semibold text-[16px] text-[#3E4265] mb-[8px]'>Facebook</Link>
                        <Link className='font-manrope font-semibold text-[16px] text-[#3E4265] mb-[8px]'>Linkedin</Link>
                        <Link className='font-manrope font-semibold text-[16px] text-[#3E4265] mb-[8px]'>Twitter</Link>
                        <Link className='font-manrope font-semibold text-[16px] text-[#3E4265] mb-[8px]'>Instragram</Link>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-[16px] font-semibold font-manrope text-second'>Contact Us</h2>
                    <Link className='font-manrope font-semibold text-[16px] text-[#6366F1] mt-[8px]'>example@gmail.com</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}
