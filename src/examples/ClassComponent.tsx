import React, { Component } from "react";

interface IProps {
  propsIn: string;
}

interface IState {
  name: string;
}

export class ClassComponent extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      name: "Abhishek",
    };
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>Class Component</h1>
        <h2>Name: {this.state.name}</h2>
        <p>Props in : {this.props.propsIn}</p>
      </div>
    );
  }
}
