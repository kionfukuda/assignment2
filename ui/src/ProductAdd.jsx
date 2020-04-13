/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';

export default class ProductAdd extends React.Component {
  constructor() {
    super();
    this.state = { value: 'shirts' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.productAdd;
    const product = {
      category: this.state.value,
      price: parseFloat(form.price.value.substring(1)),
      name: form.name.value,
      image: form.image.value,
      status: 'New',
    };
    const { createProduct } = this.props;
    createProduct(product);
    form.price.value = '$'; form.name.value = ''; form.image.value = '';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form name="productAdd" onSubmit={this.handleSubmit} style={{ fontSize: 18 }}>
        <div style={{ display: 'inline-block', marginRight: '100px' }}>
          <label style={{}} htmlFor="category">
            Category
            <br />
            <select value={this.state.value} onChange={this.handleChange} style={{ height: '25px', width: '160px' }}>
              <option value="shirts">Shirts</option>
              <option value="jeans">Jeans</option>
              <option value="jackets">Jackets</option>
              <option value="sweaters">Sweaters</option>
              <option value="accessories">Accessories</option>
            </select>
          </label>
        </div>
        <div style={{ display: 'inline-block', marginBottom: '10px' }}>
          <label htmlFor="price">Price Per Unit</label>
          <br />
          <input id="price" type="text" name="price" defaultValue="$" />
        </div>
        <br />
        <div style={{ display: 'inline-block', marginRight: '100px' }}>
          <label htmlFor="name">Product Name</label>
          <br />
          <input id="name" type="text" name="name" />
        </div>
        <div style={{ display: 'inline-block', marginBottom: '10px' }}>
          <label htmlFor="image">Image URL</label>
          <br />
          <input id="image" type="text" name="image" />
        </div>
        <br />
        <button type="submit">Add Product</button>
      </form>
    );
  }
}
