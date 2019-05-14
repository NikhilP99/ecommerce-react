import React from 'react';
import './cartStyle.css'


const Cart = ({cartItems,removeFromCart}) => {

  var cartTotalcount = 0;
  for (var i=0;i<cartItems.length;i++) {
    cartTotalcount += cartItems[i].count
  }

  var nos = (<p className="headin" >You have {cartTotalcount} items in your cart.</p>)
  var totalcents = 0;
  for(var i=0;i<cartItems.length;i++){
    totalcents = totalcents + cartItems[i].price*100*cartItems[i].count
  }

  const total = totalcents/100;


  // <ul>
  //   {cartItems.map(item => {
  //     return (
  //       <div key={item.id}>
  //       <li>{item.title}<button onClick={(e)=>{removeFromCart(e,item)}}>Remove from Cart</button></li>
  //       <p>{item.count} x {item.price} = {item.count*item.price}</p>
  //       <label>Total: {total} </label>
  //       </div>
  //     )
  //   })}
  // </ul>

  return (
    <div>

      <nav id="sidebar">

          <div id="dismiss">
              <i className="fas fa-arrow-left"></i>
          </div>

          <div className="sidebar-header">
              <h4>{nos}</h4>
          </div>


          <ul className="list-unstyled components">
            {cartItems.map(item => {
                return (
                  <div key={item.id}>
                  <li>{item.title}<button className="btn btn-warning" style={ { float:'right', margin: '10px'}} onClick={(e)=>{removeFromCart(e,item)}}>Remove</button></li>
                  <p>{item.count} x {item.price} = {(item.price*100*item.count)/100}</p>

                  </div>
                )
              })}
          </ul>

          <ul className="list-unstyled CTAs">
              <li className="total">
                  Total: {total}
              </li>

          </ul>
      </nav>
    </div>
  )
}
//
// {(cartItems.length) ? (
//
// ) : ""}


export default Cart
