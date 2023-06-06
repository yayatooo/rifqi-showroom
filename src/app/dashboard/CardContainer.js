"use cient";
import React from "react";
import vehicle from "../models/vehicle";
import { rupiah } from "../utility/helper";

const CardContainer = async () => {
  const sumAdditionalSold = await vehicle.getSumAdditionalSold();
  const count = await vehicle.getCount();
  const countSold = await vehicle.getCountSold();
  const countUnSold = await vehicle.getCountUnsold();

  return (
    <>
      <section className="w-full px-8 flex gap-x-6">
        <div className="w-3/12 rounded-lg p-6 shadow-lg bg-primary-500">
          <h3 className="text-white text-sm font-poppins font-semibold">
            Total Jumlah Motor
          </h3>
          <h1 className="text-3xl text-white font-poppins font-semibold">
            {count}
          </h1>
        </div>
        <div className="w-3/12 rounded-lg p-6 shadow-lg bg-white">
          <h3 className="text-black text-sm font-poppins font-semibold">
            Jumlah Motor Laku
          </h3>
          <h1 className="text-3xl text-black font-poppins font-semibold">
            {countSold}
          </h1>
        </div>
        <div className="w-3/12 rounded-lg p-6 shadow-lg bg-primary-500">
          <h3 className="text-white text-sm font-poppins font-semibold">
            Jumlah Motor Belum Laku
          </h3>
          <h1 className="text-3xl text-white font-poppins font-semibold">
            {countUnSold}
          </h1>
        </div>
        <div className="w-3/12 rounded-lg p-6 shadow-lg bg-white">
          <h3 className="text-black text-sm font-poppins font-semibold">
            Jumlah Keuntungan
          </h3>
          <h1 className="text-xl text-black font-poppins font-semibold">
            {rupiah(sumAdditionalSold)}
          </h1>
        </div>
      </section>
    </>
  );
};

export default CardContainer;
