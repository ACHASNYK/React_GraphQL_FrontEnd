import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // useQuery,
  // Query,
  gql
} from "@apollo/client";
import { Component } from "react";
import React from "react";
import { connect } from "react-redux";
import { allProducts } from "./queries/query";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import { Router, Route, Link } from "react-router-dom";
import Main from "./components/Main";
// import { setCategoryName } from "./redux/actions";
export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})
const mapStateToProps = (state) => ({
  // console.log(state)
  variable: state.category,
});
// console.log(variable);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onclickChange: (e) => dispatch(setCategoryName(e.target.innerText))
//   }
// }
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      DataIsLoaded: false,
      // variable: 'all'
    };
    // this.onclickChange = this.onclickChange.bind(this);
  }
  // onclickChange(e) {
  //   this.setState({
  //     variable: e
      
    // });
  
// }
  componentDidMount() {
    const query_variable = {
      "input": {
        "title": `${this.props.variable.value}`
        
      }
    }
    console.log(this.props.variable.value);
    client.query({ query: allProducts, variables: query_variable })
      .then(result => {
        this.setState({
          data: result.data,
          DataIsLoaded: true,
          
        })
      });
  }
  render() {
    const { data, DataIsLoaded } = this.state;
    // console.log({ data })
    if (!DataIsLoaded) 
      return 
    <div>Loading...</div>
    
    return (
      // <Router>
        <div className="main">
          <div className="navbar">
          <Navbar/>      
          </div>
          <div>
            <Title name={data.category.name} />
          </div>
          <div>
          <Main data={data}/>
          </div>          
        </div>
      // </Router>
    )

  }


} 

export default connect(mapStateToProps, null)(App);
