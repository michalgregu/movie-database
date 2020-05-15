import React, { Component } from "react";
import { connect } from "react-redux";

import Spinner from './Spinner';

export class MoviesList extends Component {
  render() {
   
    return <div>Movie list</div>;
  }
}

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps)(MoviesList);
