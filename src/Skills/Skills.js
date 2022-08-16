import React from "react";
import Progress from "./Progress";
class Skills extends React.Component {
  constructor() {
    super();
    this.state = { type: ["html", "css", "react", "angular", "bootstrap"] };
  }
  render() {
    return (
      <>
        <Progress types={this.state.type} />
      </>
    );
  }
}
export default Skills;
