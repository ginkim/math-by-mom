import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}



class MenuButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'title'
    };

  }

  render() {

    

    return (
        <div className='menubutton' onClick={this.props.onClick}>
          {this.props.title}
        </div>
    );
  }
}

MenuButton.propTypes = propTypes;

export default MenuButton;
