import React, { Components } from "react";
import CartItemsList from "./CartItemsList";

class Shopping_Cart extends Components {

    displayItemsList() {
        if (!Data) {
            return null
        }
        return Data.map((e, i) => {
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
        
        const Data = JSON.parse(localStorage.getItem('shopping_cart' || null));

        <div className="big_shopping_cart">
            <div className="big_shopping_cart_title">
                <h1>CART</h1>
            </div>
            <div className="big_shopping_cart_items">
                {this.displayItemsList()}
            </div>

        </div>

    }
}
