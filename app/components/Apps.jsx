"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Apps = ({ data = [] }) => {
  const [mainData, setMainData] = useState(data);

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      className=" gap-[70px] flex flex-wrap justify-center  items-center"
    >
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
              <Link href={i.link} target="_blank">
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
              <span className="font-semibold">{i.title}</span>
              <span
                className=" text-sm font-normal text-center w-[300px]  h-[50px]"
                style={{ color: "#64748B" }}
              >
                {i.sub}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Apps;
