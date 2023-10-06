import Link from "next/link";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Image from "next/image";
import logo from "./../assets/logo.svg";

export default function Reset() {
  const userSchema = z
    .object({
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
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: toFormikValidationSchema(userSchema),
    validateOnChange: true,
    onSubmit: (values) => {
      const send = {
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
          <Link href="/">
            <div className="unselected text-white/50">LOGIN </div>
          </Link>
          <div className="selected">| RESET</div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center py-12 lg:py-12">
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

              <button
                type="submit"
                className="mx-auto mt-10 w-[30%] rounded-full bg-[#FF7A00] py-1.5 text-2xl text-white lg:mt-16"
              >
                CONFIRM
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
