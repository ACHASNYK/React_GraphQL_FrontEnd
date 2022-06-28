import React, { Component } from "react";
import { Link } from "react-router-dom";
import BigCartItemsList from "./BigCartItemsList";
// import CartItemsList from './CartItemsList'
import {increment_count, decrement_count} from '../redux/counter';
import {connect} from 'react-redux';

class ShopCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            counter: null,
        }
    }

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
                prices={e.price}
                attributes={e.attributes}
                choices={e.choices}
                photo={e.photo}
                count={e.items_count}
                incrementItemsCount = {this.incrementItemsCount}
                decrementItemsCount = {this.decrementItemsCount}
            />)
        }    
                

        )
        

    }

    incrementItemsCount= (e) => {
        console.log(e)
        let data = this.state.data;
        let counter = sessionStorage.getItem('counter');
        data?.map(item => {
            if (item.id === e) {
                   sessionStorage.setItem('counter', counter +=1 );
                return {...item, items_count: item.items_count+=1};
            }
          console.log("increment", data)   
        })
        return sessionStorage.setItem('shoping_cart', JSON.stringify(data)), increment_count();
    }

    decrementItemsCount = (e) => {
        console.log(e)
        let data = this.state.data;
        let counter = sessionStorage.getItem('counter');
        data?.map(item => {
            if(item.id=== e && item.items_count>=2) {
                sessionStorage.setItem('counter', counter-=1);
                return {...item, items_count: item.items_count-=1 };
            }
            else if(item.id===e && item.items_count===1){
                sessionStorage.setItem('counter', counter-=1);
                data.slice(data.indexOf(item), 1);
            }
            console.log("decrement", data)
        })  
      return  sessionStorage.setItem('shoping_cart', JSON.stringify(data)), decrement_count();
     
    }
    componentDidUpdate(prevProps) {
        if(this.props.counter!==prevProps.counter) {
            this.setState = ({
                counter: this.props.counter,
            })
        }
    }
    

    componentDidMount() {
        this.setState({data: JSON.parse(sessionStorage.getItem("shopping_cart" || []))})
    }
    render() {
        
        // const data = JSON.parse(localStorage.getItem('shopping_cart' || null))           
        // ;
            
        
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
                {/* <Link to="/"> */}
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
        
    }
    
};

const mapDispatchToProps = {increment_count, decrement_count};

export default connect(mapStateToProps, mapDispatchToProps)(ShopCart)
