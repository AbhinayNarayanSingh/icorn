import { useForm } from 'react-hook-form';
import FormInputs from '../Input';

const VerifySignUp = () => {

  const { register, handleSubmit, formState: { errors },} = useForm();

  const signUpHandler = (data) => {
      console.log(data, "data");
      console.log(errors, "formState > errors");
  };
  const errorHandler = () => {
      console.log(errors, "error");
  };

    const verifyFormFeilds = [
        {
          type: "text",
          name: "otp",
          label: "One-Time Password (OTP)",
        }
      ];
  return (
    <>
        <h2>
        An OTP sent to your provided phone number to verify your account.{" "}
        <span>Request again.</span>
        </h2>

        <form
        onSubmit={handleSubmit(signUpHandler, errorHandler)}
        className="col-11 col-md-7 col-lg-5 m-3"
        >
        {verifyFormFeilds.map((item, index) => {
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
            Validate
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

export default VerifySignUp