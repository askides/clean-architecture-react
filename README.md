# Clean Architecture Experiment

## Models

- Todo
- User

## UseCases

### GetTodos

Obtain the Todo list from an API.

### CreateTodo

Simulate a creation of a new Todo, with a response handler using the notification service.

### GetUsers

Obtain the User list from an API. This use case has an additional layer using a DTO to enhance API response flexibility.

## Services

- Http (Abstraction of API Client, currently using axios).
- Notification (Abstraction for Notifications, currrently using alerts).
