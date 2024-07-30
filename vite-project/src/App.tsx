import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface AppState {
  count: number;
}

class App extends React.Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('constructor');
  }

  componentWillMount() {
    console.log('componentWillMount (deprecated)');
  }

  componentWillReceiveProps(nextProps: object) {
    console.log('componentWillReceiveProps (deprecated)', nextProps);
  }

  componentWillUpdate(nextProps: object, nextState: AppState) {
    console.log('componentWillUpdate (deprecated)', nextProps, nextState);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps: object, prevState: AppState, snapshot: null) {
    console.log('componentDidUpdate', prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleCountIncrease = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log('render');
    return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={this.handleCountIncrease}>
            count is {this.state.count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    );
  }
}

export default App;
