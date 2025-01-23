import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";
import { useForm } from "react-hook-form";

export default function FormValidation() {

    const validationSchema = yup.object().shape({
        name: yup.string().required("Name is requird"),
        
        email: yup.string()
        .email("enter the validate email")
        .required("enter the email"),  
        phone: yup.string().min(8,"enter the 10 number").required("enter the mobile number")  
    })

    const {register, handleSubmit, formState:{errors}} = useForm({resolver:yupResolver(validationSchema)})

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        alert("Form submitted successfully!");
      };




  return (
    <>
      <div className=" w-full flex justify-center my-10 " >
        <form action="" className="" onSubmit={handleSubmit(onSubmit)} >
            <div className="text-2xl font-bold my-3">Registered Form</div>
        <div>
          <label htmlFor="">First Name</label> <br />
          <input {...register("name")} type="text" className="border border-gray-300 "  />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="">Last Name</label><br />
          <input type="text" className="border border-gray-300 "/>
        </div>
        <div>
          <label htmlFor="">Email</label><br />
          <input type="text" className="border border-gray-300 " {...register("email")}/>
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="">Phone number</label><br />
          <input type="number" className="border border-gray-300 " {...register("phone")}/>
          {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="">Gender</label><br />
          <input type="radio" className="border border-gray-300 " name="Gender" value={"male"}/> Male &nbsp;
          <input type="radio" className="border border-gray-300 " name="Gender" value={"female"}/> Female
        </div>
        <div>
          <button type="submit" value={"submit"} className="border bg-sky-400 rounded-lg px-5 py-2 my-5" > Submit</button>
        </div>
        </form>
      </div>
    </>
  );
}
