import React, { useState, useEffect } from "react";
import API from "../utils/API";

import SearchedCard from "../components/BookCard";
import { Container } from "../components/Grid";
import { List } from "../components/List";

function Favorites() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    //   Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }


    return (
        <Container fluid>
            {books.length ? (
                <List>
                    {books.map(book => (
                        <SearchedCard
                            image={book.image}
                            title={book.title}
                            author={book.author}
                            synopsis={book.synopsis}
                            handleClick={() => deleteBook(book._id)}
                            toggle="Remove"
                        />
                    ))}
                </List>
            ) : (
                    <h3>No Results to Display</h3>
                )}
        </Container>
    );
}


export default Favorites;