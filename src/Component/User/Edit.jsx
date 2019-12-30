import React, { Component } from "react";
import UserService from "../../Services/userService";
import { connect } from "react-redux";


import { notify } from "../notify/Notify";
let user = JSON.parse(localStorage.getItem("userLogin"))
  ? JSON.parse(localStorage.getItem("userLogin"))
  : {};
let userService = new UserService();
class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taiKhoan: user.taiKhoan,
      matKhau: "",
      hoTen: "",
      soDT: "",
      maLoaiNguoiDung: "HV",
      maNhom: "GP01",
      email: user.email,
      chiTietKhoaHocGhiDanh: []
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    userService
      .fixPersonalUser(this.state)
      .then(res => {
        this.props.editUser(res.data);
        console.log(res);
        notify("", "Sửa thành công ");
      })
      .catch(err => {
        notify("", "Email đã tồn tại ");
      });
  };

  render() {
    let { userProfile } = this.props;
    

    return (
      <div className="edit__profile">
        <h1>Edit Profile</h1>
        <form onSubmit={this.onSubmit}>
          <div className="fullname">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <label>Tài Khoản :</label>
                <input
                  name="taiKhoan"
                  type="text"
                  value={this.state.taiKhoan}
                  placeholder={userProfile.taiKhoan}
                  onChange={this.onChange}
                  disabled
                />
              </div>

              <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <label>Mật khẩu:</label>
                <input
                  type="text"
                  value={this.state.matKhau}
                  placeholder={userProfile.matKhau}
                  name="matKhau"
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>
          <div className="position">
            <label>Họ Tên:</label>
            <input
              name="hoTen"
              value={this.state.hoTen}
              type="text"
              placeholder={userProfile.hoTen}
              onChange={this.onChange}
            />
          </div>
          <div className="bio">
            <label>Email:</label>
            <input
              value={this.state.email}
              name="email"
              type="email"
              placeholder={userProfile.email}
              onChange={this.onChange}
            />
          </div>
          <div className="social__html_form">
            <h2>Socials</h2>
            <p>
              Add your social profiles links, they will be shown on your public
              profile.
            </p>
            <div className="social__wrapper">
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="socila-item">
                    <div>FACEBOOK</div>
                    <input type="text" placeholder="Enter Your FaceBook URl" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="socila-item">
                    <div>TWITTER</div>
                    <input type="text" placeholder="Enter Your FaceBook URl" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="socila-item">
                    <div>INSTAGRAM</div>
                    <input type="text" placeholder="Enter Your FaceBook URl" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div className="socila-item">
                    <div>LINKEDIN</div>
                    <input type="text" placeholder="Enter Your FaceBook URl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="change__profile" type="submit">
            Change Profile
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userProfile: state.editUser
});

const mapDispatchToProps = dispatch => {
  return {
    editUser: user => {
      dispatch({
        type: "EDIT_USER",
        payload: user
      });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Edit);
