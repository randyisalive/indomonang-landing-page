"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import LoadingCircle from "./LoadingCircle";

const Apps = () => {
  const [mainData, setMainData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/app_data`);
      const data = await res.json();
      console.log(data);
      setMainData(data);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className=" gap-[70px] flex flex-wrap justify-center lg:justify-start  items-center">
      {isLoading && <LoadingCircle width={150} />}

      {mainData.map((i) => {
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-[200px] gap-[8px] flex flex-col"
            key={i.id}
          >
            <div className=" text-center flex justify-center items-center">
              <Link href={i[2761]} target="_blank">
                <motion.div
                  whileHover={{ borderColor: "#7DD3FC", boxShadow: "#0369A1" }}
                  className="border  shadow rounded-[8px]"
                  style={{ padding: "32px", borderColor: "#e2e8f0" }}
                >
                  <img
                    src={`data:image/jpeg;base64,${i.attachment?.content}`}
                    width={60}
                    height={60}
                    alt=""
                  />
                </motion.div>
              </Link>
            </div>
            <div className="w-[200px] flex flex-col justify-center items-center">
              <span className="font-semibold">{i[2762]}</span>
              <span
                className=" text-sm font-normal text-center w-[300px]  h-[50px]"
                style={{ color: "#64748B" }}
              >
                {i[2763]}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Apps;
