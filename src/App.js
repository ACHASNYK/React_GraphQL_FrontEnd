import {
  ApolloClient,
  InMemoryCache,

} from "@apollo/client";
import { Component } from "react";
import React from "react";
import { connect } from "react-redux";

import Navbar from "./components/NavigationBar/Navbar";

import { Route, Routes } from "react-router-dom";
import Main from "./components/ProductListPage/Main";
import { set_category } from "./redux/category";
import ProductDetailPage from "./components/ProductDetailesPage/ProductDetailPage";
import ShopCart from "./components/ShopCart/ShopCart";
export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})



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


      <>



        <Navbar />
        <Routes>

          <Route exact path="/" element={<Main key={this.props.cat_name} />} />

          <Route path="/pdp" element={<ProductDetailPage />} />

          <Route path="/shopcart" element={<ShopCart />} />


          <Route path="*" element={<h1>Error</h1>} />


        </Routes>
      </>

    );

  }



}

const mapStateToProps = state => {

  if (!state) {
    return (console.log("error"))
  } else {
    return { cat_name: state.category.value, }
  }
};


const mapDispatchToProps = { set_category };
export default connect(mapStateToProps, mapDispatchToProps)(App);
