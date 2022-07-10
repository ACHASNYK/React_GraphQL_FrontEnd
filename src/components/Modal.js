import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { set_modal } from '../redux/modal';
import CartItemsList from "./CartItemsList";
import styled, { keyframes } from "styled-components";
import { increment_count, decrement_count } from '../redux/counter';
import ModalDisplay from "./ModalDisplay";




class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            counter: 0,
        }
       this.itemRef = React.createRef(); 
    }

    // incrementItemsCount= (e) => {
    //     console.log(e)
    //     let data = this.state.data;
    //     let counter = JSON.parse(sessionStorage.getItem('counter'));
    //     data?.map(item => {
    //         if (item.id === e) {
    //                sessionStorage.setItem('counter', JSON.stringify(counter +=1) );
    //             return {...item, items_count: item.items_count+=1};
    //         }
    //       console.log("increment", data)   
    //     })
    //     return sessionStorage.setItem('shopping_cart', JSON.stringify(data)), console.log(data), this.props.increment_count();
    // }

    // decrementItemsCount = (e) => {
    //     console.log(e)
    //     let data = this.state.data;
    //     let counter = JSON.parse(sessionStorage.getItem('counter'));
    //     data?.map(item => {
    //         if(item.id=== e && item.items_count>=2) {
    //             sessionStorage.setItem('counter', JSON.stringify(counter-=1));
    //             return {...item, items_count: item.items_count-=1 };
    //         }
    //         else if(item.id===e && item.items_count===1){
    //             sessionStorage.setItem('counter', JSON.stringify(counter-=1));
    //             data.splice(data.indexOf(item), 1);
    //             console.log("erase". data)
    //         }
    //         console.log("decrement", data)
    //     })  
    //   return  sessionStorage.setItem('shopping_cart', JSON.stringify(data)), console.log(data), this.props.decrement_count();
     
    // }
    
    //  componentDidUpdate(prevProps) {
    //      if (this.props.modal !== prevProps.modal) {
    //          this.setState({data: JSON.parse(sessionStorage.getItem('shopping_cart'))||[],
    //      counter: sessionStorage.getItem('counter')||0})
        
            
    //      }

    //  }
    // displayItemsList() {
    //     const data = this.state.data;
        
    //     if (data===undefined) {
    //         return ("Loading...")
    //     }
    //     return data.map((e, i) => {
            
    //         return (<CartItemsList
    //             key={i}
    //             id={e.id}
    //             brand={e.brand}
    //             name={e.name}
    //             prices={e.price}
    //             attributes={e.attributes}
    //             choices={e.choices}
    //             photo={e.photo}
    //             items={e.items_count}
    //             incrementItemsCount={this.incrementItemsCount}
    //             decrementItemsCount={ this.decrementItemsCount}
    //         />)
    //     }    
                

    //     )
        

    // }
    // handleCLickOutside = () => {
        
    //     if (this.itemRef.current&&this.itemRef.current.contains(window.event.target)) {
    //         this.props.set_modal(false);
    //     }        
    // }

    // totalAmount() {
    //     const data = this.state.data;
    //     let price = []
    //     let count = []
    //     let symbol = ''
    //     let amount = 0
    //     data.map(e => {
    //         price.push(e.price[this.props.index].amount);
    //         count.push(e.items_count);
    //         symbol = e.price[this.props.index].currency.symbol;
    //     })
    //     console.log(price, count)
    //     for (let i = 0; i < price.length; ++i){
    //         amount += (price[i] * count[i]);
            
    //         console.log(amount.toFixed(2))
    //     }
    //     amount = amount.toFixed(2);
    //     return { amount, symbol }
    // }
        
    componentDidMount() {
        
             
        this.setState({
            data: JSON.parse(sessionStorage.getItem('shopping_cart')) || [],
            counter: sessionStorage.getItem('counter') || 0
        });
            
        // document.addEventListener("click", this.handleCLickOutside, true); console.log('rendered');
    }

//     componentWillUnmount() {
//     document.removeEventListener("click", this.handleClickOutside, true);
//   }
    
    

    render() {
        
        // if (this.props.modal === true) { document.body.style.overflowY = "hidden" }else{document.body.style.overflowY = "auto"};
        // const { amount, symbol } = this.totalAmount();
        return  ReactDOM.createPortal(
            <ModalBody ref={this.itemRef} modal={this.props.modal}>
                {this.props.modal&&<ModalDisplay />}
                    {/* <ModalTitle>My Bag, {this.state.counter}  items</ModalTitle>
                    <ModalItemsList>
                        {this.displayItemsList()}
                    </ModalItemsList>
                    <ModalTotalPrice>
                        <PriceLabel>
                                Total
                        </PriceLabel>
                        <PriceAmount>
                            {symbol}  { amount }
                        </PriceAmount>

                    </ModalTotalPrice>
                    <ModalButtonGroup>                        
                        <Link to="/shopcart" className="router_links">
                            <ButtonToBag onClick={() => { this.props.set_modal(false) }}>VIEW BAG</ButtonToBag>
                        </Link>
                        <ButtonCheckOut onClick={() => { this.props.set_modal(false); alert('Thank you for you shopping!' ) }}>CHECK OUT</ButtonCheckOut>
                    </ModalButtonGroup> */}
                    
            </ModalBody>,
            document.getElementById('portal')
     
        )
    }
}

const Fade = keyframes`

from {
    opacity: 0;
}
to { 
    opacity: 1;
}
`;
const ModalBody = styled.div`
    display: ${props=>props.modal? 'block' : 'none'};
    position:fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    background: rgba(57, 55, 72, 0.22);
    animation: ${Fade} 0.3s ease-in forwards;
    /* transform: translate(-50% -50%); */
    z-index: 4;
`;

// const ModalDisplay = styled.div`
//     position: absolute;
//      display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     background: white;
//     margin-top: 40px;
//     right: 20px;
//     height: 677px;
//     width: 325px;
//     overflow-y: auto;
//     z-index: 5;
// `;

// const ModalTitle = styled.div`
// font-family: 'Raleway';
//     font-style: normal;
//     font-weight: 700;
//     font-size: 16px;
//     line-height: 160%;
//     text-align: right;
//     color: #1D1F22;
//     margin-bottom: 30px;
// `;

// const ModalItemsList = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 293px;
//     max-height: 420px;
//     gap: 40px;
//     overflow-y: auto;
//     border: 1px black solid;
// `;

// const ModalTotalPrice = styled.div`
// margin-top: 30px;
// display: flex;
// height: 28px;
// width: 100%;
// justify-content: space-between;
// `;

// const PriceLabel = styled.div`
// font-family: 'Roboto';
// font-style: normal;
// font-weight: 500;
// font-size: 16px;
// line-height: 18px;
// color: #1D1F22;
// margin-left: 16px;
// `;

// const PriceAmount = styled.div`
// font-family: 'Raleway';
// font-style: normal;
// font-weight: 700;
// font-size: 16px;
// line-height: 160%;
// color: #1D1F22;
// margin-right: 16px;
// `;

// const ModalButtonGroup = styled.div`
// margin-top: 30px;
// display: flex;
// flex-direction: row;
// gap: 12px;
// `;


// const ButtonToBag = styled.div`
// cursor: pointer;
// width: 140px;
// height: 43px;
// box-sizing: border-box;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// border: 1px solid #1D1F22;
// font-family: 'Raleway';
// font-style: normal;
// font-weight: 600;
// font-size: 14px;
// line-height: 120%;
// background-color:#ffffff;
// text-transform: uppercase;
// color: #1D1F22;
// text-transform: uppercase;
// &:hover {
//         transition: 0.3s;
//         filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.23));
        
//     };

// &:active {
//     transform: scale(0.98);
//     filter: drop-shadow(0px 1px 2px rgba(29, 31, 34, 0.15));
// };
// `;

// const ButtonCheckOut = styled.div`
// cursor: pointer;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// box-sizing: border-box;
// width: 140px;
// height: 43px;
// font-family: 'Raleway';
// font-style: normal;
// font-weight: 600;
// font-size: 14px;
// line-height: 120%;
// color: #ffffff;
// text-transform: uppercase;
// background: #5ECE7B;
// &:hover {
//         transition: 0.3s;
//         filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.23));
        
//     };

// &:active {
//     transform: scale(0.98);
//     filter: drop-shadow(0px 1px 2px rgba(29, 31, 34, 0.15));
// };

// `;

const mapStateToProps = state => {
    return {
        modal: state.modal.value,
        index: state.currencyid.value
    }
};
const mapDispatchToProps = { set_modal, increment_count, decrement_count };

export default connect(mapStateToProps,mapDispatchToProps)(Modal)