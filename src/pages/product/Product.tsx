import './product.scss';

import Single from '../../components/single/Single';
import { singleProduct } from '../../data';

function Product() {
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
}

export default Product;
