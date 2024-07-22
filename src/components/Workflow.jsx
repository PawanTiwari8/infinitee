import { CheckCircle2 } from "lucide-react";

import { checklistItems } from "../constants";
import bigimg from'../assets/profile-pictures/bigimg.jpg'

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-2xl lg:text-4xl text-center mt-6 tracking-wide">
        What we are going{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          to provide
        </span>
      </h2>
      <div className="mt-12 flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={bigimg} alt="Coding" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full shadow-lg shadow-slate-100">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
