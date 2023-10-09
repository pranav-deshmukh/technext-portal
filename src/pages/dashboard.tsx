import Image from "next/image";
import logo from "../assets/logo-icon.svg";
import { MdOutlineAccountCircle } from "react-icons/md";
import { PiBellSimpleBold } from "react-icons/pi";
import Link from "next/link";

const Dashboard = () => {
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
        <div className="flex flex-col justify-center py-[100px] text-center sm:items-center md:py-[100px]">
          <h1 className="text-7xl font-semibold ">Welcome Tanvi</h1>
          <h1 className="text-xl font-normal ">
            To procede with Technext Expo 2024, pick one.
          </h1>
        </div>

        <div className="flex justify-center py-[10px] uppercase  sm:items-center md:py-[10px]">
          <div className="flex w-[30%] items-center justify-center rounded-3xl bg-white text-[#FF7A00] sm:h-[20vh] md:h-[25vh]">
            <Link href="/createteam">
              <h1 className="text-center text-3xl font-bold md:text-5xl">
                Create Team
              </h1>
            </Link>
          </div>

          <div className="mx-10 h-[18vh] w-[2.3px] rounded-3xl bg-white"></div>

          <div className="flex w-[30%] items-center justify-center rounded-3xl bg-white text-[#FF7A00] sm:h-[20vh] md:h-[25vh]">
            <Link href="/joinTeam">
              <h1 className="text-center text-3xl font-bold md:text-5xl ">
                Join Team
              </h1>
            </Link>
          </div>
        </div>
        <p className="flex justify-center py-[18px] text-center uppercase text-gray-400 sm:items-center md:py-[50px]">
          *Please review the regulation once before choosing any option
        </p>
        {/* <div className="flex justify-center xl:hidden m b-4">
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
export default Dashboard;
