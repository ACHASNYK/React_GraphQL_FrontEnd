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
    itemsCount() {
        
        const data = this.state.data;
        if(!this.state.data) {
            return null
        }
        
        console.log(data.length)
        return data.length;
    }   
    displayItemsList() {
        
        if (!this.state.dataIsLoaded) {
            return null
        }
        const data = this.state.data;
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

    async componentDidMount() {
        await JSON.parse(localStorage.getItem('shopping_cart')).then
        (result => {      
        this.setState({
            data: result,
            dataIsLoaded: true
            });
        }
       )
    }    
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.data !== this.state.data){
    //     this.setState({data: JSON.parse(localStorage.getItem('shopping_cart')),})
    //     }
    // }
    

    render() {
    //     const Data = JSON.parse(localStorage.getItem('shopping_cart' || []));
    //     if(!Data){
    //         return null
    //     }
    //     this.setState({
    //         data: Data,
    //         dataIsLoaded: true
    // });
        console.log(this.result)
        const showHideClassName = this.props.modal ? "modal display-block" : "modal display-none";
        return ReactDOM.createPortal(
            <div className={showHideClassName} onClick={() => { this.props.set_modal(false) }} >
                <div className="modal-main">
                    
                    <div className="modal_title">My Bag, {this.itemsCount()}  items</div>
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


// const Data = JSON.parse(localStorage.getItem('shopping_cart' || []));
const mapStateToProps = state => {
    return { modal: state.modal.value }
};

// ReactDOM.createPortal
// document.getElementById('portal'
const mapDispatchToProps = { set_modal };

export default connect(mapStateToProps,mapDispatchToProps)(Modal)