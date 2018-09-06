function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import * as PropTypes from 'prop-types';
import { getSvg } from './icon.js';

export var Icon = function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon(props) {
    _classCallCheck(this, Icon);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.svg = null;
    return _this;
  }

  Icon.prototype.render = function render() {
    if (!this.svg) {
      this.svg = getSvg(this.props.type);
    }
    return React.createElement('embed', { src: this.svg });
  };

  return Icon;
}(React.Component);

Icon.propTypes = process.env.NODE_ENV !== "production" ? {
  type: PropTypes.string.isRequired // icon类型
} : {};