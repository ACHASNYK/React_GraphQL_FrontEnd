import React, {Component} from "react";
import { connect } from 'react-redux';
import { set_swatchid } from "../redux/swatchid";




class Swatch extends Component {
    // constructor(props) {
    //     super(props);
    // }

    displaySwatch = props => {
    const item = this.props.item;
    item.items.map((element, i) => {
                        return (
                            <button className="attributes_swatch"
                                key={element.id}
                                onClick={set_swatchid(element.value)}
                                style={{ background: `${element.value}` }} > </button>)
                    } )
    }
    render() {

        return (this.displaySwatch())
    }
}

const mapStateToProps = state => {
    return {item: state.detailes.value}
};
const mapDispatchToProps = { set_swatchid };

export default connect(mapStateToProps, mapDispatchToProps)(Swatch)