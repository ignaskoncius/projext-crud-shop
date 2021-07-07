import css from './price.module.css';

const Price = (props) => {
  return (
    <div className="price">
      {props.salePrice ? (
        <p>
          <span className={css.salePrice}>{formatPrice(props.salePrice)}</span>
          <span className={css.oldPrice}>{formatPrice(props.children)}</span>
        </p>
      ) : (
        <span>{formatPrice(props.children)}</span>
      )}
    </div>
  );
};

function formatPrice(price) {
  return price.toFixed(2) + ' eur ';
}

export default Price;
