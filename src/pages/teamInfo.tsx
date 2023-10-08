import Image from "next/image";
import logo from "../assets/logo-icon.svg";
import {MdOutlineAccountCircle, MdLogin} from "react-icons/md"
import {RiLogoutBoxLine} from "react-icons/ri"
import {PiBellSimpleBold} from "react-icons/pi"

import {BsArrowLeftSquare} from "react-icons/bs"


const Main = () => {
  return (
    <>
      <div className="teamInfo text-white">
        <div className="flex justify-between items-center w-full pt-6">
          <div className="flex justify-between items-center felx mx-4 ml-5 sm:ml-20 sm:w-[450px] w-[300px]">
            <Image
              className="felx sm:w-[52px] w-[38px]"
              src={logo}
              alt="logo"
            />
            <span className="felx uppercase sm:text-sm text-[8px] mx-3 sm:mx-5">
              International Conference on Emerging Trends in Information
              Technology and Engineering{" "}
              <span className="text-[#FF7A00]">TECHNEXT EXPO 2024</span>
            </span>
          </div>
          <div className="text-center flex flex-wrap justify-end items-center mr-4">
            <div className="flex mx-[10px]">
              <div
              
                className="uppercase p-2 sm:text-xl text-[10px] hover:text-gray-300 active:text-white flex items-center "
              >
                <PiBellSimpleBold/>&nbsp;Announcements
              </div>
             
            </div>
            <span
            className="uppercase mx-[15px] my-1 sm:mx-[30px] px-2 sm:px-5 py-1 sm:py-2 sm:text-xl text-[10px] bg-[#FF7A00] sm:rounded-lg rounded-md hover:bg-[#ff9837] hover:text-white hover:font-[400] active:bg-[#FF7A00] flex items-center "
          >
             <MdOutlineAccountCircle/>&nbsp;Name
          </span>
          </div>
        </div>
        

        <div className="uppercase flex justify-start sm:items-center  items-start md:py-[40px] ">
            <div className="h-[72vh] w-[50%]  text-white flex flex-col items-center justify-evenly rounded-3xl relative">
              <h1 className="text-5xl  font-bold -ml-10">Team Name</h1>
             
              <form action="">
                <div className="ml-[5vw]">
                  <input
                    className="w-[36vw] py-[15px] px-[33px] text-[#D9D9D999] bg-[#4b4b4b] rounded-md text-[22px] font-semibold"
                    id="email"
                    type="text"
                    placeholder="Enter The Team Code"               
                />
                  <input
                    className="w-[36vw] py-[15px] px-[33px] text-[#D9D9D999] bg-[#4b4b4b] rounded-md text-[22px] font-semibold mt-3"
                    id="email"
                    type="text"
                    placeholder="Enter The Team Code"               
                />
                  <input
                    className="w-[36vw] py-[15px] px-[33px] text-[#D9D9D999] bg-[#4b4b4b] rounded-md text-[22px] font-semibold mt-3"
                    id="email"
                    type="text"
                    placeholder="Enter The Team Code"               
                />
                  <input
                    className="w-[36vw] py-[15px] px-[33px] text-[#D9D9D999] bg-[#4b4b4b] rounded-md text-[22px] font-semibold mt-3"
                    id="email"
                    type="text"
                    placeholder="Enter The Team Code"               
                />
             
            </div>
              </form>
              <div className="flex">
                <div className="w-[22vw] py-[10px] px-[30px] bg-[#1e1f20] -ml-14 text-[18px] font-bold flex items-center">
                    <div className="text-[12px]">Your Team Code</div>
                    <div className="w-36 py-[10px] bg-black  text-[20px] ml-10 flex  justify-center rounded-md">#123456</div>
                    
                </div>
                <span
            className="uppercase my-1 sm:mx-[20px] px-2 sm:px-5 py-1 sm:py-2 sm:text-xl text-[6px]  sm:rounded-lg rounded-md  hover:text-white hover:font-[400]  flex items-center "
          >
            Leave Team &nbsp;<RiLogoutBoxLine className="text-2xl text-[#FF7A00] "/>
          </span>
              </div>
            </div>
             <div className="h-[40vh] w-[2.3px] rounded-3xl mt-[82px] bg-white"></div>
           
        </div>
        <p className="uppercase flex justify-center sm:items-center text-gray-400 items-start md:py-[0px] pt-8  " >*Please review the regulation once before choosing any option</p>
        
      </div>
    </>
  );
};
export default Main;
