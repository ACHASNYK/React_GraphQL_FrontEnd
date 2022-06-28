import React, { Component } from "react";
import { set_modal } from "../redux/modal";
import {connect} from 'react-redux'

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

            <div className="cart_display_button" onClick={()=>{this.props.set_modal(true)}}>SHOPPING CART
                <div className={`cart_display_button_counter ${this.state.counter>0? "display": ""}`}>{this.state.counter}</div>
            </div>
        )
    }

}
const mapStateToProps = state => {
    // console.log(state.category.value)
    if (!state) {
        return (console.log("error"))
    }else{
        return {
            counter: state.counter.value,
            
        }
    }
};
const mapDispatchToProps = { set_modal };

export default connect(mapStateToProps, mapDispatchToProps)(CartDisplayButton)