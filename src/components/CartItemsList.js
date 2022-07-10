import React, { Component } from "react";
import { connect } from 'react-redux';
import Cart_attributes from "./Cart_attributes";
import styled from "styled-components";
import { ReactComponent as SmallPlus } from '../components/icons/smallplus.svg'
import { ReactComponent as SmallMinus} from '../components/icons/smallminus.svg'



class CartItemsList extends Component {

    constructor(props) {
    super(props);
    }

        
    
    render() {
        
        return (
            <CartItem>
                
                    <CartItemDetAttributes>
                        <CartItemDetAttrTitle>
                            <CartItemDetAtrrTitleText>
                                <Brand>{this.props.brand}</Brand>
                                <Name>{this.props.name}</Name>
                            </CartItemDetAtrrTitleText>
                            <CartItemDetAttrTitleAmount>
                            {this.props.prices[this.props.index].currency.symbol}  {this.props.prices[this.props.index].amount}
                            </CartItemDetAttrTitleAmount>
                        </CartItemDetAttrTitle>
                        <CartItemDetAttrIcons>
                            <Cart_attributes
                                attributes={this.props.attributes}
                                choices={this.props.choices}
                            />
                        </CartItemDetAttrIcons>
                    </CartItemDetAttributes>
                    <CartItemDetButtons>
                    <ButtonIncrement onClick={() => { this.props.incrementItemsCount(this.props.id) }}><SmallPlus/></ButtonIncrement>
                        <ButtonCounter>{this.props.items}</ButtonCounter>
                    <ButtonDecrement onClick={() => {this.props.decrementItemsCount(this.props.id) }}><SmallMinus/></ButtonDecrement>
                    </CartItemDetButtons>
                    
                {/* </CartItemDetailes> */}
                
                <div className="cart-item_photo">
                    <img className="modal_cart_item_photo" alt="product photo" src={this.props.photo[0]} />
                </div>
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
    border: .5px solid #1D1F22
`;
/* const CartItemDetailes = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    
    width: 136px;
    height: 190px;
    border: .5px solid #1D1F22;

`; */

const CartItemDetAttributes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    border: .5px solid #1D1F22
`;

const CartItemDetAttrTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
     gap: 4px;
    width: 136px;
    height: 82px;
    border: .5px solid #1D1F22

`;

const CartItemDetAtrrTitleText = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #1D1F22;
    border: .5px solid #1D1F22

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
        /* identical to box height, or 26px */
    text-align: right;
    color: #1D1F22;
    border: .5px solid #1D1F22
`;
const CartItemDetAttrIcons = styled.div`
    top: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: .5px solid #1D1F22

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
    /* gap: 32px; */
`;

const ButtonIncrement = styled.div`
    position: relative;
    /* box-sizing: border-box;
    width: 24px;
    height: 24px;
    border: #1D1F22 1px solid; */
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
    position: relative;
    bottom: 0;
`;



const mapStateToProps = state => {
    return {
        
        index: state.currencyid.value,
    }
};

export default connect(mapStateToProps,null)(CartItemsList)