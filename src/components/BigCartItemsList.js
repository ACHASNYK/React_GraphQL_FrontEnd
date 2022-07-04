import React, { Component } from "react";
import { connect } from 'react-redux';
import {increment_count, decrement_count} from '../redux/counter';
import BigCart_attributes from "./BigCart_attributes";
import SlideShow from './slideshow';


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
                            {this.props.price[this.props.index].currency.symbol}  {this.props.price[this.props.index].amount}
                            </div>
                        </div>
                        <div className="big_cart_item_detailes_attr_icons">
                            <BigCart_attributes
                                attributes={this.props.attributes}
                                
                            />
                        </div>
                    </div>
                </div>   
                
                <div className="big_cart_item_detailes_butt">
                    <div className="big_cart_item_detailes_butt_incr" onClick={() => { this.props.incrementItemsCount(this.props.id)}} > + </div>
                    <div className="big_cart_item_detailes_butt_counter">{this.props.count} </div>
                    <div className="big_cart_item_detailes_butt_decr" onClick={() => { this.props.decrementItemsCount(this.props.id)}} > - </div>
                </div>
                 
                <div className="big_cart-item_photo">
                    <SlideShow photo={this.props.photo } />
                </div>
            </div>


        )
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter.value,
        index: state.currencyid.value,
    }
};

const mapDispatchToProps = {increment_count, decrement_count}

export default connect(mapStateToProps, mapDispatchToProps)(BigCartItemsList)