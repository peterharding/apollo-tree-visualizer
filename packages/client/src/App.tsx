import * as React from "react";
import "./App.css";
import { Hello } from "./components/hello/Hello";

import logo from "./logo.svg";

class App extends React.Component {

  public state = {
    response: ""
  };

  public componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  public callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) { throw Error(body.message); }

    return body;
  };

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p className="App-intro">{this.state.response}</p>
        <Hello name="Tada" enthusiasmLevel={10} />
      </div>
    );
  }
}

export default App;
