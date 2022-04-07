import React from "react";
import grainMap from "../../photos/grainMap.jpeg";

export default function FirstRegisterPage({handleChange, registerDetail}) {
  return (
    <section className="container  mx-auto">
      <div className="flex justify-center flex-row flex-nowrap">
        <div className="hidden md:block w-full basis-1/2">
          <img src={grainMap} alt="a map made with crops" />
        </div>
        <div className="md:basis-1/2 m-3">
          <div className="mx-11 font-Mulish  pt-20 text-primary-black text-3tl font-extrabold">
            <h4 >Register as Seller</h4>
          </div>
          <div className="mx-11 pt-7">
          <div className="mt-3">
              <label
                htmlFor="fullname"
                className="text-sm font-Mulish font-medium leading-none text-gray-700"
              >
               FirstName
              </label>
              <input
                className="w-full  px-4 py-4 rounded border border-black  "
                type="text"
                name="firstName"
                value={registerDetail.firstName}
                onChange={handleChange}
              />
               </div>
               <div className="mt-3">
              <label
                htmlFor="lastName"
                className="text-sm font-Mulish font-medium leading-none text-gray-700"
              >
              LastName
              </label>
              <input
                className="w-full  px-4 py-4 rounded border border-black  "
                type="text"
                name="lastName"
                value={registerDetail.lastName}
                onChange={handleChange}
              />
               </div>
               <div className="mt-3">
              <label
                htmlFor="email"
                className="text-sm font-Mulish font-medium leading-none text-gray-700"
              >
                Email address
              </label>
              <input
                className="w-full  px-4 py-4 rounded border border-black  "
                type="email"
                name="email"
                value={registerDetail.email}
                onChange={handleChange}
              />
            </div>
            
               <div className="mt-3">
              <label
                htmlFor="phoneNumber"
                className="text-sm font-Mulish font-medium leading-none text-gray-700"
              >
              Phone No
              </label>
              <input
                className="w-full  px-4 py-4 rounded border border-black  "
                type="text"
                name="phoneNumber"
                value={registerDetail.phoneNumber}
                onChange={handleChange}
              />
               </div>
               <div className="mt-3">
              <label
                htmlFor="country"
                className="text-sm font-Mulish font-medium leading-none text-gray-700"
              >
              Country
              </label>
              <input
                className="w-full  px-4 py-4 rounded border border-black  "
                type="text"
                name="country"
                value={registerDetail.selectCountry}
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="region"
                className="text-sm font-Mulish font-medium leading-none text-gray-700"
              >
             Select Region
              </label>
              <select
                className="w-full  px-4 py-4 rounded border border-black  "
                type="text"
                name="region"
                value={registerDetail.selectRegion}
                onChange={handleChange}
              />
            </div>
            
            </div>
           
            <div className="mt-6 ">
              <a href='/next' className="w-full font-Mulish text-primary-white inline-flex items-center justify-center px-4 py-3 bg-primary-orange border-transparent rounded-md font-semibold capitalize hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                Next
              </a>
              </div>
          
        
              </div>
      </div>
    </section>
  );
}

