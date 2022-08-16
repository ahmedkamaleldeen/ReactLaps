import React from "react";

function Progress(props) {
  console.log(props);
  return (
    <div className="bg-secondary">
    <div className=" container">
        <div className="container">
            <h1 className="text-center">Skills</h1>
            <p className="text-center">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

        </div>
      <div className="row">
        <div className="col-6">
            <h1>My Focus</h1>
            <h3>UI/UX DESIGN</h3>
            <h3>UI/UX DESIGN</h3>
            <h3>UI/UX DESIGN</h3>
            <h3>UI/UX DESIGN</h3>

        </div>
        <div className="col-6">
          {props.types.map((type) => {
            return (
              <>
                {type} :{" "}
                <div class="progress" key={type}>
                  <div
                    class="progress-bar w-50"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Progress;
