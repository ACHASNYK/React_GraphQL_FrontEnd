import React, {Component} from "react";
// import {gql} from 'apollo-boost';
// import { graphql } from "react-apollo"
// import { allProducts, allTech} from "../queries/query";
// import ApolloProvider from 'react-apollo';
import Card from "./Card";
import { client } from "../App";
// import Title from "./Title";
import { connect } from "react-redux";
import { allProducts } from "../queries/query";
import Title from "./Title";
class Main extends Component {
    constructor(props) {
        super(props);
        
         this.state = {
            data:{},
            DataIsLoaded: false,
            
                  
         
         }
    } 
    
    componentDidMount() {
        const query_variable = {
            "input": {
            "title": `${this.props.cat_name}`
            }
        }
        client.query({ query: allProducts, variables: query_variable })
            .then(result => {
            this.setState({
                data: result.data,
                DataIsLoaded: true
            })
        });

    }
    
    

    
    
    displayList() {
        
        try{
            const { data, DataIsLoaded } = this.state;
            console.log(data)
            if (!DataIsLoaded) {
                return (<div>Loading...</div>)
            } else {
                return data.category.products.map((items, i) => {
                    return (<li className="card_list" key={i}><Card
                    
                        item_key={items.id}
                        photo={items.gallery[0]}
                        name={items.name}
                        // price={items.prices}
                    /></li>);
                })
            }
        }
        catch (e) { console.log(e) }
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
            <h1>HI</h1>
            <div>
                <Title name = {this.props.name}/>
                
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

const mapStateToProps = state => {
    console.log(state.category.value)
    if (!state) {
        return (console.log("error"))
    }else{
        return { cat_name: state.category.value, }
    }
  };
// console.log(this.data)
export default connect(mapStateToProps, null)(Main);