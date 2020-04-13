/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ProductRow = withRouter(({ 
  product, deleteProduct, index, }) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>
        $
        {product.price}
      </td>
      <td>{product.category}</td>
      <td width="60">
        <a href="javascript:void(0)" onClick={() => window.open(product.image)}>view</a>
      </td>
      <td>
        <Link to={`/edit/${product.id}`}>Edit</Link>
        {' | '}
        <button type="button" onClick={() => { deleteProduct(index); }}>
          Delete
        </button>
      </td>
    </tr>
  );
});

export default function ProductTable({ products, deleteProduct }) {
  const productRows = products.map((product, index) => (
    <ProductRow 
      key={product.id} 
      product={product} 
      deleteProduct={deleteProduct}
      index={index}
    />
  ));

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
    </table>
  );
}
