import React, { useEffect, useState } from "react";
import "../../App.css";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../../actions/productActions";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function Product(props) {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
    // eslint-disable-next-line
  }, []);

  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
  };
  return (
    <div>
      <div className="backtoproducts">
        <Link to="/products">
          <i class="fas fa-arrow-circle-left"></i> Back to Products
        </Link>
      </div>
      {loading ? (
        <div>Loading</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="details-container row">
          <div className="details-image col">
            <img src={product.image} alt="" />
          </div>
          <div className="details-info col">
            <h1 className="details-name">{product.name}</h1>
            <p className="details-artist">
              {product.artist} | {product.category}
            </p>
            <p className="details-ratings">
              {product.rating} <i class="fa fa-star" aria-hidden="true"></i> &{" "}
              {product.numReviews} Reviews
            </p>
            <br />
            <p className="details-price">
              <i class="fas fa-rupee-sign"></i>
              {product.price}.00
            </p>
            <br />
            <p className="details-description">{product.description}</p>
          </div>
          <div className="details-action col">
            <ul>
              <li>
                Currently:{" "}
                {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
              </li>
              <li>
                Quantity{"  :  "}
                <select
                  value={qty}
                  onChange={(e) => {
                    setQty(e.target.value);
                  }}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option value={x + 1}>{x + 1}</option>
                  ))}
                </select>
              </li>
              <li>
                {product.countInStock > 0 && (
                  <button onClick={handleAddToCart} className="cart-button">
                    Add to Cart
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Product;
