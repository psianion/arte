import React, { useEffect } from "react";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer";
import "../../App.css";
import { Link } from "react-router-dom";

function Cart(props) {
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
    // eslint-disable-next-line
  }, []);

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };

  return (
    <div>
      <div className="backtoproducts">
        <Link to="/products">
          <i class="fas fa-arrow-circle-left"></i> Back to Products
        </Link>
      </div>
      <div className="cart">
        <h3 className="cart-icon">
          <i class="fas fa-shopping-cart"></i>
        </h3>
        <div className="cart-list">
          <ul className="cart-list-container">
            {cartItems.length === 0 ? (
              <div className="cart-empty">Cart is empty</div>
            ) : (
              cartItems.map((item) => (
                <li className="cart-info">
                  <div className="cart-image">
                    <img src={item.image} alt="product" />
                  </div>
                  <div className="cart-name">
                    <div>
                      <Link to={"/product/" + item.product}>{item.name}</Link>
                    </div>
                    <div className="cart-quantity">
                      Quantity:
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(addToCart(item.product, e.target.value))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                      <button
                        type="button"
                        className="button"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        Remove from Cart
                      </button>
                    </div>
                  </div>
                  <div className="cart-price">
                    <i class="fas fa-rupee-sign"></i>
                    {item.price}
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="cart-action">
          <h3 className="cartAction-price">
            Subtotal : <i class="fas fa-rupee-sign"></i>{" "}
            {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}.00
          </h3>
          <button onClick={checkoutHandler} disabled={cartItems.length === 0}>
            Proceed to Checkout
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
