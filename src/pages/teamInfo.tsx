import Image from "next/image";
import logo from "../assets/logo-icon.svg";
import { MdOutlineAccountCircle, MdLogin } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { PiBellSimpleBold } from "react-icons/pi";
import Modal from "react-modal";
import { useState } from "react";
import { BsArrowLeftSquare } from "react-icons/bs";
import Link from "next/link";

const Main = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  Modal.setAppElement("#__next");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <div className="teamInfo text-white">
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

        <div className="flex items-start justify-start uppercase  sm:items-center md:py-[40px] ">
          <div className="relative flex  h-[72vh] w-[50%] flex-col items-center justify-evenly rounded-3xl text-white">
            <h1 className="-ml-10  text-5xl font-bold">Team Name</h1>

            <form action="">
              <div className="ml-[5vw]">
                <input
                  className="w-[36vw] rounded-md bg-[#4b4b4b] px-[33px] py-[15px] text-[22px] font-semibold text-[#D9D9D999]"
                  id="email"
                  type="text"
                  placeholder="Enter The Team Code"
                />
                <input
                  className="mt-3 w-[36vw] rounded-md bg-[#4b4b4b] px-[33px] py-[15px] text-[22px] font-semibold text-[#D9D9D999]"
                  id="email"
                  type="text"
                  placeholder="Enter The Team Code"
                />
                <input
                  className="mt-3 w-[36vw] rounded-md bg-[#4b4b4b] px-[33px] py-[15px] text-[22px] font-semibold text-[#D9D9D999]"
                  id="email"
                  type="text"
                  placeholder="Enter The Team Code"
                />
                <input
                  className="mt-3 w-[36vw] rounded-md bg-[#4b4b4b] px-[33px] py-[15px] text-[22px] font-semibold text-[#D9D9D999]"
                  id="email"
                  type="text"
                  placeholder="Enter The Team Code"
                />
              </div>
            </form>
            <div className="flex">
              <div className="-ml-14 flex w-[22vw] items-center bg-[#1e1f20] px-[30px] py-[10px] text-[18px] font-bold">
                <div className="text-[12px]">Your Team Code</div>
                <div className="ml-10 flex w-36  justify-center rounded-md bg-black  py-[10px] text-[20px]">
                  #123456
                </div>
              </div>
              <Link href="">
                <span
                  className="my-1 flex items-center rounded-md px-2 py-1 text-[6px] uppercase hover:font-[400]  hover:text-white sm:mx-[20px]  sm:rounded-lg sm:px-5  sm:py-2 sm:text-xl"
                  onClick={openModal}
                >
                  Leave Team &nbsp;
                  <RiLogoutBoxLine className="text-2xl text-[#FF7A00] " />
                </span>
              </Link>
            </div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              shouldCloseOnOverlayClick={true}
              style={{
                overlay: {
                  backgroundColor: "rgba(0, 0, 0, 0.73)",
                  backdropFilter: "blur(22px)",
                },
                content: {
                  backgroundColor: "rgba(108, 108, 108, 0.65)",
                  width: "60%",
                  height: "40vh",
                  margin: "auto",
                  border: "1px solid #ccc",
                  borderRadius: "12px",
                  padding: "20px",
                },
              }}
            >
              <div className="lg:mt-8 2xl:mt-0">
                <h1 className="bdcn py-8 text-center text-3xl text-white md:text-4xl">
                  ARE YOU SURE YOU WANT TO LEAVE THE TEAM?
                </h1>
                <div className="mt-6 flex flex-col gap-y-3 lg:mt-12 lg:flex-row lg:justify-evenly lg:gap-y-0">
                  <button className="flex w-[60%] justify-center self-center rounded-xl border-4 border-white py-2 text-lg text-sm text-white sm:text-lg md:text-3xl lg:w-[30%] lg:text-xl 2xl:border-8 2xl:text-3xl">
                    <Link href="/dashboard">
                      <span className="box">YES I&apos;M SURE</span>
                    </Link>
                  </button>
                  <button
                    className="flex w-[60%] items-center justify-center self-center rounded-xl bg-white py-2 text-lg text-sm text-white sm:text-lg md:text-3xl lg:w-[30%] lg:py-2.5 lg:text-xl 2xl:py-3.5 2xl:text-3xl"
                    onClick={closeModal}
                  >
                    <span className="box text-[#FF7A00]">
                      CANCEL AND CONTINUE
                    </span>
                  </button>
                </div>
              </div>
            </Modal>
          </div>
          <div className="mt-[82px] h-[40vh] w-[2.3px] rounded-3xl bg-white"></div>
        </div>
        <p className="flex items-start justify-center pt-8 uppercase text-gray-400 sm:items-center md:py-[0px]  ">
          *Please review the regulation once before choosing any option
        </p>
      </div>
    </>
  );
};
export default Main;
