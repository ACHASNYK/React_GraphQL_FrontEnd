import React, { Component } from "react";
import { set_currencyid } from "../redux/currency";
import { connect } from "react-redux";

class Currency extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const data = this.props.prices;
        const index = this.props.index;
        if (!data || !index) {
            return null;
        }
        
        return (
            <div>
                {data[index].currency.symbol}{data[index].amount};
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        index: state.currencyid.value,
    }
}

export default connect(mapStateToProps, null)(Currency)