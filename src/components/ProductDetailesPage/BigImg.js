import React, { Component } from "react";
import { connect } from 'react-redux';
import { loadFromLocalStorage } from "../../utilities/loadFromLocalStorage";
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
        return data.photo[0]? data.photo[0] : null;
    }

    componentDidUpdate(prevProps) {
        if (this.props.photo !== prevProps.photo) {
            this.setState({
                img: this.props.photo  
            })
        }
    }

    render() {
        
        return (

            <BigImage alt="big_img" src={this.props.photo? this.props.photo: this.displayBigPhoto()} />
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
    height: 511px;
    cursor: pointer;
    object-fit: contain;
    animation: ${Fade} 0.5s ease-in forwards;
    transition: all ease-in-out 0.5s;

    &:hover{
        transform: scale(1.2);
    }
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