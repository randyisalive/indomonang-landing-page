import React from "react";

const Footer = () => {
  return (
    <div
      className="bg-sky-50 flex gap-[24px] items-center"
      style={{ padding: "24px 80px" }}
    >
      <img src="/fav-icon.png" width={40} height={40} alt="" />
      <span className=" font-semibold">
        © Copyright PT Indomonang Jadi. All Rights Reserved 2025
      </span>
    </div>
  );
};

export default Footer;
