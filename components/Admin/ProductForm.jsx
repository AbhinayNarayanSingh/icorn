import React, { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { ROW_MOVE_DOWN_ICON, ROW_MOVE_UP_ICON, ROW_REMOVE_ICON } from '../../utils/Environment';
import FormInputs from '../Input';


const ProductForm = () => {
    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            "specifications": [{ name: "" }]
          }
    });
    const { fields, append, remove, move, } = useFieldArray({control, name: "specifications",});

    const {category} = useSelector((state) => state)

    const [formStep, setFormStep] = useState(1)

    const specificationsFeilds = [
        {
            type: "text",
            name: "name",
            label: "Name",
        },
        {
            type: "text",
            name: "description",
            label: "Description",
        },
    ]

    const productDetailFeilds = [
        {
          inputCaseType: "select",
          type: "select",
          name: "category",
          label: "Category",
          options: category,
          label2 : "Sub-Category",
          name2: "sub_category"
        },
        {
          type: "text",
          name: "name",
          label: "Name",
        },
        {
          type: "number",
          name: "product_mrp",
          label: "Maximum Retail Price (MRP)",
        },
        {
          type: "number",
          name: "selling_price",
          label: "Selling Price",
        },
        {
          type: "url",
          name: "hero_image",
          label: "Cover Image",
        },
      ];

  return (
    <div>
        <h2>Add New Product</h2>

        <form onSubmit={handleSubmit((data) => console.log(data, "data +++"))}>

            {formStep == 1 ? (
                <>
                    {productDetailFeilds.map((item, index) => {
                        return (
                            <FormInputs
                            register={register}
                            key={index}
                            type={item.type}
                            name={item.name}
                            label={item.label}
                            className={"mt-1"}
                            inputCaseType={item.inputCaseType}
                            options={item?.options}
                            label2={item?.label2}
                            name2={item?.name2}
                            />
                        );
                    })}

                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <h2>Specifications</h2>
                        <button type="button" className='link-btn' onClick={() => append()}>+ Add field</button>
                    </div>

                    {fields.map((item, index) => {
                        return (
                            <div key={item.id} className='row-gap-1'>
                                <FormInputs
                                register={register}
                                type={"text"}
                                name={`specifications[${index}].${specificationsFeilds[0].name}`}
                                label={specificationsFeilds[0].label}
                                className={`mt-1 col-md-3`}
                                />
                                <FormInputs
                                register={register}
                                type={specificationsFeilds[1].type}
                                name={`specifications[${index}].${specificationsFeilds[1].name}`}
                                label={specificationsFeilds[1].label}
                                className={`mt-1 col-md-8`}
                                />
                                <div className="col-md-1 form-action">
                                    <button type="button" onClick={() => move(index, index-1)}>
                                        <img src={ROW_MOVE_UP_ICON[0]} alt={ROW_MOVE_UP_ICON[1]} />
                                    </button>
                                    <button type="button" onClick={() => move(index, index+1)}>
                                        <img src={ROW_MOVE_DOWN_ICON[0]} alt={ROW_MOVE_DOWN_ICON[1]} />
                                    </button>
                                    <button type="button" onClick={() => remove(index)}>
                                        <img src={ROW_REMOVE_ICON[0]} alt={ROW_REMOVE_ICON[1]} />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </>
            ): formStep == 2 ? (<>"2"</>) : ("3")}

            <div className="row-gap-1 mt-2 mb-1">
                <button type="button" className="secondary-btn" onClick={()=> setFormStep((state) => state - 1)} disabled={formStep == 1}>Previous</button>
                {formStep != 3 ? (
                    <button type="button" className="primary-btn" onClick={()=> setFormStep((state) => state + 1)}>Next</button>
                ) : (
                    <button type="submit" className="primary-btn" disabled={formStep != 3}>Submit</button>
                )}
            </div>
        </form>
        <style jsx>{`

            .form-action {
                display: flex;
                align-items: end;
                padding-bottom: 0.75rem;
                gap: 0.75rem;
            }
            .form-action button {
                background: transparent;
            }
            .form-action img {
                height: 1.5rem;
            }

        `}</style>
    </div>
  )
}

export default ProductForm