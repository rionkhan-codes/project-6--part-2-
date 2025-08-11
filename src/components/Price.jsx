import React from 'react'
import { CommonHead } from '../common/CommonHead'
import { IoToggleOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { FaRegSmileWink } from "react-icons/fa";
import { Link } from 'react-router';
import { FaSmileBeam } from "react-icons/fa";
import { LuSmile } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

export const Price = () => {
  return (
    <>
    <section id='price' className='pt-[113px]'>
        <div className='container'>

            {/* -------- row 1 --------- */}
            <div className='row'>
                <div className='mb-[40px]'>
                    <CommonHead heading={'Transparent Pricing for You'}/>
                </div>
                <div className='flex gap-[16px] items-center justify-center'>
                    <p className='font-manrope font-semibold text-[16px] text-[#3E4265]'>Bill Monthly</p>
                    <div><IoToggleOutline className='text-[#6366F1] text-[35px]' /></div>
                    <p className='font-manrope font-semibold text-[16px] text-[#3E4265]'>Bill Annualy</p>
                </div>
            </div>

            {/* ----------- row 2 ---------- */}
            <div className='row flex justify-between mt-[40px]'>

                {/* ---------- box 1 -------------- */}
                <div className='py-[40px] px-[40px] bg-[#fff] w-[416px] border border-[#E2E5F1] rounded-[10px]'>
                    <div className='w-[120px] h-[120px] rounded-[100px] bg-[#F3F6FF] flex justify-center items-center m-auto'>
                        <FaRegSmileWink className='text-[56px] text-[#6366F1]' />
                    </div>
                    <div className='text-center mt-[16px]'>
                        <p className='font-normal font-manrope text-[20px] text-[#9397AD] mb-[4px]'>Basic</p>
                        <h2 className='font-manrope font-extrabold text-[32px] text-second'>$ 5</h2>
                    </div>
                    <div className='border border-[#E2E5F1] mt-[16px]'></div>
                    <div className='mt-[16px]'>
                        <p className='flex gap-[4px] font-manrope font-normal text-[14px] text-primary mb-[8px]'><MdDone className='text-[#6366F1] text-[20px]' />Aenean neque tortor, purus faucibus</p>
                        <p className='flex gap-[4px] font-manrope font-normal text-[14px] text-primary mb-[8px]'><MdDone  className='text-[#6366F1] text-[20px]'/>Nullam augue vitae et volutpat sagittis augue</p>
                        <p className='flex gap-[4px] font-manrope font-normal text-[14px] text-[#9397AD] mb-[8px]'><RxCross2 className='text-[20px]' />Mauris massa penatibus enim elit quam</p>
                        <p className='flex gap-[4px] font-manrope font-normal text-[14px] text-[#9397AD] mb-[8px]'><RxCross2 className='text-[20px]' />Nec ac sagittis nunc bibendum</p>
                        <p className='flex gap-[4px] font-manrope font-normal text-[14px] text-[#9397AD] mb-[8px]'><RxCross2 className='text-[20px]'/>Odio ut orci volutpat ultricies eleifend</p>
                    </div>
                    <div>
                        <Link className='border border-[#6365f136] mt-[32px] flex justify-center items-center py-[11px] font-manrope font-semibold text-[14px] text-[#6366F1]'>Start free trial</Link>
                    </div>
                </div>

                {/* --------- box 2 ------------ */}
                <div className='py-[40px] px-[40px] bg-[#fff] w-[416px] border border-[#E2E5F1] rounded-[10px]'>
                    <div className='w-[120px] h-[120px] rounded-[100px] bg-[#F3F6FF] flex justify-center items-center m-auto'>
                        <LuSmile className='text-[56px] text-[#6366F1]' />
                    </div>
                    <div className='text-center mt-[16px]'>
                        <p className='font-normal font-manrope text-[20px] text-[#9397AD] mb-[4px]'>Standard</p>
                        <h2 className='font-manrope font-extrabold text-[32px] text-second'>$ 10</h2>
                    </div>
                    <div className='border border-[#E2E5F1] mt-[16px]'></div>
                    <div className='mt-[16px]'>
                        <p className='flex gap-[4px] font-manrope font-normal text-[14px] text-primary mb-[8px]'><MdDone className='text-[#6366F1] text-[20px]' />Aenean neque tortor, purus faucibus</p>
                        <p className='flex gap-[4px] font-manrope font-normal text-[14px] text-primary mb-[8px]'><MdDone  className='text-[#6366F1] text-[20px]'/>Nullam augue vitae et volutpat sagittis augue</p>
                        <p className='flex gap-[4px] font-manrope font-normal text-[14px] text-primary mb-[8px]'><MdDone className='text-[20px] text-[#6366F1]' />Mauris massa penatibus enim elit quam</p>
                        <p className='flex gap-[4px] font-manrope font-normal text-[14px] text-primary mb-[8px]'><MdDone className='text-[20px] text-[#6366F1]' />Nec ac sagittis nunc bibendum</p>
                        <p className='flex gap-[4px] font-manrope font-normal text-[14px] text-[#9397AD] mb-[8px]'><RxCross2 className='text-[20px]'/>Odio ut orci volutpat ultricies eleifend</p>
                    </div>
                    <div>
                        <Link className='border border-[#6365f136] mt-[32px] flex justify-center items-center py-[11px] font-manrope font-semibold text-[14px] text-[#6366F1]'>Start free trial</Link>
                    </div>
                </div>

                {/* ------------ box 3 -------------- */}
                <div className='py-[40px] px-[40px] bg-[#fff] w-[416px] border border-[#E2E5F1] rounded-[10px]'>
                    <div className='w-[120px] h-[120px] rounded-[100px] bg-[#F3F6FF] flex justify-center items-center m-auto'>
                        <FaSmileBeam className='text-[56px] text-[#6366F1]' />
                    </div>
                    <div className='text-center mt-[16px]'>
                        <p className='font-normal font-manrope text-[20px] text-[#9397AD] mb-[4px]'>Ultimate</p>
                        <h2 className='font-manrope font-extrabold text-[32px] text-second'>$ 15</h2>
                    </div>
                    <div className='border border-[#E2E5F1] mt-[16px]'></div>
                    <div className='mt-[16px]'>
                        <p className='flex gap-[4px] font-manrope font-normal text-[14px] text-primary mb-[8px]'><MdDone className='text-[#6366F1] text-[20px]' />Aenean neque tortor, purus faucibus</p>
                        <p className='flex gap-[4px] font-manrope font-normal text-[14px] text-primary mb-[8px]'><MdDone  className='text-[#6366F1] text-[20px]'/>Nullam augue vitae et volutpat sagittis augue</p>
                        <p className='flex gap-[4px] font-manrope font-normal text-[14px] text-primary mb-[8px]'><MdDone className='text-[20px] text-[#6366F1]' />Mauris massa penatibus enim elit quam</p>
                        <p className='flex gap-[4px] font-manrope font-normal text-[14px] text-primary mb-[8px]'><MdDone className='text-[20px] text-[#6366F1]' />Nec ac sagittis nunc bibendum</p>
                        <p className='flex gap-[4px] font-manrope font-normal text-[14px] text-primary mb-[8px]'><MdDone className='text-[20px] text-[#6366F1]'/>Odio ut orci volutpat ultricies eleifend</p>
                    </div>
                    <div>
                        <Link className='border border-[#6365f136] mt-[32px] flex justify-center items-center py-[11px] font-manrope font-semibold text-[14px] text-[#6366F1]'>Start free trial</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
