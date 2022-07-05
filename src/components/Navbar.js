import React, {Component} from "react";
// import {gql} from 'apollo-boost';
// import { graphql } from "react-apollo"
import { allCatQuery } from "../queries/query";
// import ApolloProvider from 'react-apollo';
import HeaderButton from "./HeaderButton";
import CurrSelector from "./CurrSelector";
import { client } from "../App";
import Modal from "./Modal";
import {set_swatchid} from '../redux/swatchid'
import CartDisplayButton from "./CartDisplayButton";
import styled from "styled-components";
import { ReactComponent as ShopLogo } from '../components/icons/shop.svg'

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
        }); set_swatchid(result.data.categories[0].name);
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
                        
            return ( <HeaderButton 
                    key={i}
                    name = {items.name}
                    link = {items.name}
                    />);
                
            })
      } 
    }
    
    
    
    render() {
    
      return (
        <NavbarMain>
         <ButtonGroup>
            {/* <Categories> */}
                {this.displayList() }
            {/* </Categories> */}
          </ButtonGroup>
          <ShopLogo/>
          <ActionGroup>
            <CurrSelector/>
            <CartDisplayButton />
          </ActionGroup>
          <Modal/>
        </NavbarMain>
      );
    }
  
}
// const ShopLogo = styled.div``;

const NavbarMain = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center ;
    z-index: 5;
    height: 80px;
    width: 100%;
    left: 0px;
    top: 0px;
    
    background: #FFFFFF;
    
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  z-index: 6;
  padding-left: 100px;
`;
const Categories = styled.ul`
    list-style-type: none;
    display: inline-block;
    text-decoration: none;
    /* border: 1px solid black; */
    z-index: 6;
`;
const Buttons = styled.li`
  display: inline-block;
`;
// const Logo = styled.div`
// border: 1px black solid`;

const ActionGroup = styled.div`
    display: flex;
    height: 40px;
    
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    width: auto;
    margin-right: 8em;
    background: #ffffff;
    z-index: 10;
`;

export default Navbar