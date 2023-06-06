import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-end p-6 bg-primary shadow-md w-full">
      <input
        type="search"
        placeholder="Search..."
        className="bg-hover rounded-full p-3"
      />
    </nav>
  );
};

export default Navbar;
