import React from 'react';


const Products = ({filtProducts}) => {
  const ProductList = filtProducts.map(product => {
    var imagePath = "images/" + product.sku + "_1.jpg"

    return (
    <div className="col-md-4" key={product.id}>
      <div className="text-center">
        <a>
          <img src={imagePath} alt={product.title} />
          <p>{product.title}</p>
        </a>
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
