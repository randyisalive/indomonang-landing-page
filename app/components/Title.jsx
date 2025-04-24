"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Title = () => {
  const password_key = ["a", "b", "c"];
  const [password, setPassword] = useState([]);
  useEffect(() => {}, [password]);
  return (
    <div className=" absolute  lg:w-[967px] sm:w-full  top-1/2 left-1/2 -translate-x-1/2 flex flex-col gap-[12px] -translate-y-1/2">
      {JSON.stringify(password)}
      <div className=" relative justify-center flex  gap-[50px]">
        <div className=" lg:flex hidden gap-4 relative w-[100px]">
          <div className=" absolute left-0 top-0 -rotate-[24deg]">
            <Image
              className={
                password.includes("d")
                  ? `cursor-pointer transition ease-in-out hover:-translate-y-1 scale-130`
                  : `cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110`
              }
              src="/documentation-icon.png"
              alt=""
              width={35}
              height={40}
              id="d"
              onClick={(e) => {
                if (!password.includes(e.target.id)) {
                  setPassword((prev) => [...prev, e.target.id]);
                } else {
                  const filter_item = password.filter((i) => i !== e.target.id);
                  setPassword((prev) => filter_item);
                }
              }}
            />
          </div>
          <div className=" absolute bottom-0 right-1/3 rotate-[12deg]">
            <Image
              className={
                password.includes("b")
                  ? `cursor-pointer transition ease-in-out hover:-translate-y-1 scale-130`
                  : `cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110`
              }
              src="/bulding-icon.png"
              alt=""
              width={35}
              height={40}
              id="b"
              onClick={(e) => {
                if (!password.includes(e.target.id)) {
                  setPassword((prev) => [...prev, e.target.id]);
                } else {
                  const filter_item = password.filter((i) => i !== e.target.id);
                  setPassword((prev) => filter_item);
                }
              }}
            />
          </div>
          <div className=" absolute right-0 -rotate-[5deg]">
            <Image
              className=" transition ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/agenda-icon.png"
              alt=""
              width={35}
              height={40}
              id="a"
              onClick={(e) => {
                if (!password.includes(e.target.id)) {
                  setPassword((prev) => [...prev, e.target.id]);
                } else {
                  const filter_item = password.filter((i) => i !== e.target.id);
                  setPassword((prev) => filter_item);
                }
              }}
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
            <Image
              className=" transition ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/hris-icon.png"
              alt=""
              width={35}
              height={40}
              id="h"
              onClick={(e) => {
                if (!password.includes(e.target.id)) {
                  setPassword((prev) => [...prev, e.target.id]);
                } else {
                  const filter_item = password.filter((i) => i !== e.target.id);
                  setPassword((prev) => filter_item);
                }
              }}
            />
          </div>
          <div className=" absolute right-1/3 bottom-0 -rotate-[12deg]">
            <Image
              className=" transition ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/crm-icon.png"
              alt=""
              width={35}
              height={35}
              id="c"
              onClick={(e) => {
                if (!password.includes(e.target.id)) {
                  setPassword((prev) => [...prev, e.target.id]);
                } else {
                  const filter_item = password.filter((i) => i !== e.target.id);
                  setPassword((prev) => filter_item);
                }
              }}
            />
          </div>
          <div className=" absolute right-0 rotate-[24deg]">
            <Image
              className=" transition ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/jadicrm-icon.png"
              alt=""
              width={35}
              height={35}
              id="j"
              onClick={(e) => {
                if (!password.includes(e.target.id)) {
                  setPassword((prev) => [...prev, e.target.id]);
                } else {
                  const filter_item = password.filter((i) => i !== e.target.id);
                  setPassword((prev) => filter_item);
                }
              }}
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
