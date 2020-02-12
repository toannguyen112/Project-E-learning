import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class HeaderItem extends Component {
    render() {
        let { course } = this.props;
        return (
            <NavLink
                to={`/coursedetail/${course.maKhoaHoc}`}
                className="row header-item"
                style={{ textDecoration: "none" }}
            >
                <div className="col-4 p-0 header-img">
                    <img src={course.hinhAnh} alt="" />
                </div>
                <div className="col-8 header-content ">
                    <p>{course.tenKhoaHoc}</p>
                    <p style={{ color: "red" }}>$19.99</p>
                </div>
            </NavLink>
        );
    }
}

export default HeaderItem;