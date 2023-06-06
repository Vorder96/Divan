import React from "react";
import MainHeader from "./components/MainHeader";
import Products from "./components/Products";
import MainFooter from "./components/MainFooter";
import Categories from "./components/Categories";
import ProductCard from "./components/ProductCard";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      selectedProduct: [],
      products: [
        {
          id: 1,
          title: 'Холодильник Bosh',
          img: 'холодильник_bosh.webp',
          desc: 'Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
          category: 'refrigerators',
          price: '19500'
        },
        {
          id: 2,
          title: 'Пральна машина Bosh',
          img: 'пральна_машина_bosh.webp',
          desc: 'Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
          category: 'washing-machines',
          price: '14000'
        },
        {
          id: 3,
          title: 'Духова піч Bosh',
          img: 'духова_піч_bosh.webp',
          desc: 'Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
          category: 'steam-ovens',
          price: '16900'
        },
        {
          id: 4,
          title: 'Газова плита Bosh',
          img: 'газова_плита_bosh.webp',
          desc: 'Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
          category: 'gas-stoves',
          price: '8700'
        },
        {
          id: 5,
          title: 'Робот-пилосос Rowenta X-PLORER Serie 75 S',
          img: '286228885.webp',
          desc: 'Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
          category: 'vacuum-cleaners',
          price: '12999'
        },
        {
          id: 6,
          title: 'Мікрохвильова піч GORENJE',
          img: '285898028.webp',
          desc: 'Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
          category: 'microwave-ovens',
          price: '2590'
        },
        {
          id: 7,
          title: 'Блендер TEFAL Easychef 3в1',
          img: '180841043.webp',
          desc: 'Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
          category: 'blenders',
          price: '1490'
        },
        {
          id: 8,
          title: 'Кондиціонер SAMSUNG',
          img: '169565453.webp',
          desc: 'Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
          category: 'air-conditioners',
          price: '17499'
        },
        {
          id: 9,
          title: 'Кавомашина PHILIPS Series 3200',
          img: '266956279.webp',
          desc: 'Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
          category: 'coffee-machines',
          price: '19999'
        },
      ],
      productCard: false,
      infoProduct: {}
    }
    this.state.selectedProduct = this.state.products;
    this.setOrder = this.setOrder.bind(this)
    this.orderDelete = this.orderDelete.bind(this)
    this.choiceCategory = this.choiceCategory.bind(this)
    this.toCard = this.toCard.bind(this)
  }
  render() {
    return (
     <div className="wrapper">
       <MainHeader orders={this.state.orders} toDelete={this.orderDelete}/>
       <Categories choiceCategory={this.choiceCategory} />
       <Products toCard={this.toCard} products={this.state.selectedProduct} toAdd={this.setOrder} />
       {this.state.productCard && <ProductCard toCard={this.toCard} toAdd={this.setOrder} product={this.state.infoProduct}/>}
       <MainFooter />
      </div>
   );
  }

  toCard(product) {
    this.setState({infoProduct: product})
    this.setState({productCard: !this.state.productCard})
  }

  choiceCategory(category) {
    if(category === 'all') {
      this.setState({selectedProduct: this.state.products})
      return
    }
    this.setState({
      selectedProduct: this.state.products.filter(el => el.category === category)
    })
  }

  orderDelete(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  setOrder(product) {
    let isOrder = false
    this.state.orders.forEach(el => {
      if(el.id === product.id)
      isOrder = true
    })
    if(!isOrder)
    this.setState({orders: [...this.state.orders, product]})
  }
}

export default App;
