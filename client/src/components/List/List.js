import React from "react";
import "./List.css";

export function List({ children }) {
  return (
    <div className="list-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}
