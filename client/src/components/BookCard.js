import React, { useEffect, useState } from "react";
import SaveBtn from "./SaveBtn";
import ViewBtn from "./ViewBtn"
import API from "../utils/API"
function BookCard(props) {
  let search = props.search;
  console.log(search);
  // Setting our component's initial state
  const [books, setBooks] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks();
  },[search])

  // Loads all books and sets them to books
  function loadBooks() {
    console.log("***Loadbooks****");
    API.searchBook(props.search)
      .then(res => 
        setBooks(res.data.items)
      )
      .catch(err => console.log(err));
  };
  function handleSave(volumeInfo) {
      API.saveBook({
        title: volumeInfo.title,
        authors: volumeInfo.authors,
        description: volumeInfo.description,
        link: volumeInfo.infoLink,
        image: volumeInfo.imageLinks.thumbnail
      })
        .then(res => console.log("Saved!"))
        .catch(err => console.log(err));
  };
  
  console.log(books)

  // const results = BookList.filter(book => Book.title.toLowerCase().includes(props.search.toLowerCase()) || Book.Authors.toLowerCase().includes(props.search.toLowerCase()));
  // const sort = function(props, results){
  //   results.sort(function(a, b){
  //   });
  // }
  // sort(props, results);
  return (
    <div className="text-center">

      { books ? (
        <ul className="list-group">
          <h2>Books</h2>
          {books.map(result => (
            <li className="list-group-item" key={result.id}>
              <div className="row">
              <div className="col-md-10" style={{textAlign: "left"}}>
                  <h4>{result.volumeInfo.title}</h4>
                  <p>{result.volumeInfo.authors}</p>
                </div>
                <div className="col-md-2">
                  <ViewBtn href={result.volumeInfo.infoLink}></ViewBtn>
                  <SaveBtn onClick={()=> {handleSave(result.volumeInfo)}}></SaveBtn>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                {result.volumeInfo.imageLinks ? (
                  <img src={result.volumeInfo.imageLinks.thumbnail} alt={result.volumeInfo.title} style={{float: "left"}}/>
                ):(
                  <p>No Image</p>
                )}
                </div>
                <div className="col-md-10">
                  {result.volumeInfo.description}
                </div>
              </div>
            </li>
          ))}
        </ul >
      ) : (
          <h2>No Results</h2>
        )}
    </div>
  );
}

export default BookCard;