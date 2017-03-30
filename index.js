'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Grid = function (_React$Component) {
  _inherits(Grid, _React$Component);

  function Grid(props) {
    _classCallCheck(this, Grid);

    var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props));

    _this.state = {
      isMounted: false
    };
    return _this;
  }

  _createClass(Grid, [{
    key: 'handlePlaceHolderClick',
    value: function handlePlaceHolderClick(e) {
      var placeholder = (0, _jquery2.default)('#placeholder');
      var mounted = !this.state.isMounted;
      this.setState({ isMounted: mounted });
      if (mounted) {
        placeholder.css({ background: 'rgba(91,189,144,0.6)' });
      } else {
        placeholder.css({ background: 'rgba(0, 0, 0, 0.6)' });
      }
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(e) {
      if (!this.state.isMounted) {
        var placeholder = (0, _jquery2.default)('#placeholder');
        placeholder.css({
          display: 'block',
          left: (0, _jquery2.default)(e.target).offset().left + 'px',
          top: (0, _jquery2.default)(e.target).offset().top + 'px',
          width: (0, _jquery2.default)(e.target).width() + 1 + 'px'
        });
      }
    }
  }, {
    key: 'handleIncrease',
    value: function handleIncrease(e) {
      e.stopPropagation();
      var placeholderHeight = (0, _jquery2.default)('#placeholder').height() + 100;
      var calHeight = (0, _jquery2.default)('#cal').height();
      if (placeholderHeight <= calHeight) {
        (0, _jquery2.default)('#placeholder').height(placeholderHeight);
      }
    }
  }, {
    key: 'handleDecrease',
    value: function handleDecrease(e) {
      e.stopPropagation();
      var placeholderHeight = (0, _jquery2.default)('#placeholder').height() - 100;
      var calHeight = 98;
      if (placeholderHeight >= calHeight) {
        (0, _jquery2.default)('#placeholder').height(placeholderHeight);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var rows = this.props.rows || [1, 2, 3, 4, 5, 6];
      var columns = this.props.columns || [1, 2, 3, 4, 5, 6];
      var len = Math.ceil(12 / columns.length);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { id: 'placeholder', onClick: this.handlePlaceHolderClick.bind(this) },
            _react2.default.createElement('i', { className: 'glyphicon glyphicon-chevron-up white f20', onClick: this.handleIncrease.bind(this) }),
            _react2.default.createElement('br', null),
            _react2.default.createElement('i', { className: 'glyphicon glyphicon-chevron-down white f20', onClick: this.handleDecrease.bind(this) })
          ),
          rows.map(function (a, i) {
            return _react2.default.createElement(
              'div',
              { className: 'row', key: i, style: { display: 'flex' } },
              columns.map(function (t, x) {
                return _react2.default.createElement('div', { key: x, className: 'col-lg-' + len + ' app-grid', onMouseMove: _this2.handleMouseMove.bind(_this2) });
              })
            );
          })
        )
      );
    }
  }]);

  return Grid;
}(_react2.default.Component);

module.exports = Grid;
