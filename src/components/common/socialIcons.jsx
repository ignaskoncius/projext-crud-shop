import React, { Component } from 'react';

class SocialIcons extends Component {
  render() {
    const { socialLinksData, titlesOn } = this.props;
    return (
      <div className="social">
        {socialLinksData.map((item) => (
          <a key={item.to} href={item.to} target="_blank" rel="noreferrer" className="social__link">
            <i className={item.icon}></i>
            {titlesOn ? <sup className="sup">{item.title}</sup> : ''}
          </a>
        ))}
      </div>
    );
  }
}

export default SocialIcons;
