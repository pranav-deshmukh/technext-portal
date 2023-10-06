import Link from "next/link";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";
import Image from "next/image";
import logo from "./../assets/logo.svg";

function Register() {
  const [country, setCountry] = useState<string>("");
  const userSchema = z
    .object({
      firstName: z
        .string({
          required_error: "Required",
          invalid_type_error: "First name must be a string",
        })
        .min(2, "First name must have min 2 chars")
        .max(20, "First name must have max 20 chars"),
      lastName: z
        .string({
          required_error: "Required",
          invalid_type_error: "Last name must be a string",
        })
        .max(20, "Last name must have max 20 chars"),
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
      confirmPassword: z.string({
        required_error: "Required",
        invalid_type_error: "Confirm password must be a string",
      }),
      country: z.string({
        required_error: "Required",
        invalid_type_error: "Country must be a string",
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      country: country,
    },
    validationSchema: toFormikValidationSchema(userSchema),
    validateOnChange: true,
    onSubmit: (values) => {
      const send = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        coutry: values.country,
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
          <Link href="/">
            <div className="unselected text-white/50">LOGIN </div>
          </Link>
          <div className="selected">| REGISTER</div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center">
              <div className="flex flex-col lg:w-[100%] lg:flex-row lg:justify-center">
                <div className="mt-11 lg:w-[40%]">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      autoComplete="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="First Name"
                      className={`mx-auto block w-[80%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3 placeholder:text-[#00000036] lg:mx-0 lg:w-[98%]
                      ${touched.firstName && errors.firstName ? "" : ""}`}
                    />
                    <div className="mx-auto w-[80%] lg:w-[98%]">
                      <span className="text-sm text-red-500">
                        {touched.firstName && errors.firstName}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[40%]">
                  <div className="mt-6 lg:mt-11">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      autoComplete="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Last Name"
                      className={`mx-auto block w-[80%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3 placeholder:text-[#00000036] lg:mx-0 lg:w-[98%]
                      ${touched.lastName && errors.lastName ? "" : ""}`}
                    />
                    <div className="mx-auto w-[80%] lg:w-[98%]">
                      <span className="text-sm text-red-500">
                        {touched.lastName && errors.lastName}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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
                    className={`mx-auto block w-[80%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3 placeholder:text-[#00000036]
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
                <div className="mt-6 lg:mt-5">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Password"
                    className={`mx-auto block w-[80%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3 placeholder:text-[#00000036] ${
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
              <div>
                <div className="mt-6 lg:mt-5">
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Confirm Password"
                    className={`mx-auto block w-[80%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3 placeholder:text-[#00000036]
                      ${
                        touched.confirmPassword && errors.confirmPassword
                          ? "ring-2 ring-inset ring-red-500"
                          : ""
                      }`}
                  />
                  <div className="mx-auto w-[80%]">
                    <span className="text-sm text-red-500">
                      {touched.confirmPassword && errors.confirmPassword}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-6 lg:mt-5">
                  <ReactFlagsSelect
                    selected={country}
                    onSelect={(countryCode) => {
                      setCountry(countryCode);
                      formik.handleChange("country")(countryCode);
                      formik.handleBlur("country");
                    }}
                    placeholder="Select Country"
                    searchable
                    searchPlaceholder="Search countries"
                    className="box mx-auto w-[80%] rounded-md bg-[rgba(255,255,255,0.36)] placeholder:text-[#00000036]"
                  />
                  <div className="mx-auto w-[80%]">
                    <span className="text-sm text-red-500">
                      {touched.country && errors.country}
                    </span>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="mx-auto mt-6 w-[30%] rounded-full bg-[#FF7A00] text-2xl py-1.5 text-white"
              >
                REGISTER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
