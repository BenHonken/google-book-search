import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="navwrapper">
        <div class="navbar-brand" id="name" >Ben Honken</div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbuttoncontainer">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                      <Link class="nav-link navbutton" to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"} >Home <span class="sr-only">(current)</span></Link>
                  </li>
                  <li>
                      <div class="vr"></div>
                  </li>
                  <li class="nav-item">
                      <Link class="nav-link navbutton" to="/search" className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>Search</Link>
                  </li>
                </ul>
            </div>
        </div>
    </div>
  </nav>
  );
}

export default NavTabs;
