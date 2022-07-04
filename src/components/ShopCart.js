import React, { Component } from "react";
import { Link } from "react-router-dom";
import BigCartItemsList from "./BigCartItemsList";
// import CartItemsList from './CartItemsList'
import {increment_count, decrement_count} from '../redux/counter';
import { connect } from 'react-redux';
import { totalAmount } from '../utilities/countershandler';


class ShopCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            
        }
    }

    // totalAmount() {
    //     const data = this.state.data;
    //     let price = []
    //     let count = []
    //     let symbol = ''
    //     let amount = 0
    //     data.map(e => {
    //         price.push(e.price[this.props.index].amount);
    //         count.push(e.items_count);
    //         symbol = e.price[this.props.index].currency.symbol;
    //     })
    //     console.log(price, count)
    //     for (let i = 0; i < price.length; ++i){
    //         amount += (price[i] * count[i]);
            
    //         console.log(amount.toFixed(2))
    //     }
    //     amount = amount.toFixed(2);
    //     return { amount, symbol }
    // }

    displayItemsList = () => {
        const data = this.state.data;

        if (data===undefined) {
            return ("Loading...")
        }
        return data?.map((e, i) => {
            return (<BigCartItemsList
                key={i}
                id={e.id}
                brand={e.brand}
                name={e.name}
                price={e.price}
                attributes={e.attributes}
                choices={e.choices}
                photo={e.photo}
                count={e.items_count}
                data={data }
                incrementItemsCount = {this.incrementItemsCount}
                decrementItemsCount = {this.decrementItemsCount}
            />)
        }    
                

        )
        

    }

    incrementItemsCount= (e) => {
        console.log(e)
        let data = this.state.data;
        let counter = JSON.parse(sessionStorage.getItem('counter'));
        data?.map(item => {
            if (item.id === e) {
                   sessionStorage.setItem('counter', JSON.stringify(counter +=1) );
                return {...item, items_count: item.items_count+=1};
            }
          console.log("increment", data)   
        })
        return sessionStorage.setItem('shopping_cart', JSON.stringify(data)), console.log(data), this.props.increment_count();
    }

    decrementItemsCount = (e) => {
        console.log(e)
        let data = this.state.data;
        let counter = JSON.parse(sessionStorage.getItem('counter'));
        data?.map(item => {
            if(item.id=== e && item.items_count>=2) {
                sessionStorage.setItem('counter', JSON.stringify(counter-=1));
                return {...item, items_count: item.items_count-=1 };
            }
            else if(item.id===e && item.items_count===1){
                sessionStorage.setItem('counter', JSON.stringify(counter-=1));
                data.splice(data.indexOf(item), 1);
                console.log("erase". data)
            }
            console.log("decrement", data)
        })  
      return  sessionStorage.setItem('shopping_cart', JSON.stringify(data)), console.log(data), this.props.decrement_count();
     
    }
    // componentDidUpdate(prevProps) {
    //     if(this.props.counter!==prevProps.counter) {
    //         this.setState = ({
    //             counter: this.props.counter,
    //         })
    //     }
    // }
    

    componentDidMount() {
        this.setState({data: JSON.parse(sessionStorage.getItem("shopping_cart" || []))})
    }
    render() {
        
        const { amount, symbol } = totalAmount(this.state.data, this.props.index);
        const counter = JSON.parse(sessionStorage.getItem('counter'))
            
        
        return (
        
            <div className="big_shopping_cart">
            <div className="big_shopping_cart_title">
                <p>CART</p>
            </div>
            <div className="big_shopping_cart_items_list">
                <div className="big_shopping_cart_items_detailes">
                    {this.displayItemsList()}
                </div>
                
            </div>
                <div className="big_shopping_cart_box" >
                    <div className="big_shopping_cart_box_text">
                        <div className="big_shopping_cart_box_text_tax">
                            Tax 21%:{(amount/100*21).toFixed(2) }
                        </div>
                        <div className="big_shopping_cart_box_text_qnt">
                            Quantity: {counter }
                        </div>
                        <div className="big_shopping_cart_box_text_total">
                            Total: {symbol} { amount}
                        </div>

                    </div>

                </div>
                <div>
                    <button type="button">ORDER</button>
                </div>
                {/* </Link> */}
        </div>
        )

    }
}
const mapStateToProps = (state) => {
    return {
        counter: state.counter.value,
        index : state.currencyid.value
        
    }
    
};

const mapDispatchToProps = {increment_count, decrement_count};

export default connect(mapStateToProps, mapDispatchToProps)(ShopCart)
