import React, {Component, Fragment} from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {increment_count, decrement_count} from '../redux/counter';
import { set_imglink } from '../redux/imglink';
import parse from 'html-react-parser';
import Attributes from "./Attributes";
// import { setShopCartLocalStorage } from "./setLocalStorage";
import {setDefaultAttributes} from '../utilities/handleAttributes';
import styled from "styled-components";


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
            photo: data.product?.gallery,
            items_count: 1,
            
            
            
        }
        if (Object.name === undefined) {
            
            return null
        }
        let counter=0;
        let get = [];            
        get = JSON.parse(sessionStorage.getItem('shopping_cart')) || [];
        counter= JSON.parse(sessionStorage.getItem('counter')) || 0;
        let flag = false;
        console.log(flag)
        if (get.length===0) {
            // get.push(Object);
            return get.push(Object), increment_count(), counter += 1,
                sessionStorage.setItem('shopping_cart', JSON.stringify(get)),
                sessionStorage.setItem('counter', JSON.stringify(counter));
        } else {  
            get.map(element => {
          
            if (JSON.stringify(element.attributes)===JSON.stringify(Object?.attributes) && element.id===Object?.id)
             {return {...element, items_count: element.items_count +=1}, flag=true, counter +=1, increment_count()}
            // else   {console.log(element)  }
               
            })
            
                if (!flag) {get.push(Object); counter+=1; increment_count()} else 
                {sessionStorage.setItem('shopping_cart', JSON.stringify(get));
                sessionStorage.setItem('counter', JSON.stringify(counter))}
        }      
                        
               {sessionStorage.setItem('shopping_cart', JSON.stringify(get));
               sessionStorage.setItem('counter', JSON.stringify(counter))}
    
    }
       
        
        
    

       
    render() {
        
        const data = this.props.data;
        if (data.product === undefined) {
            return null;
        } 
        return (

            <DetailesContainer>
                <ProductBrand>
                   {data.product.brand}
                </ProductBrand>
                <ProductName>
                    {data.product.name}
                </ProductName>
                <AttributesContainer>
                    <Attributes />
                </AttributesContainer>
                <ProductPriceContainer>
                    <PriceName>
                        Price
                    </PriceName>
                    <PriceAmount>
                        {data.product.prices[this.props.index].currency.symbol}
                        {data.product.prices[this.props.index].amount}
                    </PriceAmount>
                </ProductPriceContainer>
                <div>
                    <button  onClick={()=>{this.setShopCartLocalStorage(); this.props.increment_count()}} >ADD TO CART</button>
                </div>
                <div>
                    {this.renderHTML()}
                </div>
            </DetailesContainer>
        )
    }

}

const DetailesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 292px
`;

const ProductBrand = styled.div`
    display: flex;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 27px;
    color: #1D1F22;
`;

const ProductName = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 27px;
color: #1D1F22;
margin-top: 16px;
`;

const AttributesContainer = styled.div`
display: flex;
margin-top: 43px;

`;

const ProductPriceContainer = styled.div`
display: flex;
flex-direction: column;
`;
const PriceName = styled.div`
font-family: 'Roboto Condensed';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 18px;
color: #1D1F22;
`;
const PriceAmount = styled.div`
display: flex;
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 18px;
color: #1D1F22;
`;

const mapStateToProps = state => {
    return {
        data: state.detailes.value,
        index: state.currencyid.value,
    }
};
const mapDispatchToProps = {increment_count};

export default connect(mapStateToProps, mapDispatchToProps)(Detailes)