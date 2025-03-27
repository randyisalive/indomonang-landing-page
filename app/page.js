import Apps from "./components/Apps";
import Title from "./components/Title";
import {
  square_data_1,
  square_data_2,
  square_data_3,
  square_data_4,
} from "./data/statis_data";

export default function Home() {
  return (
    <div>
      <div className=" font-display text-power h-[500px] flex flex-col  gap-[20px]  w-full relative align-top text-center">
        <div className="flex   h-[100px] justify-between">
          {square_data_1.map((i) => {
            return (
              <div
                key={i.id}
                className={`w-[100px] h-[100px] ${i.color}`}
              ></div>
            );
          })}
        </div>
        <div className="flex   h-[100px] justify-between">
          {square_data_2.map((i) => {
            return (
              <div
                key={i.id}
                className={`w-[100px] h-[100px] ${i.color}`}
              ></div>
            );
          })}
        </div>
        <div className="flex  h-[100px] justify-between">
          {square_data_3.map((i) => {
            return (
              <div
                key={i.id}
                className={`w-[100px] h-[100px] ${i.color}`}
              ></div>
            );
          })}
        </div>
        <div className="flex   h-[100px] justify-between">
          {square_data_4.map((i) => {
            return (
              <div
                key={i.id}
                className={`w-[100px] h-[100px] ${i.color}`}
              ></div>
            );
          })}
        </div>
        <Title />
      </div>
      <div className=" gap-[87px] pl-[80px] pr-[80px] pt-[40px] pb-[120px]  min-h-[700px]  flex justify-center">
        <Apps />
      </div>
    </div>
  );
}
