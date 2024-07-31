import React from 'react';
import './App.css'

interface HelloUsersProps {
  names: string[];
}

interface HelloUsersState {
  currentNameIndex: number;
}

class HelloUsers extends React.Component<HelloUsersProps, HelloUsersState> {
  private interval: number | undefined;

  constructor(props: HelloUsersProps) {
    super(props);
    this.state = {
      currentNameIndex: 0,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.interval = window.setInterval(this.cycleNames, 5000);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidUpdate(prevProps: HelloUsersProps, prevState: HelloUsersState) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    if (this.interval !== undefined) {
      clearInterval(this.interval);
    }
  }

  cycleNames = () => {
    this.setState((prevState) => ({
      currentNameIndex: (prevState.currentNameIndex + 1) % this.props.names.length,
    }));
  };

  render() {
    console.log('render');
    const { names } = this.props;
    const { currentNameIndex } = this.state;
    const name = names[currentNameIndex];

    return (
      <div>
        <h1>Hello {name}!</h1>
      </div>
    );
  }
}

export default HelloUsers;
