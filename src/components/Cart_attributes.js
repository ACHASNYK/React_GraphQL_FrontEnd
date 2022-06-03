import React, {Component, Fragment} from "react";
// import { connect } from 'react-redux';
// import { set_sizeid } from '../redux/size';
// import { set_swatchid } from '../redux/swatchid';


class Cart_attributes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const get = JSON.parse(localStorage.getItem('shopping_cart'));
        const data = this.props.attributes;
        if (data===undefined) {
            return null
        }
        console.log(data)

            
            return (
                data.map((element, i) => {
                    
                //  console.log(element)
                    // switch (element) {
                    //     case element === undefined:
                        
                    //         return null;
                                                
                    //     case element.type === "text":
                    if (element.type === "swatch")
                        
                        return (<div key={i}>
                                    <div><p>{element.name}</p></div>
                                    <div>{element.items.map((e, i) => {
                                return (
                                    <button className="attributes_swatch"
                                        key={i}
                                        // onClick={}
                                        style={{ background: `${e.value}` }} >
                                    </button>)
                            })
                            }</div>;

                                                  
                        </div>);
                    else 

                        return (<div key={i}>

                            <div><p>{element.name}</p></div>
                            <div>{element.items.map((e, i) => {
                                return (<div className="attributes_text"
                                    key={i}
                                    onClick={() => this.props.set_sizeid(e.value)}>
                                    {e.value}
                                </div>)
                            })}</div>
                        </div >);
                    
                })
            )
        }
        

        
    
}

// const mapStateToProps = state => {
    // return { data: state.detailes.value }
  
// };
// const mapDispatchToProps = { set_sizeid, set_swatchid };
// export default connect(mapStateToProps, mapDispatchToProps)(Attributes)
export default Cart_attributes