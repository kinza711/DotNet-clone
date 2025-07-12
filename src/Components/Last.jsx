

import { IoIosArrowRoundForward } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { BsThreads } from "react-icons/bs";
import { PiButterflyFill } from "react-icons/pi";


function Last() {



  return (
    <>
      <div className="last bg-[#FAFAFA] w-full flex flex-wrap flex-col items-center ">
        <div className="main bg-[#FFFFFF] w-[90%] rounded-2xl p-8 shadow-lg mt-5">
          <div className="box flex bg-[#FFFFFF] p-5 flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="font-semibold font-sans text-5xl">
              Be a part of the global
              <span className="text-[#512BD4]"> .NET</span>
              <br />
              <span className="text-[#0B6CFF]">developer community</span>
            </h1>

            <div className="right mt-5 md:mt-0 md:mr-24 text-left">
              <p className='text-xl mt-10'>
                Join the large, engaged community of developers <br /> around the globe who build with .NET. Share, <br /> showcase, and solve together. Stay connected.
              </p>
              <button className='bg-[#512BD4] font-semibold text-white mt-5 text-[16px] hover:bg-[#4122AA] rounded-md py-3 px-4'>
                Get Connected
              </button>
            </div>
          </div>

          <div className="num flex flex-wrap flex-col md:flex-row gap-10 md:gap-20 mt-8 items-center justify-center">
            <div className="fst text-center">
              <h1 className='text-8xl  text-[#413ADE] font-semibold tracking-tighter'>474K+</h1>
              <h3 className='underline text-black text-[30px] mr-5 font-semibold'>
                <a href="#">stars on GitHub</a>
              </h3>
            </div>

            <div className="2st text-center">
              <h1 className='text-8xl  text-[#413ADE] font-semibold tracking-tighter'>330K+</h1>
              <h3 className='underline text-black text-[30px] mr-5  font-semibold'>
                <a href="#">followers on X</a>
              </h3>
            </div>

            <div className="3st text-center">
              <h1 className='text-8xl text-[#413ADE] font-semibold tracking-tighter'>329K+</h1>
              <h3 className='underline text-black font-semibold text-[26px]'>
                <a href="#">members on Meetup</a>
              </h3>
            </div>
          </div>
        </div>

        <div className="new flex  flex-col md:flex-row items-center justify-center  bg-[#FAFAFA] w-[90%] mt-10 p-8  ">
          <div className="lft items-center justify-center relative bg-transparent overflow-hidden w-full md:w-[70%] mb-6 md:mb-0">
            <div className="img1 mt-5 flex w-full h-14  gap-3">


              <img className='border-[0.5px] border-gray-500 py-1 px-3 rounded-xl ' src="https://dotnet.microsoft.com/blob-assets/images/customers/chipotle/chipotle.png" alt="" />
              <img className='border-[0.5px] border-gray-500 py-1 px-3 rounded-xl ' src="https://dotnet.microsoft.com/blob-assets/images/customers/nbc-sports/nbc-sports-next-light.png" alt="" />
              <img className='border-[0.5px] border-gray-500 py-1 px-3 rounded-xl ' src="https://dotnet.microsoft.com/blob-assets/images/customers/microsoft/teams/microsoft-teams-logo.png" alt="" />
              <img className='border-[0.5px] border-gray-500 py-1 px-3 rounded-xl ' src="https://dotnet.microsoft.com/blob-assets/images/customers/ups/ups.svg" alt="" />
              <img className='border-[0.5px] border-gray-500 py-1 px-3 rounded-xl ' src="https://dotnet.microsoft.com/blob-assets/images/customers/stackoverflow/stackoverflow.svg" alt="" />

            </div>

            <div className="img2 flex w-full mt-3 h-14 gap-3">
              <img className='border-[0.5px] border-gray-500 py-1 px-3 rounded-xl ' src="https://dotnet.microsoft.com/blob-assets/images/customers/siemens/siemens.png" alt="" />
              <img className='border-[0.5px] border-gray-500 py-1 px-3 rounded-xl ' src="https://dotnet.microsoft.com/blob-assets/images/customers/ge-aviation/ge-aviation.png" alt="" />
              <img className='border-[0.5px] border-gray-500 py-1 px-3 rounded-xl ' src="https://dotnet.microsoft.com/blob-assets/images/customers/bing/bing-logo.png" alt="" />
              <img className='border-[0.5px] border-gray-500 py-1 px-3 rounded-xl ' src="https://dotnet.microsoft.com/blob-assets/images/customers/tencent/tencent.png" alt="" />


            </div>


          </div>
          <div className="rgt w-full md:w-1/2 text-left leading-1 tracking-tighter ml-10">
            <h1 className='text-2xl font-semibold mb-2'>Who uses .NET?</h1>
            <p className='text-md'>
             The world's top organizations are powered by .NET and trust Microsoft <br /> to make .NET the best choice in the industry for their mission critical <br /> software. Amazing developers like you use .NET to build incredible <br /> software for millions of companies around the world, in every industry.
            </p>
            <a className='mt-2 text-[#512BD4] text-[16px] font-semibold hover:underline flex items-center gap-1' href="#">
              Read customer stories
              <IoIosArrowRoundForward />
            </a>
          </div>




        </div>

        <div className="red w-full bg-[#FAFAFA] mt-5 items-center flex flex-col justify-center">
          <div className="blue mt-5 mb-5 bg-[#2256F0] bg-gradient-to-r  from-[#3049E8] via-[#3049E8] to-[#512BD4] py-10 w-[85%] flex flex-wrap rounded-3xl">
            <div className="left bg-transparent0  w-1/2">
              <h1 className='text-5xl font-semibold text-center   text-white'>Ready to get started?</h1>
            </div>
            <div className="right bg-transparent w-1/2 ">
              <h3 className='text-[20px] text-start font-semibold text-white '>Learn .NET easily with our step-by-step tutorials.</h3>
              <button className='bg-[#FFFFFF] font-bold text-[#7759DD] text-start mt-5 text-[14px] hover:bg-[#FAFAFA] rounded-lg mb-1 py-2 px-4'>
                <a href="#"> Get started</a>
              </button>
            </div>

          </div>

        </div>


          {/* icons  */}
          <div className="icons text-start w-full bg-[#FAFAFA] py-5 flex items-center">
            <h1 className="mb-2 gap-3  text-[25px] ml-16 font-semibold flex items-center">
              Follow us
              {/* youtube icon */}
              <a href="https://www.youtube.com/dotnet" target="_blank" rel="noopener noreferrer">
                <IoLogoYoutube className="ml-1 mt-1" size={30} />
              </a>

              {/*   twitter icon */}

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <RiTwitterXLine className="ml-1 mt-1" size={30} />
              </a>

              {/* git icon */}
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <BsGithub className="ml-1 mt-1" size={30} />
              </a>

              {/* linkin icon */}
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="ml-1 mt-1" size={30} />
              </a>

              {/* tiktok icon */}

              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="ml-1 mt-1" size={30} />
              </a>
              {/* thread icon */}

              <a href="https://www.threads.com" target="_blank" rel="noopener noreferrer">
                <BsThreads className="ml-1 mt-1" size={30} />
              </a>

              {/* butterfly icon */}

              <a href="https://www.threads.com" target="_blank" rel="noopener noreferrer">
                <PiButterflyFill  className="ml-1 mt-1" size={30} />
              </a>
            </h1>
          </div>


      </div>
    </>
  )
}

export default Last
