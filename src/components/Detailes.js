import React, {Component, Fragment} from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { set_productid } from '../redux/productid';
import { set_imglink } from '../redux/imglink';
import parse from 'html-react-parser';
import Attributes from "./Attributes";
import setDefaultLocalStorage from "../utilities/setLocalStorage";


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

    
    // attributes = props => {
    //     const data = this.props.data.product.attributes;
    //     data.forEach(item => {
            

    //             if (item.type === "swatch") {
    //                 return (<div>
    //                             <div className="attributes_title"> {item.name}</div>
    //                             <Swatch />
    //                         </div>                        
    //                  )
    //             } else if (item.type === ""{
    //                 return item.items.map((element, i) => {
    //                     return (
    //                         <button className="attributes_text"
    //                             key={element.id}
    //                             onClick={set_capacityid(element.value)}>
    //                             {element.value}
    //                         </button>


    //                     )
    //                 })
    //             }
            
    //     });
        
    // }
    renderHTML = props => {
        return parse(this.props.data.product.description);
    };
//     setDefaultLocalStorage = () => {
//         if (this.props.data.attributes === undefined) {
//             return null
//         }
//         const Object = {
//             name: this.props.name,
//             id: this.props.item_key,
//             brand: this.props.brand,
//             price: this.props.price,
//             attributes: this.props.attributes,
//             photo: this.props.photo,
//             items_count: 1,
//             choices: {}
            
            
//         }
//         if (Object.name === undefined) {
//             return null
//         }

//         let get = [];
//         // a.push(JSON.parse(localStorage.getItem('session')));
//         // localStorage.setItem('session', JSON.stringify(a));
        
        
//         get = JSON.parse(localStorage.getItem('shopping_cart')) || [];
//     // Push the new data (whether it be an object or anything else) onto the array
//         get.push(Object);
//     // Alert the array value
//         // alert(a);  // Should be something like [Object array]
//     // Re-serialize the array back into a string and store it in localStorage
//         localStorage.setItem('shopping_cart', JSON.stringify(get));
//     //  localStorage.setItem('shopping_card', JSON.stringify(get));

// }

       
    render() {
        
        const data = this.props.data;
        if (data.product === undefined) {
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
                    <Attributes />
                </div>
                <div>
                    {data.product.prices[this.props.index].currency.symbol}{data.product.prices[this.props.index].amount}
                </div>
                <div>
                    <button  onClick={()=>{this.setDefaultLocalStorage()}} >ADD TO CART</button>
                </div>
                <div>
                    {this.renderHTML()}
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        data: state.detailes.value,
        index: state.currencyid.value,
    }
};

export default connect(mapStateToProps, null)(Detailes)