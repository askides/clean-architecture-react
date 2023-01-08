# Clean Architecture React

This open source project is an experiment in applying clean architecture with React.

The project contains two models: User and Todo and there are four use cases: useClearTodos, useCreateTodo, useFetchTodos, and useFetchUsers.

These use cases are implemented using react-query, a library for fetching and caching data in React applications.

The Todo model has two data source implementations available: one using a REST API and the other using local storage.

There are also 3 abstract services available: Http, Notification and Logger.
