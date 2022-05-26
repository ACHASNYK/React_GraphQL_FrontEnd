import React, {Component} from "react";
// import {gql} from 'apollo-boost';
// import { graphql } from "react-apollo"
import { allCatQuery } from "../queries/query";
// import ApolloProvider from 'react-apollo';
import HeaderButton from "./HeaderButton";

import { client } from "../App";



class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DataIsLoaded: false,
            data: {}
        };
    }

    componentDidMount() {
        client.query({ query: allCatQuery })
      .then(result => {
        this.setState({
          data: result.data,
          DataIsLoaded: true
        })
      });
    }

    // updateParent(e) {
    //     this.props.onclickChange(e)
    //     console.log(e)
    // }
    displayList(){
        const { data, DataIsLoaded } = this.state;
        
        // console.log(data);
        if(!DataIsLoaded) {
            return(<div>Loading...</div>)
        }else{
            return data.categories.map((items, i) => {
                return (<li className="buttons" key={i}> <HeaderButton 
                    // updateParent = {this.updateParent}
                    key={i}
                    name = {items.name}
                    link = {items.name}
                    /></li>);
                
            })
        }
    }
    
    
    
    render() {
  
      return (
        <div className="navbar">
          <div>  
          <ul className="categories">
                {this.displayList() }
            </ul>
          </div>
          <div>
            {/* <Actions/> */}
          </div>
        </div>
      );
    }
  
}
export default Navbar