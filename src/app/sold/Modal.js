"use client";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

// const getVehicle = async (id) => {
//   const res = await fetch(`http://localhost:3000/api/vehicle/${id}`, {
//     next: { revalidate: 0 },
//   });

//   const json = await res.json();
//   return json.vehicle;
// };

const Modal = async ({ setOpenPopUp, vehicle, fetchData }) => {
  console.log(vehicle);

  // const vehicle = await getVehicle(vehicleId);

  const form = useForm({
    defaultValues: {
      name: vehicle.name,
      policeNumber: vehicle.policeNumber,
      engineNumber: vehicle.engineNumber,
      firstPrice: vehicle.firstPrice,
      servicePrice: vehicle.servicePrice,
      additionalPrice: vehicle.additionalPrice,
      statusSold: vehicle.statusSold,
    },
  });

  const { register, handleSubmit } = form;

  const onSubmit = (data) => {
    axios
      .put(`/api/vehicle/${vehicle.id}`, {
        name: data.name,
        policeNumber: data.policeNumber,
        engineNumber: data.engineNumber,
        firstPrice: data.firstPrice,
        servicePrice: data.servicePrice,
        additionalPrice: data.additionalPrice,
        statusSold: data.statusSold,
      })
      .then((res) => {
        fetchData();
        setOpenPopUp(false);
        toast.success("Data Berhasil Diupdate");
      });
  };

  const handleInputChange = (e) => {
    // setFormData((prevFormData) => ({
    //   ...prevFormData,
    //   [e.target.name]: e.target.value,
    // }));
  };

  return (
    <section className=" fixed inset-0 z-40 flex items-center justify-center bg-gray-500 bg-opacity-90 backdrop-blur-sm">
      <div className="w-8/12 bg-white rounded-lg shadow-lg p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Nama Motor
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Masukan Nama Motor"
              {...register("name")}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Nomor Polisi
            </label>
            <input
              type="text"
              id="policeNumber"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Masukan Nomor Polisi"
              {...register("policeNumber")}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Nomor Rangka
            </label>
            <input
              type="text"
              id="engineNumber"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Masukan Nomor Rangka"
              {...register("engineNumber")}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Harga Modal
            </label>
            <input
              type="number"
              id="firstPrice"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Masukan Harga Modal"
              {...register("firstPrice")}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Harga Perbaikan
            </label>
            <input
              type="number"
              id="servicePrice"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Masukan Harga Perbaikan"
              {...register("servicePrice")}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Harga Keuntungan
            </label>
            <input
              type="number"
              id="additionalPrice"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Masukan Harga Keuntungan"
              {...register("additionalPrice")}
              onChange={handleInputChange}
            />
          </div>
          <div className=" flex my-4 items-center">
            <label className="block text-gray-700 font-medium">Terjual</label>
            <input
              type="checkbox"
              id="additionalPrice"
              className="w-5 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              {...register("statusSold")}
              onChange={handleInputChange}
            />
          </div>
          <div className=" flex gap-x-4">
            <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600">
              Submit
            </button>
            <button
              type="button"
              className="bg-red-500 text-white font-medium py-2 px-4 rounded hover:bg-red-600"
              onClick={() => {
                setOpenPopUp(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Modal;
