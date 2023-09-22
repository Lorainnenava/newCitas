import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IDating, ITypeDocument, IUser } from "./types";

// Define a service using a base URL and expected endpoints
export const RestApi = createApi({
  reducerPath: "RestApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  tagTypes: ["refreshDataDating", "refreshDataUpdate"],
  keepUnusedDataFor: 1,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    /**
     * Consultas Para Usuarios
     */
    getUserChecked: builder.mutation<IUser, Partial<IUser>>({
      query: (dataForm) => ({
        url: "/usuario",
        method: "PATCH",
        body: dataForm,
      }),
    }),
    //obetner usuario logueado
    getOneUser: builder.query({
      query: (token) => ({
        url: "/usuario/userLogueado",
        method: "GET",
        headers: { "Content-Type": "application/json", authorization: token },
      }),
    }),
    //obtener usuarios
    getUsers: builder.query({
      query: (token) => ({
        url: "/usuario",
        headers: { "Content-Type": "application/json", authorization: token },
        method: "GET",
      }),
    }),

    //obtener pacientes
    getPatients: builder.query({
      query: (token) => ({
        url: "/paciente",
        headers: { "Content-Type": "application/json", authorization: token },
        method: "GET",
      }),
    }),

    //obtener un paciente
    getOnePatient: builder.query({
      query: ({ _id, token }) => ({
        url: `/paciente/${_id}`,
        headers: { "Content-Type": "application/json", authorization: token },
        method: "GET",
      }),
    }),

    // crear usuario
    PostUserCreated: builder.mutation({
      query: ({ newUser, token }) => ({
        url: "/usuario",
        method: "POST",
        headers: { "Content-Type": "application/json", authorization: token },
        body: newUser,
      }),
    }),
    // crear paciente
    PostPatientCreated: builder.mutation({
      query: ({ newPatient, token }) => ({
        url: "/paciente/created",
        method: "POST",
        headers: { "Content-Type": "application/json", authorization: token },
        body: newPatient,
      }),
    }),
    // obtener tipo de documento
    getTypeDocument: builder.query<Array<ITypeDocument>, ITypeDocument>({
      query: () => ({
        url: "/documento",
        method: "GET",
      }),
    }),
    /**
     * Consultas Para Citas
     */
    getDating: builder.query<IDating[], string>({
      query: (token) => ({
        url: "/citas",
        headers: { "Content-Type": "application/json", authorization: token },
        method: "GET",
      }),
      providesTags: ["refreshDataDating"],
    }),
    // crear cita
    PostDoctorAppointmentCreated: builder.mutation({
      query: ({ newDoctorAppointment, token }) => ({
        url: "/citas",
        method: "POST",
        headers: { "Content-Type": "application/json", authorization: token },
        body: newDoctorAppointment,
      }),
    }),
    // actualizar estado de citas
    UpdateStateDating: builder.mutation({
      query: ({ _id, dataState, token }) => {
        return {
          url: `/citas/status/${_id}`,
          method: "PUT",
          headers: { "Content-Type": "application/json", authorization: token },
          body: { statusAppointment: dataState },
        };
      },
      invalidatesTags: ["refreshDataDating", "refreshDataUpdate"],
    }),
    // eliminar citas
    DeleteDating: builder.mutation({
      query: ({ _id, token }) => ({
        url: `/citas/delete/${_id}`,
        method: "DELETE",
        headers: { "Content-Type": "application/json", authorization: token },
      }),
      invalidatesTags: ["refreshDataDating", "refreshDataUpdate"],
    }),
    // obtener doctores
    getDoctor: builder.query({
      query: (token) => ({
        url: "/doctor",
        headers: { "Content-Type": "application/json", authorization: token },
        method: "GET",
      }),
    }),
    //obtener especialidades
    getSpecialty: builder.query({
      query: (token) => ({
        url: "/especialidad",
        headers: { "Content-Type": "application/json", authorization: token },
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUsersQuery,
  useGetDoctorQuery,
  useGetDatingQuery,
  useGetPatientsQuery,
  useGetSpecialtyQuery,
  useGetOnePatientQuery,
  useLazyGetOneUserQuery,
  useDeleteDatingMutation,
  useGetTypeDocumentQuery,
  useLazyGetOnePatientQuery,
  useGetUserCheckedMutation,
  usePostUserCreatedMutation,
  useUpdateStateDatingMutation,
  usePostPatientCreatedMutation,
  usePostDoctorAppointmentCreatedMutation,
} = RestApi;
