import React from "react";

function Navbar() {
  const state = { name: "A7MED KaMaL", jopTitle: "Front End Developer" };
  return (
    <div className="container-fluid ">
      <div className="row" style={{ height: "20vh" }}>
        <div className="d-flex flex-column justify-content-center align-items-center bg-secondary">
          <h1>{state.name}</h1>
          <h1>{state.jopTitle}</h1>
          <button className="btn btn-warning">Contact Me</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
