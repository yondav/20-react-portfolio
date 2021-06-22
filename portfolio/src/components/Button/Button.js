import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
  }

  handleMouseOver() {
    let btn = this.buttonRef.current;
    // let chevron = document.querySelector('.chevron');
    btn.style.color = 'var(--yellow)';
    // chevron.style.color = 'var(--blue)';
    // chevron.classList.remove('hide');
    btn.style.transform = `scale(1.1)`;
  }

  handleMouseLeave() {
    let btn = this.buttonRef.current;
    // let chevron = document.querySelector('.chevron');
    // chevron.classList.add('hide');
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
        {/* <i className='fas fa-chevron-down fa-xs bounce hide chevron'></i> */}
      </button>
    );
  }
}

export default Button;
