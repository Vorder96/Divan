import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всі категорії'
                },
                {
                    key: 'refrigerators',
                    name: 'Холодильники'
                },
                {
                    key: 'washing-machines',
                    name: 'Пральні машини'
                },
                {
                    key: 'steam-ovens',
                    name: 'Духові печі'
                },
                {
                    key: 'gas-stoves',
                    name: 'Газові плити'
                },
                {
                    key: 'vacuum-cleaners',
                    name: 'Пилососи'
                },
                {
                    key: 'microwave-ovens',
                    name: 'Мікрохвильові печі'
                },
                {
                    key: 'blenders',
                    name: 'Блендери'
                },
                {
                    key: 'air-conditioners',
                    name: 'Кондиціонери'
                },
                {
                    key: 'coffee-machines',
                    name: 'Кавоварки'
                },
            ]
        }
    }
  render(){
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.choiceCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories