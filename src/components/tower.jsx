import _ from 'lodash';
import React, {Component} from 'react';

const TOWERS_NUMBER = 3;
const discColours = [
  'gray',
  'red',
  'green',
  'cyan',
  'yellow',
  'orange',
  'magenta',
  'blue',
];

// Disc Class
const Disc = ({size, topDisc, startDrag}) => {
  const discWidth = (size + 1.5) * 25;
  const discStyle = {
    width: discWidth + 'px',
    backgroundColor: discColours[size % 8],
  };

  return (
    <div
      className='disc'
      style={discStyle}
      draggable={topDisc}
      onDragStart={startDrag}
    >
      <span className='disc-label'>
        {size}
      </span>
    </div>
  );
}

// Tower Class
const Tower = ({towerDiscs, maxSize, startTopDiscDrag, dropDisc}) => {
  const towerStyle = {width: (maxSize + 3) * 25};
  const pillarStyle = {height: 100 + maxSize * 20};

  return (
    <div
      className='tower'
      style={towerStyle}
      onDragOver={(e) => {e.preventDefault()}}
      onDrop={dropDisc}
    >
      <div className='tower-pillar' style={pillarStyle} />
      <div className='tower-base' />
      <div className='disc-group'>
        {towerDiscs.map((size, i) =>
          <Disc
            key={size.toString()}
            size={size}
            topDisc={i===0}
            startDrag={startTopDiscDrag}
          />
        )}
      </div>
    </div>
  );
};

// Establashing Hanoi Tower Class
class Towers extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    // this.state.count++;
    this.setState({ value: this.state.value + 1 });
    console.log("Increment Clicked", this);
    // obj.method();
    // function();
  }

  constructor(props) {
    super(props);
    let startTower = _.range(1, this.state.value + 1);
    let discs = _.map(Array(TOWERS_NUMBER), (val, i) =>
      i === 0 ? startTower : []
    );
    this.state = {discs};
  }

  startTopDiscDrag(activeTower) {
    this.activeTower = activeTower;
  }

  dropDisc(destTower) {
    const sourceTower = this.activeTower;
    this.activeTower = null;
    if (sourceTower === destTower || sourceTower === null) return;

    this.setState((state) => {
      const disc = state.discs[sourceTower][0];
      if (state.discs[destTower][0] < disc) return state;

      let discs = [...state.discs];
      discs[sourceTower] = _.tail(discs[sourceTower]);
      discs[destTower] = [disc, ...state.discs[destTower]];
      return {discs};
    });
  }

  render() {
    return (
      <div>
      <div>
      {this.state.discs.map((towerDiscs, i) =>
        <Tower
        key={i+1}
        towerDiscs={towerDiscs}
        // maxSize={this.props.discsNumber}
        maxSize={3}
        startTopDiscDrag={() => this.startTopDiscDrag(i)}
        dropDisc={() => this.dropDisc(i)}
        />
      )}
      </div>
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button
        onClick={product => this.handleIncrement(product)}
        className="btn btn-sm btn-secondary"
        >
        Increment
      </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}


export default Towers;
