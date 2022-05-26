import React, {Component, Fragment} from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { set_productid } from '../redux/productid';
import { set_imglink } from '../redux/imglink';
import parse from 'html-react-parser';

class Detailes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
        }
        
    }

    // componentDidMount() {
    //     const { data } = this.props.data;
    //     if (!data) {
    //         return <div>Loading</div>
    //     } else {
    //          return this.setState({
    //             data: data,
    //         });
    //     }
    // }

    // detailes() {
    //     const data = this.state;
    //     return console.log(data);
    // }
    // attributes() {
    //     const data = this.props.data.product.attributes;
    //     data.map
    // }
    renderHTML = props => {
        return parse(this.props.data.product.description);
    }; 
    
    render() {
    // console.log(this.props.data)
        const data = this.props.data;
        if (data.product == undefined) {
            return null;
       } 
        return (

            <div>
                <div>
                    <h2>{data.product.brand}</h2>
                </div>
                <div>
                    <h3>{data.product.name}</h3>
                </div>
                <div>
                    <p>SIZE</p>
                </div>
                <div>
                    {/* <SizeButtons/> */}
                </div>
                <div>
                    <p>COLOR</p>
                </div>
                <div>
                    <p>PRICE</p>
                </div>
                <div>
                    {/* <Price/> */}
                </div>
                <div>
                    {/* <AddtoCartButton/> */}
                </div>
                <div>
                    {this.renderHTML()}
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {data: state.detailes.value}
};

export default connect(mapStateToProps, null)(Detailes)