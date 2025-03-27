import React from "react";
import { Link } from "react-router-dom";
import TitleComponent from "../components/TitleComponent";
import AppCollection from "../components/AppCollection";

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

  return (
    <>
      <div className=" font-display text-power h-[500px] flex flex-col  gap-[20px]  w-full relative align-top text-center">
        <div className="flex   h-[100px] justify-between">
          {square_data_1.map((i) => {
            return <div className={`w-[100px] h-[100px] ${i.color}`}></div>;
          })}
        </div>
        <div className="flex   h-[100px] justify-between">
          {square_data_2.map((i) => {
            return <div className={`w-[100px] h-[100px] ${i.color}`}></div>;
          })}
        </div>
        <div className="flex  h-[100px] justify-between">
          {square_data_3.map((i) => {
            return <div className={`w-[100px] h-[100px] ${i.color}`}></div>;
          })}
        </div>
        <div className="flex   h-[100px] justify-between">
          {square_data_4.map((i) => {
            return <div className={`w-[100px] h-[100px] ${i.color}`}></div>;
          })}
        </div>
        <TitleComponent />
      </div>
      <div className=" gap-[87px] pl-[80px] pr-[80px] pt-[40px] pb-[120px]  min-h-[700px]  flex justify-center">
        <AppCollection />
      </div>
    </>
  );
};

export default Home;
