import React from "react";

function SortKey(props) {
  return(
  <div>
    <div className="card text-center">
      <div className="card-header" style={{height: 110}}>
        <h2>Sort by...</h2>
      </div>
      <div className="card-body"></div>
      <form>
        <input onChange={props.handleInputChange} type="radio" id="name.first" name="sortKey" value="name.first"/>
        <label for="name.first">First Name</label><br />
        <input onChange={props.handleInputChange} type="radio" id="name.last" name="sortKey" value="name.last" />
        <label for="name.first">Last Name</label><br />
        <input onChange={props.handleInputChange} type="radio" id="email" name="sortKey" value="email" />
        <label for="name.first">Email</label><br />
        <input onChange={props.handleInputChange} type="radio" id="location.city" name="sortKey" value="location.city" />
        <label for="name.first">City</label><br />
        <input onChange={props.handleInputChange} type="radio" id="location.state" name="sortKey" value="location.state" />
        <label for="name.first">State</label><br /><br /><br />
      </form>
    </div>
  </div>)
}

export default SortKey;
