import React from 'react';


const Products = ({filtProducts,addToCart}) => {
  const ProductList = filtProducts.map(product => {
    var imagePath = "images/" + product.sku + "_2.jpg"
    if(product.isFreeShipping){
      var shipping = "Free shipping"
    }else{
      var shipping = null
    }

    return (
    <div className="col-md-4" key={product.id}>
      <div className="text-center">
        <a onClick={(e) => {addToCart(e,product)}}>
          <img src={imagePath} alt={product.title} />
          <p>{product.title}</p>
        </a>
        <div className="row">
          <p>{product.price}</p>
          <button className="btn btn-default" onClick={(e) => {addToCart(e,product)}} >Add to cart</button>
        </div>
        <p>{shipping}</p>
      </div>
    </div>
  )
  })

  return (
    <div className="row">
      {ProductList}
    </div>
  )
}


export default Products
