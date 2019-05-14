import React from 'react';


const Cart = ({cartItems,removeFromCart}) => {
  var nos = (<p>You have {cartItems.length} items in your cart.</p>)
  var total = 0;
  for(var i=0;i<cartItems.length;i++){
    total = total + cartItems[i].price*cartItems[i].count
  }

  return (
    <div>
      {nos}

      {(cartItems.length) ? (
        <div>
          <ul>
            {cartItems.map(item => {
              return (
                <div key={item.id}>
                <li>{item.title}<button onClick={(e)=>{removeFromCart(e,item)}}>Remove from Cart</button></li>
                <p>{item.count} x {item.price} = {item.count*item.price}</p>
                </div>
              )
            })}
          </ul>
        </div>
      ) : ""}

      <label>Total: {total} </label>
    </div>
  )
}



export default Cart
