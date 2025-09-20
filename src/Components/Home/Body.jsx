import React from "react";
import Globe from "./globe.png"; 

const Body = () => {
  return (
    <div>
        <div className="pt-8 pb-4 flex flex-col justify-center items-center">
            <div className="bg-transparent w-36 hover:animate-spin">
                <img src={Globe} alt="Globe"/>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center m-3">
            <h1 className="wnFont text-4xl text-center font-bold">WikiNations</h1>
            <p className="tiFont text-3xl text-center">An information directory of nations</p>
        </div>
    </div>
  );
};

export default Body;
