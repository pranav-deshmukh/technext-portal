import JoinTeam from "@/pages/joinTeam";
import Head from "next/head";
import Link from "next/link";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Image from "next/image";
import logo from "./../assets/logo.svg";

export default function Home() {
  const userSchema = z.object({
    email: z
      .string({
        required_error: "Required",
        invalid_type_error: "Email must be a string",
      })
      .email("Enter a valid email"),
    password: z
      .string({
        required_error: "Required",
        invalid_type_error: "Password must be a string",
      })
      .regex(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Password should contain atleast 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character",
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: toFormikValidationSchema(userSchema),
    validateOnChange: true,
    onSubmit: (values) => {
      const send = {
        email: values.email,
        password: values.password,
      };
      console.log(send);
    },
  });
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    formik;
  return (
    <div className="register flex justify-center">
      <div className="hidden items-center justify-center lg:flex lg:w-[50%]">
        <Image src={logo as HTMLImageElement} alt="Icetite-logo" />
      </div>
      <div className="mx-8 my-auto h-fit w-[100%] rounded-md py-6 backdrop-blur-md backdrop-brightness-125 lg:w-[50%]">
        <div className="flex justify-center whitespace-pre pt-2 text-4xl text-white lg:text-5xl">
          <div className="selected">LOGIN </div>
          <Link href="/register">
            <div className="unselected text-white/50">| REGISTER</div>
          </Link>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center py-12 lg:py-16">
              <div>
                <div className="mt-6 lg:mt-5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Email"
                    className={`mx-auto block w-[80%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-4 placeholder:text-[#00000036]
                      ${touched.email && errors.email ? "" : ""}`}
                  />
                  <div className="mx-auto w-[80%]">
                    <span className="text-sm text-red-500">
                      {touched.email && errors.email}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-6 lg:mt-6">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Password"
                    className={`mx-auto block w-[80%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-4 placeholder:text-[#00000036] ${
                      touched.password && errors.password
                        ? "ring-2 ring-inset ring-red-500"
                        : ""
                    } `}
                  />
                  <div className="mx-auto w-[80%]">
                    <span className="text-sm text-red-500">
                      {touched.password && errors.password}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="mx-auto mt-6 w-[30%] rounded-full bg-[#FF7A00] py-1.5 text-2xl text-white lg:mt-16"
              >
                LOGIN
              </button>
              <Link href="/forgotpassword">
                <div className="text-white underline text-center mt-7 lg:mt-5">Trouble in logging in?</div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
