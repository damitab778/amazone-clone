import React, { useState, useEffect } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "../Style/Payment.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //generate the specjal stripe secret which allows us to charge a customer

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${x * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("the secret is >>>", clientSecret);
  const handleSubmit = async (e) => {
    //doo all fancy stripe stuff
    e.preventDefault();

    setSucceeded(true);
    setError(null);
    setProcessing(false);
  };

  const handleChange = (e) => {
    //listen for changes in the CardElement, display any errors
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  let x = 0;
  {
    basket.forEach((el) => {
      x += el.price;
    });
  }
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Devilery Adress</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React line</p>
            <p>Los Angelos</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment methods</h3>
          </div>
          <div className="payment_details">
            {
              /*Stripe magic */
              <form onSumit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className="payment__priceContainer">
                  <CurrencyFormat
                    renderText={(value) => (
                      <>
                        <h3>Order Total: {value}</h3>
                      </>
                    )}
                    decimalScale={2}
                    value={x} // Homework
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                  </button>
                </div>
                {error && <div>{error}</div>}
              </form>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
