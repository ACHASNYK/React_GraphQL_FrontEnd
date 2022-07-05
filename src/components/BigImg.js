import React, { Component } from "react";
import { connect } from 'react-redux';
import { set_imglink } from '../redux/imglink';
import { loadFromLocalStorage } from "./loadFromLocalStorage";
import styled, { keyframes } from "styled-components";

class BigImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
        }
    }
    displayBigPhoto() {
        const data = loadFromLocalStorage();
        return data.photo? data.photo : null;
    }

    render() {
        
        return (

            <BigImage className="big_images" src={this.props.photo? this.props.photo: this.displayBigPhoto()} />
        )
    }        
}

const Fade = keyframes`
  
    from {
        opacity: .4
    }

    to {
        opacity: 1
    }

`;

const BigImage = styled.img`
    width: 610px;
    /* max-width: 610px; */
    height: 511px;
    /* max-height: 511px; */
    border: 1px solid black;
    object-fit: contain;
    animation: ${Fade} 0.5s ease-in forwards;
`;

const mapStateToProps = state => {
    console.log(state.imglink.value)
    if (!state) {
        return (console.log("error"))
    } else {
        return { photo: state.imglink.value, }
    }
}
export default connect(mapStateToProps,null)(BigImg);