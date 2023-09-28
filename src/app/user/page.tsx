"use client";
import { ProtectedRoute } from "@/routes/RouteProtected";
import React from "react";

export const Page = () => {
  return (
    <ProtectedRoute>
      <div>Page</div>
    </ProtectedRoute>
  );
};

export default Page;
