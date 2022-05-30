import React, {Component, Fragment} from "react";
import Swatch from "./Swatch";
import Text from "./Text";
import { connect } from 'react-redux';
import { set_sizeid } from '../redux/size';
import { set_swatchid } from '../redux/swatchid';


class Attributes extends Component {
    constructor(props) {
        super(props);
    }

    // displayText = item => {
    //     item.map((element, i) => {
    //             return (
    //                 <button className="attributes_text"
    //                     key={element.id}
    //                     onClick={set_sizeid(element.value)}
    //                 >{element.value} </button>)
    //         })
    // }

    
    render() {
        const data = this.props.data.product.attributes;
        console.log(data)

        
        // if (data === undefined || data.length === 0) {
        //     return null
        // } else {
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
                                        key={element.id}
                                        onClick={()=>this.props.set_swatchid(element.value)}
                                        style={{ background: `${element.value}` }} >
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
                    // else if (element.type === "swatch")
                        
                    //     return (<div key={i}>
                    //         <div><p>{element.name}</p></div>
                    //         <div>{element.items.map((e, i) => {
                    //             return (
                    //                 <button className="attributes_swatch"
                    //                     key={element.id}
                    //                     onClick={set_swatchid(element.value)}
                    //                     style={{ background: `${element.value}` }} >
                    //                 </button>)
                    //         })
                    //         }</div>;

                                
                                
                    //     </div>);
                        // case element.type === "swatch":
                        //     return <div>
                        //         <p>{element.name}</p>
                        //             <Swatch />;
                        //             </div>
                        // default:
                        //     break;
        
                    // };
                })
            )
        }
        

        
    // }
}

const mapStateToProps = state => {
    return { data: state.detailes.value }
  
};
const mapDispatchToProps = { set_sizeid, set_swatchid };
export default connect(mapStateToProps, mapDispatchToProps)(Attributes)