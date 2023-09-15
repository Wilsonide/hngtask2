## Available Endpoints

Below is a list of the available endpoints in this API, along with their descriptions and supported HTTP methods.

### Endpoint 1: /api

- **Description**: This endpoint returns the status code, created resource and a message
- **HTTP Methods**: `POST`

- **Example Usage**:

  - POST: `/api`

- **Request Format**:
  - For POST requests:
    ```json
    {
      "name": "Wilson"
    }
    ```
- **Response Format**:
  - Status Code: 200 OK
  - Response Body:
    ```json
    {
      "statusCode": 200,
      "message": "successfully added person",
      "data": {
        "id": 1,
        "name": "Wilson"
      }
    }
    ```

### Endpoint 2: /api

- **Description**: This endpoint returns the status code, list of all created resource and a message
- **HTTP Methods**: `GET` - **Example Usage**: - GET: `/api`

- **Request Format**:
  - For GET requests:
- **Response Format**:
  - Status Code: 200 OK
  - Response Body:
    ```json
    [
      {
        "statusCode": 200,
        "message": "successfully retrieved person",
        "data": {
          "id": 1,
          "name": "Wilson"
        }
      },
      {
        "statusCode": 200,
        "message": "successfully retrieved person",
        "data": {
          "id": 2,
          "name": "Abudon"
        }
      }
    ]
    ```

### Endpoint 3: /api/user_id

- **Description**: This endpoint returns the status code, created resource and a message
- **HTTP Methods**: `GET`

- **Example Usage**:

  - GET: `/api/user_id`

- **Request Format**:

  - For GET requests:
    `user_id: "Wilson"`

- **Response Format**:
  - Status Code: 200 OK
  - Response Body:
    ```json
    {
      "statusCode": 200,
      "message": "successfully retrieved person",
      "data": {
        "id": 1,
        "name": "Wilson"
      }
    }
    ```

### Endpoint 4: /api/user_id

- **Description**: This endpoint returns the status code, created resource and a message
- **HTTP Methods**: `PUT`

- **Example Usage**:

  - PUT: `/api/user_id`

- **Request Format**:

  - For PUT requests:

  `user_id: "Wilson"`

  ```json
  {
    "name": "Ronaldo"
  }
  ```

- **Response Format**:
  - Status Code: 200 OK
  - Response Body:
    ```json
    {
      "statusCode": 200,
      "message": "successfully updated person",
      "data": {
        "id": 1,
        "name": "Ronaldo"
      }
    }
    ```

### Endpoint 5: /api/user_id

- **Description**: This endpoint returns the status code, created resource and a message
- **HTTP Methods**: `DELETE`

- **Example Usage**:

  - DELETE: `/api/user_id`

- **Request Format**:

  - For DELETE requests:

  `user_id: "Wilson"`

- **Response Format**:
  - Status Code: 200 OK
  - Response Body:
    ```json
    {
      "statusCode": 200,
      "message": "successfully deleted person",
      "data": {}
    }
    ```
