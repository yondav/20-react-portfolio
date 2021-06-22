import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
  }

  handleMouseOver() {
    let btn = this.buttonRef.current;
    btn.style.color = 'var(--blue)';
    btn.style.transform = `scale(1.1)`;
  }

  handleMouseLeave() {
    let btn = this.buttonRef.current;
    btn.style.transform = '';
    btn.style.color = '';
  }

  render() {
    return (
      <button
        ref={this.buttonRef}
        className={`btn ${this.props.name}`}
        onMouseOver={() => this.handleMouseOver()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
