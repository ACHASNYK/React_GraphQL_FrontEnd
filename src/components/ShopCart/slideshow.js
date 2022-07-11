import React, { Component } from "react";
import styled, { keyframes} from "styled-components";


class SlideShow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 0
        }
 
    }

    prevSlide(length, current) {
            current === 0 ? this.setState({current: length-1}) : this.setState({current: current-1})
        
    }
    nextSlide(length, current) {
            current===length-1? this.setState({current: 0}) : this.setState({current: current+1})        
    }

    render() {
        const data = this.props.photo;
        const length = data.length;
        const current = this.state.current;
        if (!Array.isArray(data) || data.length === 0) {
            return null, console.log("no images in photo")
        }

        return (
             
            <SlideContainer>
                <SlideButtonsContainer length={ length}>
                    <PrevButton onClick={() => { this.prevSlide(length, current); console.log(length, current) }}>&#10094;</PrevButton>
                    <NextButton onClick={() => { this.nextSlide(length, current); console.log(length, current) }}>&#10095;</NextButton>
                </SlideButtonsContainer>    
                {data.map((slide, index) =>{
                    return (
                        <Slide ind={index} state={current} key={index}>
                            {index === current && (<SlideImg src={slide} alt="product image" />)}
                        </Slide>

                   )     
                })}
            </SlideContainer> 
        )

    }

        

    
    
}

const SlideContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
   
`;

const SlideButtonsContainer = styled.div`
    box-sizing: border-box;
    display: ${props=>props.length>1? 'block':'none'};
    position: absolute;
    top: 220px;
    right: 10px;
    height: 60px;
    width: 60px;
    
`;
const PrevButton = styled.div`
cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -20px;
    padding: 8px;
    color: white;
    font-weight: bold;
    font-size: 14px;
    transition: 0.2s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    &:hover{
        background-color: rgba(0, 0, 0, 0.8);
    }
`; 
const NextButton = styled.div`
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 50%;
    width: auto;
    margin-top: -20px;
    padding: 8px;
    color: white;
    font-weight: bold;
    font-size: 14px;
    transition: 0.2s ease;
    border-radius:  3px 0 0 3px;
    user-select: none;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    &:hover{
        background-color: rgba(0, 0, 0, 0.8);
    }
`;
const fade = keyframes`
from {
    opacity: .4;
}
to {
    opacity: 1;
}
`;

const Slide = styled.div`
    display: ${props=>props.ind===props.state? 'block' : 'none'};
    animation: ${fade} 0.8s;

`;

const SlideImg = styled.img`
    height: 288px;
    width: 200px;
    object-fit: contain;
`;
export default SlideShow;