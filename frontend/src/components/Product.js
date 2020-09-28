import React, { useEffect } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";

function Product() {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
    return () => {
      //
    };
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <div>Loading</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="product-container row">
      {products.map((product) => (
        <div className="product-card column" key={product._id}>
          <Link to={"/product/" + product._id}>
            <div className="product-tumb">
              <img src={product.image} alt="" />
            </div>
          </Link>
          <div className="product-details">
            <span className="product-artist">{product.artist}</span>
            <h4>
              <Link to={"/product/" + product._id}>{product.name}</Link>
            </h4>
            <div className="product-bottom-details">
              <div className="product-price">
                <i class="fas fa-rupee-sign"></i>
                {product.price}
              </div>
              <div className="product-ratings">
                {product.rating} <i class="fa fa-star" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
