import React from "react";

function SearchForm(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>Search by title or author!</h2>
      </div>
      <div className="card-body"></div>
      <form style={{height: 208}}>
        <div className="form-group" style={{ padding: '22px' }}>
          <label htmlFor="search">Search</label>
          <input
            onChange={props.handleInputChange}
            value={props.value}
            searchtype={props.searchtype}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search Books"
            id="search"
          />
          <br />
        </div>
      </form>
    </div>

  );
}

export default SearchForm;
