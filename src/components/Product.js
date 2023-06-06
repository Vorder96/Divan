import React, { Component } from 'react'

export class Product extends Component {
  render() {
    return (
      <div className='product'>
        <div className='product-img'>
          <img src={"./img/" + this.props.product.img} onClick={() => this.props.toCard(this.props.product)}/>
        </div>
        <h2>{this.props.product.title}</h2>
        <p>{this.props.product.desc}</p>
        <b>{this.props.product.price} грн.</b>
        <div className='cart_butt' onClick={() => this.props.toAdd(this.props.product)}>В кошик</div>
    </div>
    )
  }
}

export default Product