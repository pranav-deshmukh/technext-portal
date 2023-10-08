import Image from "next/image";
import logo from "../assets/logo-icon.svg";
import { useFormik } from "formik";
import { z } from "zod";
import Modal from "react-modal";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { MdOutlineAccountCircle } from "react-icons/md";
import { PiBellSimpleBold } from "react-icons/pi";
import {BiExit} from "react-icons/bi";
import { useState } from "react";
import CSS from "./createteam.module.css";

const CreateTeam = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  Modal.setAppElement("#__next");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const userSchema = z.object({
    tname: z.string({
      required_error: "Required",
      invalid_type_error: "team name must be a string",
    }),
    uname: z.string({
      required_error: "Required",
      invalid_type_error: "user name must be a string",
    }),
  });

  const formik = useFormik({
    initialValues: {
      tname: "",
      uname: "",
    },
    validationSchema: toFormikValidationSchema(userSchema),
    validateOnChange: true,
    onSubmit: (values) => {
      const send = {
        tname: values.tname,
        uname: values.uname,
      };
      openModal();
      console.log(send);
    },
  });
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    formik;
  return (
    <>
      <div className={`${CSS.background} text-white`}>
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

        <form onSubmit={handleSubmit}>
          <div className="mx-auto mt-32 flex w-[100%] flex-col justify-center py-12 lg:mt-20 lg:w-[50%] lg:py-16">
            <div>
              <div className="mt-6 text-xl lg:mt-5">
                <input
                  type="text"
                  name="tname"
                  id="tname"
                  autoComplete="tname"
                  value={values.tname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Team Name"
                  className={`mx-auto block w-[80%] rounded-md border-0 bg-[rgba(255,255,255,0.16)] px-4 py-4 placeholder:tracking-wide placeholder:text-[#7E7E7E]
                      ${touched.tname && errors.tname ? "" : ""}`}
                />
                <div className="mx-auto w-[80%]">
                  <span className="text-sm text-red-500">
                    {touched.tname && errors.tname}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-6 text-xl lg:mt-5">
                <input
                  type="text"
                  name="uname"
                  id="uname"
                  autoComplete="uname"
                  value={values.uname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Name"
                  className={`mx-auto block w-[80%] rounded-md border-0 bg-[rgba(255,255,255,0.16)] px-4 py-4 placeholder:tracking-wide placeholder:text-[#7E7E7E]
                      ${touched.uname && errors.uname ? "" : ""}`}
                />
                <div className="mx-auto w-[80%]">
                  <span className="text-sm text-red-500">
                    {touched.uname && errors.uname}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="mx-auto mt-6 w-[40%] rounded-md bg-[#FF7A00] py-1.5 text-lg text-white lg:mt-16 lg:text-2xl"
            >
              GENRATE YOUR TEAM CODE
            </button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              shouldCloseOnOverlayClick={true}
              style={{
                overlay: {
                  backgroundColor: "rgba(255, 122, 0, 0.10)",
                  backdropFilter: "blur(18.5px)",
                },
                content: {
                  backgroundColor: "rgba(0, 0, 0, 0.41)",
                  width: "60%",
                  height: "50vh",
                  margin: "auto",
                  border: "1px solid #ccc",
                  borderRadius: "12px",
                  padding: "20px",
                },
              }}
            >
              <h1 className="bdcn py-4 text-center text-3xl text-white md:text-4xl">
                HERE&apos;S YOUR TEAM CODE
              </h1>
              <div className="mx-auto my-4 flex flex-col md:flex-row w-[100%] md:w-[75%] md:justify-evenly rounded-md bg-[#0000005e] py-3 text-white 2xl:mx-24">
                <div className="bdcn text-lg md:text-2xl self-center">Your Team Code</div>
                <div className="bdcn rounded-md bg-[#00000075] px-3 py-1 text-lg md:text-2xl self-center">
                  # 123456
                </div>
              </div>
              <div className="box mt-10 text-sm md:text-lg text-center text-white">
                *Use this code to invite people
              </div>
              <div className="flex justify-center">
                <button className="mt-8 w-[40%] rounded-md bg-[#FF7A00] py-1.5 sm:py-1 md:py-2 text-lg text-white text-sm sm:text-lg md:text-2xl flex justify-center">
                  <span>CONTINUE TO DASHBOARD</span><BiExit className="mt-1 hidden min-[1123px]:flex"/>
                </button>
              </div>
            </Modal>
          </div>
        </form>
      </div>
    </>
  );
};
export default CreateTeam;
