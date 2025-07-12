
import { IoIosArrowRoundForward } from "react-icons/io";

function Heading() {
  return (
    <>
      <div className="page1 w-full bg-[#FAFAFA] items-center justify-center flex-col flex">
        <div className="content flex bg-transparent">
          <div className="left ml-6 w-6/12 bg-transparent">
            <img className='w-56 ml-10' src="https://dotnet.microsoft.com/blob-assets/images/illustrations/globe.png" alt="" />
            <h1 className='ml-16 text-gray-900 font-semibold py-2 text-3xl'>Free and open source</h1>
            <p className='ml-16 text-[16px]'>
              .NET is developed and maintained as a free and open-source project on GitHub, the home for millions of developers who want to build great things together.
            </p>
          </div>

          <div className="right w-6/12 bg-transparent">
            <img className='w-56 ml-10' src="https://dotnet.microsoft.com/blob-assets/images/illustrations/cross-platform.svg" alt="" />
            <h1 className='ml-16 font-semibold text-gray-900 py-2 text-3xl'>Fast and cross-platform</h1>
            <p className='ml-16 text-[16px]'>
              You can write, run, and build on multiple platforms, including <br /> Windows, Linux, and macOS.
            </p>
          </div>
        </div>
        {/* next part */}

        <div className="card w-[80%] h-[80vh] sm:flex-wrap  ml-10  mt-20 rounded-3xl  items-center justify-center bg-[#FFFFFF]">

          <div className="box bg-transparent flex p-5 flex-wrap mt-10 w-full">

            <div className="left w-6/12 bg-transparent">
              <h1 className='font-semibold ml-20 mt-3 text-4xl '>Everything you need to <br /> start your .NET learning <br /> journey</h1>
            </div>


            <div className="right w-6/12  bg-transparent">
              <p className='text-xl mt-2 ml-5 font-semibold'>.NET offers a library of learning resources.
                Access videos, <br /> tutorials, code samples,
                and content from Microsoft Learn
                to <br /> help you build better.</p>
              <button className='bg-[#512BD4] ml-5 text-white mt-5 text-[20px] hover:bg-[#4122AA] rounded-md py-2  px-3'>Explore learning portal</button>
            </div>

          </div>



          <div className="headings flex  flex-wrap w-full space-x-5 bg-transparent">

            <div className="lft w-3/10 mt-5 ml-16 bg-transparent">
              <h1 className='text-[24px]  font-semibold ml-3'>.NET for Beginners videos</h1>
              <p className='text-[16px] mt-3 ml-3'>Getting started with .NET development? We <br /> have you
                covered with our
                .NET for Beginners <br /> videos. Explore
                videos on web, mobile, <br /> desktop, C#, machine
                learning,  <br />containers/Docker,
                data access, and more.</p>
              <a className=' mt-6  text-[#512BD4] ml-3 text-[12px] font-semibold hover:underline flex items-center gap-1' href="#">
                Browse beginner videos
                <IoIosArrowRoundForward className="" />
              </a>
            </div>

            <div className="mld w-3/10 mt-5 bg-transparent" >
              <h1 className='text-[24px] font-semibold ml-3'>Microsoft Learn</h1>
              <p className='text-[16px] mt-3 ml-3'>Discover your path to build apps with .NET on <br /> Microsoft Learn.
                Whether you're just starting <br /> or an
                experienced professional, Microsoft <br /> Learn's
                hands-on approach helps you arrive a <br />
                your goals faster, with more confidence and at <br />
                your own pace for free.</p>
              <a className=' mt-3 text-[#512BD4] ml-3 font-semibold text-[12px] hover:underline flex items-center gap-1' href="#">
                Get Started
                <IoIosArrowRoundForward />
              </a>

            </div>
            <div className="rgt 3/10 mt-5 mr-3 bg-transparent">

              <h1 className='text-[24px] font-semibold ml-3'>LinkedIn Learning</h1>
              <p className='text-[16px] mt-3 ml-3'>Get an introduction to the programming skills <br />
                needed for a career as a .NET software <br /> developer. Experience
                .NET learning courses <br /> that provide a broad
                perspective on core <br /> technologies leveraging .NET.</p>
              <a className=' mt-6 text-[#512BD4] ml-3 font-semibold text-[12px] hover:underline flex items-center gap-1' href="#">
                Explore Courses
                <IoIosArrowRoundForward />
              </a>

            </div>
          </div>


        </div>




        <div className="seched mt-10  w-full bg-[#FAFAFA]">




          <div className="heading text-center py-5 px-5 md:px-10">
            <h1 className='text-4xl md:text-5xl font-semibold'>Productive</h1>
            <p className='text-lg text-gray-900 md:text-xl font-semibold mt-2 md:mt-2'>
              With its large supportive ecosystem and powerful tooling, .NET is the most <br />
              productive platform for developers.
            </p>
          </div>


          <div className="contant mt-5 bg-[#FAFAFA] items-center justify-center flex   flex-wrap">
            <div className="con2 w-1/5  bg-transparent flex flex-col py-4 mr-3">
              <h1 className='text-[24px] font-semibold mb-2 '>NuGet</h1>
              <p className='text-[15px] font-normal  mb-5'>
                Build with the most secure package ecosystem trusted by millions of developers. With over 390,000 unique packages to date and 50,000 more each year.
              </p>
              <a className='mt-auto text-[#512BD4] font-semibold text-[15px] hover:underline flex items-center gap-1' href="#">
                Meet the Visual Studio family
                <IoIosArrowRoundForward />
              </a>
            </div>




            <div className="con2 w-1/5  bg-transparent flex flex-col py-4 mr-3">
              <h1 className='text-[24px] font-semibold mb-2 '>Visual Studio</h1>
              <p className='text-[15px] font-normal mb-6'>
               Develop with the best IDE for .NET on Windows. Packed with an array of tools and features to elevate and enhance every stage of software development.
              </p>
              <a className='mt-auto font-semibold text-[#512BD4] text-[15px] hover:underline flex items-center gap-1' href="#">
                Meet the Visual Studio family
                <IoIosArrowRoundForward />
              </a>
            </div>

            <div className="con3 w-1/5   bg-transparent flex flex-col py-4 ">
              <h1 className='text-[24px] font-semibold mb-2 '>Visual Studio Code</h1>
              <p className='text-[15px] font-normal mb-2'>
                Develop on Linux, macOS, or Windows to build cross-platform websites and services. Install the C# Dev Kit to get the best experience.
              </p>
              <a className='mt-4 text-[#512BD4] font-semibold text-[15px] hover:underline flex items-center gap-1' href="#">
                Download Visual Studio Code
                <IoIosArrowRoundForward />
              </a>
            </div>

            <div className="con4 w-1/5   bg-transparent flex flex-col py-4">
              <h1 className='text-[24px] font-semibold mb-2'>Azure</h1>
              <p className='text-[15px] font-normal mb-4'>
                Create modern, scalable cloud
                <br /> apps on a cloud platform
                <br /> designed for .NET.
              </p>
              <a className='mt-10 text-[#512BD4]  font-semibold text-[15px] hover:underline flex items-center gap-1' href="#">
                Explore Azure resources and tools
                <IoIosArrowRoundForward />
              </a>
            </div>
          </div>


        </div>
      </div>

    </>
  )
}

export default Heading