import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import SearchForm from "./SearchForm";
import BookCard from "./BookCard";
import API from "../utils/API"

class BookSearch extends Component {
  state = {
    result: [],
    search: "Harry Potter",
    sortKey: "title",
    sortType: 1
  };
  componentDidMount() {
    this.searchBooks();
  }

  searchBooks = async () => {
    const searchQuery = this.state.search.trim();
    let searchResults = await API.searchBook(searchQuery)
    .then(res => 
      searchResults=res.data
    )
    this.setState({ 'result': searchResults });
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    this.searchBooks();
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks();
  };

  render() {
    return (
      <Container>
        <Row>
        <Col size="md-4">

          </Col>
          <Col size="md-4">
            <SearchForm
              value={this.state.search}
              handleInputChange={this.handleInputChange}
            />
          </Col>
          <Col size="md-4">

          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <hr />
            <BookCard search={this.state.search} sortType={parseInt(this.state.sortType)} sortKey={this.state.sortKey} searchResults={this.state.result}/>
          </Col>
        </Row>
      </Container >
    );
  }
}

export default BookSearch;
