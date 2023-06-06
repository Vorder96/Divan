import React, { Component } from 'react'
import {FaTrash} from 'react-icons/fa'

export class Order extends Component {
  render() {
    return (
      <div className='product'>
        <img src={"./img/" + this.props.product.img}/>
        <h2>{this.props.product.title}</h2>
        <b>{this.props.product.price} грн.</b>
        <FaTrash className='delete-butt' onClick={() => this.props.toDelete(this.props.product.id)}/>
      </div>
    )
  }
}

export default Order