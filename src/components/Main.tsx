import Image from "next/image";
import logo from "../assets/logo-icon.svg";
import {MdOutlineAccountCircle} from "react-icons/md"
import {PiBellSimpleBold} from "react-icons/pi"
import CSS from "./Main.module.css";

const Main = () => {
  return (
    <>
      <div className={`${CSS.background} text-white`}>
        <div className="flex justify-between items-center w-full pt-6">
          <div className="flex justify-between items-center felx mx-4 ml-5 sm:ml-20 sm:w-[450px] w-[300px]">
            <Image
              className="felx sm:w-[52px] w-[38px]"
              src={logo as HTMLImageElement}
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
        <div className="flex flex-col justify-center sm:items-center  items-start md:py-[100px] py-[180px]">
            <h1 className="text-7xl font-semibold">Welcome Tanvi</h1>
            <h1 className="text-xl font-normal">To procede with Technext Expo 2024, pick one.</h1>
        </div>

        <div className="uppercase flex justify-center sm:items-center  items-start md:py-[10px] py-[180px]">
            <div className="h-[25vh] w-[30%] bg-white text-[#FF7A00] flex items-center justify-center rounded-3xl"><h1 className="text-5xl font-bold">Create Team</h1></div>
            <div className="h-[18vh] w-[2.3px] rounded-3xl mx-10 bg-white"></div>
            <div className="h-[25vh] w-[30%] bg-white text-[#FF7A00] flex items-center justify-center rounded-3xl"><h1 className="text-5xl font-bold">Join Team</h1></div>
        </div>
        <p className="uppercase flex justify-center sm:items-center text-gray-400 items-start md:py-[50px] py-[180px]">*Please review the regulation once before choosing any option</p>
        {/* <div className="flex justify-center xl:hidden mb-4">
          <span
            className="flex items-center uppercase px-4 py-1.5 sm:py-2 sm:text-lg text-[10px] bg-[#FF7A00] sm:rounded-lg rounded-md hover:bg-[#ff9837] hover:text-white hover:font-[400] active:bg-[#FF7A00]"
          >
            Name
          </span>
        </div> */}
      </div>
    </>
  );
};
export default Main;
