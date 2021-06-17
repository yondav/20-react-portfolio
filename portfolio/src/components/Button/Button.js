import React, { Component } from 'react';
import './button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
  }

  handleMouseOver() {
    let btn = this.buttonRef.current;
    let chevron = document.querySelector('.chevron');
    btn.style.color = 'rgb(215, 186, 125)';
    chevron.style.color = 'rgb(155, 220, 254)';
    chevron.classList.remove('hide');
    btn.style.transform = `scale(1.1)`;
  }

  handleMouseLeave() {
    let btn = this.buttonRef.current;
    let chevron = document.querySelector('.chevron');
    chevron.classList.add('hide');
    btn.style.transform = '';
    btn.style.color = '';
  }

  render() {
    return (
      <div
        ref={this.buttonRef}
        className={`btn ${this.props.name}`}
        onMouseOver={() => this.handleMouseOver()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        {this.props.text}
        <i className='fas fa-chevron-right fa-xs bounce hide chevron'></i>
      </div>
    );
  }
}

export default Button;
