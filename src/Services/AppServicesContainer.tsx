import { createContext, useContext } from 'react';
import { TodoLocalStorageDataSource } from '../Data/DataSources/Todo/TodoLocalStorageDataSource';
import { UserDataSourceImpl } from '../Data/DataSources/User/UserAPIDataSource';

const SERVICES = {
  todoRepository: new TodoLocalStorageDataSource(), // Need to inject another dep ? easy, new TodoDataSourceImpl(), no need to change in anywhere else, you just need to make sure your new dep are following the same Interface, in this case: TodoDataSource.
  userRepository: new UserDataSourceImpl() 
};

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

