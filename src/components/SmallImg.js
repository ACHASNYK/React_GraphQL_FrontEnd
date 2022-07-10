import React, { Component } from "react";
import { connect } from 'react-redux'
import { set_imglink } from '../redux/imglink'
import styled from "styled-components";





class Small_Img extends Component {
    constructor(props) {
        super(props);
        this.states = {
            id: '',
            link: ''
                        
        }
    }    

    
    render() {

        return (
            // console.log(this.props)
            
                <SmallCard onClick={() => this.props.set_imglink(this.props.photo)} >                
                    <SmallImage src={this.props.photo} />                    
                </SmallCard>
   
        )
       
    
    }
  
}

const SmallCard = styled.div`
    display: flex;
    margin: 10px;
    
    &:hover {
        cursor: pointer;
        transition: 0.3s;
        filter: drop-shadow(0px 4px 35px rgba(29, 31, 34, 0.15));
        transform: scale(1.08);
    }
`;

const SmallImage = styled.img`
    width: 80px;
    height: 80px;
    object-fit: contain;
   
`;
const mapDispatchToProps = { set_imglink };
export default connect(null, mapDispatchToProps)(Small_Img)