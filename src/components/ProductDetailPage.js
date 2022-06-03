import React, { Component } from "react";
import { client } from "../App";
// import Title from "./Title";
import { connect } from "react-redux";
import { productById } from "../queries/query"
import SmallImg from "./SmallImg";
import BigImg from "./BigImg";
import Detailes from "./Detailes";
import {set_detailes} from '../redux/detail_data'

class ProductDetailPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: {},
            dataIsLoaded: false,
        }
         

    }        
    
    componentDidMount() {
    const query_variable = {
            
            "productId": `${this.props.product_id}`

        }
    client.query({ query: productById, variables: query_variable })
        .then(result => {
            this.setState({
                data: result.data,
                dataIsLoaded: true
            });this.props.set_detailes(result.data)
          });
           
        
    }    
           
      displayImgList() {
        
             const { data, dataIsLoaded } = this.state;
             
             console.log(data)
             if (!dataIsLoaded) {
                 return (<div>Loading...</div>)
              } else {
                 return data.product.gallery.map((items, i) => {
                     return (<li className="tiny_img" key={i}><SmallImg
                                          
                         photo={items}
                       
                        
                     /></li>);
                 });
             }
                
     }

    render() {
        // const { data } = this.state;
        // const ddata = Object.keys(data);
        // console.log(data.category.products)
            
          
        // console.log(ddata[0]) 
        return (
            
            
            <div className="images_block">
                
                <div>    
                    <ul className="list">
                         {this.displayImgList() } 
                    </ul>
                </div>
                <div>
                    <BigImg img={this.props.photo}/>
                </div>
                <div>
                    {/* <Detailes data={this.state.data}/>                 */}
                    <Detailes />
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log(state.productid.value)
    if (!state) {
        return (console.log("error"))
    }else{
        return { product_id: state.productid.value, }
    }
};
const mapDispatchToProps = { set_detailes };
// console.log(this.data)
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage);
