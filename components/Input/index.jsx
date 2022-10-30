import { useState } from "react";
import { WHITE } from "../../utils/Environment";

const FormInputs = ({
  inputCaseType,
  type,
  name,
  label,
  options,
  className,
  register,
  label2,
  name2,
}) => {

  const [selectedCategory, setSelectedCategory] = useState()

  switch (inputCaseType || "input") {
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
              color: ${WHITE};
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

    case "select":
      return (
        <>
          <div className={className}>
            <div className={"select"}>
              <label>{label}</label>
              <select {...register(name)}
              onChange={(event) => setSelectedCategory(event.target.selectedIndex)}>
                {options?.map((i, ind) => <option value={i?._id} key={ind}>{i?.name}</option>
                )}
              </select>
            </div>
            {options?.[selectedCategory]?.subCat?.length > 0 && (
            <div className={"select mt-1"}>
              <label>{label2}</label>
              <select {...register(name2)}>
                {options?.[selectedCategory]?.subCat?.map((item, index) => {
                  return (<option value={item.name} key={index}>{item.name}</option>)
                  })}
              </select>
            </div>
            )}
            <style jsx>{`
              div {
                display: flex;
                flex-direction: column;
              }
              .select select {
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
