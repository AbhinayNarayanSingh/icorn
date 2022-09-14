const FormInputs = ({ type, name, label, className, register }) => {
  switch (type) {
    case "value":
      return <div>index</div>;

    default:
      return (
        <>
          <div className={className}>
            <label>{label}</label>
            <input type={type} {...register(name)} />
          </div>
          <style jsx>{`
            div {
              display: flex;
              flex-direction: column;
            }
            input {
              border: 1px solid #d6d6d6;
              background: transparent;
              margin-top: 0.5rem;
            }
          `}</style>
        </>
      );
  }
};

export default FormInputs;
