import Router from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormInputs from "../../components/Input";

const Sign = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // handleSubmit(onValid: SubmitHandler<FieldValues>, onInvalid?: SubmitErrorHandler<FieldValues> | undefined)

  const signUpHandler = (data) => {
    console.log(data, "data");
    console.log(errors, "formState > errors");
  };
  const errorHandler = () => {
    console.log(errors, "error");
  };

  const [activePage, setActivePage] = useState("signin");

  const signUpFormFeilds = [
    {
      type: "text",
      name: "fullname",
      label: "Name",
    },
    {
      type: "email",
      name: "email",
      label: "Email",
    },
    {
      type: "password",
      name: "password",
      label: "Password",
    },
    {
      type: "password",
      name: "confirmPassword",
      label: "Confirm password",
    },
    {
      type: "text",
      name: "mob",
      label: "Mobile No.",
    },
  ];

  const signInFormFeilds = [
    {
      type: "email",
      name: "email",
      label: "Email",
    },
    {
      type: "password",
      name: "password",
      label: "Password",
    },
  ];

  return (
    <div className="container-xxl d-flex align-items-center justify-content-center flex-column min-h-80vh">
      <h3>iCorn ID</h3>

      {activePage === "signup" && (
        <>
          <h2>
            You already have an iCorn ID?{" "}
            <span onClick={() => setActivePage("signin")} className="c-pointer">
              Sign it here.
            </span>
          </h2>

          <form
            onSubmit={handleSubmit(signUpHandler, errorHandler)}
            className="col-11 col-md-7 col-lg-5 m-3"
          >
            {signUpFormFeilds.map((item, index) => {
              return (
                <FormInputs
                  register={register}
                  key={index}
                  type={item.type}
                  name={item.name}
                  label={item.label}
                  className={"mt-1"}
                />
              );
            })}

            <button type="submit" className="primary-btn mt-2">
              Sign Up now
            </button>
          </form>
        </>
      )}

      {activePage === "signin" && (
        <>
          <h2>
            You don’t have an iCorn ID?{" "}
            <span onClick={() => setActivePage("signup")} className="c-pointer">
              Sign it here.
            </span>
          </h2>

          <form
            onSubmit={handleSubmit(signUpHandler, errorHandler)}
            className="col-11 col-md-7 col-lg-5 m-3"
          >
            {signInFormFeilds.map((item, index) => {
              return (
                <FormInputs
                  register={register}
                  key={index}
                  type={item.type}
                  name={item.name}
                  label={item.label}
                  className={"mt-1"}
                />
              );
            })}

            <button type="submit" className="primary-btn mt-2">
              Sign in now
            </button>
          </form>
          <h2 className="text-center">
            If you've lost your password or wish to reset it.{" "}
            <span
              onClick={() => Router.push("/sign/account-recovery")}
              className="c-pointer"
            >
              click here.
            </span>
          </h2>
        </>
      )}

      <style jsx>{`
        h3 {
          font-weight: 600;
          font-size: 40px;
          line-height: 48px;

          color: #000000;
          margin-top: 3rem;
        }
        h2 {
          margin-top: 1rem;
          font-weight: 600;
          color: #000000;
        }
        h2 span {
          font-weight: 600;
          color: #0066cc;
        }
      `}</style>
    </div>
  );
};

export default Sign;
