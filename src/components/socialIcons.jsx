import React, { Component } from 'react';

class SocialIcons extends Component {
  render() {
    const { socialLinks } = this.props.shop;
    return (
      <div className="social">
        {socialLinks.map((item) => (
          <a key={item.to} href={item.to} target="_blank" rel="noreferrer" className="social__link">
            <i className={item.icon}></i>
          </a>
        ))}
      </div>
    );
  }
}

export default SocialIcons;
