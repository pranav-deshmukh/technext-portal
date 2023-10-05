import Image from "next/image";
import logo from "../assets/logo-icon.svg";
import {MdOutlineAccountCircle, MdLogin} from "react-icons/md"
import {PiBellSimpleBold} from "react-icons/pi"
import CSS from "./joinTeam.module.css";
import {BsArrowLeftSquare} from "react-icons/bs"

const Main = () => {
  return (
    <>
      <div className={`${CSS.background} text-white`}>
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
        

        <div className="uppercase flex justify-center sm:items-center  items-start md:py-[70px] py-[180px]">
            <div className="h-[60vh] w-[70%] bg-[#898989] text-white flex flex-col items-center justify-evenly rounded-3xl relative">
              <BsArrowLeftSquare className="text-4xl absolute top-6 left-6"/>
              <h1 className="text-5xl font-bold">Join Team</h1>
              <form action="">
                <div className="">
                  <input
                    className="w-[80vh] py-[14px] px-[33px] text-[#D9D9D999] bg-[#4b4b4b] rounded-md text-[22px] font-semibold"
                    id="email"
                    type="text"
                    placeholder="Enter The Team Code"               
                />
             
            </div>
              </form>
              <span
            className="uppercase my-1 sm:mx-[30px] px-2 sm:px-5 py-1 sm:py-2 sm:text-xl text-[10px] bg-[#FF7A00] sm:rounded-lg rounded-md hover:bg-[#ff9837] hover:text-white hover:font-[400] active:bg-[#FF7A00] flex items-center "
          >
            Continue &nbsp;<MdLogin className="text-2xl "/>
          </span>
            </div>
           
        </div>
        <p className="uppercase flex justify-center sm:items-center text-gray-400 items-start md:py-[0px] py-[180px]">*Please review the regulation once before choosing any option</p>
        
      </div>
    </>
  );
};
export default Main;
