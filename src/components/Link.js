import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Link extends Component {
  render() {
    return (
      <button
         onClick={this.props.onClick}
         disabled={this.props.active}
         style={{
             marginLeft: '4px',
         }}
      >
        {this.props.children}
      </button>
    );
  }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link;
