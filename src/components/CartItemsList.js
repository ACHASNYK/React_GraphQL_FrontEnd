import React, { Component } from "react";
import { connect } from 'react-redux';
import Cart_attributes from "./Cart_attributes";



class CartItemsList extends Component {

    constructor(props) {
    super(props);
    }
    
    render() {


        return (
            <div className="cart_item">
                <div className="cart_item_detailes">
                    <div className="cart_item_detailes_attr">
                        <div className="cart_item_detailes_atrr_title">
                            {this.props.brand}
                            {this.props.name}
                            {this.props.prices[this.props.index].currency.symbol}  {this.props.prices[this.props.index].amount}
                        </div>
                        <div className="cart_item_detailes_attr_icons">
                            <Cart_attributes
                                attributes={this.props.attributes}
                                choices={this.props.choices}
                            />
                        </div>
                    </div>
                    <div className="cart_item_detailes_butt"></div>
                    
                </div>
                
                <div className="cart-item_photo"></div>
            </div>


        )
    }
}

const mapStateToProps = state => {
    return {
        
        index: state.currencyid.value,
    }
};

export default connect(mapStateToProps,null)(CartItemsList)