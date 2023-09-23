export type TDataAppointment = {
  _id?: string;
  NumDocument?: number;
  doctor?: string;
  name?: string;
  specialty?: string;
  state?: boolean;
  statusAppointment?: boolean;
  typeDocument?: string;
};

export type TDataAppointmentList = {
  data?: TDataAppointment[];
  updateEstado: () => Promise<void>;
  handleOpen: (_id: string, statusAppointment: boolean, action: string) => void;
  handleCloseModal: () => void;
  deleteOneDating: () => void;
  openModal: boolean;
  validateLoading: boolean;
  disabled: boolean;
  loadingUpdatedState: boolean;
  actions: string;
};

export type TEdith = {
  _id?: string;
  statusAppointment?: boolean;
};

export const IEdith: TEdith = {
  _id: "",
  statusAppointment: false,
};
