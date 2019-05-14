import React, { Component } from 'react';
import './filterStyle.css'

class Filters extends Component {

  render () {
    return (

    <div className="row">

      <div className="col-md-12 col-sm-12 col-xs-6 sort-price">

        <form className="sort-form">
      <div className="form-group">
        <label htmlFor="inputState">Sort by Price: </label>
        <select id="inputState" onChange={this.props.changeSort} className="form-control">
          <option value="" >Select</option>
          <option value="highToLow">Highest to lowest</option>
          <option value="lowToHigh">Lowest to Highest</option>
        </select>
      </div>

        </form>

      </div>

      <div className="col-md-12 col-sm-12 col-xs-6 sort-size">
        <form className="sort-form">

          <div className="form-group">
            <label htmlFor="inputState">Sort by Size: </label>
            <select id="inputState" onChange={this.props.changeSize} className="form-control">
              <option value="" >Select</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="ML">ML</option>
              <option value="L">L</option>
              <option value="X">X</option>
              <option value="XL">Xl</option>
              <option value="XXL">XXL</option>
            </select>
          </div>

        </form>
      </div>

      <div className="col-md-12 item-count">
        <p> {this.props.count} Items found </p>
      </div>

    </div>
    )
}}


export default Filters
