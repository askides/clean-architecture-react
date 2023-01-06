export const useNotification = () => {
  return {
    success: (message: string) => alert(message),
    error: (message: string) => alert(message),
  };
};
