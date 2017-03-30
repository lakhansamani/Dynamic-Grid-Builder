'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = '\n.appGrid {\n  border: 1px dotted #dfdfdf;\n  height:100px;\n  position: relative;\n  z-index: 99;\n}\n#placeholder {\n  z-index: 200;\n  border: 1px solid #dfdfdf;\n  height:100px;\n  display: none;\n  background: rgba(0, 0, 0, 0.6);\n  position: absolute;\n}\n.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {\n  padding: 0px !important;\n}\n.white {\n  color: #fff;\n}\n.f20 {\n  font-size: 20px !important;\n}\n.f20:hover {\n  cursor: pointer;\n}';

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
      var placeholder = document.getElementById('placeholder');
      var mounted = !this.state.isMounted;
      this.setState({ isMounted: mounted });
      if (mounted) {
        placeholder.style.background = 'rgba(91,189,144,0.6)';
      } else {
        placeholder.style.background = 'rgba(0, 0, 0, 0.6)';
      }
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(e) {
      if (!this.state.isMounted) {
        var placeholder = document.getElementById('placeholder');
        placeholder.style.display = 'block';
        placeholder.style.left = e.target.offsetLeft + 'px';
        placeholder.style.top = e.target.offsetTop + 'px';
        placeholder.style.width = e.target.offsetWidth + 'px';
      }
    }
  }, {
    key: 'handleIncrease',
    value: function handleIncrease(e) {
      e.stopPropagation();
      var placeholder = document.getElementById('placeholder');
      var placeholderHeight = placeholder.offsetHeight + 100;
      var calHeight = document.getElementById('cal').offsetHeight;
      if (placeholderHeight <= calHeight) {
        placeholder.style.height = placeholderHeight + 'px';
      }
    }
  }, {
    key: 'handleDecrease',
    value: function handleDecrease(e) {
      e.stopPropagation();
      var placeholder = document.getElementById('placeholder');
      var placeholderHeight = placeholder.offsetHeight - 100;
      console.log('placeholder height', placeholderHeight);
      if (placeholderHeight >= 100) {
        placeholder.style.height = placeholderHeight + 'px';
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
        { id: 'cal' },
        _react2.default.createElement(
          'style',
          null,
          styles
        ),
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
                return _react2.default.createElement('div', { key: x, className: 'col-lg-' + len + ' appGrid', onMouseMove: _this2.handleMouseMove.bind(_this2) });
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
