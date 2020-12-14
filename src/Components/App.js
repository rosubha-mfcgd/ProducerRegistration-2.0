import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layout";
import Registration from "./Registration";
export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Registration />
        <Footer />
      </Fragment>
    );
  }
}
