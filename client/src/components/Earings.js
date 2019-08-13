import React, { Component } from "react";

export default class Earings extends Component {
  render() {
    return (
      <div className="earings">
        <a className="earings__thumbon" href="/collections/earings">
          <img alt="memo" src={this.props.thumb} />
        </a>
        <div className="earings__text">
          <h5 className="earings__text--description">{this.props.title}</h5>
          <h5 className="earings__text--price">{this.props.price}</h5>
        </div>
      </div>
    );
  }
}
