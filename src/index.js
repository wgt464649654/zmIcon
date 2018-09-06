import React from 'react';
import * as PropTypes from 'prop-types';
import { getSvg } from './icon.js';

export class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.svg = null;
  }

  render() {
    if (!this.svg) {
      this.svg = getSvg(this.props.type);
    }
    return (
      <embed src={this.svg}/>
    )
  }
}

Icon.propTypes = {
  type: PropTypes.string.isRequired, // icon类型
};
