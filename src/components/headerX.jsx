import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderX extends Component {
  render() {
    return (
      <header className="header">
        <div className="container d-flex space-between">
          <Link to="/" className="logo">
            Your<strong>Shop</strong>X
          </Link>
          <nav className="main-nav">
            {this.props.navLinks.map((item) => (
              <Link key={item.title} className="nav-link-item" to={item.to}>
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    );
  }
}

export default HeaderX;
