import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * usuario que se esta intentando loguear
 */
export const userLogued = createAsyncThunk(
  "/usuario/userLogued",
  async (token: string) => {
    try {
      const response = await axios.get(
        `${process.env.BASE_URL}/usuario/userLogueado`,
        {
          headers: {
            "Content-type": "application/json",
            authorization: token,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
