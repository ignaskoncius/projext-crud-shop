import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderX extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <h2>I am a header</h2>
        </Link>
        <nav className="main-nav">
          {this.props.navLinks.map((item) => (
            <Link key={item.title} className="nav-link-item" to={item.to}>
              {item.title}
            </Link>
          ))}
        </nav>
      </header>
    );
  }
}

export default HeaderX;
