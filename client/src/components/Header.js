import React, { Component } from "react";
import "react-sticky-header/styles.css";
import StickyHeader from "react-sticky-header";
import Insta from "../assets/icons/insta.png";
import Search from "../assets/icons/search.png";
import Cart from "../assets/icons/cart.png";
import Pintrest from "../assets/icons/pintrest.png";
import Effortless from "../assets/icons/effortless.png";

const Header = () => (
  <StickyHeader
    header={
      <div className="header_nav">
        <div className="header">
          <div className="header__logos">
            <div className="header__logos--insta">
              <img id="icon" src={Insta} />
            </div>
            <div className="header__logos--pintrest">
              <img id="icon" src={Pintrest} />
            </div>
          </div>
          <div className="header__title">
            <img src={Effortless} />
          </div>
          <div className="header__right">
            <div className="header__right--search">
              <img id="icon" src={Search} />
            </div>
            <div className="header__right--cart">
              <img id="icon" src={Cart} />
            </div>
          </div>
        </div>
        <div className="nav">
          <a>Home</a>
          <a>Shop</a>
          <a>News</a>
          <a>Contact</a>
        </div>
      </div>
    }
  />
);

export default Header;

// export default class Header extends Component {
//   render() {
//     return (
//       <div className="header_nav">
//         <div className="header">
//           <div className="header__logos">
//             <div className="header__logos--insta">
//               <img id="icon" src={Insta} />
//             </div>
//             <div className="header__logos--pintrest">
//               <img id="icon" src={Pintrest} />
//             </div>
//           </div>
//           <div className="header__title">
//             <img src={Effortless} />
//           </div>
//           <div className="header__right">
//             <div className="header__right--search">
//               <img id="icon" src={Search} />
//             </div>
//             <div className="header__right--cart">
//               <img id="icon" src={Cart} />
//             </div>
//           </div>
//         </div>
//         <div className="nav">
//           <ul>Home</ul>
//           <ul>Shop</ul>
//           <ul>News</ul>
//           <ul>Contact</ul>
//         </div>
//       </div>
//     );
//   }
// }
