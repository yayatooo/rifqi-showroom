"use client";
import React, { useEffect, useState } from "react";
// import { getTotalPrice } from "../utility/helper";
import SoldVehicle from "./SoldVehicle";
import { toast } from "react-hot-toast";

const getVehicles = async () => {
  const res = await fetch("http://localhost:3000/api/vehicle?sold=true", {
    next: { revalidate: 0 },
  });

  const json = await res.json();
  return json;
};

const page = async () => {
  const [vehicles, setVehicles] = useState({});

  const fetchData = async () => {
    setVehicles(await getVehicles());
    console.log(vehicles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deletVehicle = async (id) => {
    const res = await fetch(`http://localhost:3000/api/vehicle/${id}`, {
      next: { revalidate: 0 },
      method: "DELETE",
    });

    const json = await res.json();
    fetchData();
    toast.success("Data Berhasil Dihapus");
    return json;
  };

  return (
    <div className="bg-white w-full py-8">
      <div className="flex justify-between p-8">
        <h1 className="font-poppins font-semibold text-2xl text-primary-500">
          Motorcycle List
        </h1>
        <button className="bg-primary-500 px-4 py-2 rounded-full text-white font-semibold">
          Add List
        </button>
      </div>
      <SoldVehicle
        vehicles={vehicles}
        deletVehicle={deletVehicle}
        fetchData={fetchData}
      />
    </div>
  );
};

export default page;
