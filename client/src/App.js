import React, { Component } from 'react';
import Products from './components/Product/Products'
import Filters from './components/Filter/Filters'
import Cart from './components/Cart/Cart'
import './index.css'

class App extends Component {

  state = {
    products : [],
    filtProducts : [],
    sortType : "",
    size : "",
    cart : []
  }

  componentWillMount() {
    fetch("http://localhost:5000/api/products")
    .then(res => res.json())
    .then(data => this.setState({
      products : data.products,
      filtProducts : data.products
    }))
  }

  changeSort = (e) => {
    this.setState({
      sortType : e.target.value
    })
    //console.log(e.target.value)
    this.sortList();
  }

  changeSize = (e) => {
    this.setState({
      size : e.target.value
    })
    //console.log(e.target.value)
    this.sortList();
  }

  sortList = () => {
    this.setState(state => {
      if(state.sortType !== ""){            //sort by price
        state.products.sort(function(a,b){
          if(state.sortType === "highToLow"){
            return b.price-a.price
          }
          if(state.sortType === "lowToHigh"){
            return a.price-b.price
          }
        })
      }else {               //sort by id
        state.products.sort(function(a,b){
          return a.id-b.id
        })
      }

      if(state.size !== ""){              // sort the already price-sorted products by size
          return {filtProducts : state.products.filter(a => {
            return (a.availableSizes.indexOf(state.size) >= 0)
          })
        }
         }
      return {
        filtProducts : state.products
      }

    })
    }

  removeFromCart = (e,item) => {
    const cart = this.state.cart.filter(incart => {
      return incart.id !== item.id
    })
    //console.log(cart)
    this.setState({
      cart : cart
    })
  }


  giveTotalItems = () => {
    var cartTotalcount = 0;
    const cartItems = this.state.cart
    for (var i=0;i<cartItems.length;i++) {
      cartTotalcount += cartItems[i].count
    }
    return cartTotalcount;
  }

  addToCart = (e,product) => {
    const cartItems = this.state.cart ;
    var productInCart = false;

    for (var i=0;i<cartItems.length;i++) {
      if(cartItems[i].id === product.id){
        productInCart = true;
        cartItems[i].count += 1;
      }
    }

    if(!productInCart){
      cartItems.push({...product, count : 1});
    }

    this.setState({
      cart : cartItems
    })
  }

  // <div className="col-md-3 col-sm-3 col-xs-3" >
  //   <Cart cartItems={this.state.cart} removeFromCart={this.removeFromCart} />
  // </div>


  render() {
    return (
      <div className="wrapper">



        <Cart cartItems={this.state.cart} removeFromCart={this.removeFromCart} />

        <div id="content">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">

                  <button type="button" id="sidebarCollapse" className="btn btn-info" style={{background:'#eac03b'}}>
                      <i className="fas fa-align-left"></i>
                      <span>Cart ({this.giveTotalItems()})</span>
                  </button>
              </div>
          </nav>

          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-3">
                <Filters count={this.state.filtProducts.length} changeSort={this.changeSort} changeSize={this.changeSize}/>
              </div>
              <div className="col-md-9 col-sm-9 col-xs-12">
                <Products filtProducts={this.state.filtProducts} addToCart={this.addToCart} />
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}


export default App;
