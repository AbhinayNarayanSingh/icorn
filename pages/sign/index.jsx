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

  return (
    <div className="container-xxl d-flex align-items-center justify-content-center flex-column">
      <h3>iCorn ID</h3>
      <h2>
        You don’t have an iCorn ID? <span>Sign it here.</span>
      </h2>

      <form
        onSubmit={handleSubmit(signUpHandler, errorHandler)}
        className="col-5 m-3"
      >
        {/* <input type="text" {...register("username")} /> */}

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
