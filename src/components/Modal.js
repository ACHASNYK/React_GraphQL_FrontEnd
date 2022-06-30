import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { set_modal } from '../redux/modal';
import { productById } from '../queries/query';
import CartItemsList from "./CartItemsList";




class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            counter: 0,
        }
        
    }

    
    
    componentDidUpdate(prevProps) {
        if (this.props.modal !== prevProps.modal) {
            this.setState({data: JSON.parse(sessionStorage.getItem('shopping_cart'))||[],
        counter: sessionStorage.getItem('counter')||0})
        
            
        }

    }
    displayItemsList() {
        const data = this.state.data;
        
        if (data===undefined) {
            return ("Loading...")
        }
        return data.map((e, i) => {
            
            return (<CartItemsList
                key={i}
                brand={e.brand}
                name={e.name}
                prices={e.price}
                attributes={e.attributes}
                choices={e.choices}
                photo={e.photo}
                items={e.items_count}
            />)
        }    
                

        )
        

    }
    totalAmount() {
        const data = this.state.data;
        let price = []
        let count = []
        let symbol = ''
        let amount = 0
        data.map(e => {
            price.push(e.price[this.props.index].amount);
            count.push(e.items_count);
            symbol = e.price[this.props.index].currency.symbol;
        })
        console.log(price, count)
        for (let i = 0; i < price.length; ++i){
            amount += (price[i] * count[i]);
            
            console.log(amount.toFixed(2))
        }
        amount = amount.toFixed(2);
        return { amount, symbol }
    }

    componentDidMount() {
        
             
        this.setState({
            data: JSON.parse(sessionStorage.getItem('shopping_cart')) || [],
            counter: sessionStorage.getItem('counter')||0})
       
    }
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.data !== this.state.data){
    //     this.setState({data: JSON.parse(localStorage.getItem('shopping_cart')),})
    //     }
    // }
    

    render() {
        const { amount, symbol } = this.totalAmount();
        const showHideClassName = this.props.modal ? "modal display-block" : "modal display-none";
        return ReactDOM.createPortal(
            <div className={showHideClassName} onClick={() => { this.props.set_modal(false) }} >
                <div className="modal-main">
                    <div className="modal_title"><b>My Bag</b>, {this.state.counter}  items</div>
                    <div className="modal_cart_items_list">
                        {this.displayItemsList()}
                    </div>
                    <div className="modal_total_price">
                        <div className="modal_total_price_label">
                                Total
                        </div>
                        <div className="modal_total_price_amount">
                            {symbol}  { amount }
                        </div>

                    </div>
                    <div className="modal_buttons_group">
                        <button type="button" onClick={() => { this.props.set_modal(false) }}>close</button>
                        <Link to="/shopcart" className="router_links">
                            <button type="button" onClick={() => { this.props.set_modal(false) }}>VIEW BAG</button>
                        </Link>
                    </div>
                </div>    
            </div>,
            document.getElementById('portal')
            
        )
    }
}
// const Data = JSON.parse(localStorage.getItem('shopping_cart' || null));
const mapStateToProps = state => {
    return {
        modal: state.modal.value,
        index: state.currencyid.value
    }
};

// ReactDOM.createPortal
// document.getElementById('portal'
const mapDispatchToProps = { set_modal };

export default connect(mapStateToProps,mapDispatchToProps)(Modal)