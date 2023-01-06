type WithAsyncFn<T = unknown> = () => T | Promise<T>;

type WithAsyncReturn<TData, TError> = Promise<{
  response: TData | null;
  error: TError | unknown;
}>;

export async function withAsync<TData = unknown, TError = unknown>(
  fn: WithAsyncFn<TData>
): WithAsyncReturn<TData, TError> {
  try {
    if (typeof fn !== "function") {
      throw new Error("The first argument must be a function");
    }

    const response = await fn();

    return {
      response,
      error: null,
    };
  } catch (error) {
    return {
      error,
      response: null,
    };
  }
}
