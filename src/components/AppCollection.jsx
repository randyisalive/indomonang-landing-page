import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const AppCollection = () => {
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
      id: 3,
      icon: "/jadicrm-main.png",
      title: "JadiCRM",
      sub: "Customer Relations Management System",
      link: "https://indomonang-client-website-next-js.vercel.app/login",
    },
    {
      id: 4,
      icon: "/crm-main.png",
      title: "CRM Registration",
      sub: "CRM Registration",
      link: "http://9v8t7tryck91047mar7jm7390k8k42rzz5vbwm5fcy37skzzlyk51rtgi7icol.erpimj.com/a1bC2dE3fG4hI5jK6lM7nO8pQ9rS0",
    },
    {
      id: 5,
      icon: "/documentation-main.png",
      title: "AGD",
      sub: "Documentation",
      link: "https://rvbypkie4gfkj9rda9uhe4ghyeir3zepn3kerzrki7mpx2n812nj6tk8hnkcd5h.erpimj.com/doc/",
    },
  ];
  return (
    <div className=" gap-[70px] flex flex-wrap lg:justify-between justify-center  items-center">
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
  );
};

export default AppCollection;
