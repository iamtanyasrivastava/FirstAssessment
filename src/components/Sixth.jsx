import React from "react";
import Imag from './imag.jpeg'

const Sixth = () => {
  return (
    <div className="container flex flex-row ">
      <div className="left  grid-cols-2 flex flex-row w-4/5  mx-16">
        <div className="info w-2/5 px-4 my-16 pt-11 ml-6">
          <h1 className="text-3xl font-bold">Holistic View of Equities (Public and Private)</h1>
          <p>
            Keep tabs on the attributes of your investments you are interested
            in from both public and private data sources
          </p>
          <ul className="text-md font-semibold pt-32">
            <li>Customizable Report Generation</li>
            <li>Multi -Source Integration</li>
            <li>Actionable Insights Generation</li>
          </ul>
        </div>

        <div className="pt-16">
            <img className="ml-12  border-2 border-black rounded-xl" src={Imag} alt="imageinfo"></img>
        </div>
      </div>

      <div className="right bg-blue-400 mt-16 mr-8 rounded-xl border-2 mb-8">
    <h1 className="text-3xl font-bold p-6">Powered by <br></br>
Proprietary <br></br>
Technology</h1>
<p className="pt-64 px-5 "> Harness our Machine Learning tech for 
swift, actionable decision-making 
insights.</p>

      </div>
    </div>
  );
};

export default Sixth;
