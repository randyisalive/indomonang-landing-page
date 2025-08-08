"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const AppFolder = () => {
  // 1. State is now managed inside the component
  const [isOpen, setIsOpen] = useState(false);

  // 2. Data is now defined statically inside the component
  const folderData = {
    id: "static-agenda-folder", // A unique ID for the layout animation
    title: "AGENDA",
    subtitle: "Project Management System",
    icon: "/agenda-icon.png",
  };

  // 3. Handlers now directly set the internal state
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* The small folder icon and its labels */}
      <div className="flex flex-col items-center gap-[8px] w-[200px]  h-[215px]">
        <motion.div
          layoutId={folderData.id} // The magic key for the animation
          onClick={handleOpen}
          className="flex flex-col w-[125px] h-[125px]  bg-gray-100 border border-gray-200 rounded-lg shadow-sm cursor-pointer"
          whileHover={{
            borderColor: "#7DD3FC",
            boxShadow: "0 0 10px rgba(3, 105, 161, 0.3)",
          }}
        >
          <Image
            src={folderData.icon}
            width={40}
            height={40}
            alt={`${folderData.title} icon`}
          />
        </motion.div>
        <div className="w-[200px] text-center">
          <span className="font-semibold">{folderData.title}</span>
          <p className="text-sm text-slate-500">{folderData.subtitle}</p>
        </div>
      </div>

      {/* The expanded view (Modal) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0  backdrop-blur bg-opacity-30 z-40"
              onClick={handleClose} // Close when clicking the backdrop
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            {/* Modal Content */}
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
              <motion.div
                layoutId={folderData.id} // Match the layoutId from the small folder
                className="w-full max-w-lg h-[500px] bg-white rounded-xl shadow-2xl p-6 flex flex-col"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <motion.h2 className="text-2xl font-bold">
                      {folderData.title}
                    </motion.h2>
                    <motion.p className="text-slate-600 mt-1">
                      {folderData.subtitle}
                    </motion.p>
                  </div>
                  <motion.button
                    onClick={handleClose}
                    className="text-gray-500 hover:text-gray-800"
                    aria-label="Close"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>

                {/* Add more content for your expanded view below */}
                <div className="mt-4 flex-grow">
                  <p>Content for the project management system goes here...</p>
                </div>
              </motion.div>
            </div>{" "}
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppFolder;
