"use client";
import axios from "axios";
import { useForm } from "react-hook-form";
import React from "react";
import { toast } from "react-hot-toast";
// import inputForm from "./inputForm";

const page = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post("/api/vehicle", {
        name: data.name,
        policeNumber: data.policeNumber,
        engineNumber: data.engineNumber,
        firstPrice: data.firstPrice,
        servicePrice: data.servicePrice,
        additionalPrice: data.additionalPrice,
      })
      .then((res) => {
        console.log(res);
        reset();
        toast.success("Data Berhasil Dimasukan");
        // toast
      });
  };

  return (
    <div className="bg-white w-full py-8">
      <div className="flex justify-start p-8">
        <h1 className="font-poppins font-semibold text-2xl text-primary-500">
          Input Data Vehicle
        </h1>
      </div>
      <div className="max-w-11/12 mx-auto bg-white px-8 py-4 rounded-lg">
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
            />
          </div>

          <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
