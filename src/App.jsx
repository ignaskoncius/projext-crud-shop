import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HeaderX from './components/headerX';
import Home from './pages/home';
import Shop from './pages/shop';
import Footer from './components/footer';
import 'font-awesome/css/font-awesome.css';
import axios from 'axios';

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
        { to: 'https://www.instagram.com', icon: 'fa fa-instagram', title: 'pin it' },
      ],
      items: [
        {
          _id: 1,
          title: 'Redneck hat',
          price: 99.99,
          salePrice: 19.99,
          image: 'acc_hat_01_',
          color: 'Green',
          sizeQty: [
            {
              size: 'small',
              quantity: 10,
            },
            {
              size: 'medium',
              quantity: 5,
            },
            {
              size: 'large',
              quantity: 15,
            },
          ],
          images: [1, 2, 3, 4, 5],
          category: 'Accessories',
        },
        {
          _id: 2,
          title: 'Redneck jeans',
          price: 1199.99,
          image: 'jack_jeans_01_',
          color: 'Yellow',
          size: ['Small', 'Normal', 'Large'],
          images: [1, 2, 3, 4, 5, 6],
          category: 'Jeans',
        },
        {
          _id: 3,
          title: 'Redneck T-Shirt',
          price: 369.99,
          salePrice: 119.99,
          image: 'shirt_01_',
          color: 'Gray',
          size: ['Small', 'Normal', 'Large'],
          images: [1, 2, 3, 4, 5],
          category: 'T-Shirts',
        },
        {
          _id: 4,
          title: 'Cowboy suede boots',
          price: 299.69,
          image: 'foot_cowboy_01_',
          color: 'Sand',
          size: ['Small', 'Normal', 'Large'],
          images: [1, 2, 3, 4],
          quantity: 5,
          category: 'Footwear',
        },
      ],
      cart: [
        {
          _id: 1,
          title: 'Redneck hat',
          price: 99.99,
          image: 'acc_hat_01_',
          color: 'Green',
          size: 'L',
          sku: 'hat_01',
          quantity: 1,
          // userId: 'links to user',
        },
        {
          _id: 2,
          title: 'Redneck T-Shirt',
          price: 369.99,
          image: 'shirt_01_',
          color: 'Washed Black',
          size: 'XL',
          sku: '01',
          quantity: 2,
        },
      ],
    },
  };

  async componentDidMount() {
    console.log('app mounted');
    // axios
    //   .get('http://localhost:4000/api/shop/categories')
    //   .then((result) => console.log(result.data))
    //   .catch((err) => console.log(err));
    try {
      const { data } = await axios.get('http://localhost:4000/api/shop/categories');
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

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
