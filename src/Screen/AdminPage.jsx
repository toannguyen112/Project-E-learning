import React, { Component } from "react";

import Admin from "../Component/Admin/Admin";
import LoadingAdmin from "../Component/Admin/LoadingAdmin";

export default class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 3000);
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <LoadingAdmin />
        ) : (
          <Admin history={this.props.history} />
        )}
      </div>
    );
  }
}
