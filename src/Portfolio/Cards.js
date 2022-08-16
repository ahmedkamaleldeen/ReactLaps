import React from "react";

function Cards(props) {
  return (
    <div>
      <div className="container-fluid">
        <h1>Portfolio</h1>
        <div className="row">
          {props.title.map((jop) => {
            return (
              <>
                <div className="col-4" key={jop}>
                  <div className="d-flex justify-content-center align-items-center m-5"
                    style={{ width: "300px", height: "200px", color: "red" ,border:"4px solid black" }}
                  >
                    {jop}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cards;
