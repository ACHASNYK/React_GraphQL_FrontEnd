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
                            <div className="cart_item_detailes_atrr_title_text">
                                {this.props.brand}
                                {this.props.name}
                            </div>
                            <div className="cart_item_detailes_atrr_title_amount">
                            {this.props.prices[this.props.index].currency.symbol}  {this.props.prices[this.props.index].amount}
                            </div>
                        </div>
                        <div className="cart_item_detailes_attr_icons">
                            <Cart_attributes
                                attributes={this.props.attributes}
                                choices={this.props.choices}
                            />
                        </div>
                    </div>
                    <div className="cart_item_detailes_butt">
                        <div className="cart_item_detailes_butt_incr">+</div>
                        <div className="cart_item_detailes_butt_counter">{this.props.items}</div>
                        <div className="cart_item_detailes_butt_decr">-</div>
                    </div>
                    
                </div>
                
                <div className="cart-item_photo">
                    <img className="modal_cart_item_photo" alt="product photo" src={this.props.photo} />
                </div>
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