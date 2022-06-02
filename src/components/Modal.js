import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { set_modal } from '../redux/modal';
import { productById } from '../queries/query';
import CartItemsList from "./CartItemsList";



class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            dataIsLoaded: false,
        }
    }

    // componentDidMount() {
        
    // const query_variable = {
            
    //         "productId": `${this.props.product_id}`

    //     }
    // client.query({ query: productById, variables: query_variable })
    //     .then(result => {
    //         this.setState({
    //             data: result.data,
    //             dataIsLoaded: true
    //         });this.props.set_detailes(result.data)
    //       });
           
        
    // }    
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
        const showHideClassName = this.props.modal ? "modal display-block" : "modal display-none";
        return ReactDOM.createPortal(
            <div className={showHideClassName}>
                <div className="modal-main">
                    <div className="modal_title">My Bag, {Data.items_count } items</div>
                    <div className="modal_cart_items_list">
                        {this.displayItemsList()}
                    </div>
                    <button type="button" onClick={() => { this.props.set_modal(false) }}>close</button>
                </div>
            </div>,
            document.getElementById('portal')
        )
    }
}
const Data = JSON.parse(localStorage.getItem('shopping_cart' || null));
const mapStateToProps = state => {
    return { modal: state.modal.value }
};

const mapDispatchToProps = { set_modal };

export default connect(mapStateToProps,mapDispatchToProps)(Modal)