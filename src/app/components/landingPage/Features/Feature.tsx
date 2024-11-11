import React from "react";
import data from "../Features/FeatureList.json";

function Feature() {
  return (
    <>
      {data.map((item) => (
        item.id % 2 == 1 ? 
        <div className="flex justify-around">
          <img src={item.image} alt=" 1223" className="h-44"/>
          <div className="max-w-[50%] flex flex-col items-start justify-center">
            <div className="font-semibold text-2xl">{item.name}</div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
              possimus? Iste minus beatae veritatis, veniam, consectetur dolores
              quis distinctio voluptatum facilis accusamus hic. Quo distinctio
              dolor, voluptate dolorem doloribus dolores.
            </div>
          </div>
        </div>
        :
        <div className="flex justify-around">
          <div className="max-w-[50%] flex flex-col items-start justify-center">
            <div className="font-semibold text-2xl">{item.name}</div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
              possimus? Iste minus beatae veritatis, veniam, consectetur dolores
              quis distinctio voluptatum facilis accusamus hic. Quo distinctio
              dolor, voluptate dolorem doloribus dolores.
            </div>
          </div>
          <img src={item.image} alt=" 1223" className="h-44" />
        </div>
      ))}
    </>
  );
}

export default Feature;
