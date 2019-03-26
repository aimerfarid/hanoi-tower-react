import _ from 'lodash';
import React, {Component} from 'react';
import Tower from './tower';
import SuccessAlert from './successAlert';
import ErrorAlert from './errorAlert';

// Establashing Hanoi Tower Class
class Towers extends Component {
  constructor(props) {
    super(props);
    console.log(props.discNum);
    const discNum = props.discNum;
    const towerNum = props.towerNum;
    const discMoves = props.discMoves;
    const discs = this.createHanoiTower(discNum, towerNum);
    this.state = {
      discs, discMoves, discNum, towerNum,
      alert_message: ''
    };
    this.baseState = this.state;
  }

  resetForm = () => {
    this.setState(this.baseState);
  }

  createHanoiTower(discNum, towerNum) {
    const startTower = _.range(1, discNum + 1);
    const discTower = _.map(Array(towerNum),
      (val, i) => i === 0 ? startTower : []
    );
    return discTower;
  }

  // Initialize dragging the towers
  startTopDiscDrag(activeTower) {
    this.activeTower = activeTower;
  }

  // Solution which will prompt reset
  solutionTower(d, dM) {
    console.log('Moves from solution function', dM);
    // console.log('Discs Destination: ', discs[destTower], ' Index:', destTower,' Length:', discs[destTower].length);
    // if ((destTower !== 0 && discs[destTower].length === this.state.discNum)) {
    //   console.log('You\'ve Won with: ', this.state.discMoves, );
    // }
    return;
  }

  // Dropping Target to designated towers while counting moves
  dropDisc(destTower, discMoves) {
    const sourceTower = this.activeTower;
    // discMoves++;
    // const discMoves = this.state.discMoves;
    this.activeTower = null;
    if (sourceTower === destTower || sourceTower === null) return;
    this.setState((state) => {
      const disc = state.discs[sourceTower][0];
      // Return back to it's original position
      if (state.discs[destTower][0] < disc) {
        console.log('you cant do that');
        return {state, alert_message:'error'};
      }
      let discs = [...state.discs];
      discs[sourceTower] = _.tail(discs[sourceTower]);
      discs[destTower] = [disc, ...state.discs[destTower]];
      discMoves++;
      console.log('Moves', discMoves);

      // SOLUTION TO THE HANOI TOWER!
      if ((destTower !== 0 && discs[destTower].length === this.state.discNum)) {
        console.log('You\'ve Won with: ', discMoves, ' Moves' );
        return {discs, discMoves: this.state.discMoves + 1, alert_message:'success'}
      }
      // discMoves: discMoves;
      return {discs, discMoves: this.state.discMoves + 1, alert_message:''};
    });
  }

  // Count Movements
  getMoveBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.discMoves === 0 ? 'warning' : this.state.alert_message === 'success' ? 'success' : 'primary';
    return classes;
  }

  // Personal style for Moves badge
  formatMoveCount() {
    const { discMoves } = this.state;
    return discMoves === 0 ? "Zero" : discMoves;
  }

  // Number of discs in the Tower
  getIncBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.discNum === 0 ? "warning" : "dark";
    return classes;
  }

  // Changes the number of discs in towers
  formatIncCount() {
    const { discNum } = this.state;
    return discNum === 0 ? "Zero" : discNum;
  }

  render() {
    const {onReset, onIncrement} = this.props;
    return (
      <div>
        <hr/>
        {this.state.alert_message==='success'?<SuccessAlert/>:null}
        {this.state.alert_message==='error'?<ErrorAlert/>:null}
        <span className={this.getMoveBadgeClasses()}>Moves: {this.formatMoveCount()}</span>
        <div>
          {this.state.discs.map((towerDiscs, i) =>
            <Tower
              key={i+1}
              towerDiscs={towerDiscs}
              maxSize={8}
              startTopDiscDrag={() => this.startTopDiscDrag(i)}
              dropDisc={() => this.dropDisc(i, this.state.discMoves)}
              solutionTower={() => this.solutionTower(i)}
            />
          )}
        </div>
        <span className={this.getIncBadgeClasses()}>Disc Number: {this.formatIncCount()}</span>
        <div>
          <button
            onClick={this.resetForm}
            className="btn btn-sm btn-info ml-3"
            >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Towers;


  // // Changing disc values
  // handleIncrement = product => {
  //   // this.state.count++;
  //   const {value} = this.props;
  //   this.setState({ value: this.state.value + 1 });
  //   console.log("Increment Clicked", this.state.value);
  //   // obj.method();
  //   // function();
  // };
