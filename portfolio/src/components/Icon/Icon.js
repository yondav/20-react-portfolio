import React, { Component } from 'react';
import './icon.css';

class Icon extends Component {
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
      <div
        ref={this.bounceRef}
        className={`${this.props.name} icon`}
        onMouseEnter={() => this.handleHover()}
        onAnimationEnd={() => this.handleAnimationEnd}
      >
        <i className={this.props.icon}></i>
      </div>
    );
  }
}

export default Icon;
