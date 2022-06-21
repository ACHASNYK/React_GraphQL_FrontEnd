import React, { Component } from "react";
import { connect } from "react-redux";
import { set_currencyid } from "../redux/currency";
import { client } from '../App';
import { currency } from '../queries/query';
import {setStorage} from './setStorage'

class CurrSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            DataIsLoaded: false,
            value: '',
        }
    }
    componentDidMount() {
        
        client.query({ query: currency})
            .then(result => {
            this.setState({
                data: result.data,
                DataIsLoaded: true
            })
                
        });

    }
    
    
    render() {
        const { data, DataIsLoaded } = this.state;
        if (!DataIsLoaded) {
            return null;
            }
        return (
            
            <div>
                <select className="curr_selector" onChange={(e) =>
                 this.props.set_currencyid(e.target.value)}>
                    {data.currencies.map((item, i) => {
                        return (
                            <option key={i} value={i}>{ item.symbol }{item.label}</option>
                    )})}
                </select>
                
            </div>
        )
    }
}
const mapDispatchToProps = { set_currencyid };
export default connect(null, mapDispatchToProps)(CurrSelector)