import React from "react";
import { Outlet } from "react-router-dom";

function ProfileWrapper() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ProfileWrapper;
