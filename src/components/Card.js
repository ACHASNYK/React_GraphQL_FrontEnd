import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { set_productid } from '../redux/productid';
import { set_imglink } from '../redux/imglink';
import { set_modal } from '../redux/modal';


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
        if (Object.name === undefined) {
            return null
        }

        let get = [];
            
        
        get = JSON.parse(sessionStorage.getItem('shopping_cart')) || [];
    
        get.push(Object);
    
        sessionStorage.setItem('shopping_cart', JSON.stringify(get));
        
        
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
                <button className="circle_icon" onClick={() => {this.setShopCartLocalStorage() }} >cart</button>
            
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

const mapDispatchToProps = { set_productid, set_imglink, set_modal};
export default connect(mapStateToProps, mapDispatchToProps )(Card)