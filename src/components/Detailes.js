import React, {Component, Fragment} from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {increment_count, decrement_count} from '../redux/counter';
import { set_imglink } from '../redux/imglink';
import parse from 'html-react-parser';
import Attributes from "./Attributes";
// import { setShopCartLocalStorage } from "./setLocalStorage";
import {setDefaultAttributes} from '../utilities/handleAttributes'


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
        const attributes = setDefaultAttributes(data.product.attributes);
        
        const Object = {
            name: data.product?.name,
            id: data.product?.id,
            brand: data.product?.brand,
            price: data.product?.prices,
            attributes: attributes,
            photo: data.product?.gallery[0],
            items_count: 1,
            
            
            
        }
        if (Object.name === undefined) {
            
            return null
        }
        let counter=1;
        let get = [];            
        get = JSON.parse(sessionStorage.getItem('shopping_cart')) || [];
        counter= JSON.parse(sessionStorage.getItem('counter')) || 1;
        let flag = false;
        console.log(flag)
        if (get.length===0) {
            // get.push(Object);
            return get.push(Object), increment_count();
            
        } else {  
            get.map(element => {
          
            if (JSON.stringify(element.attributes)===JSON.stringify(Object?.attributes) && element.id===Object?.id)
             {return {...element, items_count: element.items_count +=1}, flag=true, counter +=1, increment_count()}
            // else   {console.log(element)  }
               
            })
            
                return !flag? (get.push(Object), counter+=1, increment_count())  : null, 
                sessionStorage.setItem('shopping_cart', JSON.stringify(get)),
                sessionStorage.setItem('counter', JSON.stringify(counter));
        }      
                        
            return   sessionStorage.setItem('shopping_cart', JSON.stringify(get)),
                    sessionStorage.setItem('counter', JSON.stringify(counter));
    
    }
        // let get = [];
            
        
        // get = JSON.parse(sessionStorage.getItem('shopping_cart')) || [];
    
        // get.push(Object);
    
        // sessionStorage.setItem('shopping_cart', JSON.stringify(get));
        
        
    

       
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
const mapDispatchToProps = {increment_count};

export default connect(mapStateToProps, mapDispatchToProps)(Detailes)