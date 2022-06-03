import React, {Component} from "react";
// import {gql} from 'apollo-boost';
// import { graphql } from "react-apollo"
import { allProducts, allTech} from "../queries/query";
// import ApolloProvider from 'react-apollo';
import Card from "./Card";
import { client } from "../App";
// import Title from "./Title";
import { connect } from "react-redux";
// import store from '../redux/store';

// console.log(store)
// const mapStateToProps = (state) => {
//     // console.log(state)
//     return {
//         data: state.category.products,
//     }
//   };
// console.log(data)
class Main extends Component {
    constructor(props) {
        super(props);
    //     this.state = {
    //         data:{},
    //         name: ''
    //     }
    } 
     
    // displayList(){
    //     // const query_variable = {
    //     //     "input": {
    //     //       "title": `${this.props.name}`
              
    //     //     }
    //     //   }
    //     // const data = client.query({ query: allTech, variables: 'tech' });
    //     const data = this.data;
    //     console.log(data)
    //     if(data.loading) {
    //         return(<div>Loading...</div>)
    //     }else{
    //         return data.category.products.map((items, i) => {
    //             return (<li className="card_list" key={i}><Card 
                    
    //                 item_key = {items.id}
    //                 photo = {items.gallery[0]} 
    //                 name={items.name}
    //                 price = {items.prices} /></li>);
    //         })
    //     }
    // }

    // displayTitle(){
    //     const title = this.props.data.category.name;
    //     // if (this.props.data.loading) {
    //         // return(<div>Loading...</div>)
    //     // }else{

    //         return (<Title title={title}/>)
    //     };

    // // }
    
    render() {
  
        const {data} = this.props;
        console.log(data);  
      return (
         
        <div>
            <h1>HI</h1>
            <div>
                {/* {this.displayTitle()} */}
                
            </div>
            {/* <div className="card_list">
                <ul className="list">
                    {this.displayList() }
                </ul>
            </div> */}
        </div>
      );
    }
  
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        data: state.category.value,
    }
  };
// console.log(this.data)
export default connect(mapStateToProps, null)(Main);