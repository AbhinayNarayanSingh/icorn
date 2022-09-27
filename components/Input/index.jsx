const FormInputs = ({
  inputCaseType,
  type,
  name,
  label,
  className,
  register,
}) => {
  switch (inputCaseType) {
    case "search_input":
      return (
        <>
          <div className="search_input">
            <input
              type={type}
              placeholder="Search iCorn | Authorised Reseller"
            />
          </div>
          <style jsx>{`
            .search_input input {
              width: 35vw;

              padding: 10px 20px;
              text-align: center;

              background: rgba(255, 255, 255, 0.05);
              border-radius: 52px;
              border: none;
              color: white;
            }
          `}</style>
        </>
      );

    case "input":
      return (
        <>
          <div className={className}>
            <div className={"input"}>
              <label>{label}</label>
              <input type={type} {...register(name)} />
            </div>
            <style jsx>{`
              div {
                display: flex;
                flex-direction: column;
              }
              .input input {
                border: 1px solid #d6d6d6;
                background: transparent;
                margin-top: 0.5rem;
              }
            `}</style>
          </div>
        </>
      );
  }
};

export default FormInputs;
