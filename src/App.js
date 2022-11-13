import React, {Component} from 'react';
import './App.css';
import Home from './components/Home'
import Store from './components/Store'
import Contact from './components/Contact'
import AdminDashboard from './components/AdminDashboard'

// Using React router to allow different URLs
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";

// Define baseURL
let baseURL = process.env.REACT_APP_BACKEND_URL

//Note it is intentional to use class component here instead of function component + useState hook, because of issues with converting data from back end
class App extends Component {
  constructor(props) {
		super(props);
    this.state = {
      productList: [{
          name: '',
          description: '',
          image: '',
          price: '',
          inStock: ''
      }]
    };
  }

  //PRODUCT HANDLERS
  //Getting products from the database and updating state
  getProducts = () => {
    var headers = {}
    fetch(baseURL, {
        method : "GET",
        mode: 'cors',
        headers: headers
    })

    .then((res) => {
        if (res.status === 200) {
            return res.json();
        } else {
            return [];
        }
    })

    .then((data) => {    
        this.setState({
            // grabbing data from db and updating state when components mount
            productList: data.allProducts
        })        
    });
  }

  handleAddProduct = (product) => {
    const copyProducts = [...this.state.productList.products]
    copyProducts.unshift(product)
    this.productList.setState({
      productList: copyProducts,
    })
  }

  componentDidMount() {
      this.getProducts();
  }
  
  render() {
  return (
  <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/store">Store</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/store" element={<Store
        productList={this.state.productList}
      />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/admin/dashboard" element={<AdminDashboard
        productList={this.state.productList}
      />} />
    </Routes>
  </>
  );
  }
}

export default App;