import React, { Component } from "react";
import { notify } from "../notify/Notify";
import { connect } from "react-redux";
import { reduxAction } from "../../Store/Action/action";
import { PAYMENT } from "../../Store/Action/type";

class CheckoutPayment extends Component {
  pay = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let user = localStorage.getItem("userLogin");
    if (user) {
      if (cart.length > 0) {
        localStorage.removeItem("cart");
        this.props.dispatch(reduxAction(PAYMENT, [])); // đưa lên redux
        notify("success", "Payment succsess");
        this.props.history.push("/");
      } else {
        notify("error", "Cart is empty");
      }
    } else {
      notify("error", "Account login required");
      this.props.history.push("/login");
    }
  };
  render() {
    return (
      <div className="payment">
        <div className="card">
          <div className="card__header">
            <div className="card__radio mr-4">
              <input type="radio" />
            </div>
            <div className="card__image">
              <span className="mr-4" >New Payment Cart</span>
              <span>
                <img
                  src="/img/payment-option.png"
                  style={{ width: "30%" }}
                  alt=""
                />
              </span>
            </div>
          </div>
          <div className="card__body">
            <form>
              <input
                className="card__name"
                type="text"
                placeholder="Name on Card"
              />
              <input
                className="card__number"
                type="text"
                placeholder="Card Number"
              />
              <div className="code">
                <select className="card__month" name="month" id="">
                  <option value="1">MM</option>
                </select>
                <select className="card__year" name="year" id="">
                  <option value="1">YY</option>
                </select>
                <input
                  className="card__code"
                  type="text"
                  placeholder="Security Code"
                  disabled
                />
              </div>
              <div className="zip">
                <select className="country">
                  <option value="1">VietNam</option>
                  <option value="2">Brazil</option>
                </select>
                <input
                  className="zipcode"
                  type="text"
                  placeholder="Zip/Postal Code"
                  disabled
                />
              </div>
              <div className="card__footer">
                <button onClick={() => this.pay()}>Complete Payment</button>
                <p>
                  By completing your purchase you agree to these{" "}
                  <span>Terms of Service.</span>
                </p>
                <div className="lock">
                  <i className="fa fa-lock"></i>
                  <span>Secure Connection</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(CheckoutPayment);
