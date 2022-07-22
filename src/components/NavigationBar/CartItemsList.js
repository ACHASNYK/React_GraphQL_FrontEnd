import React, { Component } from "react";
import { connect } from 'react-redux';
import CartAttributes from "./CartAttributes";
import styled from "styled-components";
import { ReactComponent as SmallPlus } from '../icons/smallplus.svg'
import { ReactComponent as SmallMinus} from '../icons/smallminus.svg'



class CartItemsList extends Component {

    
        
    
    render() {
          
        return (
            <CartItem>
                <CartItemDetAttributes>
                            <CartItemDetAtrrTitleText>
                                <Brand>{this.props.brand}</Brand>
                                <Name>{this.props.name}</Name>
                            </CartItemDetAtrrTitleText>
                            <CartItemDetAttrTitleAmount>
                            {this.props.prices[this.props.index].currency.symbol}  {this.props.prices[this.props.index].amount}
                            </CartItemDetAttrTitleAmount>
                             <CartAttributes
                                attributes={this.props.attributes}
                              />                         
                    </CartItemDetAttributes>
                    <CartItemDetButtons>
                    <ButtonIncrement onClick={() => {this.props.incrementItemsCount(this.props.id) }}><SmallPlus/></ButtonIncrement>
                        <ButtonCounter>{this.props.items}</ButtonCounter>
                    <ButtonDecrement onClick={() => {this.props.decrementItemsCount(this.props.id) }}><SmallMinus/></ButtonDecrement>
                    </CartItemDetButtons>                
                    <CartItemPhoto alt="product photo" src={this.props.photo[0]} />          
            </CartItem>
        ) 
    } 
} 

const CartItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    width: 100%;
    
   
`;

const CartItemDetAttributes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    margin-right: 2px;
    padding: 0;
    
`;

const CartItemDetAtrrTitleText = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #1D1F22;
    width: 136px;
        
`;
const Brand = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 160%;
    color: #1D1F22;
`;
const Name = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 160%;
    color: #1D1F22;
`;

const CartItemDetAttrTitleAmount = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    text-align: right;
    color: #1D1F22;
   
`;
const CartItemDetButtons = styled.div`
    width: 24px;
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    margin-right: 4px;
    margin-left: 4px;
`;

const ButtonIncrement = styled.div`
    cursor: pointer;
    position: relative;
    top: 0px;
`;

const ButtonCounter = styled.div`
    position: relative;
    margin-top: 50%; 
    text-align: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    color: #1D1F22;
`;

const ButtonDecrement = styled.div`
    cursor: pointer;
    position: relative;
    bottom: 0;
`;
const CartItemPhoto = styled.img`
    display: flex;
    width: 121px;
    height: 190px;
    object-fit: contain;

`;


const mapStateToProps = state => {
    return {
        
        index: state.currencyid.value,
    }
};

export default connect(mapStateToProps,null)(CartItemsList)