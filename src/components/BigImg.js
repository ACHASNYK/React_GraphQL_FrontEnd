import React, { Component } from "react";
import { connect } from 'react-redux';
import { set_imglink } from '../redux/imglink';


class BigImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
        }
    }


    render() {
        
        return (

            <img className="big_images" src={this.props.photo} />
        )
    }        
}

const mapStateToProps = state => {
    console.log(state.imglink.value)
    if (!state) {
        return (console.log("error"))
    } else {
        return { photo: state.imglink.value, }
    }
}
export default connect(mapStateToProps,null)(BigImg);