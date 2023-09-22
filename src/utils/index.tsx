import { ArgVal } from "./types.d";

export const isNumericValidation = (value: ArgVal): boolean =>
  !!(
    value !== null &&
    /^[0-9]+$/g.test(value as string) === false &&
    value !== "" &&
    value !== undefined &&
    value !== null
  );

/**
 * Validad campos requeridos
 */
export const validateRequired = (field?: boolean, required?: boolean) => {
  let color: string = "";
  if (field && required) {
    color = "#d32f2f";
  } else {
    color = "";
  }
  return color;
};

/**
 * validar selects requeridos
 */
export const validateRequiredSelect = (field?: boolean, required?: boolean) => {
  let color: boolean = false;
  if (field && required) {
    color = true;
  } else {
    color = false;
  }
  return color;
};
