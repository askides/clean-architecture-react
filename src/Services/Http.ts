import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import * as React from "react";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

type HTTPRequestConfig = AxiosRequestConfig;

const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: HTTPRequestConfig = {}) => {
      return axios.get<T>(url, config);
    },
    delete: <T>(url: string, config: HTTPRequestConfig = {}) => {
      return axios.delete<T>(url, config);
    },
    put: <T>(url: string, body: unknown, config: HTTPRequestConfig = {}) => {
      return axios.put<T>(url, body, config);
    },
    patch: <T>(url: string, body: unknown, config: HTTPRequestConfig = {}) => {
      return axios.patch<T>(url, body, config);
    },
    post: <T>(url: string, body: unknown, config: HTTPRequestConfig = {}) => {
      return axios.post<T>(url, body, config);
    },
  };
};

export type ApiStatus = "IDLE" | "PENDING" | "SUCCESS" | "ERROR";

export const Http = api(instance);
export const IDLE: ApiStatus = "IDLE";
export const PENDING: ApiStatus = "PENDING";
export const SUCCESS: ApiStatus = "SUCCESS";
export const ERROR: ApiStatus = "ERROR";

export const defaultApiStatuses: ApiStatus[] = [
  "IDLE",
  "PENDING",
  "SUCCESS",
  "ERROR",
];

export type ApiStatuses = Record<ApiStatus, ApiStatus>;

export const apiStatus: ApiStatuses = {
  IDLE,
  PENDING,
  SUCCESS,
  ERROR,
};

type Statuses = Record<`is${Capitalize<Lowercase<ApiStatus>>}`, boolean>;

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const createStatuses = (currentStatus: ApiStatus): Statuses => {
  const statuses = {} as Statuses;

  for (const status of defaultApiStatuses) {
    const normalizedStatus = capitalize(status.toLowerCase());
    const normalizedStatusKey = `is${normalizedStatus}` as keyof Statuses;
    statuses[normalizedStatusKey] = status === currentStatus;
  }

  return statuses;
};

export const useApiStatus = (currentStatus: ApiStatus = IDLE) => {
  const [status, setStatus] = React.useState<ApiStatus>(currentStatus);
  const statuses = React.useMemo(() => createStatuses(status), [status]);

  return {
    status,
    setStatus,
    ...statuses,
  };
};
