import React, { Component } from "react";
import { connect } from 'react-redux';
import {increment_count, decrement_count} from '../redux/counter';
import BigCart_attributes from "./BigCart_attributes";
import SlideShow from './slideshow';
import styled from "styled-components";
import { ReactComponent as BigPlus } from '../components/icons/bigplus.svg';
import { ReactComponent as BigMinus } from '../components/icons/bigminus.svg';

class BigCartItemsList extends Component {

    constructor(props) {
    super(props);
        
    }

    
     

    render() {
        
        return (
            <BigCartItem>
                <BigCartItemDetalsContainer>
                    
                        <BigCartItDetTitle>
                            <BigCartItDetName>
                                <Brand>{this.props.brand}</Brand>
                                <Name>{this.props.name}</Name>
                            </BigCartItDetName>
                            <BigCartItDetAmount>
                            {this.props.price[this.props.index].currency.symbol}  {this.props.price[this.props.index].amount}
                            </BigCartItDetAmount>
                        </BigCartItDetTitle>
                        <BigCartAttrContainer>
                            <BigCart_attributes
                                attributes={this.props.attributes}
                                
                            />
                        </BigCartAttrContainer>
                    
                </BigCartItemDetalsContainer>   
                <BigCartItemButtonsContainer>
                    <DetailesButtons>
                        <ButtonIncrement onClick={() => { this.props.incrementItemsCount(this.props.id)}} ><BigPlus/></ButtonIncrement>
                        <BigButtonCounter>{this.props.count} </BigButtonCounter>
                        <ButtonDecrement onClick={() => { this.props.decrementItemsCount(this.props.id)}} ><BigMinus/></ButtonDecrement>
                    </DetailesButtons>
                 
                    <SlideShowContainer>
                        <SlideShow photo={this.props.photo } />
                    </SlideShowContainer>
                </BigCartItemButtonsContainer>    
            </BigCartItem>


        )
    }
}
const BigCartItem = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
/* margin-top: 20px; */
/* margin-bottom: 20px; */
padding-bottom: 20px;
padding-top:20px;
border-top: 1px #E5E5E5 solid;
border-bottom: 1px #E5E5E5 solid;


`;
const BigCartItemDetalsContainer = styled.div`
display: flex;
flex-direction: column;
width: 292px;
border: 1px black solid;
`;

const BigCartItDetTitle = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

`;

const BigCartItDetName = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 15px;
`;

const Brand = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 27px;
color: 1D1F22;
`;

const Name = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 27px;
color: #1D1F22 ;

`;
const BigCartItDetAmount = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    color: #1D1F22 ;
    margin-top: 20px;

`;
const BigCartAttrContainer = styled.div`
display: flex;
flex-direction: column;
`;

const BigCartItemButtonsContainer = styled.div`
display: flex;
flex-direction: row;
gap: 24px;
`;

const DetailesButtons = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: auto;
justify-content: space-between;
`;

const ButtonIncrement = styled.div`
position: relative;
display: flex;
`;

const BigButtonCounter = styled.div`
font-family: 'Raleway';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 160%;
/* align-items: center; */
/* justify-content: center; */
text-align: center;
color: #1D1F22 ;
`;

const ButtonDecrement = styled.div`
position: relative;
display: flex;
`;
const SlideShowContainer = styled.div`
display: flex;
`;

const mapStateToProps = state => {
    return {
        counter: state.counter.value,
        index: state.currencyid.value,
    }
};

const mapDispatchToProps = {increment_count, decrement_count}

export default connect(mapStateToProps, mapDispatchToProps)(BigCartItemsList)