import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <Link to="/" class="navbar-brand" href="/">
              WikiCountries
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
