import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { set_modal } from '../../redux/modal';
import styled, { keyframes } from "styled-components";
import { increment_count, decrement_count } from '../../redux/counter';
import ModalDisplay from './ModalDisplay';




class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            counter: 0,
        }
       
    }
 
    
        
    componentDidMount() {
        
             
        this.setState({
            data: JSON.parse(sessionStorage.getItem('shopping_cart')) || [],
            counter: sessionStorage.getItem('counter') || 0
        });
            
        
    }


    
    

    render() {
        
        
        return  ReactDOM.createPortal(
            <ModalBody ref={this.itemRef} modal={this.props.modal}>
                {this.props.modal&&<ModalDisplay />}
                   
            </ModalBody>,
            document.getElementById('portal')
      
        )
    } 
} 
 
const Fade = keyframes`

from {
    opacity: 0;
}
to { 
    opacity: 1;
}
`;
const ModalBody = styled.div`
    display: ${props=>props.modal? 'block' : 'none'};
    position:fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    background: rgba(57, 55, 72, 0.22);
    animation: ${Fade} 0.3s ease-in forwards;
    z-index: 4;
`;

const mapStateToProps = state => {
    return {
        modal: state.modal.value,
        index: state.currencyid.value
    }
};
const mapDispatchToProps = { set_modal, increment_count, decrement_count };

export default connect(mapStateToProps,mapDispatchToProps)(Modal)