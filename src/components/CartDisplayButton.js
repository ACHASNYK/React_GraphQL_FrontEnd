import React, { Component } from "react";
import { set_modal } from "../redux/modal";
import {connect} from 'react-redux'

class CartDisplayButton extends Component {

    render() {

        return (

            <button type="button" className="cart_display_button" onClick={()=>{this.props.set_modal(true)}}>SHOPPING CART</button>
        )
    }

}
const mapDispatchToProps = { set_modal };

export default connect(null, mapDispatchToProps)(CartDisplayButton)