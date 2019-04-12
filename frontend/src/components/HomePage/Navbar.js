import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Link to="/hair">Hair</Link>{" "}
      <Link to="/">Home</Link>{" "}
      <Link to='/provider'>Hair Provider</Link>{" "}
    </>
  );
};
