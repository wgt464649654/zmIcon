import ReactDom from 'react-dom';
import React from 'react';
import { Icon } from './index';
ReactDom.render([React.createElement(Icon, { type: 'close' }), React.createElement(Icon, { type: 'calendar-o' })], document.body);