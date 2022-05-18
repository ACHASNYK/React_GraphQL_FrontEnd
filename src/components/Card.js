import React, {Component} from "react";
// import {gql} from 'apollo-boost';
// import { graphql } from "react-apollo"
// import { allProducts } from "../queries/Queries";
// import ApolloProvider from 'react-apollo';
// import { isTypeSystemDefinitionNode } from "graphql";


class Card extends Component {

    
    render() {

        return (
            // console.log(this.props)
            <div className="card">
                <div className="image">                
                 <img className="photo_card" src={this.props.photo} />
                </div>
                <div className="card_title">
                     {this.props.name}
                </div>                
                
            </div>
            //         <p>
            //             {}
            //         </p>
            //     </div>
            // </div>
        )
       
    
    }
  
}
export default Card