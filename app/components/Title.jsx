"use client";
import React from "react";

const Title = () => {
  return (
    <div className=" absolute  lg:w-[967px] sm:w-full  top-1/2 left-1/2 -translate-x-1/2 flex flex-col gap-[12px] -translate-y-1/2">
      <div className=" relative justify-center flex  gap-[50px]">
        <div className=" lg:flex hidden gap-4 relative w-[100px]">
          <div className=" absolute left-0 top-0 -rotate-[24deg]">
            <img
              className=" transition ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/documentation-icon.png"
              alt=""
              width={35}
              height={40}
            />
          </div>
          <div className=" absolute bottom-0 right-1/3 rotate-[12deg]">
            <img
              className=" transition ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/bulding-icon.png"
              alt=""
              width={35}
              height={40}
            />
          </div>
          <div className=" absolute right-0 -rotate-[5deg]">
            <img
              className=" transition ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/agenda-icon.png"
              alt=""
              width={35}
              height={40}
            />
          </div>
        </div>
        <div className="flex flex-col gap-[8px] justify-center">
          <span className=" lg:text-2xl text-xl text-sky-600 font-medium">
            PT Indomonang Jadi
          </span>
          <span className=" lg:text-4xl text-2xl font-semibold">
            Application Collections
          </span>
        </div>
        <div className=" lg:flex hidden gap-4 relative w-[100px]">
          <div className=" absolute left-0 rotate-[5deg]">
            <img
              className=" transition ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/hris-icon.png"
              alt=""
              width={35}
              height={40}
            />
          </div>
          <div className=" absolute right-1/3 bottom-0 -rotate-[12deg]">
            <img
              className=" transition ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/crm-icon.png"
              alt=""
              width={35}
              height={35}
            />
          </div>
          <div className=" absolute right-0 rotate-[24deg]">
            <img
              className=" transition ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/jadicrm-icon.png"
              alt=""
              width={35}
              height={35}
            />
          </div>
        </div>
      </div>
      <div className="w-full justify-center items-center flex">
        <div className=" lg:w-[480px] w-[300px]">
          <span className=" text-lg " style={{ color: "#64748B" }}>
            Stay organized, collaborate with ease, and manage everything in one
            place
          </span>
        </div>
      </div>
    </div>
  );
};

export default Title;
