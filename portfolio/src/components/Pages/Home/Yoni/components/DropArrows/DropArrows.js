import React, { Component } from 'react';
import './droparrows.css';

class DropArrows extends Component {
  constructor(props) {
    super(props);
    this.bounceRef = React.createRef();
  }

  handleHover() {
    const bounce = this.bounceRef.current;
    bounce.classList.add('bounce');
  }

  handleAnimationEnd() {
    const bounce = this.bounceRef.current;
    bounce.classList.remove('bounce');
  }

  render() {
    return (
      <i
        ref={this.bounceRef}
        className='fas fa-chevron-down fa-xs chevron'
        onMouseEnter={() => this.handleHover()}
        onMouseLeave={() => this.handleAnimationEnd()}
      ></i>
    );
  }
}

export default DropArrows;
