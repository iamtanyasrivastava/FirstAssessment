import React from "react";

const Eight = () => {
  return (
    <div class="container-form flex flex-row mx-16">
      <div className="left w-3/5">
        <h1 className="text-5xl px-8 pt-12 font-bold ">AI Platform for <br></br> Enhancing<br></br> Productivity</h1>
      <p  className="py-8 px-8 text-md ">Photon delivers key insights, leveraging a blend of generative AI 
and classical machine learning techniques for smart search, 
question-answering, customizable financial report creation, 
summarizations, early warnings, and sentiment + trend analysis</p>
      </div>
      <div className="right w-2/5 ml-32  flex flex-col py-8 px-8 rounded-md shadow-xl">
        <h1 className="text-xl font-bold">Request for a Demo!</h1>
        <h2 className="text-lg">Please fill the below details for the product demo</h2>
        <h1 className="font-semibold my-4">Full Name</h1>
        <input class="border-2 rounded-md px-4 py-2" type="text" placeholder="Enter Full Name "></input>
        <h1 className="font-semibold my-4">Email Address</h1>
        <input class="border-2 rounded-md  px-4 py-2" type="text" placeholder="Enter your Email Address"></input>
      <button className="text-white p-4 my-4 w-fit bg-blue-900 rounded-md">Request Demo</button>
      </div>
    </div>
  );
};

export default Eight;
