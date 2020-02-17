function ProductRow(props) {
  const product = props.product;
  return (
    <tr>
      <td>{product.productname}</td>
      <td>${product.price}</td>
      <td>{product.category}</td>
      <a href="javascript:void(0)" onClick={()=> window.open(product.imageurl)}><td width ="60">view</td></a>
    </tr>
  ); 
}

function ProductTable(props) {
  const productRows = props.products.map(product =>
    <ProductRow key={product.id} product={product} />
  );

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
    </table>
  );
}

class ProductAdd extends React.Component {
  constructor() {
    super();
    this.state = {value: 'shirts'};
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.productAdd;
    const product = {
      category: this.state.value , price: parseFloat(form.price.value.substring(1)), productname: form.productname.value, imageurl: form.imageurl.value, status: 'New',
    }
    this.props.createProduct(product);
    form.price.value = "$"; form.productname.value = ""; form.imageurl.value = "";
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }
  
  render() {
    return (
      <form name="productAdd" onSubmit={this.handleSubmit} style ={{fontSize:18}}>
        <div style = {{display:'inline-block', marginRight:'100px'}}> 
	  <label style={{}} for="category">Category <br />
            <select value={this.state.value} onChange={this.handleChange}  style = {{height:'25px', width: '160px'}}>
              <option value="shirts">Shirts</option>
              <option value="jeans">Jeans</option>
              <option value="jackets">Jackets</option>
              <option value="sweaters">Sweaters</option>
              <option value="accessories">Accessories</option>
            </select>
          </label>
        </div>
        <div style ={{display : 'inline-block', marginBottom:'10px'}}> 
	  <label for="price">Price Per Unit</label> <br />
          <input id="price" type="text" name="price" defaultValue={'$'} />
        </div>
        <br />
        <div style ={{display : 'inline-block', marginRight:'100px'}}> 
	  <label for="productname">Product Name</label> <br />
          <input id="productname" type="text" name="productname" />
        </div>
        <div style ={{display : 'inline-block', marginBottom:'10px'}}> 
	  <label for="imageurl">Image URL</label> <br />
          <input id="imageurl" type="text" name="imageurl" />
        </div>
        <br />
        <button>Add Product</button>
      </form>
    );
  }
}

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = { products: [] };
    this.createProduct = this.createProduct.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({ products: this.state.products });
    }, 500);
  }

  createProduct(product) {
    product.id = this.state.products.length + 1;
    const newProductList = this.state.products.slice();
    newProductList.push(product);
    this.setState({ products: newProductList });
  }

  render() {
    return (
      <React.Fragment>
        <h1>My Company Inventory</h1>
        <p style={{fontSize:18}}>Showing all available products</p>
        <hr />
        <ProductTable products={this.state.products} />
        <p style={{fontSize:18}}>Add a new product to inventory</p>
        <hr />
	<ProductAdd createProduct={this.createProduct} />
      </React.Fragment>
    );
  }
}

const element = <ProductList />;

ReactDOM.render(element, document.getElementById('contents'));