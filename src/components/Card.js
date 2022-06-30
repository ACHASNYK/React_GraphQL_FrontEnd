import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { set_productid } from '../redux/productid';
import { set_imglink } from '../redux/imglink';
import { set_modal } from '../redux/modal';
import {increment_count} from '../redux/counter';
import {setDefaultAttributes} from '../utilities/handleAttributes'



class Card extends Component {
     constructor(props) {
         super(props);
        //  this.state = {
        //      show: false,
        //  };
        //  this.showModal = this.showModal.bind(this);
        //  this.hideModal = this.hideModal.bind(this);
     }
    // showModal = () => {
    //     this.setState({ show: true });
    // };
    // hideModal = () => {
    //     this.setState({ show: false });
    // };
    //  displayCurrency() {
    //     if (this.props.prices === undefined) {
    //         return null;
    //     }
        
    //     const data = this.props.prices;
    //     const index = this.props.index;
    //     const ddata = data[index];
    //      console.log(data)
    //      console.log(index)
    //     return (
    //         <div>
    //             {/* {ddata.currency.symbol}{ddata.amount}; */}
    //         </div>
    //     );

    // }
    setShopCartLocalStorage() {
        if (this.props.attributes === undefined) {
            return null
        }
        const attributes = setDefaultAttributes(this.props.attributes)
        const Object = {
            name: this.props.name,
            id: this.props.item_key,
            brand: this.props.brand,
            price: this.props.price,
            attributes: attributes,
            photo: this.props.photo,
            items_count: 1,      
            
        }
        
        if (Object.name === undefined) {
            return null
        }
        let counter=1;
        let get = [];            
        get = JSON.parse(sessionStorage.getItem('shopping_cart')) || [];
        counter= JSON.parse(sessionStorage.getItem('counter')) || 1;
        let flag = false;
        console.log(flag)
        if (get.length===0) {
            // get.push(Object);
            get.push(Object)
            
        } else {  
            get.map(element => {
          
            if (JSON.stringify(element.attributes)===JSON.stringify(Object?.attributes) && element.id===Object?.id)
             {return {...element, items_count: element.items_count +=1}, flag=true, counter +=1}
            // else   {console.log(element)  }
               
            })
            
                return !flag? (get.push(Object), counter+=1)  : null, 
                sessionStorage.setItem('shopping_cart', JSON.stringify(get)),
                sessionStorage.setItem('counter', JSON.stringify(counter));
        }      
                        
            return   sessionStorage.setItem('shopping_cart', JSON.stringify(get)),
                    sessionStorage.setItem('counter', JSON.stringify(counter));
                    
    
    }
    
    saveToLocalStorage() {
        
        const Object = {
            name: this.props.name,
            id: this.props.item_key,
            brand: this.props.brand,
            price: this.props.price,
            attributes: this.props.attributes,
            photo: this.props.photo,
            items_count: 1,
            choices: {}
                 
        }
            try {
                const serialisedState = JSON.stringify(Object);
                sessionStorage.setItem("detailes", serialisedState);
                
        } catch (e) {
            console.warn(e);
        }
        
    }


   
    render() {
        
        const data = this.props.price[this.props.index];
        // const index = this.props.index;
        if (this.props.price === undefined) {
              return null;
        }
        

        return (
        <>
                <button className="circle_icon" onClick={() => {this.setShopCartLocalStorage(); this.props.increment_count() }} >cart</button>
            
            <Link to="/pdp" className="router_links">
                {/* <button className="circle_icon" onClick={() => { this.props.set_modal(true) }} >cart</button> */}
                <div onClick={() => {
                    this.props.set_productid(this.props.item_key);
                    this.props.set_imglink(this.props.photo);
                        this.saveToLocalStorage(); 
                        
                    
                }} className="card">
                    {/* <Modal show = {this.state.show} handleClose = {this.hideModal}/> */}
                    <div className="image">                
                        <img className="photo_card" alt="product_img" src={this.props.photo} />
                        {/* <button className="circle_icon" onClick={((e) => { e.stopPropagation(); this.showModal() })} >cart</button> */}
                    </div>
                    {/* <div className="image_text"><h2>OUT OF STOCK</h2></div> */}
                    <div className="card_title">
                            {this.props.brand}    {this.props.name}
                    </div>
                    <div className="card_price">
                         {data.currency.symbol}{data.amount}
                    </div>
                    
                </div>
            </Link>    
            {/* //         <p> */}
            {/* //             {} */}
            {/* //         </p> */}
            {/* //     </div> */}
                {/* // </div> */}
        </>
        )
       
    
    }
  
}

const mapStateToProps = state => {
    return {
        index: state.currencyid.value,
        
    }
}

const mapDispatchToProps = { set_productid, set_imglink, set_modal, increment_count};
export default connect(mapStateToProps, mapDispatchToProps )(Card)