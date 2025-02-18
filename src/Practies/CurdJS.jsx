import React from "react";
import { Link } from "react-router-dom";

export default function CurdJS() {
    
    const fNameValue = document.getElementById("Fname");
    
    console.log(fNameValue)


  return (

    <>
     <div className="text-2xl font-bold my-3 ms-20">
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
            Home Page</Link>
          </div>
      <div className="form-validation w-1/3 my-10 block  justify-center center">
        <form action="" className="center mx-10">
          <div className="mb-5">
            <label htmlFor="Fname" className="text-xl font-semibold">
              First Name
            </label>
            <br />
            <input
              type="text"
              name=""
              id="Fname"
              className="w-full border border-gray-500 rounded-md text-lg p-2"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="lName" className="text-xl font-semibold">
              Last Name
            </label>
            <br />
            <input
              type="text"
              name=""
              id="lName"
              className="w-full border border-gray-500 rounded-md text-lg p-2"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="RollId" className="text-xl font-semibold">
              Roll Id
            </label>
            <br />
            <input
              type="text"
              name=""
              id="RollId"
              className="w-full border border-gray-500 rounded-md text-lg p-2"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Age" className="text-xl font-semibold">
              Age
            </label>
            <br />
            <input
              type="text"
              name=""
              id="Age"
              className="w-full border border-gray-500 rounded-md text-lg p-2"
            />
          </div>
          <div className="text-center">
            <button className="primary bg-red-600 text-white text-lg py-2 px-5 rounded-xl " type="submit">
              submit
            </button>
          </div>
        </form>
      </div>
      <div className="tableValue mx-10">
        <table className="border gap-10 border-black">
          <thead className="">
            <tr className="">
              <th>s.no</th>
              <th>first Name</th>
              <th>last Name</th>
              <th>Roll No</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}
