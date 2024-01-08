export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export interface IUser {
  id: string;
  name: string;
  email: string;
  contactNo: string;
  permissions: USER_PERMISSION[];
  address: string;
  createdAt: string;
  updatedAt: string;
}

export enum USER_PERMISSION {
  category = "category",
  service = "service",
  portfolio = "portfolio",
  order = "order",
}
enum STATUS {
  pending = "pending",
  canceled = "cancled",
  completed = "completed",
}
export type IQuote = {
  id: string;
  name: string;
  serName: string;
  phone: string;
  email: string;
  pickupZip: string;
  deliveryZip: string;
  totalPices: number;
  totalWeight: number;
  question: string;
  status: STATUS;
  createdAt: string;
  updatedAt: string;
};
