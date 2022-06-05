import React, { Components } from "react";
import CartItemsList from "./CartItemsList";

class ShopCart extends Components {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    displayItemsList = () => {
        const data = this.state.data;
        if (!data) {
            return null
        }
        return data.map((e, i) => {
            return (<CartItemsList
                key={i}
                brand={e.brand}
                name={e.name}
                prices={e.price}
                attributes={e.attributes}
                choices={e.choices}
            />)
        }    
                

        )
        

    }
    
    render() {
        
        JSON.parse(localStorage.getItem('shopping_cart' || null))
            .then(result => this.setState({ data: result})
        
        );
        
        return (
        <div className="big_shopping_cart">
            <div className="big_shopping_cart_title">
                <h1>CART</h1>
            </div>
            <div className="big_shopping_cart_items_list">
                <div className="big_shopping_cart_items_detailes">
                    {this.displayItemsList()}
                </div>
                <div className="big_shopping_cart_counter"></div>
                <div className="big_shopping_cart_photo"></div>
            </div>

            </div>
        )

    }
}

export default ShopCart
