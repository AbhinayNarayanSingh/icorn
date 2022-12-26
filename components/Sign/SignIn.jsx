import { useForm } from 'react-hook-form';
import FormInputs from '../Input';
import { useRouter } from "next/router";

const SignIn = ({setActivePage}) => {

  const { register, handleSubmit, formState: { errors },} = useForm();
  const router = useRouter()

  const signUpHandler = (data) => {
      console.log(data, "data");
      console.log(errors, "formState > errors");
  };
  const errorHandler = () => {
      console.log(errors, "error");
  };

  const signInFormFeilds = [
      {
        type: "text",
        name: "email",
        label: "Email / Phone number",
      },
      {
        type: "password",
        name: "password",
        label: "Password",
      },
    ];

  return (
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
            inputCaseType={"input"}
          />
        );
      })}

      <button type="submit" className="primary-btn mt-2">
        Sign in now
      </button>
    </form>
    <h2 className="text-center reset-password">
      If you've lost your password or wish to reset it.{" "}
      <span
        onClick={() => router.push("/sign/account-recovery")}
        className="c-pointer"
      >
        click here.
      </span>
    </h2>

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

export default SignIn