// Class Component

import React from "react";
class ClassExample extends React.Component {
  state = {
    name: "",
  };

  changeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <>
        <input type="text" value={this.state.name} onChange={this.changeName} />
        <p>{this.state.name}</p>
      </>
    );
  }
}

export default ClassExample;
