// import  { useState } from 'react';
// import { PiGlobeHemisphereEast } from 'react-icons/pi';

// function Footer() {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleToggleChange = () => {
//     setIsChecked(!isChecked);
//   };

//   return (
//     <div className="bg-[#EBEBEB] w-full h-8 flex flex-wrap items-center px-4">
//       <PiGlobeHemisphereEast className="mt-1 ml-4" size={13} />
      
//       <select id="languages" className=" mt-1 text-[6px] rounded-sm border-[0.5px] border-gray-300">
//         <option value="en">English (United States)</option>
//         <option value="es">Spanish</option>
//         <option value="fr">French</option>
//         <option value="de">German</option>
//         <option value="zh">Chinese</option>
//         <option value="ja">Japanese</option>
//         <option value="hi">Hindi</option>
//         <option value="ar">Arabic</option>
//         <option value="ru">Russian</option>
//         <option value="pt">Portuguese</option>
//       </select>

//       <label className="relative inline-flex items-center cursor-pointer ml-4">
//         <span className="text-[8px] text-gray-700 -ml-3">{isChecked ? 'Dark mode' : 'Light mode'}</span>
//         <input
//           type="checkbox"
//           className="sr-only"
//           checked={isChecked}
//           onChange={handleToggleChange}
//         />
//         <div className="w-7 h-[15px] border-[0.5px] ml-[0.5px] border-black bg-gray-200 rounded-full shadow-inner"></div>
//         <div
//           className={`absolute top-[0.75px] left-7 w-3 h-3 bg-[#616161] rounded-full transition-transform transform ${
//             isChecked ? 'translate-x-4' : 'translate-x-0'
//           }`}
//         ></div>
//       </label>

//       <a
//         href="https://aka.ms/yourcaliforniaprivacychoices"
//         className="flex items-center ml-3 text-[6px] hover:underline text-[#060606]"
//         aria-label="Your Privacy Choices"
//       >
//         <svg
//           role="img"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 14 14"
//           height="10"
//           width="43"
//           className="-ml-3"
//         >
//           <title >Your Privacy Choices Opt-Out Icon</title>
//           <path
//             d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z"
//             style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: '#fff' }}
//           ></path>
//           <path
//             d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z"
//             style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: '#06f' }}
//           ></path>
//           <path
//             d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z"
//             style={{ fill: '#fff' }}
//           ></path>
//           <path
//             d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z"
//             style={{ fill: '#06f' }}
//           ></path>
//         </svg>
//         <span>Your Privacy Choices</span>
//       </a>

// <a className='text-[6px]  text-[#060606] hover:underline ml-2' href="#">Cunsumer Health Privacy</a>
// <a className='text-[6px] text-[#060606] hover:underline ml-2' href="#">Powered by .NET 8.0.7</a>
// <a className='text-[6px] text-[#060606] hover:underline ml-2' href="#">Contact Microsoft</a>
// <a className='text-[6px] text-[#060606] hover:underline ml-2' href="#">Support</a>
// <a className='text-[6px] text-[#060606] hover:underline ml-2' href="#">Privasy $ Cookies</a>
// <a className='text-[6px] text-[#060606] hover:underline ml-2' href="#">Tearms of Use</a>
// <a className='text-[6px] text-[#060606] hover:underline ml-2' href="#">Trademarks</a>

// <a className='text-[6px] text-[#060606]  ml-2' href="#">© MicroSoft 2024</a>


//     </div>
//   );
// }

// export default Footer;





import  { useState } from 'react';
import { PiGlobeHemisphereEast } from 'react-icons/pi';

function Footer() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="bg-[#EBEBEB] w-full h-16 flex flex-wrap items-center gap-5 px-4">
      <PiGlobeHemisphereEast className="mt-1 ml-4" size={20} />
      
      <select id="languages" className=" mt-1 text-[12px] rounded-md border-[0.5px] border-gray-700">
        <option value="en">English (United States)</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="zh">Chinese</option>
        <option value="ja">Japanese</option>
        <option value="hi">Hindi</option>
        <option value="ar">Arabic</option>
        <option value="ru">Russian</option>
        <option value="pt">Portuguese</option>
      </select>

       {/* <label className="relative inline-flex items-center cursor-pointer ml-2">
        <span className="text-[12px] text-gray-700 ml-2">{isChecked ? 'Dark mode' : 'Light mode'}</span>
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleToggleChange}
        />
        <div className="w-7 h-[15px] border-[0.5px] ml-[0.5px] border-black bg-gray-200 rounded-full shadow-inner"></div>
        <div
          className={`absolute top-[0.75px] left-7 w-3 h-3 bg-[#616161] rounded-full transition-transform transform ${
            isChecked ? 'translate-x-4' : 'translate-x-0'
          }`}
        ></div>
      </label> 
      */}

      <label className="relative inline-flex items-center gap-2 cursor-pointer ml-4">
        <span className="text-[10px] text-gray-700 -ml-5">{isChecked ? 'Dark mode' : 'Light mode'}</span>
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleToggleChange}
        />
        <div className="w-8 h-[15px] border-[0.5px] ml-[0.25px] border-black bg-gray-200 rounded-full shadow-inner"></div>
        <div
          className={`absolute top-[0.75px] left-7 w-3 h-3 ml-3 bg-[#616161] rounded-full transition-transform transform ${
            isChecked ? 'translate-x-4' : 'translate-x-0'
          }`}
        ></div>
      </label>

      <a
        href="https://aka.ms/yourcaliforniaprivacychoices"
        className="flex items-center ml-3 text-[12px] hover:underline text-[#060606]"
        aria-label="Your Privacy Choices"
      >
        <svg
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
          height="14"
          width="50"
          className="ml-3"
        >
          <title >Your Privacy Choices Opt-Out Icon</title>
          <path
            d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z"
            style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: '#fff' }}
          ></path>
          <path
            d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z"
            style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: '#06f' }}
          ></path>
          <path
            d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z"
            style={{ fill: '#fff' }}
          ></path>
          <path
            d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z"
            style={{ fill: '#06f' }}
          ></path>
        </svg>
        <span>Your Privacy Choices</span>
      </a>

<a className='text-[12px]  text-[#060606] hover:underline ' href="#">Cunsumer Health Privacy</a>
<a className='text-[12px] text-[#060606] hover:underline ' href="#">Powered by .NET 8.0.7</a>
<a className='text-[12px] text-[#060606] hover:underline ' href="#">Contact Microsoft</a>
<a className='text-[12px] text-[#060606] hover:underline ' href="#">Support</a>
<a className='text-[12px] text-[#060606] hover:underline ' href="#">Privasy $ Cookies</a>
<a className='text-[12px] text-[#060606] hover:underline ' href="#">Tearms of Use</a>
<a className='text-[12px] text-[#060606] hover:underline ' href="#">Trademarks</a>

<a className='text-[12px] text-[#060606] ' href="#">© MicroSoft 2024</a>


    </div>
  );
}

export default Footer;
