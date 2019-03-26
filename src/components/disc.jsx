import React from 'react';
// Disc Class
const Disc = ({size, topDisc, startDrag}) => {
  const discColors = [
    'linear-gradient(to right, black, gray)',
    'linear-gradient(to right, yellow, red)',
    'linear-gradient(to right, lime, green)',
    'linear-gradient(to right, cyan, steelblue)',
    'linear-gradient(to right, sandybrown, maroon)',
    'linear-gradient(to right, orange, orangered)',
    'linear-gradient(to right, magenta, indigo)',
    'linear-gradient(to right, lightseagreen, navy)',
  ];
  const discWidth = (size + 1.5) * 25;
  const discStyle = {
    width: discWidth + 'px',
    background: discColors[size % 8],
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

export default Disc;
