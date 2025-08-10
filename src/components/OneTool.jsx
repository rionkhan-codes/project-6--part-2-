import React from 'react'
import { CommonHead } from '../common/CommonHead'
import { IoStarOutline } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { IoRocket } from "react-icons/io5";
import { IoBarChartOutline } from "react-icons/io5";
import image2 from '../assets/images/image copy 2.png'
export const OneTool = () => {
  return (
    <>
    <section id='oneTool' className='pt-[97px]'>
        <div className='container'>

            {/* ---------- row 1 ------------- */}
            <div className='row'>
                <div className='mb-[40px]'><CommonHead heading={'One Tool — Endless Use Cases'}/></div>
            </div>

            {/* ------- row 2 ----------- */}
            <div className='row flex justify-center gap-[33px] mb-[40px]'>
                <div><button className='py-[8px] px-[16px] flex justify-center items-center bg-[#6366F1] rounded-[7px] text-[16px] text-[#fff] font-semibold font-manrope gap-[7px]'><IoStarOutline />Project Management</button></div>
                <div><button className='py-[8px] px-[16px] flex justify-center items-center bg-[#6366F1] rounded-[7px] text-[16px] text-[#fff] font-semibold font-manrope gap-[7px]'><MdWork />Remote Work</button></div>
                <div><button className='py-[8px] px-[16px] flex justify-center items-center bg-[#6366F1] rounded-[7px] text-[16px] text-[#fff] font-semibold font-manrope gap-[7px]'><IoRocket />Product Release</button></div>
                <div><button className='py-[8px] px-[16px] flex justify-center items-center bg-[#6366F1] rounded-[7px] text-[16px] text-[#fff] font-semibold font-manrope gap-[7px]'><IoBarChartOutline />Campaign Planning</button></div>
            </div>

            {/* ---------- row 3 -------------- */}
            <div className='row'>
                <div className='py-[48px] px-[110px] bg-[#F3F6FF] rounded-[9px] flex justify-between'>
                    <div className='mt-[79px]'>
                        <h2 className='font-manrope font-extrabold text-[28px] text-second mb-[25px]'>Project management</h2>
                        <p className='w-[416px] font-normal font-manrope text-primary text-[16px]'>Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.</p>
                    </div>
                    <div>
                        <img src={image2} alt="image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
