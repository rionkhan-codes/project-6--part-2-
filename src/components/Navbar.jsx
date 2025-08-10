import React from 'react'
import logo from '../assets/images/solid.png'
import { Link } from 'react-router'
import { RxSwitch } from 'react-icons/rx'
import { FiUser } from 'react-icons/fi'
import { MdOutlineExitToApp } from "react-icons/md";

export const Navbar = () => {
  return (
    <>
    <nav id='navbar' className='py-[16px] border-b-[#DCCFC0] border-b'>
        <div className='container'>
            <div className='row flex justify-between items-center'>
            <div className='flex items-center gap-[49px]'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='items'>
                    <ul className='flex items-center gap-[25px]'>
                        <li><Link className='font-semibold font-manrope text-[16px] text-[#3E4265]'>Features</Link></li>
                        <li><Link className='font-semibold font-manrope text-[16px] text-[#3E4265]'>Overview</Link></li>
                        <li><Link className='font-semibold font-manrope text-[16px] text-[#3E4265]'>Store</Link></li>
                        <li><Link className='font-semibold font-manrope text-[16px] text-[#3E4265]'>Blog</Link></li>
                        <li><Link className='font-semibold font-manrope text-[16px] text-[#3E4265]'>Contact</Link></li>
                    </ul>
                </div>
            </div>
                <div className='btn flex items-center gap-[78px]'>
                    <div className='flex gap-[16px] items-center'>
                        <p className='font-semibold font-manrope text-[16px] text-second'>Light</p>
                        <button><RxSwitch className=' text-[#6366F1] w-[46px] h-[25px] rounded-[50px]' /></button>
                        <p className='font-semibold font-manrope text-[16px] text-second'>Dark</p>
                    </div>
                    <div className='flex gap-[16px] items-center'>
                        <button className='main w-[140px] h-[37px] bg-[#6366F1] rounded-[5px] flex justify-center items-center gap-[7px] text-[15px] text-[#fff] font-semibold font-manrope'><FiUser className='text-[19px]' />Sign up</button>
                        <button className='main w-[140px] h-[37px] bg-[#6366F1] rounded-[5px] flex justify-center items-center gap-[7px] text-[15px] text-[#fff] font-semibold font-manrope'><MdOutlineExitToApp className='text-[19px]' />Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}
