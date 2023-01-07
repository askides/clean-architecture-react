# Clean Architecture Experiment

Currently just a try of implementing clean architecture in a React application.

## Models

- Todo
- User

## UseCases

### GetTodos

Obtain the Todo list from an API. (Using a React-Query Query)

### CreateTodo

Simulate a creation of a new Todo, with a response handler using the notification service. (Using a React-Query Mutation)

### GetUsers

Obtain the User list from an API. This use case has an additional layer using a DTO to enhance API response flexibility. (Using a custom handmade hook useApi).

## Services

- Http (Abstraction of API Client, currently using axios).
- Notification (Abstraction for Notifications, currrently using alerts).
