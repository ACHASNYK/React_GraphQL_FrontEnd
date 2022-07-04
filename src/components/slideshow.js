import React, { Component } from "react";


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
             
            <div className="slide_container">
                <div className="slide_buttons">
                    <a className="prev" onClick={() => { this.prevSlide(length, current); console.log(length, current) }}>&#10094;</a>
                    <a className="next" onClick={() => { this.nextSlide(length, current); console.log(length, current) }}>&#10095;</a>
                </div>    
                {data.map((slide, index) =>{
                    return (
                        <div className={index === current ? "slide active" : "slide"} key={index}>
                            {index === current && (<img src={slide} alt="product image" className="slide_image"/>)}
                        </div>

                   )     
                })}
            </div> 
        )

    }

        

    
    
}

export default SlideShow;