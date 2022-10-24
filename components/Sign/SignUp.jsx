import { useForm } from 'react-hook-form';
import FormInputs from '../Input';

const SignUp = ({setActivePage}) => {

  const { register, handleSubmit, formState: { errors },} = useForm();

  const signUpHandler = (data) => {
      console.log(data, "data");
      console.log(errors, "formState > errors");
  };
  const errorHandler = () => {
      console.log(errors, "error");
  };

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
      type: "text",
      name: "phone",
      label: "Phone number",
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
      name: "telegram_chat_id",
      label: "Telegram Chat ID",
    },
  ];

  return (
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
            inputCaseType={"input"}
          />
        );
      })}

      <button type="submit" className="primary-btn mt-2">
        Sign Up now
      </button>
    </form>

    <style jsx>{`
        h2 {
          margin: 1rem .5rem 0;
          font-weight: 600;
          text-align: center;
        }
        h2 span {
          font-weight: 600;
          color: #0066cc;
          cursor: pointer;
        }
        .reset-password {
          font-weight: 400;
        }
      `}</style>
  </>
  )
}

export default SignUp