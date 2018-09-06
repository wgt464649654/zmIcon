export var getSvg = function getSvg(type) {
  switch (type) {
    case 'close':
      return require('./svg/close.svg');
    case 'bell':
      return require('./svg/bell.svg');
    case 'calendar-o':
      return require('./svg/calendar-o.svg');
    case 'close':
      return require('./svg/close.svg');
    case 'calendar':
      return require('./svg/calendar.svg');
    case 'change':
      return require('./svg/change.svg');
    case 'copy':
      return require('./svg/copy.svg');
    case 'download':
      return require('./svg/download.svg');
    case 'envelope':
      return require('./svg/envelope.svg');
    case 'eyeclose':
      return require('./svg/eyeclose.svg');
    default:
      return null;
  }
};