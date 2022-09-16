import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const placeOrderScreen = () => {
  window.scrollTo(0, 0);

  const placeOrderHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row order-detail">
          <div col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0>
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-user"></i>
                </div>
              </div>

              <div className="col-md-8 center">
                <h5>
                  <strong>Customer</strong>
                </h5>
                <p>Admin Joe</p>
                <p>jakintemi@gmail.com</p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-truck-moving"></i>
                </div>
              </div>

              <div className="col-md-8 center">
                <h5>
                  <strong>Order Info</strong>
                </h5>
                <p>Shipping: Tanzania</p>
                <p>Pay method: Paypal</p>
              </div>
            </div>
          </div>

          {/* 3 */}

          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Deliver to</strong>
                </h5>
                <p>Address: Oduduwa estate ileife</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row order-products justify-content-between">
          <div className="col-lg-8">
            {/* <Message */}

            <div className="order-product row">
              <div className="col-md-3 col-6">
                <img src="/images/8.png" alt="product"></img>
              </div>

              <div className="col-md-5 col-6 d-flex align-items-center">
                <Link to={"/"}>
                  <h6> The god man</h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
