import React, { Component } from "react";
import Footage from "../assets/images/footage.jpg";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h3>Contact</h3>
        <img alt="footage" scr={Footage} />
        <h5> Get in touch</h5>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Email" />
        <textarea type="text" placeholder="Message" rows="10" />
        <p>Optional :</p>
      </div>
    );
  }
}
