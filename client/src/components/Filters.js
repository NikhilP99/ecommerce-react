import React, { Component } from 'react';

class Filters extends Component {

  render () {
    return (
    <div className="row">

      <div className="col-md-4 item-count">
        <p> {this.props.count} Items found </p>
      </div>

      <div className="col-md-4 sort-price">
        <form className="sort-form">
          <label>Sort by price:</label>
          <select onChange={this.props.changeSort}>
            <option value="">Select</option>
            <option value="highToLow">Highest to lowest</option>
            <option value="lowToHigh">Lowest to Highest</option>
          </select>
        </form>
      </div>

      <div className="col-md-4 sort-size">
        <form className="sort-form">
          <label>Sort by size:</label>
          <select onChange={this.props.changeSize}>
            <option value="">Select</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="ML">ML</option>
            <option value="L">L</option>
            <option value="X">X</option>
            <option value="XL">Xl</option>
            <option value="XXL">XXL</option>
          </select>
        </form>
      </div>

    </div>
    )
}}


export default Filters
