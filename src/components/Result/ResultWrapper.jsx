import React from "react";
import { Outlet } from "react-router-dom";

function ResultWrapper() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ResultWrapper;
