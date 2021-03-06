import React, { Component } from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Cart from "../Component/Cart/Cart";
import Loader from "../Component/Loader/Loader";
import Footer__inst from '../Component/footer__inst/Footer__inst'
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
export default class CartPage extends Component {


  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <Header history={this.props.history} />
        {this.state.loading ? <Loader /> :
          <>
            <Cart history={this.props.history} />

          </>
        }

        <Footer__inst/>
        <Footer />
        <ScrollUpButton />
      </div>
    );
  }
}
