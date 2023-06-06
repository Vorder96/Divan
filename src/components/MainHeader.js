import React, { useState } from 'react';
import { MdShoppingCart } from "react-icons/md";
import Order from './Order';

const lookOrders = (props) => {
    let sum = 0
    props.orders.forEach(el => sum += Number.parseFloat(el.price))
    return (
        <div>
            {props.orders.map(el => (
                <Order toDelete={props.toDelete} key = {el.id} product={el}/>
            ))}
            <p className='sum'>Всього: {sum} грн.</p>
        </div>
    )
}

const lookEmpty = () => {
    return (
        <div className='cart-empty'>
            <h2>В кошику немає товарів</h2>
        </div>
    )
}

export default function MainHeader(props) {
    let [toCart, setToCart] = useState(false);
  return (
    <header>
        <div>
            <span className='logo'>
                Divan
            </span>
            <MdShoppingCart onClick={() => setToCart(toCart = !toCart)} className={`icon-logo ${toCart && 'active'}`}/>

            {toCart && (
                <div className='cart'>
                {props.orders.length > 0 ? lookOrders(props) : lookEmpty()}
                </div>
            )}
        </div>
        <div className='banner'>
        </div>
    </header>
  )
}
