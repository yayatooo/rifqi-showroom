import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const InputForm = () => {
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
      });
  };

  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
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

          <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600">
            Submit
          </button>
          <button
            className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => reset}
          >
            Reset
          </button>
        </form>
      </div>
    </>
  );
};

export default InputForm;
