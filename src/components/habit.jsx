import React, { PureComponent } from 'react';

class Habit extends PureComponent {


  handleIncrement = (event) => {
    this.props.onIncrement(this.props.habit);
  }
  handledecrement = (event) => {
    this.props.onDecrement(this.props.habit);
  }
  handleDelete = (event) => {
    this.props.onDelete(this.props.habit);
  }
  render() {
    const {name, count} = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase" onClick={this.handleIncrement}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handledecrement}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete" onClick={this.handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    )
  }
}

export default Habit;