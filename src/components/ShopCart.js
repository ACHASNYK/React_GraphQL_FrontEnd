import React, { Component } from "react";
import { Link } from "react-router-dom";
import BigCartItemsList from "./BigCartItemsList";
// import CartItemsList from './CartItemsList'

class ShopCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    displayItemsList = () => {
        const data = this.state.data;

        if (data==undefined) {
            return ("Loading...")
        }
        return data?.map((e, i) => {
            return (<BigCartItemsList
                key={i}
                brand={e.brand}
                name={e.name}
                prices={e.price}
                attributes={e.attributes}
                choices={e.choices}
                photo={e.photo}
                count={e.items_count}
            />)
        }    
                

        )
        

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
                <div className="big_shopping_cart_counter"></div>
                <div className="big_shopping_cart_photo"></div>
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

export default ShopCart
