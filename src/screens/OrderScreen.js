import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";
import { PayPalButton } from "react-PayPal-button-v2";

const OrderScreen = () => {
  window.scroll(0, 0);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row order-detail">
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
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
                <p>Admin Doe</p>
                <p>
                  <a href={`mailto:thegodman.@gmail.com`}>
                    thegodman@gmail.com
                  </a>
                </p>
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
                  <strong>Order info</strong>
                </h5>

                <p>Shipping: Tanzania</p>
                <p>Pay method: Paypal</p>

                <div className="bg-info p-2 col-12">
                  <p className="text-white text-center text-sm-start">
                    Paid on Jan 12 2022
                  </p>
                </div>
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
                <p>Address: Opposite Fine Touch Hall, Oduduwa Estate Ile-ife</p>
                <div className="bg-danger p-1 col-12">
                  <p className="text-white text-center text-sm-start">
                    Not Delivered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row order-products justify-content-between">
          <div className="col-lg-8">{/* <Message> */}</div>

          <div className="order-product row">
            <div className="col-md-3 col-6">
              <img src="/images/4.png" alt="product"></img>
            </div>
            <div className="col-md-5 col-6 d-flex align-items-center">
              <Link to={`/`}>
                <h6>Men Wears</h6>
              </Link>
            </div>

            <div className="mt-3 mt-md-0 col-6 col-md-2 d-flex align-items-center flex">
              <h4>QUANTITY</h4>
              <h6>4</h6>
            </div>

            <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end d-flex flex">
              <h4>SUBTOTAL</h4>
              <h6>$456</h6>
            </div>
          </div>
        </div>

        {/* total */}

        <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <strong>products</strong>
                </td>
                <td>$234</td>
              </tr>

              <tr>
                <td>
                  <strong>Shipping</strong>
                </td>
                <td>$234</td>
              </tr>

              <tr>
                <td>
                  <strong>Tax</strong>
                </td>
                <td>$234</td>
              </tr>

              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>$234</td>
              </tr>
            </tbody>
          </table>

          <div className="col-12">
            <PayPalButton amount={345} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderScreen;
