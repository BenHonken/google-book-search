import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Books from "./pages/Books";
import Search from "./components/BookSearch";
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Books} />
        <Route exact path="/search" component={Search} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;