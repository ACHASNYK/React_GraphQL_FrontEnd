import React, { Component } from "react";
import { set_modal } from "../../redux/modal";
import { connect } from 'react-redux'
import {ReactComponent as CartLogo } from '../icons/cart.svg'
import styled from "styled-components";


class CartDisplayButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.counter!==prevProps.counter){
            this.setState({
                counter: sessionStorage.getItem('counter')||0
            })
        }
    }

    componentDidMount() {
        if (this.state.counter===0&&this.props.counter===0) 
        {this.setState({
            counter : sessionStorage.getItem('counter')||0
        })};
        
    }

    render() { 
 
        return (

            <LogoContainer onClick={() => { this.props.set_modal(true) }}>
                <CartLogo />
                <LogoCounter counter={this.state.counter}>{this.state.counter}</LogoCounter>
            </LogoContainer>
        )
    }

}
const mapStateToProps = state => {
    
    if (!state) {
        return (console.log("error"))
    }else{
        return {
            counter: state.counter.value,
            
        }
    } 
}; 

const LogoContainer = styled.div`
position: relative;
display: flex;
flex-direction: row;
align-items: center;
cursor: pointer;
padding-bottom: 6px;
`;

const LogoCounter = styled.div`
display: ${props=>props.counter>0? 'flex' : 'none'};
position: absolute;
top: -9px;
right: -10px;
width: 20px;
height: 20px;
border-radius: 60px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;

align-items: center;
justify-content: center;
text-transform: uppercase;
background: #1D1F22;
color: #FFFFFF;
&:hover{
    cursor: pointer;
}
`;

const mapDispatchToProps = { set_modal };

export default connect(mapStateToProps, mapDispatchToProps)(CartDisplayButton)