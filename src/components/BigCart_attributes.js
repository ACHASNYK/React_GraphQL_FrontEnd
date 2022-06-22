import React, {Component, Fragment} from "react";
// import { connect } from 'react-redux';
// import { set_sizeid } from '../redux/size';
// import { set_swatchid } from '../redux/swatchid';


class BigCart_attributes extends Component {
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
                                    <button className={`big_attributes_swatch ${element.id===e.value? "bs_marked" : ""}`}
                                        key={i}
                                        // onClick={}
                                        style={{ background: `${e.value}` }} >
                                    </button>)
                            })
                            }</div>;

                                                  
                        </div>);
                    else 

                        return (<div className="big_cart_item_detailes_attr_icons" key={i}>

                            <div className="big_cart_item_detailes_attr_icons_text"><p>{element.name}</p></div>
                            <div className="big_cart_item_detailes_attr_icons_list">{element.items.map((e, i) => {
                                return (<div className={`big_cart_item_detailes_attr_icons_value_default ${element.id===e.value? "b_marked" : ""}`}
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
export default BigCart_attributes