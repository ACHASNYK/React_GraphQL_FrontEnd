import React, {Component} from "react";
// import {gql} from 'apollo-boost';
// import { graphql } from "react-apollo"
// import { allProducts } from "../queries/Queries";
// import ApolloProvider from 'react-apollo';
import Card from "./Card";
// import { client } from "../App";
// import Title from "./Title";


class Main extends Component {
    
     
    displayList(){
        const data = this.props.data;
        
        // console.log(data)
        if(data.loading) {
            return(<div>Loading...</div>)
        }else{
            return data.category.products.map((items, i) => {
                return (<li className="card_list" key={i}><Card 
                    
                    item_key = {items.id}
                    photo = {items.gallery[0]} 
                    name={items.name}
                    price = {items.prices} /></li>);
            })
        }
    }

    // displayTitle(){
    //     const title = this.props.data.category.name;
    //     // if (this.props.data.loading) {
    //         // return(<div>Loading...</div>)
    //     // }else{

    //         return (<Title title={title}/>)
    //     };

    // // }
    
    render() {
  
      return (
         
        <div>
            <div>
                {/* {this.displayTitle()} */}
                
            </div>
            <div className="card_list">
                <ul className="list">
                    {this.displayList() }
                </ul>
            </div>
        </div>
      );
    }
  
}

export default Main;