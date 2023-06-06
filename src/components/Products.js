import React, { Component } from 'react';
import Product from "./Product";

export class Products extends Component {
  render() {
    return (
      <main>
        {this.props.products.map(el =>(
            <Product toCard={this.props.toCard} key={el.id} product={el} toAdd={this.props.toAdd}/>
        ))}
      </main>
    )
  }
}

export default Products