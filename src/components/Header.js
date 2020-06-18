import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <h5 className="text-center py-3 bg-dark">
      <Link to="/" class="text-light">
        <span className="text-warning">RENT</span>VROOM
      </Link>
    </h5>
  );
}

export default Header;
