import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

function Timer() {
  return (
    <>
      <div className="main2 bg-[#FAFAFA] w-full items-center justify-center  ">
        <div className="links font-semibold flex flex-wrap tracking-tighter mx-48  gap-4 text-[18px]">
          <a className=' mt-5 text-[#512BD4] hover:underline flex items-center gap-1' href="#">
            Artificial Intelligence & ML
            <IoIosArrowRoundForward />
          </a>
          <a className='mt-5 text-[#512BD4] hover:underline flex items-center gap-1' href="#">
            Game development
            <IoIosArrowRoundForward />
          </a>
          <a className='mt-5 text-[#512BD4] hover:underline flex items-center gap-1' href="#">
            Internet of Things
            <IoIosArrowRoundForward />
          </a>
          <a className='mt-5 text-[#512BD4] hover:underline flex items-center gap-1' href="#">
            Mobile
            <IoIosArrowRoundForward />
          </a>
          <a className='mt-5 text-[#512BD4] hover:underline flex items-center gap-1' href="#">
            Desktop
            <IoIosArrowRoundForward />
          </a>
          <a className='mt-5 text-[#512BD4] hover:underline flex items-center gap-1' href="#">
            Front-end web
            <IoIosArrowRoundForward />
          </a>
          <a className='mt-5 text-[#512BD4] hover:underline flex items-center gap-1' href="#">
            Back-end APIs
            <IoIosArrowRoundForward />
          </a>
          <a className='mt-5 text-[#512BD4] hover:underline flex items-center gap-1' href="#">
            Data
            <IoIosArrowRoundForward />
          </a>
        </div>


        <div className="container flex ">



          <div className="left bg-[#FAFAFA] w-5/12">
            <h1 className=' text-4xl font-semibold ml-20 mt-32'>Faster response times, less <br /> compute power, better <br /> applications</h1>
            <p className=' text-[20px] ml-20 mt-2 '>The Fortunes test simulates a simple web application <br /> where HTML is rendered server-side after querying a <br /> database. See <u>TechEmpower's Round 22 results.</u></p>
          </div>

          <div className="right mt-10 bg-[#FAFAFA] 8/12">
            <h1 className='text-center mt-5 text-[18px] font-bold  mb-3'>Fortunes responses per second</h1>
            <img className='mt-2' src="https://dotnet.microsoft.com/blob-assets/images/illustrations/fortunes-graphic.png" alt="" />
          </div>
        </div>

     
      </div>



    </>
  )
}

export default Timer;
