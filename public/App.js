"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ProductRow(props) {
  var product = props.product;
  return React.createElement("tr", null, React.createElement("td", null, product.productname), React.createElement("td", null, "$", product.price), React.createElement("td", null, product.category), React.createElement("a", {
    href: "javascript:void(0)",
    onClick: function onClick() {
      return window.open(product.imageurl);
    }
  }, React.createElement("td", {
    width: "60"
  }, "view")));
}

function ProductTable(props) {
  var productRows = props.products.map(function (product) {
    return React.createElement(ProductRow, {
      key: product.id,
      product: product
    });
  });
  return React.createElement("table", {
    className: "bordered-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Product Name"), React.createElement("th", null, "Price"), React.createElement("th", null, "Category"), React.createElement("th", null, "Image"))), React.createElement("tbody", null, productRows));
}

var ProductAdd =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProductAdd, _React$Component);

  function ProductAdd() {
    var _this;

    _classCallCheck(this, ProductAdd);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductAdd).call(this));
    _this.state = {
      value: 'shirts'
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProductAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.productAdd;
      var product = {
        category: this.state.value,
        price: parseFloat(form.price.value.substring(1)),
        productname: form.productname.value,
        imageurl: form.imageurl.value,
        status: 'New'
      };
      this.props.createProduct(product);
      form.price.value = "$";
      form.productname.value = "";
      form.imageurl.value = "";
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("form", {
        name: "productAdd",
        onSubmit: this.handleSubmit,
        style: {
          fontSize: 18
        }
      }, React.createElement("div", {
        style: {
          display: 'inline-block',
          marginRight: '100px'
        }
      }, React.createElement("label", {
        style: {},
        for: "category"
      }, "Category ", React.createElement("br", null), React.createElement("select", {
        value: this.state.value,
        onChange: this.handleChange,
        style: {
          height: '25px',
          width: '160px'
        }
      }, React.createElement("option", {
        value: "shirts"
      }, "Shirts"), React.createElement("option", {
        value: "jeans"
      }, "Jeans"), React.createElement("option", {
        value: "jackets"
      }, "Jackets"), React.createElement("option", {
        value: "sweaters"
      }, "Sweaters"), React.createElement("option", {
        value: "accessories"
      }, "Accessories")))), React.createElement("div", {
        style: {
          display: 'inline-block',
          marginBottom: '10px'
        }
      }, React.createElement("label", {
        for: "price"
      }, "Price Per Unit"), " ", React.createElement("br", null), React.createElement("input", {
        id: "price",
        type: "text",
        name: "price",
        defaultValue: '$'
      })), React.createElement("br", null), React.createElement("div", {
        style: {
          display: 'inline-block',
          marginRight: '100px'
        }
      }, React.createElement("label", {
        for: "productname"
      }, "Product Name"), " ", React.createElement("br", null), React.createElement("input", {
        id: "productname",
        type: "text",
        name: "productname"
      })), React.createElement("div", {
        style: {
          display: 'inline-block',
          marginBottom: '10px'
        }
      }, React.createElement("label", {
        for: "imageurl"
      }, "Image URL"), " ", React.createElement("br", null), React.createElement("input", {
        id: "imageurl",
        type: "text",
        name: "imageurl"
      })), React.createElement("br", null), React.createElement("button", null, "Add Product"));
    }
  }]);

  return ProductAdd;
}(React.Component);

var ProductList =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(ProductList, _React$Component2);

  function ProductList() {
    var _this2;

    _classCallCheck(this, ProductList);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ProductList).call(this));
    _this2.state = {
      products: []
    };
    _this2.createProduct = _this2.createProduct.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(ProductList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this3 = this;

      setTimeout(function () {
        _this3.setState({
          products: _this3.state.products
        });
      }, 500);
    }
  }, {
    key: "createProduct",
    value: function createProduct(product) {
      product.id = this.state.products.length + 1;
      var newProductList = this.state.products.slice();
      newProductList.push(product);
      this.setState({
        products: newProductList
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement("h1", null, "My Company Inventory"), React.createElement("p", {
        style: {
          fontSize: 18
        }
      }, "Showing all available products"), React.createElement("hr", null), React.createElement(ProductTable, {
        products: this.state.products
      }), React.createElement("p", {
        style: {
          fontSize: 18
        }
      }, "Add a new product to inventory"), React.createElement("hr", null), React.createElement(ProductAdd, {
        createProduct: this.createProduct
      }));
    }
  }]);

  return ProductList;
}(React.Component);

var element = React.createElement(ProductList, null);
ReactDOM.render(element, document.getElementById('contents'));