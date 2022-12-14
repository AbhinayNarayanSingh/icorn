import { useState } from "react";
import { useForm } from "react-hook-form";
import FormInputs from "../../components/Input";
import { BLACK, BLUE } from "../../Environment";

const Sign = () => {
  const [activePage, setActivePage] = useState("accountRecovery");
  const [recoveryMail, setRecoveryMail] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // handleSubmit(onValid: SubmitHandler<FieldValues>, onInvalid?: SubmitErrorHandler<FieldValues> | undefined)

  const signUpHandler = (data) => {
    console.log(data, "data");
    console.log(errors, "formState > errors");

    if (data.email) {
      setRecoveryMail(data.email);
    }

    setActivePage("changePassword");
  };

  const errorHandler = () => {
    console.log(errors, "error");
  };

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
      name: "otp",
      label: "Security code",
    },
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
    <div className="container-xxxl d-flex align-items-center justify-content-center flex-column min-h mt-2">
      <>
        <h3>iCorn Recovery</h3>

        {activePage == "accountRecovery" && (
          <>
            <h2 className="col-11">
              To help keep your account safe, iCorn wants to make sure that it's
              really you trying to sign in
            </h2>
            <form
              onSubmit={handleSubmit(signUpHandler, errorHandler)}
              className="col-11 col-md-7 col-lg-5 m-3"
            >
              {accountRecoveryFormFeilds.map((item, index) => {
                return (
                  <FormInputs
                    register={register}
                    key={index}
                    type={item.type}
                    name={item.name}
                    label={item.label}
                    className={"mt-1"}
                    inputCaseType={"input"}
                  />
                );
              })}

              <button type="submit" className="primary-btn mt-2">
                Next
              </button>
            </form>
          </>
        )}

        {activePage == "changePassword" && (
          <>
            <h2 className="col-11">Create a new, strong password</h2>
            {/* <p className="mt-2">
              Confirm your recovery email with security code that we provided :{" "}
              {recoveryMail}
            </p> */}
            <form
              onSubmit={handleSubmit(signUpHandler, errorHandler)}
              className="col-11 col-md-7 col-lg-5 m-3"
            >
              {changePasswordFormFeilds.map((item, index) => {
                return (
                  <FormInputs
                    register={register}
                    key={index}
                    type={item.type}
                    name={item.name}
                    label={item.label}
                    className={"mt-1"}
                    inputCaseType={"input"}
                  />
                );
              })}

              <button type="submit" className="primary-btn mt-2">
                Update password
              </button>
            </form>
          </>
        )}

        <style jsx>{`
          h3 {
            font-weight: 600;
            font-size: 40px;
            line-height: 48px;

            color: ${BLACK};
          }
          h2 {
            margin-top: 1rem;
            font-weight: 600;
            color: ${BLACK};
            text-align: center;
          }
          h2 span {
            font-weight: 600;
            color: ${BLUE};
          }
        `}</style>
      </>
    </div>
  );
};

export default Sign;
