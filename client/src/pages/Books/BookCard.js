import React from "react";
import DeleteBtn from "../../components/DeleteBtn";
import ViewBtn from "../../components/ViewBtn";

function BookCard(props) {
  console.log(props)
  //Get a book list from database
  const results = props.books;
  // const sort = function(props, results){
  //   results.sort(function(a, b){
  //   });
  // }
  // sort(props, results);
  return (
    <div className="text-center">
      {results.length > 0 ? (
        <ul className="list-group">
          <h2>Books</h2>
          {results.map(result => (
            <li className="list-group-item" key={result._id}>
              <div className="row">
                <div className="col-md-10" style={{textAlign: "left"}}>
                  <h4>{result.title}</h4>
                  <p>{result.authors[0]}</p>
                </div>
                <div className="col-md-2">
                <ViewBtn href={result.link}></ViewBtn>
                  <DeleteBtn onClick={() => props.deleteBook(result._id)}></DeleteBtn>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <img src={result.image} alt={result.title} style={{float: "left"}}/>
                </div>
                <div className="col-md-10">
                  {result.description}
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
