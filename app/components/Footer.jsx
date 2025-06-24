import React from "react";

const Footer = () => {
  return (
    <div
      className="bg-sky-50 flex gap-[24px] items-center justify-start text-xs lg:text-base  "
      style={{ padding: "24px 80px" }}
    >
      <img
        src="/fav-icon.png"
        className="w-[25px] h-[25px] lg:w-[40px] lg:h-[40px]"
        alt=""
      />
      <span className=" font-semibold">
        © Copyright PT Indomonang Jadi. All Rights Reserved 2025
      </span>
    </div>
  );
};

export default Footer;
