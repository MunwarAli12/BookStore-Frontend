
# BookStore Application

## Problem Statement,

- Assume as a library clerk, encountered challenges in manually managing and recording data. Therefore, I am seeking a system that can efficiently handle book management tasks. Specifically, I need to input books into the system with four key details: their ID, author, title, and number of pages. Should a book be reissued with the same ID, it is crucial that the system allows for updates to the author, title, and page count. Additionally, in cases where a book is lost, I require the ability to promptly delete it from the records using its unique ID.
  
- Additionally, when users ask for books by a certain author, it's important that the system quickly gives them a full list of those books. By making these steps easier, the system wants to make managing books simpler, keep really good records, and make customers even happier.
  
- In this overview I've developed an end-to-end application where user actions on the frontend trigger backend requests. The backend processes these requests, updates the database as needed, and returns the results to the frontend, seamlessly updating the interface. This system streamlines operations and enhances user experience.

## WorkFlow

- I have developed a full-stack web application called the "REST API Book Application" that efficiently handles book data. This application encompasses essential parameters such as book ID, author name, number of pages, and title. It seamlessly integrates CRUD (Create, Read, Update, Delete) operations, providing a streamlined approach to managing HTTP requests.

- Utilizing MongoDB as the database backend, the application ensures smooth execution of all operations. It consistently delivers appropriate HTTP status codes and responses to clients, ensuring robustness and efficiency in managing and manipulating server objects via the REST API.

- Below is an overview of the frontend and backend components, along with instructions on how to set up and run the application. For Backend Source Code, click [here](https://github.com/MunwarAli12/BookStore).

## Tech Stack,

- `Java`
- `Frontend Framework` `React`
- `Backend Framework:` `Spring Boot`
- `Databases:` `MongoDb` 
- `Tools:` `Postman` `VsCode`

### API Endpoints,

```bash
Crud Operator Backend - http://localhost:8080/ Frontend - http://localhost:3000/
```

| Method   | Endpoint              | Description              |
|----------|-----------------------|--------------------------|
| `GET`    | `/api/books`          | Retrieve all books.      |
| `GET`    | `/api/books/{id}`     | Retrieve a book by ID.   |
| `POST`   | `/api/books`          | Add a new book.          |
| `PUT`    | `/api/books/{id}`     | Update an existing book. |
| `DELETE` | `/api/books/{id}`     | Remove a book.           |

## NOTE
> The frontend interacts with the backend through HTTP requests. To ensure a seamless user experience, error handling mechanisms are implemented both on the frontend and backend. Additionally, proper connectivity between the frontend and backend is done by adjusting CORS settings within the controller class in the backend.


## Frontend Part Overview,

### Technologies Used:

- `React.js for building the user interface` `Axios for handling HTTP requests`
`React Router for client-side routing`

#### components:

- `AddBook:` Allows users to add new books to the database.
- `DeleteBook:` Enables users to delete books by their unique ID.
- `GetBookById:` Retrieves book details based on the provided ID.
- `GetBooksByAuthor:` Fetches books written by a specific author.
- `UpdateBook:` Allows users to update book details.

#### HOME Page,

``` javascript
http://localhost:3000/
```
![image](https://github.com/MunwarAli12/BookStore-Frontend/assets/126280146/1f1c60a1-d2ce-4675-8179-ef142ba9b7cb)

#### ADD BOOK Page,

#### 
   ``` javascript
       http://localhost:3000/AddBook
   ```
- Upon submission of the details via the web UI, the backend endpoint is triggered, leading to the storage of the book details in the MongoDB database.

![image](https://github.com/MunwarAli12/BookStore-Frontend/assets/126280146/b5b785ca-00b8-45e9-8682-810b1b9cfdda)

- The stored book details can be viewed in the database.

![image](https://github.com/MunwarAli12/BookStore-Frontend/assets/126280146/7ffcd59d-d00b-4e8d-a5b5-0068a4e51ea4)


#### DELETE BOOK By Id,

``` javascript
http://localhost:3000/DeleteBook
```
- Upon entering all the details, the backend API triggers the deletion of the corresponding ID.

![image](https://github.com/MunwarAli12/BookStore-Frontend/assets/126280146/927fae5e-a22f-4b95-aea9-39d85184eae7)

- The book with ID 45 has been successfully deleted.

![image](https://github.com/MunwarAli12/BookStore-Frontend/assets/126280146/aa767ef8-b1fa-4574-9d0d-bde7142c1786)



#### Get Book Details By Id,

``` javascript
http://localhost:3000/GetBookById
```
- Upon entering all the necessary information, the GET mapping triggers the endpoint, retrieving the book information.
  
![image](https://github.com/MunwarAli12/BookStore-Frontend/assets/126280146/9823d831-0e2a-4427-aceb-241cf79079ce)


#### Update Book Details by Id,

```javascript
http://localhost:3000/UpdateBook
```

![image](https://github.com/MunwarAli12/BookStore-Frontend/assets/126280146/57c9a287-578d-41b5-945c-32d499fb3c51)

- In this scenario, upon submitting the modified parameters for the author, title, and pages, the "PUT" mapping triggers the endpoint, facilitating the update process. For instance, if we wish to change the title of the book with ID 788 to "Bahubali 2", the modification is executed accordingly.

![image](https://github.com/MunwarAli12/BookStore-Frontend/assets/126280146/dcf0aadc-e6c9-40d9-8d0c-1446bde56a6c)

![image](https://github.com/MunwarAli12/BookStore-Frontend/assets/126280146/82727de0-db90-4318-8448-ec945e24f270)



## Backend Part Overview,

### Technologies Used:
- `Spring Boot for creating RESTful APIs` `MongoDB for data storage` `Spring Data MongoDB for database operations`

#### Components:

- `BookController:` Handles HTTP requests related to book operations.
- `BookService:` Implements business logic for book operations.
- `BookRepository:` Interface for database CRUD operations.
- `Book:` Model class representing a book entity.

##### @PostMapping Example Response and Output,
```javascript
POST http://localhost:8080/api/book
{
  "id":7887,
  "title":"Hp",
  "author": "beep",
  "pages": 780
} 
```
```javascript
Status: 201 Created Size: 19 Bytes Time: 9 ms
Hurray! Book saved!
```

##### @GetMapping  Example Response and Output for All Saved Books In Database,
``` javascript
GET http://localhost:8080/api/books
```
```javascript
Status: 200k Size: 245 Bytes Time: 19 ms
Hurray! Book saved!
[
  {
    "id": 80,
    "title": "munwa88r ali",
    "author": "Na savu nenu sasta ",
    "pages": 2022
  },
  {
    "id": 78,
    "title": "asli jod",
    "author": null,
    "pages": 0
  },
  {
    "id": 787,
    "title": "asli jod",
    "author": "hussain",
    "pages": 780
  },
  {
    "id": 7887,
    "title": "Hp",
    "author": "beep",
    "pages": 780
  }
]
```

##### @GetMapping  Example Response and Output for using Id ,
``` javascript
GET http://localhost:8080/api/books/7887
```
```javascript
Status: 200 OK Size: 52 Bytes Time: 7 ms
{
  "id": 7887,
  "title": "Hp",
  "author": "beep",
  "pages": 780
}
```

##### @DeleteMappingg Example Response and Output,

```javascript
DELETE http://localhost:8080/api/books/{id} eg:id-787,
{
  "id":787,
  "title": "asli jod",
  "author": "hussain",
  "pages": 780
 }
```
```javascript
Status: 200 OK Size: 38 Bytes Time: 6 ms
Book with ID 787 deleted successfully!
```

##### @PutMapping Example Response and Output,

```javascript
PUT http://localhost:8080/api/books/{id} eg:id-80,
{
    "id": "80",
    "title": "The Courage",
    "author": "Munwar Ali",
    "pages": 202
  }

```
```javascript
Status: 200 OK Size: 37 Bytes Time: 11 ms
Book with ID 80 updated successfully!
```
## NOTE:
> For testing purposes, Postman was employed to interact with the API. The operations underwent testing utilizing the endpoints hosted at `localhost:/8080/...`. Snippets of each Backend operation are available for reference at the following link: [Click Here](https://github.com/MunwarAli12/BookStore/tree/main/output%20images). 






