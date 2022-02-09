import "./productList.css"
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-text">
        <h1 className="pl-title">Create & inspire.</h1>
        <p className="pl-desc">
          Throughout the years, I have created many applications that had many purposes. 
          Here are my most latest work which includes eCommerce stores, portfolios, services, and
          business information sies.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
        <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
};

export default ProductList;