import { createContext, useContext } from 'react';

const SERVICES = {};

const AppServicesContainer = createContext<typeof SERVICES | undefined>(undefined);

const AppServicesContainerProvider = ({ children }: { children: JSX.Element }) => (
  <AppServicesContainer.Provider value={SERVICES}>{children}</AppServicesContainer.Provider>
);

const useAppServicesContainer = () => {
  const ctx = useContext(AppServicesContainer);

  if (!ctx)
    throw new Error(
      "It's seems you've tryied to use useAppServicesContainer hook outside <AppServicesContainerProvider />"
    );

  return ctx;
};

export { useAppServicesContainer, AppServicesContainerProvider };
