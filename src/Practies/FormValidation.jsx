import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useCallback, useMemo, useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from 'axios';


export default function FormValidation() {
  const Ref = useRef(null);
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);
  const [errorAxios, setErrorAxios] = useState(null);
  const [LoadingAxios, setLoadingAxios] = useState(false);


  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is requird"),
    email: yup
      .string()
      .email("enter the validate email")
      .required("enter the email"),
    phone: yup
      .string()
      .min(8, "enter the 10 number")
      .required("enter the mobile number"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  function ExpensiveCalculation({ number }) {
    const result = useMemo(() => {
      console.log("Calculating...", number);
      return number * 2;
    }, [number]);

    return <p>Result: {result}</p>;
  }



  function Child({ handleClick }) {
    console.log('Child rendered');
    return <button onClick={handleClick}>Click Me</button>;
  }
  
  
    const memoizedHandleClick = useCallback(() => {
      console.log('Button Clicked!');
    }, []);
  
  

    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => setData(response.data))
        .catch((error) => console.error('Error:', error));
      const asyncApi = async()=>{
        try{
          const axiosAPI = await axios.get('https://jsonplaceholder.typicode.com/posts');
          const response = await  axiosAPI.json()
            setData(response)
            console.log(response)
        } 
        catch(err){
          setErrorAxios(err.message)
        } 
        finally{
          setLoadingAxios(false)
        }
      }

      // asyncApi()

    }, []);

    if(errorAxios == !null){
        return <p>Error... in internal function</p>
    }
    if(LoadingAxios ){
        return console.log("Page is loading")
    }



  return (
    <>
      <div className=" w-full flex justify-center my-10 ">
        <form action="" className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-2xl font-bold my-3">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>{" "}
              Home Page
            </Link>
          </div>
          <div className="text-2xl font-bold my-3">Registered Form</div>
          <div>
            <label htmlFor="">First Name</label> <br />
            <input
              {...register("name")}
              type="text"
              className="border border-gray-300 "
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <br />
            <input type="text" className="border border-gray-300 " />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <br />
            <input
              type="text"
              className="border border-gray-300 "
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="">Phone number</label>
            <br />
            <input
              type="number"
              className="border border-gray-300 "
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="">Gender</label>
            <br />
            <input
              type="radio"
              className="border border-gray-300 "
              name="Gender"
              value={"male"}
            />{" "}
            Male &nbsp;
            <input
              type="radio"
              className="border border-gray-300 "
              name="Gender"
              value={"female"}
            />{" "}
            Female
          </div>
          <div>
            <button
              type="submit"
              value={"submit"}
              className="border bg-sky-400 rounded-lg px-5 py-2 my-5"
            >
              {" "}
              Submit
            </button>
          </div>
        </form>
      </div>

      <div>
        <input type="text" ref={Ref} />
        <button onClick={() => Ref.current.focus()}>test Click</button>
      </div>

      <div>
        <div>
          <button onClick={() => setNumber(number + 1)}>Increase</button>
          <ExpensiveCalculation number={number} />
        </div>
      </div>

      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <Child handleClick={memoizedHandleClick} />
      </div>

      <div>
       
      {data.slice(0, 2).map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
    </>
  );
}
