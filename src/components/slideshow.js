import React, { Component } from "react";
import styled, { css} from "styled-components";


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
                        <div className={index === current ? "slide active" : "slide"} key={index}>
                            {index === current && (<img src={slide} alt="product image" className="slide_image"/>)}
                        </div>

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
    border: #1D1F22 1px solid;
`;

const SlideButtonsContainer = styled.div`
    box-sizing: border-box;
    display: ${props=>props.length>1? 'block':'none'};
    position: absolute;
    top: 220px;
    right: 10px;
    height: 60px;
    width: 60px;
    border: #1D1F22 1px solid;
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
    z-index: 5;
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
    z-index: 5;
    &:hover{
        background-color: rgba(0, 0, 0, 0.8);
    }
`;
export default SlideShow;