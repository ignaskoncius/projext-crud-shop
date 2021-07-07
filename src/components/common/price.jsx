import css from './price.module.css';

const Price = (props) => {
  const { salePrice, children } = props;
  return (
    <p className="price">
      <span className={salePrice ? css.salePrice : ''}>{formatPrice(salePrice)}</span>{' '}
      <span className={salePrice ? css.oldPrice : ''}>{formatPrice(children)}</span>
    </p>
  );
};

function formatPrice(price) {
  if (!price) return;
  //   TODO: solve 99.999 problem returning 100 instead of 99.99
  const roundPrice = price.toFixed(2) + ' eur ';
  return roundPrice;
}

export default Price;
