import React from "react";
import Apps from "./components/Apps";
import Footer from "./components/Footer";
import Title from "./components/Title";
import { square_datas } from "./data/statis_data";
import LoadingCircle from "./components/LoadingCircle";

export default async function Home() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/app_data`, {
      next: { revalidate: 60 },
    });
    const data = await res.json();

    return (
      <React.Fragment>
        <div className=" font-display text-power h-[500px] flex flex-col  gap-[20px]  w-full relative align-top text-center">
          {square_datas.map((x) => {
            return (
              <React.Fragment key={x.key}>
                <div className="flex   h-[100px] justify-between">
                  {x.items.map((i) => {
                    const randomDelay = Math.random() * 2;
                    return (
                      <div
                        key={i.id}
                        className={`w-[100px] animate-pulse delay-[${randomDelay}] h-[100px] ${i.color}`}
                      ></div>
                    );
                  })}
                </div>
              </React.Fragment>
            );
          })}
          <Title />
        </div>
        <div className=" gap-[87px] pl-[80px] pr-[80px] pt-[40px] pb-[120px]  min-h-[700px]  flex justify-center ">
          <Apps data={data} />
        </div>
        <Footer />
      </React.Fragment>
    );
  } catch (e) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <LoadingCircle />
      </div>
    );
  }
}
