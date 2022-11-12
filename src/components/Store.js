import React, { Component} from 'react';
import '../App.css';

// Define baseURL
let baseURL = process.env.REACT_APP_BACKEND_URL

//Note it is intentional to use class component here instead of function component + useState hook, because of issues with converting data from back end
class Store extends Component {
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
        }
    }

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

    componentDidMount() {
        this.getProducts();
    }

    render() {
        return (
            <>
                <h1>Store</h1>
                
                {this.state.productList.map((product, index) => {
                    return(
                        <p key={index} >{product.name}</p>
                    )
                })}
            </>
        )
    }
}
  
export default Store;