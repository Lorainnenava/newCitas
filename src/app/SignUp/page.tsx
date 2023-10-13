"use client"
import React from "react";
import ProtectRoutes from "../routes/ProtectRoutes";

export const SignUp = () => {

  return (
    <ProtectRoutes>
      <div>register</div>
      </ProtectRoutes>
  );
};

export default SignUp