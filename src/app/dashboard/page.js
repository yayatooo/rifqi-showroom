import React from "react";
import CardContainer from "./cardContainer";

const page = async () => {
  return (
    <>
      <div className="w-full h-full py-8 mx-auto">
        <div className="flex justify-between p-8">
          <h1 className="font-poppins font-semibold text-2xl text-primary-500">
            Dashboard
          </h1>
        </div>
        <CardContainer />
      </div>
    </>
  );
};

export default page;
