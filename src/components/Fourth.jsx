import React from "react";
import Imag from "./result.jpeg";

const Fourth = () => {
  return (
    <div >
      <div className="container flex flex-col md:flex-row  ">
        <div className="left  md:w-2/5 ">
          <div className="py-4 px-16 sm:px-24 md:px-10  lg:my-4 lg:py-8 xl:mx-16 xl:py-8  ">
            <h1 className="text-3xl  lg:mr-12  font-bold"> Through Finacial Research</h1>
            <p className="py-4 text-gray-500">
              Photon streamlines due diligence by curating tailored reports
              focused on your tracked stocks and topics.
            </p>
            <p className="text-gray-500">
              Photon scours the web for real-time signals on your chosen
              equities, facilitating quick access to essential information
              through questions or searches. It also provides insights from SEC
              filings, earnings calls, and alternative financial datasets.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 my-8 mx-40 sm:mx-48 md:mx-0 rounded-xl place-content-center">Request Demo</button>
          </div>
          
        </div>
        <div className="right   py-4 xl:ml-16 lg:m-8">
          <img  src={Imag} alt="photo" ></img>
        </div>
      </div>
      
    </div>
  );
};

export default Fourth;
