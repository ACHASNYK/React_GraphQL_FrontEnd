import React, { Component } from "react";
import { client } from "../App";
// import Title from "./Title";
import { connect } from "react-redux";
import { productById, testQ, allProducts } from "../queries/query"
import SmallImg from "./SmallImg";
import BigImg from "./BigImg";

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
            
            "productId": "huarache-x-stussy-le"

        }
    client.query({ query: productById, variables: query_variable })
        .then(result => {
            this.setState({
                data: result.data,
                dataIsLoaded: true
            })
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
            
            <div>
                <div>
                    <BigImg img={this.props.photo}/>
                </div>
                <div>    
                    <ul className="list">
                         {this.displayImgList() } 
                    </ul>
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
        return { cat_name: state.category.value, }
    }
  };
// console.log(this.data)
export default connect(mapStateToProps, null)(ProductDetailPage);
