import React, { Component } from "react";
import { connect } from 'react-redux';
import BigCart_attributes from "./BigCart_attributes";



class BigCartItemsList extends Component {

    constructor(props) {
    super(props);
    }

       
    
    render() {
        
        return (
            <div className="big_cart_item">
                <div className="big_cart_item_detailes">
                    <div className="big_cart_item_detailes_attr">
                        <div className="big_cart_item_detailes_atrr_title">
                            <div className="big_cart_item_detailes_atrr_title_text">
                                {this.props.brand}
                                {this.props.name}
                            </div>
                            <div className="big_cart_item_detailes_atrr_title_amount">
                            {this.props.prices[this.props.index].currency.symbol}  {this.props.prices[this.props.index].amount}
                            </div>
                        </div>
                        <div className="big_cart_item_detailes_attr_icons">
                            <BigCart_attributes
                                attributes={this.props.attributes}
                                choices={this.props.choices}
                            />
                        </div>
                    </div>
                    <div className="big_cart_item_detailes_butt"></div>
                    
                </div>
                
                <div className="big_cart-item_photo">
                    <img className="shop_cart_item_photo" alt="product photo" src={this.props.photo[0]} />
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

export default connect(mapStateToProps,null)(BigCartItemsList)