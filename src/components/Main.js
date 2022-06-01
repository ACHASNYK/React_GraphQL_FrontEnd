import React, {Component} from "react";
import Card from "./Card";
import { client } from "../App";
import { connect } from "react-redux";
import { allProducts } from "../queries/query";
import Title from "./Title";
import { set_modal } from '../redux/modal';
import Modal from "./Modal";


class Main extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: {},
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
                    return (<div className="card_list" key={i}><Card 
                    
                        item_key={items.id}
                        photo={items.gallery[0]}
                        name={items.name}
                        brand={items.brand}
                        attributes={items.attributes}
                        price={items.prices}
                    /></div>);
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
        // const ddata = this.state.data;
            // console.log(ddata.category.products)
      return (
         
        <div>
            <Modal />
            <div>
                <Title name = {this.props.cat_name}/>
                
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
        return {
            cat_name: state.category.value,
            index: state.currencyid.value,
            
        }
    }
};
  const mapDispatchToProps = {}
// console.log(this.data)
export default connect(mapStateToProps, null)(Main);