import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import Store from './components/Store'
import Product from './components/Product'
import Contact from './components/Contact'
import AdminLogin from './components/AdminLogin'
import AdminDashboard from './components/AdminDashboard'

// Using React router to allow different URLs
import {
  Routes,
  Route,
} from "react-router-dom";

// Define baseURL
let backendBaseURL = process.env.REACT_APP_BACKEND_URL

// Note it is intentional to use class component here instead of function component + useState hook, because of issues with converting data from back end
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
      }],
    };
  }

  // PRODUCT HANDLERS
  // Getting products from the database and updating state
  getProducts = () => {
    var headers = {}
    fetch(backendBaseURL, {
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
            // Grabbing data from db and updating state when components mount
            productList: data.allProducts
        })        
    });
  }

  // Handle add product method called from admin dashboard
  handleAddProduct = (product) => {
    const copyProducts = [...this.state.productList.products]
    copyProducts.unshift(product)
    this.productList.setState({
      productList: copyProducts,
    })
  }

  // When app cpmponent mounts, run get products method
  componentDidMount() {
      this.getProducts();
  }
  
  render() {
    return (
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/store" element={<Store
            productList={this.state.productList}
          />} />
          <Route path="/store/:id" element={<Product
            productList={this.state.productList}
          />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard
            productList={this.state.productList}
            admin={this.state.admin}
          />} />
        </Routes>
      </>
    )
  }
}

export default App;