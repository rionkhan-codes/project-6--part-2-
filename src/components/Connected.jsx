import React from 'react'
import { CommonHead } from '../common/CommonHead'
import { SingleConnect } from '../common/SingleConnect'
import { IoChatbubblesOutline } from "react-icons/io5";
import { RiLineChartFill } from "react-icons/ri";
import { MdNotificationsActive } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { MdCloudDone } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";

export const Connected = () => {
  return (
    <>
    <section id='connected' className='pt-[33px]'>
        <div className='container'>

            {/* --------- row 1 ---------- */}
            <div className='row mb-[65px]'>
                <div><CommonHead heading={'Stay Organized & Connected'}/></div>
            </div>

            {/* ------------- row 2 ---------- */}
            <div className='row flex justify-between mb-[56px]'>
                <div className='main2'>
                    <SingleConnect head={'Task Comments'} para={'Id mollis consectetur congue egestas egestas suspendisse blandit justo.'} icon={<IoChatbubblesOutline className='text-[33px] text-[#6366F1]' />}/>
                </div>
                <div>
                    <SingleConnect head={'Tasks Analytics'} para={'Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. '} icon={<RiLineChartFill className='text-[33px] text-[#6366F1]' />}/>
                </div>
                <div>
                    <SingleConnect head={'Notifications'} para={'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.'} icon={<MdNotificationsActive className='text-[33px] text-[#6366F1]' />}/>
                </div>
                <div>
                    <SingleConnect head={'Sections & Subtasks'} para={'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.'} icon={<FaTasks className='text-[33px] text-[#6366F1]' />}/>
                </div>
            </div>

            {/* ---------- row 3 ----------- */}
            <div className='row flex justify-between'>
                <div>
                    <SingleConnect head={'Progress Tracking'} para={'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.'} icon={<MdCloudDone className='text-[33px] text-[#6366F1]' />}/>
                </div>
                <div>
                    <SingleConnect head={'Multiple Assignees'} para={'Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.'} icon={<IoPersonAddOutline className='text-[33px] text-[#6366F1]' />}/>
                </div>
                <div>
                    <SingleConnect head={'Support 24/7'} para={'Sapien sed massa sit erat pellentesque pellentesque nisl, elementum.'} icon={<MdSupportAgent className='text-[33px] text-[#6366F1]' />}/>
                </div>
                <div>
                    <SingleConnect head={'Data Security'} para={'Aliquet felis facilisi sem nunc. Sapien fermentum, fringilla molestie lorem nec.'} icon={<IoShieldCheckmark className='text-[33px] text-[#6366F1]' />}/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
