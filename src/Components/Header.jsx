import React from 'react';
import { IoIosSearch } from "react-icons/io";

function Header() {
  return (
    <div className="bg-white  flex items-center justify-between p-5">
      <div className="hlft ml-10 flex gap-5 items-center">
        <div className="img w-28 h-5  flex items-center justify-center">
          <img
            src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
            alt="Logo"
          />
        </div>
        <div className="divider w-[0.75px] bg-black h-5"></div>
        <h3 className='text-[20px] hover:underline font-semibold uppercase text-gray-600'><a href="#">.Net</a></h3>


        <h3 className='text-[20px] text-gray-600'>
          <select className='w-14 tracking-tighter text-[15px]'>
            <option value="">What is .Net</option>
            <option value="">Why Choose .Net</option>
            <option value="">Who uses .Net</option>
          </select>
        </h3>

        <h3 className='text-[13px] hover:underline text-gray-600'><a href="#">Features</a></h3>

        <h3 className='text-[13px] hover:underline text-gray-600'><a href="#">Learn</a></h3>


        <h3 className='text-[13px] hover:underline text-gray-600'><a href="#">Docs</a></h3>


        <h3 className='text-[13px] hover:underline text-gray-600'><a href="#">Downloads</a></h3>
        <h3 className='text-[13px] hover:underline v'><a href="#">Community</a></h3>
        <button className=' rounded-sm uppercase text-gray-600 hover:underline text-[15px]  font-semibold p-1 gap-1 border-[0.5px] border-black flex items-center'>
          <svg className="circle " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" width="5" height="5" style={{ overflowX: "visible" }}>
            <path className='' d="M32 1024q0-137 35-264t100-237 155-200 201-155T760 68t264-36q137 0 264 35t237 100 200 155 155 201 100 237 36 264q0 137-35 264t-100 237-155 200-201 155-237 100-264 36q-137 0-264-35t-237-100-200-155-155-201-100-237-36-264z" style={{ overflowX: "visible" }}></path>
          </svg>
          Live TV
        </button>
      </div>
      <div className="hrgt mr-10 flex items-center text-gray-600 justify-center gap-3">

        <h3 className='text-[13px] hover:underline'><a href="#">All Microsoft</a></h3>

        <button className='hover:underline text-[13px] p-1 flex items-center'>
          Search <IoIosSearch className='mt-[2.75px] rotate-[90deg] ml-1' size='25' />
        </button>
      </div>


    </div>
  );
}

export default Header;
