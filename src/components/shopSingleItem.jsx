import React, { Component } from 'react';
import Button from './common/button/button';
import Price from './common/price';
import SocialIcons from './common/socialIcons';
import YouMayAlsoLike from './youMayAlsoLike';

class SingleItem extends Component {
  state = {
    mainImage: '',
    images: [],
    currentItemId: '',
    currrentItem: {},
  };

  componentDidMount() {
    const currentItemId = +this.props.match.params.id;
    const item = this.props.items.find((i) => i._id === currentItemId);
    const { images, image } = item;
    const imagesRequired = images.map((imgNo) => require(`../static/shop/accessories/${image}${imgNo}.jpg`).default);
    this.setState({ images: imagesRequired, mainImage: imagesRequired[1], currentItemId, currrentItem: item });
  }

  handleMainImage = (img) => {
    this.setState({ mainImage: img });
  };

  render() {
    const { socialLinksData, items } = this.props;
    const item = this.state.currrentItem;
    return (
      <div className="single-shop-item">
        <div className="d-flex">
          <div className="single__images-part w-50 pos-rel">
            {item.salePrice && <span className="sale">Sale</span>}
            <img className="single__main-image" src={this.state.mainImage} alt="main" />
            <div className="single__photos d-flex flex-wrap">
              {this.state.images.map((img) => (
                <img
                  onClick={() => this.handleMainImage(img)}
                  key={img}
                  className="single__item-image"
                  src={img}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="single__item-info-part">
            <h2 className="item-info__title">{item.title}</h2>
            <Price salePrice={item.salePrice}>{item.price}</Price>
            <div className="item-info__options d-flex">
              <div>
                <label htmlFor="colors">Colors</label>
                <br />
                <select name="colors" id="colors">
                  <option value="1">Green</option>
                  <option value="2">Red</option>
                  <option value="3">Blue</option>
                </select>
              </div>
              <div>
                <label htmlFor="Sizes">Sizes</label>
                <br />
                <select name="Sizes" id="Sizes">
                  <option value="1">Small</option>
                  <option value="2">Medium</option>
                  <option value="3">Large</option>
                </select>
              </div>
            </div>
            <Button outline>Add to cart</Button>
            <br />
            <Button>Buy it now</Button>
            <SocialIcons titlesOn socialLinksData={socialLinksData} />
          </div>
        </div>
        <p className="single-item__description">
          Introducing the GRANITE oversized crew neck t-shirt. This loose fitted tee is crafted from premium 160gm
          combed cotton yarn, resulting in a relaxed look and feel. The t-shirt features a slouchy chest pocket and
          tonal woven hem label. The fabric is treated with a dirty dye effect for a vintage look and is finished off
          with a heavy enzyme wash and silicone softener for a soft and smooth handle.
        </p>
        <YouMayAlsoLike relatedItems={items}></YouMayAlsoLike>
      </div>
    );
  }
}

export default SingleItem;
