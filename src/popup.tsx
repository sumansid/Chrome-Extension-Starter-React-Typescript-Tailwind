import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Popup = () => {
  return (
    <>
      <div className="bg-gray-500">
        <div className="text-lg text-green-500">
          React, Typescript, Tailwind Starter Code
        </div>
      </div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
