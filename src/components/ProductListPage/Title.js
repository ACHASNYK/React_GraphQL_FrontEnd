import React, { Component } from "react"
import { loadFromStorage } from '../../utilities/loadFromStorage'
import styled from "styled-components";

class Title extends Component {
    render() {

        return (

            <Display>
                {this.props.category || loadFromStorage("category") || this.props.initial_name}
            </Display>
        )
    }
}

const Display = styled.div`
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 160%;
    display: flexbox;
    align-items: flex-start;
    position: fixed;
    padding-top: 80px;
    padding-bottom: 50px;
    padding-left: 100px;
    
    background: #ffffff;
    z-index: 3;
    text-transform: capitalize;

`;
export default Title;   