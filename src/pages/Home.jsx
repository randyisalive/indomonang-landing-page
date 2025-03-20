import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const square_data_1 = [
    { id: 0, color: "bg-sky-100" },
    { id: 0, color: "bg-slate-50" },
    { id: 0, color: "bg-white" },
    { id: 0, color: "bg-sky-50" },
    { id: 0, color: "bg-slate-50" },
    { id: 0, color: "bg-white" },
    { id: 0, color: "bg-sky-50" },
    { id: 0, color: "bg-white" },
    { id: 0, color: "bg-sky-100" },
    { id: 0, color: "bg-white" },
    { id: 0, color: "bg-sky-50" },
    { id: 0, color: "bg-slate-50" },
  ];
  const square_data_2 = [
    { id: 1, color: "bg-sky-50" },
    { id: 2, color: "bg-slate-50" },
    { id: 3, color: "bg-sky-100" },
    { id: 4, color: "bg-slate-50" },
    { id: 5, color: "bg-white" },
    { id: 6, color: "bg-white" },
    { id: 7, color: "bg-slate-50" },
    { id: 8, color: "bg-white" },
    { id: 9, color: "bg-slate-50" },
    { id: 10, color: "bg-slate-50" },
    { id: 11, color: "bg-white" },
    { id: 12, color: "bg-sky-100" },
  ];
  const square_data_3 = [
    { id: 1, color: "bg-white" },
    { id: 2, color: "bg-white" },
    { id: 3, color: "bg-slate-50" },
    { id: 4, color: "bg-white" },
    { id: 5, color: "bg-sky-50" },
    { id: 6, color: "bg-slate-50" },
    { id: 7, color: "bg-white" },
    { id: 8, color: "bg-white" },
    { id: 9, color: "bg-sky-50" },
    { id: 10, color: "bg-white" },
    { id: 11, color: "bg-slate-50" },
    { id: 12, color: "bg-white" },
  ];
  const square_data_4 = [
    { id: 0, color: "bg-white" },
    { id: 0, color: "bg-slate-50" },
    { id: 0, color: "bg-white" },
    { id: 0, color: "bg-slate-50" },
    { id: 0, color: "bg-slate-50" },
    { id: 0, color: "bg-white" },
    { id: 0, color: "bg-white" },
    { id: 0, color: "bg-slate-50" },
    { id: 0, color: "bg-white" },
    { id: 0, color: "bg-white" },
    { id: 0, color: "bg-slate-50" },
    { id: 0, color: "bg-slate-50" },
  ];

  const main_data = [
    {
      id: 0,
      icon: "/agenda-main.png",
      title: "AGENDA",
      sub: "Project Management System",
      link: "https://rvbypkie4gfkj9rda9uhe4ghyeir3zepn3kerzrki7mpx2n812nj6tk8hnkcd5h.erpimj.com/index.php?module=users/login",
    },
    {
      id: 1,
      icon: "/hris-main.png",
      title: "HRMS-IMJ",
      sub: "HR Management System",
      link: "https://agenda.erpimj.com/hr/index.php?module=users/login",
    },
    {
      id: 2,
      icon: "/bms-main.png",
      title: "BMS-IMJ",
      sub: "Building Management System",
      link: "https://rvbypkie4gfkj9rda9uhe4ghyeir3zepn3kerzrki7mpx2n812nj6tk8hnkcd5h.erpimj.com/bms/index.php?module=users/login",
    },
    {
      id: 0,
      icon: "/jadicrm-main.png",
      title: "JadiCRM",
      sub: "Customer Relations Management System",
      link: "https://indomonang-client-website-next-js.vercel.app/login",
    },
    {
      id: 0,
      icon: "/crm-main.png",
      title: "CRM Registration",
      sub: "CRM Registration",
      link: "http://9v8t7tryck91047mar7jm7390k8k42rzz5vbwm5fcy37skzzlyk51rtgi7icol.erpimj.com/a1bC2dE3fG4hI5jK6lM7nO8pQ9rS0",
    },
    {
      id: 0,
      icon: "/documentation-main.png",
      title: "AGD",
      sub: "Documentation",
      link: "https://rvbypkie4gfkj9rda9uhe4ghyeir3zepn3kerzrki7mpx2n812nj6tk8hnkcd5h.erpimj.com/doc/",
    },
  ];
  return (
    <>
      <div className=" font-display text-power h-[500px] flex flex-col  gap-[20px]  w-full relative align-top text-center">
        <div className="flex   h-[100px] justify-between">
          {square_data_1.map((i) => {
            return <div className={`w-[100px] h-[100px] ${i.color}`}></div>;
          })}
        </div>{" "}
        <div className="flex   h-[100px] justify-between">
          {square_data_2.map((i) => {
            return <div className={`w-[100px] h-[100px] ${i.color}`}></div>;
          })}
        </div>{" "}
        <div className="flex  h-[100px] justify-between">
          {square_data_3.map((i) => {
            return <div className={`w-[100px] h-[100px] ${i.color}`}></div>;
          })}
        </div>{" "}
        <div className="flex   h-[100px] justify-between">
          {square_data_4.map((i) => {
            return <div className={`w-[100px] h-[100px] ${i.color}`}></div>;
          })}
        </div>
        <div className=" absolute  lg:w-[967px] sm:w-full  top-1/2 left-1/2 -translate-x-1/2 flex flex-col gap-[12px] -translate-y-1/2">
          <div className=" relative justify-center flex  gap-[50px]">
            <div className=" flex gap-4 relative w-[100px]">
              <div className=" absolute left-0 top-0 -rotate-[24deg]">
                <img
                  src="/documentation-icon.png"
                  alt=""
                  width={35}
                  height={40}
                />
              </div>
              <div className=" absolute bottom-0 right-1/3 rotate-[12deg]">
                <img src="/bulding-icon.png" alt="" width={35} height={40} />
              </div>
              <div className=" absolute right-0 -rotate-[5deg]">
                <img src="/agenda-icon.png" alt="" width={35} height={40} />
              </div>
            </div>
            <div className="flex flex-col gap-[8px] justify-center">
              <span className=" text-2xl text-sky-600 font-medium">
                PT Indomonang Jadi
              </span>
              <span className=" text-4xl font-semibold">
                Application Collections
              </span>
            </div>
            <div className=" flex gap-4 relative w-[100px]">
              <div className=" absolute left-0 rotate-[5deg]">
                <img src="/hris-icon.png" alt="" width={35} height={40} />
              </div>
              <div className=" absolute right-1/3 bottom-0 -rotate-[12deg]">
                <img src="/crm-icon.png" alt="" width={35} height={35} />
              </div>
              <div className=" absolute right-0 rotate-[24deg]">
                <img src="/jadicrm-icon.png" alt="" width={35} height={35} />
              </div>
            </div>{" "}
          </div>
          <div className="w-full justify-center items-center flex">
            <div className=" w-[480px]">
              <span className=" text-lg " style={{ color: "#64748B" }}>
                Stay organized, collaborate with ease, and manage everything in
                one place
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" gap-[87px]"
        style={{
          paddingLeft: "80px",
          paddingRight: "80px",
          paddingTop: "40px",
          paddingBottom: "120px",
        }}
      >
        <div className=" gap-[70px] flex flex-wrap justify-between ">
          {main_data.map((i) => {
            return (
              <div className="w-[200px] gap-[8px] flex flex-col">
                <div className=" text-center flex justify-center items-center">
                  <Link to={i.link} target="_blank">
                    <div
                      className="border border-sky-300 shadow rounded-[8px]"
                      style={{ padding: "32px" }}
                    >
                      <img src={i.icon} width={60} height={60} alt="" />
                    </div>
                  </Link>
                </div>
                <div className="w-[200px] flex flex-col justify-center items-center">
                  <span className="font-semibold">{i.title}</span>
                  <span
                    className=" text-sm font-normal text-center"
                    style={{ color: "#64748B" }}
                  >
                    {i.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
