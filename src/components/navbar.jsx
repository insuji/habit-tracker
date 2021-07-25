import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    return (
      <nav className='navbar'>
        <i className='fas fa-leaf green-leaf'></i>
        <span>Habit Tracke</span>
        <span className='habit-count total'>{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
