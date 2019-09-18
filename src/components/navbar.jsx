import React, { Component } from "react";
//best short cuts from this tutorial imrc for react
//cc for classes, and sfc for stateless functional components

//Stateless Functional COmponent sfc
const Navbar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </span>
    </nav>
  );
};

// class Navbar extends Component {
//   render() {
//     // return (
//     //     <nav className="navbar navbar-light bg-light">
//     //       <span className="navbar-brand mb-0 h1">
//     //         Navbar{" "}
//     //         <span className="badge badge-pill badge-secondary">
//     //           {this.props.totalCounters}
//     //         </span>
//     //       </span>
//     //     </nav>
//     // );
//   }
// }

export default Navbar;
