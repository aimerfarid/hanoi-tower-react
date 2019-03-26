import React, {Component} from 'react';
import Towers from './components/towers';
import Navbar from './components/navbar';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './components/reducer';

let store = createStore(reducer);

class App extends Component {
  state = {
    towerNum: 3,
    discNum: 3,
    discMoves: 0
  };

  handleIncrement = () => {
    console.log('onIncrement is clicked');
    const discNum = this.state.discNum;
    this.setState({discNum: discNum + 1 });
    console.log('onIncrement discNum', discNum);
  };

  handleReset = () => {
    console.log('onReset is clicked');
    const discNum = this.state.discNum;
    this.setState({discNum});
  }

  render() {

    return (
      <Provider store={store}>
        <Navbar/>
        <main className="container">
          <Towers
            towerNum={this.state.towerNum}
            discNum={this.state.discNum}
            discMoves={this.state.discMoves}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
             />
        </main>
      </Provider>
    )
  }
}

export default App;
