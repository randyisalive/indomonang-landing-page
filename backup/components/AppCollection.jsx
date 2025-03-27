import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { main_data } from "@/app/data/statis_data";

const AppCollection = () => {
  return (
    <div className=" gap-[70px] flex flex-wrap justify-center  items-center">
      {main_data.map((i) => {
        return (
          <div className="w-[200px] gap-[8px] flex flex-col" key={i.id}>
            <div className=" text-center flex justify-center items-center">
              <Link to={i.link} target="_blank">
                <motion.div
                  whileHover={{ borderColor: "#7DD3FC", boxShadow: "#0369A1" }}
                  className="border  shadow rounded-[8px]"
                  style={{ padding: "32px", borderColor: "#e2e8f0" }}
                >
                  <img src={i.icon} width={60} height={60} alt="" />
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
          </div>
        );
      })}
    </div>
  );
};

export default AppCollection;
