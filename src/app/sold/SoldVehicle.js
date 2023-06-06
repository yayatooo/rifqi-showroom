"use client";
import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import { getTotalPrice, rupiah } from "../utility/helper";

export default function SoldVehicle({ vehicles, deletVehicle, fetchData }) {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [vehicle, setVehicle] = useState({});

  const showModal = async (data) => {
    setVehicle(data);
    setOpenPopUp(true);
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-11/12 mx-auto ">
        <table className="min-w-full text-center">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4">Vehicle Name</th>
              <th className="py-2 px-4">Police Number</th>
              <th className="py-2 px-4">Engine Number</th>
              <th className="py-2 px-4">Additional</th>
              <th className="py-2 px-4">Total Price</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          {vehicles?.vehicles?.map((data, i) => {
            return (
              <tbody key={i}>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4">{data.name}</td>
                  <td className="py-2 px-4">{data.policeNumber}</td>
                  <td className="py-2 px-4">{data.engineNumber}</td>
                  <td className="py-2 px-4 text-green-500">
                    {rupiah(data.additionalPrice)}
                  </td>
                  <td className="py-2 px-4">{rupiah(getTotalPrice(data))}</td>
                  <td className="py-2 px-4 flex gap-x-2 justify-center">
                    <button
                      className="bg-primary-500 px-2 py-1 rounded-full text-white font-semibold"
                      onClick={() => showModal(data)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-600 px-2 py-1 rounded-full text-white font-semibold"
                      onClick={() => deletVehicle(data.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      {openPopUp && (
        <Modal
          setOpenPopUp={setOpenPopUp}
          vehicle={vehicle}
          fetchData={fetchData}
        />
      )}
    </>
  );
}
