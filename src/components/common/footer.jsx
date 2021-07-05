import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './button/button';

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="hr"></div>
        <div className="footer-top d-flex space-between">
          <div className="footer__links">
            <h4 className="footer__title">Links</h4>
            <nav>
              {this.props.navLinks.map(({ to, title }) => (
                <Link key={title} to={to} className="footer__nav-link d-block">
                  {title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="footer__cta">
            <h4 className="footer__title">Be in the know</h4>
            <p>Promotions, new products and sales. Directly to your inbox.</p>
            <div className="footer__input-group">
              <input type="text" placeholder="Your Email" />
              <Button size="medium">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="hr"></div>
      </div>
    );
  }
}

export default Footer;
