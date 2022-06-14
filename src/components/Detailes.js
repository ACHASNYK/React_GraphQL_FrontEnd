import React, {Component, Fragment} from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { set_productid } from '../redux/productid';
import { set_imglink } from '../redux/imglink';
import parse from 'html-react-parser';
import Attributes from "./Attributes";
// import { setShopCartLocalStorage } from "./setLocalStorage";


class Detailes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
        }
        
    }

   
    renderHTML = props => {
        return parse(this.props.data.product.description);
    };
    
    setShopCartLocalStorage() {
        const data = this.props.data
    if (data.product.attributes === undefined) {
            return null
        }
        
        const Object = {
            name: data.product?.name,
            id: data.product?.id,
            brand: data.product?.brand,
            price: data.product?.prices,
            attributes: data.product?.attributes,
            photo: data.product?.gallery[0],
            items_count: 1,
            choices: {}
            
            
        }
        if (Object.name === undefined) {
            
            return null
        }
        
        let get = [];
            
        
        get = JSON.parse(sessionStorage.getItem('shopping_cart')) || [];
    
        get.push(Object);
    
        sessionStorage.setItem('shopping_cart', JSON.stringify(get));
        
        
    
}
       
    render() {
        
        const data = this.props.data;
        if (data.product === undefined) {
            return null;
        } 
        return (

            <div>
                <div>
                    <h2>{data.product.brand}</h2>
                </div>
                <div>
                    <h3>{data.product.name}</h3>
                </div>
                <div>
                    <Attributes />
                </div>
                <div>
                    {data.product.prices[this.props.index].currency.symbol}{data.product.prices[this.props.index].amount}
                </div>
                <div>
                    <button  onClick={()=>{this.setShopCartLocalStorage()}} >ADD TO CART</button>
                </div>
                <div>
                    {this.renderHTML()}
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        data: state.detailes.value,
        index: state.currencyid.value,
    }
};

export default connect(mapStateToProps, null)(Detailes)