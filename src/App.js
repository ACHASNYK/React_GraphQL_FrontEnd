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
import { Router, Route, Link, Switch } from "react-router-dom";
import Main from "./components/Main";
import { set_category } from "./redux/category";
import ProductDetailPage from "./components/ProductDetailPage";
import ShopCart from "./components/ShopCart";
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
      
    };

    
  }  
  
   
  render() {
   
    
    return (
      // <Router>
      
        <div className="main">
          
          {/* <button className="button" onClick={(e) => this.setState({name: 'clothes'})}><h2>clothes</h2></button> */}
          {/* <button className="button" onClick={(e) => this.setState({name: 'tech'})}><h2>tech</h2></button> */} 
          <div className="navbar">
          <Navbar/>      
          </div>
            <div>
              <Switch>
                <Route exact path="/">
                  <Main key = {this.props.cat_name} />
                </Route>
                <Route path="/pdp">
                  <ProductDetailPage />
              </Route>
              {/* <Route path="/shopcart">
                <ShopCart/>
              </Route> */}
                <Route path="*">
                  <h1>Error</h1>
                </Route>
              </Switch>                
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
