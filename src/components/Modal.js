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
            dataIsLoaded: false,
        }
    }

    
    
    componentDidUpdate(prevProps) {
        if (this.props.modal !== prevProps.modal) {
            this.setState({data: JSON.parse(localStorage.getItem('shopping_cart'))})
        
            
        }

    }
    displayItemsList() {
        const data = this.state.data;
        
        if (data===undefined) {
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
        
        const showHideClassName = this.props.modal ? "modal display-block" : "modal display-none";
        return ReactDOM.createPortal(
            <div className={showHideClassName}>
                <div className="modal-main">
                    <div className="modal_title"><bold>My Bag</bold>, {this.state.data.length}  items</div>
                    <div className="modal_cart_items_list">
                        {this.displayItemsList()}
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
    return { modal: state.modal.value }
};

const mapDispatchToProps = { set_modal };

export default connect(mapStateToProps,mapDispatchToProps)(Modal)