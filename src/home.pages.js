import React from 'react';
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import AddBook from './AddBook';
import './App.css';
import DeleteBook from './DeleteBook';
import GetBookById from './GetBookById';
import GetBooksByAuthor from './GetBooksByAuthor'; 
import './Home.css';
import UpdateBook from './UpdateBook';

const Home = () => {
    const navigate = useNavigate()

    const goToCreate = () => {
        navigate('/AddBook')
    }

    const goToShow = () => {
        navigate('/GetBooksByAuthor')
    }

    const goToDelete = () => {
        navigate('/DeleteBook')
    }

    const goToById = () => {
        navigate('/GetBookById')
    }

    const getToUpdate = () => {
        navigate('/UpdateBook')
    }

    return (
        <div>
            <div className='actions'>
                <button onClick={goToCreate}>Add Book</button>
                <button onClick={goToShow}>Get Books By Author</button>
                <button onClick={goToDelete}>Delete Book</button>
                <button onClick={goToById}>Get Book by id</button>
                <button onClick={getToUpdate}>Update Book Id</button>
            </div>

            <Routes>
                <Route path='AddBook' element={<AddBook />} />
                <Route path='GetBooksByAuthor' element={<GetBooksByAuthor />} />
                <Route path='DeleteBook' element={<DeleteBook />} />
                <Route path='GetBookById' element={<GetBookById />} />
                <Route path='UpdateBook' element={<UpdateBook />} />
            </Routes>
        </div>
    )
}

const App = () => {
    return (
        <Router>
            <Home />
        </Router>
    );
}

export default App;
