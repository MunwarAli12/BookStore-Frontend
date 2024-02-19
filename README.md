
# BookStore Application

Developed a full stack web application REST API book application that efficiently manages book data, encompassing four key parameters: book ID, author name, pages of book and title.The application seamlessly integrates CRUD (Create, Read, Update, Delete) operations, providing a streamlined approach to handling HTTP requests.

Utilizing MongoDB as the database backend, the application ensures smooth execution of all operations. It consistently delivers appropriate HTTP status codes and responses to clients,ensuring robustness and 
efficiency in managing and manipulating server objects via the REST API.

## Tech Stack
- `Java`
- `Frontend Framework` `React`
- `Backend Framework:` `Spring Boot`
- `Databases:` `MongoDb` 
- `Tools:` `Postman` `VsCode`

### API Endpoints

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


## Frontend Part,

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



## Backend Part,

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

## NOTE
> For testing purposes, Postman was employed to interact with the API. The operations underwent testing utilizing the endpoints hosted at `localhost:/8080/...`.
> Snippets of each operation are available for reference at the following link: [Click Here](https://github.com/MunwarAli12/BookStore/tree/main/output%20images).



