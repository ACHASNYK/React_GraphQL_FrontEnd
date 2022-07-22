import React, { Component } from "react";
import { client } from "../../App";
import { connect } from "react-redux";
import { productById } from "../../queries/query"
import SmallImg from "./SmallImg";
import BigImg from "./BigImg";
import Detailes from "./Detailes";
import { set_detailes } from '../../redux/detail_data';
import { loadFromLocalStorage } from '../../utilities/loadFromLocalStorage'
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
                   
                    <Detailes />
                    
                </DetailesContainer>
            </ImagesBlock>
        )
    }
} 

const ImagesBlock = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 160px;
    max-height: 40vw;
    overflow-y: auto;
    scrollbar-gutter: stable;
`;
const PhotoListContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 9%;
    margin-left: 3%;
`;

const PhotoList = styled.ul`
list-style-type: none;
`;

const BigImageContainer = styled.div`
display: flex;
margin-right: 7%;
margin-left: 3%;
`;

const DetailesContainer = styled.div`
display: flex;
margin-left: 3%;
`;


const mapStateToProps = state => {
    
    if (!state) {
        return (console.log("error"))
    }else{
        return { product_id: state.productid.value, }
    }
};
const mapDispatchToProps = { set_detailes };

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage);
