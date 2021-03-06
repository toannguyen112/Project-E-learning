import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    let { course, deleteCart } = this.props;
    return (
      <tr className="cart_item">
        <td className="cart_thumbnail">
          <div>
            <img src={course.hinhAnh} className="img-fluid" alt="course" />
          </div>
        </td>
        <td className="cart_name">
          <div>{course.tenKhoaHoc}</div>
          <div>By Jonas Schmedtmann, Web Developer, Designer...</div>
        </td>
        <td className="cart_price">
          <div className="amount">$19.90</div>
          <div className="oldamount">$199.90</div>
        </td>
        <td className="cart_remove">
          <div className="btn__remove">
            <i
              style={{ cursor: "pointer" }}
              className="fa fa-trash"
              aria-hidden="true"
              onClick={() => deleteCart(course)}
            />
          </div>
        </td>
      </tr>
    );
  }
}
