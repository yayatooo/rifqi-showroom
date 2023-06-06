"use client";
import React, { useState } from "react";
import { list } from "./utility/data";
import classNames from "classnames";
import Link from "next/link";

const Feed = () => {
  const [selectCategory, setSelectCategory] = useState("");

  return (
    <section className="w-2/12 h-full shadow-lg bg-white fixed">
      <div className=" p-4 gap-y-4 flex flex-col">
        <h2 className="font-poppins font-semibold text-primary-500 text-2xl text-center py-8">
          Rifqi Motor
        </h2>
        <div className="py-8 flex flex-col gap-y-8">
          {list.map((data, i) => {
            return (
              <button
                className={classNames(
                  "w-full flex items-center font-poppins font-light text-gray-primary  p-4",
                  selectCategory === data.name
                    ? "bg-hover font-semibold text-primary-500 rounded-lg"
                    : ""
                )}
                onClick={() => setSelectCategory(data.name)}
                key={i}
              >
                <Link href={data.link} className="flex gap-x-3">
                  <span>
                    <img src={data.image} className="w-6" />
                  </span>
                  <span className="text-sm">{data.name}</span>
                </Link>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feed;
