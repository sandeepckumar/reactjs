import React from "react";
import spinImg from "./spinner.png";

const Spinner = () => {
  return (
    <>
      <img
        src={spinImg}
        alt="loading"
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </>
  );
};

export default Spinner;
