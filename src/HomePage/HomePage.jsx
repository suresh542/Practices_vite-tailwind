import React from "react";
import headerImage from "../assets/MySkillsLeftImage.png";
import {Link, useNavigate } from "react-router-dom";

export default function HomePage() {

  const nav = useNavigate();

  const optionHandelChange = (e)=>{
      const selectOption = e.target.value;
      console.log(selectOption)

      if(selectOption){
        nav(selectOption)
      }

  }

  return (
    <div className="p-5 lg:p-8 text-gray-800">
      <section className=" bg-purple-100 rounded-2xl p-5">
        <div className="container mx-auto ">
          <div className="flex p-5">
            <a
              href=""
              className="text-3xl font-bold pr-5 lg:border-r border-gray-400"
            >
              Agency
            </a>
            <button className="block lg:hidden">
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <div className="hidden lg:block">
              <ul className="flex ">
                <li className="ms-5 p-2 border hover:border-gray-400  rounded-md">
                  <Link to="/">Home</Link>
                </li>
                <li className="ms-5 p-2 border hover:border-gray-400  rounded-md">
                  <Link to="/about">About</Link>
                </li>
                <li className="ms-5 p-2 border hover:border-gray-400  rounded-md">
                  Service
                </li>
                <li className="ms-5 p-2 border hover:border-gray-400  rounded-md">
                  Blog
                </li>
                <li className="ms-5 p-2 border hover:border-gray-400  rounded-md">
                  Contact
                </li>
                <li className="ms-5 p-2 border hover:border-gray-400  rounded-md">
                  <select name="" id="" onChange={optionHandelChange} className="bg-transparent text-center" defaultValue={""}>
                    <option className="bg-transparent" value="" disabled >Practices</option>
                    <option className="bg-transparent" value="/hookpracties">Hook Practies  </option>
                    <option className="bg-transparent" value="/formvalidation">Form Validation  </option>
                    <option className="bg-transparent" value="/curdjavascript">Curd JavaScript  </option>
                  </select>
                </li>
              </ul>
            </div>

            <a
              href=""
              className="ml-auto flex text-medium font-bold bg-red-500 rounded-3xl text-white px-3 py-2 text-center item-center"
            >
              <span className="hidden lg:block  justify-center text-center item-center me-3">
                Get more info
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex mt-10 lg:mt-28">
          <div className="w-full lg:w-1/2 p-5 ">
            <div className="text-4xl font-bold lg:font-semibold ">
              Would you like to get in touch? Drop me a line at
            </div>
            <div className="text-xl font-semibold mt-5 text-gray-500">
              Drop me a line at the button below
            </div>
            <div className="mt-8 flex">
              <button className="text-white text-lg ms-5 rounded px-5 py-2 font-semibold  bg-purple-800 hover:bg-purple-500">
                More Info
              </button>
              <button className="text-white text-lg ms-5 rounded px-5 py-2 font-semibold  bg-red-800 hover:bg-red-500">
                Contact Us
              </button>
            </div>
          </div>
          <div className="w-1/2 hidden  lg:flex justify-center">
            <img src={headerImage} alt="" />
          </div>
        </div>
        <div className="mt-5 lg:mt-10 flex justify-center">
          <div>
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
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>
          </div>
          <div className="ml-2 text-center align-middle">scroll down</div>
        </div>
      </section>
      <section className="mt-5 px-10 py-54">
        <div className="container mx-auto bg-gradient-to-r from-purple-600 to-red-500 rounded-2xl">
          <div className="text-center text-2xl font-bold text-white">Blog</div>
          <div className="text-white mt-10 w-1/2 text-center mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            atque maiores cupiditate accusantium, libero autem ratione et dolore
            quibusdam obcaecati fugiat veritatis sit, enim totam officia magnam
            in qui omnis. Debitis iure adipisci,
          </div>
          <div className="text-center py-5">
            <button className="mx-auto text-lg font-semibold bg-red-600 rounded-md px-5 py-1 text-white">
              contact
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
