import React, {Component} from "react";
import Card from "./Card";
import { client } from "../../App";
import { connect } from "react-redux";
import { allProducts } from "../../queries/query";
import styled from "styled-components";


class Main extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: {},
            DataIsLoaded: false,
            category: ''
        }
    }              
         
       
     
    
    componentDidMount() {
        const query_variable = {
            "input": {
                "title": `${this.props.cat_name ? this.props.cat_name : this.loadFromLocalStorage() ? this.loadFromLocalStorage() : JSON.parse(sessionStorage.getItem('initial'))}`
            }
        }
        
            client.query({ query: allProducts, variables: query_variable })
                .then(result => {
                    this.setState({
                        data: result.data,
                        DataIsLoaded: true,
                        category: result.data.category.name
                    })
                
                });
        
        
    }
    
    
    loadFromLocalStorage() {
    try {
        const serialisedState = sessionStorage.getItem("category");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
        } catch (e) {
            console.warn(e);
        return undefined;
        }
    }
    
    
    displayList() {
        
        try{
            const { data, DataIsLoaded } = this.state;
            
            if (!DataIsLoaded) {
                return (<div>Loading...</div>)
            } else {
               
                return data.category.products.map((items, i) => {
                    return (<div className="card_list" key={i}><Card
                    
                        item_key={items.id}
                        photo={items.gallery}
                        name={items.name}
                        brand={items.brand}
                        attributes={items.attributes}
                        price={items.prices}
                        instock={items.inStock}
                    /></div>); 
                })
            }
        }
        catch (e) { console.log(e) }
    }
    
    render() {
        const { category, DataIsLoaded } = this.state;
        console.log(category)
        
        if (!DataIsLoaded) {
         return <div>Loading...</div>
        } 
      return (
        <> 
              
              <PLP>
                  <Title>{category}</Title>  
                <CardList> 
                    <List>
                        {this.displayList() }
                    </List>
                </CardList>
              </PLP>
        </>
      );
    }
  
}

const PLP = styled.div`
    margin-top: 80px;
    display: flex;
    width: 100%;
    flex-direction: column;
    overflow-y: auto;
    max-height: 750px;

`;

const Title = styled.div`
    
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 160%;
    display: flexbox;
    align-items: flex-start;
    box-sizing: border-box;
    margin-top: 2%;
    margin-left: 6%;
    z-index: 3;
    text-transform: capitalize;
`;

const CardList = styled.div`
    position: relative;
    display: inline-flex;
    list-style: none;
    text-decoration: none;
    margin-top: 3%;
    margin-left: 60px;
    

`;
const List = styled.ul`
    list-style-type: none;
    margin-left: 0;
    margin-right: 40px;
    /* margin-bottom: 100px; */

`;

const mapStateToProps = state => {
    if (!state) {
        return (console.log("error"))
    }else{
        return {
            cat_name: state.category.value,
            index: state.currencyid.value,
            initial_cat_name: state.swatchid.value
            
        }
    }
};

export default connect(mapStateToProps, null)(Main);