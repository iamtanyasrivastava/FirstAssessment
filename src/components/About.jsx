import React from "react";

const About = () => {
  return (
    <div>
    <div className=" my-8 w-3/5 xl:mx-72 md:mx-48 lg:mx-54 sm:mx-36 mx-36 sm:w-3/5 md:w-3/5 lg:w-3/5 xl:w-3/5 ">
      <h1 className=" font-bold mx-4 md:text-3xl lg:text-5xl xl:text-6xl sm:text- ">
        Optimize and Elevate your Financial Research with AI
      </h1>
      <div className="py-4 flex">
        <ul className=" flex flex-row space-x-8 text-[5px] mx-8 sm:text-[5px] md:text-[8px] lg:text-[12px] text-blue-800">
            <li >Intelligence on your Internal Data</li>
            <li>Auto-Generated Reports</li>
            <li>Realtime Web Based Snapshot Research</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default About;
