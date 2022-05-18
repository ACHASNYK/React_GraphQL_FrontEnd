import React, {Component} from "react";
// import {gql} from 'apollo-boost';
import { graphql } from "react-apollo"
import { allCatQuery } from "../queries/Queries";

// const allCatQuery = gql`
// query Query {
//   categories {
    // name
//   }
// }
// `

class Categories extends Component {
    displayList(){
        const data = this.props.data;
        if(data.loading) {
            return(<div>Loading...</div>)
        }else{
            return data.categories.map(items => {
                return (<li>{items.name}</li>);
            })
        }
    }
  render() {
    // console.log(this.props);
    return (
      <div id="main">
        <ul id="Categories">
            {this.displayList() }
        </ul>
      </div>
    );
  }
}

export default graphql(allCatQuery)(Categories);