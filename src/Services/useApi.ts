import * as React from "react";
import { ERROR, PENDING, SUCCESS, useApiStatus } from "../Services/Http";

interface UseApiConfig<T> {
  initialData?: T;
}

type ApiFunction<T = unknown> = (...args: unknown[]) => T | Promise<T>;

export function useApi<TData = unknown, TError = unknown>(
  fn: ApiFunction<TData>,
  config: UseApiConfig<TData> = {}
) {
  const { initialData } = config;
  const [data, setData] = React.useState<TData | undefined>(initialData);
  const [error, setError] = React.useState<TError | unknown>();
  const { status, setStatus, ...normalizedStatuses } = useApiStatus();

  const exec = async (...args: unknown[]) => {
    try {
      setStatus(PENDING);
      const data = await fn(...args);
      setData(data);
      setStatus(SUCCESS);

      return {
        data,
        error: null,
      };
    } catch (error) {
      setError(error);
      setStatus(ERROR);

      return {
        error,
        data: null,
      };
    }
  };

  return {
    data,
    setData,
    status,
    setStatus,
    error,
    exec,
    ...normalizedStatuses,
  };
}
