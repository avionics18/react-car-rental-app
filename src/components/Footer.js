import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container footer border-top pt-3">
      <h5 className="text-dark">Rent Vroom</h5>
      <p className="text-secondary pt-3 pb-2">Rentvroom Pvt. Ltd.</p>
      <p className="text-secondary">
        No: 296, 3rd Cross Rd, Jakkasandra, 1st Block, Koramangla
      </p>
      <p className="text-secondary mb-4">Bengaluru, Karnataka, 560034</p>
      <div className="socialIcons mb-5">
        <img src="./imgs/icons/twitter.png" alt="Twitter" />
        <img src="./imgs/icons/instagram.png" alt="Instagram" />
        <img src="./imgs/icons/linkedin.png" alt="LinkedIn" />
      </div>
      <hr />
      <div className="d-flex justify-content-between flex-column flex-sm-row mb-3">
        <div className="mb-2">
          <Link to="/" className="text-secondary mr-4">
            Home
          </Link>
          <Link to="/page404" className="text-secondary mr-4">
            About
          </Link>
          <Link to="/page404" className="text-secondary mr-4">
            Contact
          </Link>
        </div>
        <div>
          <Link to="/page404" className="text-secondary mr-4">
            Privacy Policy
          </Link>
          <Link to="/page404" className="text-secondary">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
