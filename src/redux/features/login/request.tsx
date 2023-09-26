import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const base = "http://localhost:8000";

/**
 * usuario que se esta intentando loguear
 */
export const getUserChecked = createAsyncThunk(
  "/usuario/getUserChecked",
  async (dataForm: object) => {
    try {
      const response = await axios.patch(`${base}/usuario`, dataForm);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
