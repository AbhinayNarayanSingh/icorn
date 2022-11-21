import Router from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormInputs from "../../components/Input";
import SignIn from "../../components/Sign/SignIn";
import SignUp from "../../components/Sign/SignUp";
import VerifySignUp from "../../components/Sign/VerifySignUp";

const Sign = () => {
  const { register, handleSubmit, formState: { errors },} = useForm();
  // handleSubmit(onValid: SubmitHandler<FieldValues>, onInvalid?: SubmitErrorHandler<FieldValues> | undefined)

  const signUpHandler = (data) => {
    console.log(data, "data");
    console.log(errors, "formState > errors");
    setActivePage("verify")
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
      type: "text",
      name: "confirmPassword",
      label: "Confirm password",
    },
    {
      type: "text",
      name: "mob",
      label: "Mobile No.",
    },
    {
      type: "text",
      name: "telegram_chat_id",
      label: "Telegram Chat ID",
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
    <div className="container-xxxl d-flex align-items-center justify-content-center flex-column min-h mt-2">
      <h3>iCorn ID</h3>

      {activePage === "signup" && <SignUp setActivePage={setActivePage}/>}

      {activePage === "signin" && <SignIn setActivePage={setActivePage}/>}

      {activePage === "verify" && <VerifySignUp/>}

      <style jsx>{`
        h3 {
          font-weight: 600;
          font-size: 40px;
          line-height: 48px;
        }
      `}</style>
    </div>
  );
};

export default Sign;
