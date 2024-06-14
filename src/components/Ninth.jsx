import React from "react";
import logoimg from './download.png'

const Ninth = () => {
  return (
    <div className="flex flex-row py-16  mx-8 shadow-2xl my-8 rounded-xl text-left font-semibold">
      <div className="firstrow grid  grid-col-2 w-1/5 py-2-2 mx-8">
      <div className="flex flex-row">
      <img src={logoimg} alt="logoimg"></img>
      <h1 className="text-xl">Photon Insights </h1>
      </div>
      
        <p className="py-4">
          Photon Insights delivers key insights, leveraging generative AI for
          summarizations, early warnings, and trend analysis.
        </p>
      </div>

      <div className="company w-1/5 ">
        <ul >
          <li className="py-2">Company</li>
          <li className="py-2">Home</li>
          <li className="py-2">About</li>
          <li className="py-2"> Contact Us</li>
          <li className="py-2">Blogs</li>
        </ul>
      </div>

      <div className="Products w-1/5">
        <ul>
          <li className="py-2">Product</li>
          <li className="py-2">Document Insights</li>
          <li className="py-2">Topic Insights</li>
          <li className="py-2">Company Analysis</li>
          <li className="py-2">CIR</li>
        </ul>
      </div>

      <div className="Products">
        <ul>
          <li className="py-2">Connect with us </li>
          <li className="py-2">photon@photoinsughts.com</li>
          <li className="py-2">100 Front Street Suite 1111, west Conshohocken , pennsylvan</li>
          <li  className="py-2">+1 609-802-2889</li>
        </ul>
      </div>


    

    </div>
  );
};

export default Ninth;
