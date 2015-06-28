'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _spinJs = require('spin.js');

var _spinJs2 = _interopRequireDefault(_spinJs);

var ReactSpinner = (function (_React$Component) {
  function ReactSpinner() {
    _classCallCheck(this, ReactSpinner);

    _get(Object.getPrototypeOf(ReactSpinner.prototype), 'constructor', this).apply(this, arguments);
  }

  _inherits(ReactSpinner, _React$Component);

  _createClass(ReactSpinner, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props;
      var color = _props.color;
      var config = _props.config;

      var spinConfig = config || { width: 2, radius: 10, length: 7, color: color };

      this.spinner = new _spinJs2['default'](spinConfig);
      this.spinner.spin(_react2['default'].findDOMNode(this.refs.container));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.spinner.stop();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('span', { ref: 'container' });
    }
  }], [{
    key: 'propTypes',
    value: {
      config: _react.PropTypes.object,
      color: _react.PropTypes.string.isRequired
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      color: 'black'
    },
    enumerable: true
  }]);

  return ReactSpinner;
})(_react2['default'].Component);

exports['default'] = ReactSpinner;
module.exports = exports['default'];