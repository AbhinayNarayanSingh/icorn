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

  const [activePage, setActivePage] = useState("changePassword");

  const accountRecoveryFormFeilds = [
    {
      type: "text",
      name: "email",
      label: "Email",
    },
  ];

  const changePasswordFormFeilds = [
    {
      type: "password",
      name: "password",
      label: "Password",
    },
    {
      type: "password",
      name: "confirm-password",
      label: "Confirm password",
    },
  ];

  return (
    <div className="container-xxl d-flex align-items-center justify-content-center flex-column">
      <h3>iCorn Recovery</h3>

      <h2 className="col-11 m-auto">
        To help keep your account safe, iCorn wants to make sure that it's
        really you trying to sign in
      </h2>
      {/* <h2 className="col-11 m-auto">Create a new, strong password</h2> */}

      {/* <p>
        Confirm the recovery email that you provided in your security settings:
        abh*********99@gmail.com
      </p> */}

      <form
        onSubmit={handleSubmit(signUpHandler, errorHandler)}
        className="col-11 col-md-7 col-lg-5 m-3"
      >
        {activePage === "accountRecovery" &&
          accountRecoveryFormFeilds.map((item, index) => {
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

        {activePage === "changePassword" &&
          changePasswordFormFeilds.map((item, index) => {
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
          Next
        </button>
      </form>

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
          text-align: center;
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
