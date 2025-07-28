"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NumberBadge from "./NumberBadge";

const Title = () => {
  const [password, setPassword] = useState([]);

  useEffect(() => {
    const fetchPassword = async (userInput) => {
      try {
        const request = await fetch("/api/dev_data", {
          method: "POST",
          body: JSON.stringify({ userInput: userInput }),
        });
        const data = await request.json();
      } catch (e) {
        console.error(e);
      }
    };
    if (password.length == 6) {
      const userInput = window.prompt("Input Development Password: ");
      if (userInput) {
        fetchPassword(userInput);
      }
    }
  }, [password]);
  return (
    <div className=" absolute  lg:w-[967px] sm:w-full  top-1/2 left-1/2 -translate-x-1/2 flex flex-col gap-[12px] -translate-y-1/2">
      <div className=" relative justify-center flex  gap-[50px]">
        <div className=" lg:flex hidden gap-4 relative w-[100px]">
          <div className=" absolute left-0 top-0 -rotate-[24deg]">
            <div
              id="d"
              className={
                password.includes("d")
                  ? `cursor-pointer transition ease-in-out hover:-translate-y-1 scale-130`
                  : `cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110`
              }
              onClick={(e) => {
                const clickedId = e.currentTarget.id;
                if (!password.includes(clickedId)) {
                  setPassword((prev) => [...prev, clickedId]);
                } else {
                  const filter_item = password.filter((i) => i !== clickedId);
                  setPassword((prev) => filter_item);
                }
              }}
            >
              <NumberBadge
                password_val="d"
                password={password}
                position="bottom-6 right-5"
              />
              <Image
                src="/documentation-icon.png"
                alt=""
                width={35}
                height={40}
              />
            </div>
          </div>
          <div className=" absolute bottom-0 right-1/3 rotate-[12deg]">
            <div
              id="b"
              onClick={(e) => {
                const clickedId = e.currentTarget.id;

                if (!password.includes(clickedId)) {
                  setPassword((prev) => [...prev, clickedId]);
                } else {
                  const filter_item = password.filter((i) => i !== clickedId);
                  setPassword((prev) => filter_item);
                }
              }}
              className={
                password.includes("b")
                  ? `cursor-pointer transition ease-in-out hover:-translate-y-1 scale-130`
                  : `cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110`
              }
            >
              <NumberBadge
                password={password}
                password_val="b"
                position="bottom-6 left-6"
              />
              <Image
                src="/bulding-icon.png"
                alt=""
                width={35}
                height={40}
                id="b"
              />
            </div>
          </div>
          <div className=" absolute right-0 -rotate-[5deg]">
            <div
              id="a"
              className={`  ${
                password.includes("a")
                  ? `cursor-pointer transition ease-in-out hover:-translate-y-1 scale-130`
                  : `cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110`
              }`}
              onClick={(e) => {
                const clickedId = e.currentTarget.id;

                if (!password.includes(clickedId)) {
                  setPassword((prev) => [...prev, clickedId]);
                } else {
                  const filter_item = password.filter((i) => i !== clickedId);
                  setPassword((prev) => filter_item);
                }
              }}
            >
              <NumberBadge
                password={password}
                password_val="a"
                position="bottom-6 left-6"
              />
              <Image src="/agenda-icon.png" alt="" width={35} height={40} />
            </div>
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
            <div
              id="h"
              className={`  ${
                password.includes("h")
                  ? `cursor-pointer transition ease-in-out hover:-translate-y-1 scale-130`
                  : `cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110`
              }`}
              onClick={(e) => {
                const clickedId = e.currentTarget.id;

                if (!password.includes(clickedId)) {
                  setPassword((prev) => [...prev, clickedId]);
                } else {
                  const filter_item = password.filter((i) => i !== clickedId);
                  setPassword((prev) => filter_item);
                }
              }}
            >
              <NumberBadge password_val="h" password={password} />
              <Image src="/hris-icon.png" alt="" width={35} height={40} />
            </div>
          </div>
          <div className=" absolute right-1/3 bottom-0 -rotate-[12deg]">
            <div
              id="c"
              className={`  ${
                password.includes("c")
                  ? `cursor-pointer transition ease-in-out hover:-translate-y-1 scale-130`
                  : `cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110`
              }`}
              onClick={(e) => {
                const clickedId = e.currentTarget.id;

                if (!password.includes(clickedId)) {
                  setPassword((prev) => [...prev, clickedId]);
                } else {
                  const filter_item = password.filter((i) => i !== clickedId);
                  setPassword((prev) => filter_item);
                }
              }}
            >
              <NumberBadge password={password} password_val="c" />
              <Image src="/crm-icon.png" alt="" width={35} height={35} />
            </div>
          </div>
          <div className=" absolute right-0 rotate-[24deg]">
            <div
              id="j"
              className={`  ${
                password.includes("j")
                  ? `cursor-pointer transition ease-in-out hover:-translate-y-1 scale-130`
                  : `cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110`
              }`}
              onClick={(e) => {
                const clickedId = e.currentTarget.id;

                if (!password.includes(clickedId)) {
                  setPassword((prev) => [...prev, clickedId]);
                } else {
                  const filter_item = password.filter((i) => i !== clickedId);
                  setPassword((prev) => filter_item);
                }
              }}
            >
              <NumberBadge password={password} password_val="j" />
              <Image src="/jadicrm-icon.png" alt="" width={35} height={35} />
            </div>
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
