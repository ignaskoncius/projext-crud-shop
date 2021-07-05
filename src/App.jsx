import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HeaderX from './components/headerX';
import Home from './pages/home';
import Shop from './pages/shop';
import Footer from './components/footer';
import 'font-awesome/css/font-awesome.css';

class App extends Component {
  state = {
    navLinks: [
      { to: '/', title: 'Home' },
      { to: '/shop', title: 'Shop' },
      { to: '/about', title: 'About' },
    ],
    shop: {
      shopCategories: [
        { _id: 1, title: 'Accessories' },
        { _id: 2, title: 'Denim' },
        { _id: 3, title: 'Footwear' },
        { _id: 4, title: 'Jeans' },
        { _id: 5, title: 'T-Shirts' },
      ],
      socialLinksData: [
        { to: 'https://www.facebook.com', icon: 'fa fa-facebook', title: 'share' },
        { to: 'https://www.twitter.com', icon: 'fa fa-twitter', title: 'tweet' },
        { to: 'https://www.instagram.com', icon: 'fa fa-instagram', title: 'Pin it' },
      ],
      items: [
        {
          _id: 1,
          title: 'Redneck hat',
          price: 99.99,
          image: 'acc_hat_01_',
          color: 'Green',
          size: 'L',
          images: [1, 2, 3, 4, 5],
        },
        {
          _id: 2,
          title: 'Redneck jeans',
          price: 1199.99,
          image: 'jack_jeans_01_',
          color: 'Navy',
          size: 'M',
          images: [1, 2, 3, 4, 5, 6],
        },
        {
          _id: 3,
          title: 'Redneck T-Shirt',
          price: 369.99,
          image: 'shirt_01_',
          color: 'Washed Black',
          size: 'XL',
          images: [1, 2, 3, 4, 5],
        },
      ],
    },
  };
  render() {
    const { navLinks, shop } = this.state;
    return (
      <div className="App">
        <HeaderX navLinks={navLinks} />
        <div className="container">
          <Switch>
            {/* kai reikia perduoti props i route mes tai darom su sekancia sintakse */}

            <Route path="/shop" render={(props) => <Shop shop={shop} {...props} />} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        <Footer navLinks={navLinks} />
      </div>
    );
  }
}

export default App;
