import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  // Query,
  gql
} from "@apollo/client";
import { Component } from "react";
import React from "react";
import { connect } from "react-redux";
import { allProducts, allClothes, allTech } from "./queries/query";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import { Router, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import { set_category } from "./redux/category";
import ProductDetailPage from "./components/ProductDetailPage";
export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})
// const mapStateToProps = (state) => ({
//   // console.log(state)
//   name: state.category,

// });



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      DataIsLoaded: false,
      // name: 'clothes'
      
  //     // variable: 'all'
    };

    // this.props.set_category = this.props.set_category.bind(this);
  }  
  // console.log(this.data);  // this.onclickChange = this.onclickChange.bind(this);
  // }
  // onclickChange(e) {
  //   this.setState({
  //     variable: e
  
    // });
  
// }
    
  // productListQuery() {
  // const query_variable = {
      // "input": {
        // "title": `${this.state.name}`
        
  //     }
  //   }

    // console.log(query_variable);
  //  const data = client.query({ query: allProducts, variables: query_variable })
  //     .then(result => {
  //       this.setState({
  //         data: result.data,
  //         DataIsLoaded: true,
          
  //       })
        
  //     });

      // console.log({data});
  // }

  // shouldComponentUpdate(nextState) {
  //   if(nextState.value !== this.state.value) {
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }
  
  //   const query_variable = {
  //     "input": {
  //       "title": `${this.state.name}`
        
  //       }
  //     }
     
  //   // this.setState({
  //   //   data: result.data,
  //   //   DataIsLoaded: true,
  //   // }); 
   
  render() {
    // const query_variable = {
      // "input": {
        // "title": `all`
      // }
    // }
    // client.query({ query: allProducts, variables: query_variable })
      // .then(result => this.props.set_category(result.data));
    // });
    
    // console.log(store);   
    // if (!DataIsLoaded) 
    //   return 
    // <div>Loading...</div>
    console.log('rendering');
    // console.log(this.props.data)
    // console.log(this.state.name);
    // // console.log(query_variable);

    return (
      // <Router>
      
        <div className="main">
          
          {/* <button className="button" onClick={(e) => this.setState({name: 'clothes'})}><h2>clothes</h2></button> */}
          {/* <button className="button" onClick={(e) => this.setState({name: 'tech'})}><h2>tech</h2></button> */} 
          <div className="navbar">
          <Navbar/>      
          </div>
          <div>
          {/* <Title name={this.props.cat_name} /> */}
          </div>
          <div>
           {/* <Main key = {this.props.cat_name} /> */}
           <ProductDetailPage/>
          </div>
        </div>
      // </Router>
    );
      
  }

// componentDidUpdate(prevProps) {
//   if (prevProps.name.value !== this.props.name.value) {
//     this.setState({name: this.props.variable.value})
//   }
// }  

}

const mapStateToProps = state => {
    console.log(state.category.value)
    if (!state) {
        return (console.log("error"))
    }else{
        return { cat_name: state.category.value, }
    }
  };

// console.log(this.props.name)
const mapDispatchToProps = {set_category};
export default connect(mapStateToProps, mapDispatchToProps)(App);
