# Clean Architecture React

This project is an experiment in applying clean architecture with React.

## Important

Inside a React context, Clean Architecture will always be some kind of adaption. The key is separation of concerns and decoupling dependencies. In addition, the project originated as an example for personal study, if you want to make a suggestion go ahead and PR!

## Architecture

### Models

- User
- Todo
  
### Repositories

- TodoRepository
- UserRepository

### DataSources

- User
  - UserAPIDataSource (From a REST API)
- Todo
  - TodoAPIDataSource (From a REST API)
  - TodoLocalStorageDataSource (From Browser Local Storage)
  
### UseCases
  
- useClearTodos
- useCreateTodo
- useFetchTodos
- useFetchUsers

These use cases are implemented using react-query, a library for fetching and caching data in React applications.

The Todo model has two data source implementations available: one using a REST API and the other using local storage.

### Services

- Http (Abstraction over axios)
- Notification (Abstraction over alert)
- Logger (Abstraction over console.log)
