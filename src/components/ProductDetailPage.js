import React, { Component } from "react";
import { client } from "../App";
import { connect } from "react-redux";
import { productById } from "../queries/query"
import SmallImg from "./SmallImg";
import BigImg from "./BigImg";
import Detailes from "./Detailes";
import { set_detailes } from '../redux/detail_data';
import { loadFromLocalStorage } from '../components/loadFromLocalStorage'
import styled from "styled-components";

class ProductDetailPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: {},
            dataIsLoaded: false,
            object: {}
        }
         

    }        
    
    componentDidMount() {
        //  this.setState({ object: this.loadFromLocalStorage() })
    const query_variable = {
            
            "productId": `${this.props.product_id? this.props.product_id : this.getID()}`

        }
    client.query({ query: productById, variables: query_variable })
        .then(result => {
            this.setState({
                data: result.data,
                dataIsLoaded: true
            });this.props.set_detailes(result.data)
          });
           
        
    }
    
    loadFromLocalStorage() {
        try {
        
        const serialisedState = sessionStorage.getItem("detailes");
            if (serialisedState === null) return undefined;
        const data = (JSON.parse(serialisedState))
            return data
        } catch (e) {
        console.warn(e);
        return undefined;
        }
    }

           
      displayImgList() {
        
             const { data, dataIsLoaded } = this.state;
             
             console.log(data)
             if (!dataIsLoaded) {
                 return (<div>Loading...</div>)
              } else {
                 return data.product.gallery.map((items, i) => {
                     return (<SmallImg key={i}
                                          
                         photo={items}
                       
                        
                     />);
                 });
             }
                
    }

    
    getID() {
        const Object = loadFromLocalStorage();
        console.log(Object);
        return Object.id;
    }
    


    render() {
        
        const Object = this.loadFromLocalStorage();
        // const ddata = Object.keys(data);
        // console.log(data.category.products)
            
          
        // console.log(ddata[0]) 
        return (
            
            
            <ImagesBlock>
                
                <PhotoListContainer>    
                    <PhotoList>
                         {this.displayImgList() } 
                    </PhotoList>
                </PhotoListContainer>
                <BigImageContainer>
                    <BigImg img={this.props.photo}/>
                </BigImageContainer>
                <DetailesContainer>
                    {/* <Detailes data={this.state.data}/> */}
                    <Detailes />
                    
                </DetailesContainer>
            </ImagesBlock>
        )
    }
}

const ImagesBlock = styled.div`
    display: flex;
    flex-direction: row;
    
    border: 1px solid black;
    margin-top: 160px;
`;
const PhotoListContainer = styled.div`
display: flex;
flex-direction: column;
/* margin-left: 100px; */
margin-right: 5%;
margin-left: 3%;



border: 1px solid black;


`;

const PhotoList = styled.ul`
list-style-type: none;
`;
const BigImageContainer = styled.div`
display: flex;
margin-right: 7%;

`;

const DetailesContainer = styled.div`
display: flex;
`;


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
