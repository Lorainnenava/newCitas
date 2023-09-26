import { createAsyncThunk } from "@reduxjs/toolkit";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

/**
 * usuario que se esta intentando loguear
 */
export const getUserChecked = createAsyncThunk(
  "/usuario",
  async (data, thunkAPI) => {
    try {
      if (process.env.BASE_URL) {
        const response = await axios.patch(process.env.BASE_URL, data);
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }
);
