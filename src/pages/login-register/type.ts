export enum UserType {
  PATIENT = "patient",
  DOCTOR = "doctor",
}

export type FormikLoginFormType = {
  userName: string;
  password?: string;
  confirmPassword?: string;
};

export type userTypeDto = {};
