"use client"
import React from "react";
import ProtectRoutes from "../routes/ProtectRoutes";

export const register = () => {

  return (
    <ProtectRoutes>
      <div>register</div>
      </ProtectRoutes>
  );
};

export default register