import React, {Component} from "react";
import { connect } from 'react-redux';
import { set_sizeid } from "../redux/size";





class Text extends Component {
    // constructor(props) {
    //     super(props);
    // }

    displayText = props => {
        const item = this.props.item.product.attributes;
        
        if (item.items===undefined) {
            return null
        } 
            // console.log(item.items)
            return item.items.map((element, i) => {
                return (
                    <button className="attributes_text"
                        key={element.id}
                        onClick={set_sizeid(element.value)}
                    >{element.value} </button>)
            })
            
        
    }
        
        render() {

            return (this.displayText())
        }
    
}
const mapStateToProps = state => {
    return { item: state.detailes.value }
};
const mapDispatchToProps = { set_sizeid };

export default connect(mapStateToProps, mapDispatchToProps)(Text)