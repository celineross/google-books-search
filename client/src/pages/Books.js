import React, { useState } from "react";
import API from "../utils/API";

import FavBtn from "../components/FavBtn";

import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

import BookCard from "../components/BookCard";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  // Handles updating component state when the user types into the input field
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value })
  };

  function handleSearch(e) {
    e.preventDefault();
    API.bookSearch(formObject.title)
      .then(res => setBooks(res.data.items))
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFavorite(bookData) {
    API.saveBook({
      _id: bookData.id,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      title: bookData.volumeInfo.title,
      author: bookData.volumeInfo.authors,
      synopsis: bookData.volumeInfo.description
    })
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>What Books Should I Read?</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Title (required)"
            />
            <FormBtn
              disabled={!(formObject.title)}
              onClick={handleSearch}
            >
              Search for Books!
              </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Search Results</h1>
          </Jumbotron>
          {books.length ? (
            <List>
              {books.map(book => (
                <ListItem key={book.id}>
                  <BookCard
                    key={book.id}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    synopsis={book.volumeInfo.description}
                    handleClick={(e) => handleFavorite(e, book)}
                    
                    toggle="Favorite"
                  />
                  <FavBtn handleFavorite={handleFavorite} bookData={book} />
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>
      </Row>
    </Container>
  );
}


export default Books;
