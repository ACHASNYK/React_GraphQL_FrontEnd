import React, {Component} from "react";
import {gql} from 'apollo-boost';
import { graphql } from "react-apollo"
import { allTech } from "../queries/Queries";
import ApolloProvider from 'react-apollo';
import Card from "./Card";
import Title from "./Title";

class Tech extends Component {
      
    
    displayList(){
        const data = this.props.data;
        
        console.log(data.category.name)
        if(data.loading) {
            return(<div>Loading...</div>)
        }else{
            return data.category.products.map(items => {
                return (<li className="card_list" key={items.id}><Card 
                    key={items.id} 
                    photo = {items.gallery[0]} 
                    name={items.name}
                    price = {items.prices} /></li>);
            })
        }
    }
    
    displayTitle(){
    const title = this.props.data.category.name;
    //     // if (this.props.data.loading) {
    //     //     return(<div>Loading...</div>)
    //     // }else{
        console.log(title)
        return (<Title title={title}/>)
        };

    // // }
    
    render() {
  
      return (
        <div>
            <div>
                {this.displayTitle()}
                
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
  


export default graphql(allTech)(Tech)