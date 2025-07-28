import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const NumberBadge = ({ password_val = "", password = [], position = "" }) => {
  const index_val = password.map((i, index) => {
    if (password_val == i) {
      return index + 1;
    }
  });
  return (
    <div>
      <AnimatePresence>
        {password.includes(password_val) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`  absolute text-[7px]  w-full h-full  z-10 shadow-2xl   bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-[3px] justify-center flex items-center`}
          >
            {index_val}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NumberBadge;
