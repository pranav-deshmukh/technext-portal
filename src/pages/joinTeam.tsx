import Image from "next/image";
import logo from "../assets/logo-icon.svg";
import { MdOutlineAccountCircle, MdLogin } from "react-icons/md";
import { PiBellSimpleBold } from "react-icons/pi";
import { BsArrowLeftSquare } from "react-icons/bs";
import Link from "next/link";

const Main = () => {
  return (
    <>
      <div className={`teamInfo text-white`}>
        <div className="flex w-full items-center justify-between pt-6">
          <div className="felx mx-4 ml-5 flex w-[300px] items-center justify-between sm:ml-20 sm:w-[450px]">
            <Image
              className="felx w-[38px] sm:w-[52px]"
              src={logo as HTMLImageElement}
              alt="logo"
            />
            <span className="felx mx-3 text-[8px] uppercase sm:mx-5 sm:text-sm">
              International Conference on Emerging Trends in Information
              Technology and Engineering{" "}
              <span className="text-[#FF7A00]">TECHNEXT EXPO 2024</span>
            </span>
          </div>
          <div className="mr-4 flex flex-wrap items-center justify-end text-center">
            <div className="mx-[10px] flex">
              <div className="flex items-center p-2 text-[10px] uppercase hover:text-gray-300 active:text-white sm:text-xl ">
                <PiBellSimpleBold />
                &nbsp;Announcements
              </div>
            </div>
            <span className="mx-[15px] my-1 flex items-center rounded-md bg-[#FF7A00] px-2 py-1 text-[10px] uppercase hover:bg-[#ff9837] hover:font-[400] hover:text-white active:bg-[#FF7A00] sm:mx-[30px] sm:rounded-lg sm:px-5 sm:py-2 sm:text-xl ">
              <MdOutlineAccountCircle />
              &nbsp;Name
            </span>
          </div>
        </div>

        <div className="flex items-start justify-center pt-[50px]  uppercase sm:items-center md:py-[70px]">
          <div className="relative flex h-[60vh] w-[70%] flex-col items-center justify-evenly rounded-3xl bg-[#898989] text-white">
            <Link href="/dashboard">
              <BsArrowLeftSquare className="absolute left-6 top-6 text-4xl" />
            </Link>

            <h1 className="text-5xl font-bold">Join Team</h1>
            <form action="">
              <div className="">
                <input
                  className="w-[50vw] rounded-md bg-[#4b4b4b] px-[33px] py-[14px] text-[10px] font-semibold text-[#D9D9D999] md:text-[22px]"
                  id="email"
                  type="text"
                  placeholder="Enter The Team Code"
                />
              </div>
            </form>
            <span className="my-1 flex items-center rounded-md bg-[#FF7A00] px-2 py-1 text-[10px] uppercase hover:bg-[#ff9837] hover:font-[400] hover:text-white active:bg-[#FF7A00] sm:mx-[30px] sm:rounded-lg sm:px-5 sm:py-2 sm:text-xl ">
              Continue &nbsp;
              <MdLogin className="text-2xl " />
            </span>
          </div>
        </div>
        <p className="flex items-start justify-center pt-8 text-center uppercase text-gray-400 sm:items-center md:py-[0px]  ">
          *Please review the regulation once before choosing any option
        </p>
      </div>
    </>
  );
};
export default Main;
