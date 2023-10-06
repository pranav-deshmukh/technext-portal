import Link from "next/link";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Image from "next/image";
import logo from "./../assets/logo.svg";

export default function ForgotPassword() {
  const userSchema = z.object({
    email: z
      .string({
        required_error: "Required",
        invalid_type_error: "Email must be a string",
      })
      .email("Enter a valid email"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: toFormikValidationSchema(userSchema),
    validateOnChange: true,
    onSubmit: (values) => {
      const send = {
        email: values.email,
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
      <div className="mx-8 my-auto h-fit w-[100%] rounded-md py-6 backdrop-blur-md backdrop-brightness-125 lg:w-[60%]">
        <div className="flex justify-center whitespace-pre pt-2 text-2xl lg:text-4xl text-white lg:text-5xl">
          <Link href="/">
            <div className="unselected text-white/50">LOGIN </div>
          </Link>
          <div className="selected">| FORGOT PASSWORD</div>
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

              <button
                type="submit"
                className="mx-auto mt-10 w-[30%] rounded-full bg-[#FF7A00] py-1.5 text-2xl text-white lg:mt-16"
              >
                SEND OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
