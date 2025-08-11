import React from 'react'
import image from '../assets/images/quotes.png'
import user from '../assets/images/image copy 4.png'
export const Users = () => {
  return (
    <>
        <section id='user' className='mt-[113px] py-[96px] bg-[#F3F6FF]'>
        <div className='container'>
            <div className='row flex justify-between'>
                <div className='w-[636px] h-[433px] bg-second pt-[48px] px-[48px] rounded-[9px]'>
                    <h2 className='font-manrope font-extrabold text-[80px] text-[#fff]'>420k</h2>
                    <p className='font-manrope font-semibold text-[24px] text-[#ffffff71] mt-[25px]'>users are taking advantage of our <div className='font-extrabold text-[#fff]'> Task Manager Tool.</div>  It’s a new transparent and efficient way to organize all of your daily tasks.</p>
                </div>
                <div className='w-[636px] h-[433px] bg-[#fff] pt-[48px] px-[48px] rounded-[9px]'>
                    <div className='mb-[33px]'><img src={image} alt="image" /></div>
                    <div className='mb-[33px]'>
                        <p className='font-normal font-manrope text-[18px] text-primary'>Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.</p>
                    </div>
                    <div className='flex items-center gap-[17px]'>
                        <div><img src={user} alt="user" /></div>
                        <div>
                            <h2 className='font-bold font-manrope text-[16px] text-second mb-[4px]'>Annette Black</h2>
                            <p className='font-manrope font-normal text-[14px] text-[#9397AD]'>Marketing Specialist at Createx Studio</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
