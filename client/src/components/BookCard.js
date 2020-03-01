import React, { useEffect, useState } from "react";
import SaveBtn from "./SaveBtn";
import ViewBtn from "./ViewBtn"
import API from "../utils/API"
function BookCard(props) {
  // Setting our component's initial state
  const [books, setBooks] = useState([{volumeInfo:
    {title: "Harry Potter: The Complete Collection (1-7)",
    authors: ["J.K. Rowling"],
    publisher: "Pottermore Publishing",
    publishedDate: "2015-12-14",
    description: "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide.",
    readingModes: {text: true, image: false},
    pageCount: 4236,
    printType: "BOOK",
    categories: ["Juvenile Fiction"],
    averageRating: 4,
    ratingsCount: 11,
    maturityRating: "NOT_MATURE",
    allowAnonLogging: true,
    contentVersion: "1.14.13.0.preview.2",
    panelizationSummary: {containsEpubBubbles: false, containsImageBubbles: false},
    imageLinks: {smallThumbnail: "http://books.google.com/books/content?id=f280CwAAQ…J&printsec=frontcover&img=1&zoom=5&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=f280CwAAQ…J&printsec=frontcover&img=1&zoom=1&source=gbs_api"},
    language: "en",
    previewLink: "http://books.google.com/books?id=f280CwAAQBAJ&pg=PP1&dq=Harry+Potter&hl=&cd=1&source=gbs_api",
    infoLink: "http://books.google.com/books?id=f280CwAAQBAJ&dq=Harry+Potter&hl=&source=gbs_api",
    canonicalVolumeLink: "https://books.google.com/books/about/Harry_Potter_The_Complete_Collection_1_7.html?hl=&id=f280CwAAQBAJ",
    __proto__: Object}}])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks();
  })

  // Loads all books and sets them to books
  function loadBooks() {
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

      { books.length > 0 ? (
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
                  <img src={result.volumeInfo.imageLinks.thumbnail} alt={result.volumeInfo.title} style={{float: "left"}}/>
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