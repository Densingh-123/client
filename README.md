# Library Book Management System

This project is a **Library Book Management System** that enables CRUD (Create, Read, Update, Delete) operations on a book collection in a library. It is built with React for the frontend and Node.js with MySQL for the backend.

## Features

- View all books available in the library.
- Add new books to the collection.
- Update existing book information.
- Delete books from the collection.

![Books Overview](https://source.unsplash.com/800x400/?library,books)

## Prerequisites

- Node.js installed on your system.
- MySQL database running locally or on a server.
- npm (Node Package Manager) for managing dependencies.

## Getting Started

### Clone the Repository
```bash
git clone <repository-url>
cd library-book-management
```

### Backend Setup

1. **Create MySQL Database**:
   - Database Name: `test`
   - Table Name: `books`
   - Table Schema:
     ```sql
     CREATE TABLE books (
         id INT AUTO_INCREMENT PRIMARY KEY,
         title VARCHAR(255) NOT NULL,
         `desc` TEXT,
         price DECIMAL(10, 2),
         cover VARCHAR(255)
     );
     ```

2. **Install Backend Dependencies**:
```bash
cd backend
npm install
```

3. **Run the Backend**:
```bash
node index.js
```
Your backend server will start on [http://localhost:8800](http://localhost:8800).

### Frontend Setup

1. **Install Frontend Dependencies**:
```bash
cd ../frontend
npm install
```

2. **Run the Frontend**:
```bash
npm start
```
Your frontend app will be available at [http://localhost:3000](http://localhost:3000).

![Add New Book Page](https://source.unsplash.com/800x400/?library,writing)

## Project Structure

### Backend
- **index.js**: Contains API endpoints for managing books.
- **MySQL Database**: Stores book information.

### Frontend
- **Books Component**: Displays the list of books.
- **Add Component**: Form to add new books.
- **Update Component**: Form to edit existing book details.

![Book Details Page](https://source.unsplash.com/800x400/?bookshelf)

## CRUD Operations

### Add a New Book
Navigate to the "Add New Book" page and fill in the form with the book's details. Click **Submit** to save the book to the database.

### View Books
The homepage lists all the books in the database. Each book displays its title, description, price, and cover image.

### Update a Book
Click the "Edit" button next to a book to update its details.

### Delete a Book
Click the "Delete" button to remove a book from the database.

## Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view in the browser. The page reloads if you make edits.

### `npm run build`
Builds the app for production to the `build` folder. React is optimized for the best performance.

## Deployment

To deploy the application, follow these steps:

1. Build the frontend:
```bash
npm run build
```

2. Host the `build` folder on a web server or a cloud service like Netlify.

3. Deploy the backend to a hosting platform (e.g., Heroku, AWS).

## Screenshots

### Homepage
![Homepage](https://source.unsplash.com/800x400/?library,catalog)

### Add Book Form
![Add Book Form](https://source.unsplash.com/800x400/?book,add)

### Edit Book Form
![Edit Book Form](https://source.unsplash.com/800x400/?book,edit)

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Styling**: CSS/Tailwind

## License

This project is licensed under the MIT License.

---

**Happy Coding!** 📚
