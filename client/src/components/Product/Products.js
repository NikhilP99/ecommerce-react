import React from 'react';
import './productStyle.css'

const Products = ({filtProducts,addToCart}) => {
  const ProductList = filtProducts.map(product => {
    var imagePath = "images/" + product.sku + "_1.jpg"
    if(product.isFreeShipping){
      var shipping = "Free shipping"
    }else{
      var shipping = null
    }

    var shippingtag = (shipping!==null) ? (<span className="shipping">{shipping}</span>) : null

    return (
    <div className="col-md-4 col-sm-4 col-xs-6 text-center product" onClick={(e) => {addToCart(e,product)}} key={product.id}>

          <img className="product-image" src={imagePath} alt={product.title} />
          <p className="title">{product.title}</p>
        <div>
          <p> <small className="dollar">$</small><span className="price"> {product.price}</span></p>
          {shippingtag}
          <div className="button_cont" align="center"><a onClick={(e) => {addToCart(e,product)}} className="example_c">Add to Cart</a></div>
        </div>

    </div>
  )
  })

  return (
    <div className="product-container">
      {ProductList}
    </div>
  )
}


export default Products
// <button className="btn btn-default" onClick={(e) => {addToCart(e,product)}} >Add to cart</button>
