import React, {Component, Fragment} from "react";
import { connect } from 'react-redux';
// import { set_sizeid } from '../redux/size';
// import { set_swatchid } from '../redux/swatchid';
import { set_detailes } from '../redux/detail_data';


class Attributes extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     attributes: {
                
                
        //     },
        //     isactive: {
        //         id: '',
        //         active:false
        //     }
            

            
        
    }
    setAttributes(propname, value, data) {
        // const index = data?.findIndex(x => x.name === `${propname}`);
        
        const newData = data.map(obj => {
            if (obj.name === `${propname}`) {
                return { ...obj, id: value };
            }
                return obj;                
        });
        const storage = { ...this.props.data, product: { ...this.props.data.product, attributes: newData } }
        // console.log(index)
        console.log(newData)
        this.props.set_detailes(storage);
    }
        
    checkMarked(source, target) {
            return source === target? true : false
        }
    
    render() {
        const data = this.props.data.product.attributes
        
        return (
            data.map((element, i) => {
                    
               
                if (element.type === "swatch") {
                        
                    return (<div key={i}>
                        <div><p>{element.name}</p></div>
                        <div>{element.items.map((e, i) => {
                            return (
                                <button className="attributes_swatch"
                                    key={i}
                                    name={element.name}
                                    onClick={() => this.setAttributes(element.name, e.value, data)}
                                    style={{ background: `${e.value}` }} >
                                </button>)
                        })}</div>

                                                  
                    </div >);
                } else {
                   
                    
                    return (<div key={i}>

                        <div><p>{element.name}</p></div>
                        <div>{element.items.map((e, i) => {
                                
                            
                            return (<div className={`attributes_text ${this.checkMarked(element.id, e.value) ? "marked" : ""}`}
                                key={i}
                                name={element.name}
                                onClick={() => this.setAttributes(element.name, e.value, data)
                                }>
                                {e.value}
                            </div>)
                        })}</div>
                    </div >);
                    
                }
            
                }
            )
        )

    }   
    
}

const mapStateToProps = state => {
    return { data: state.detailes.value }
  
};
const mapDispatchToProps = { set_detailes };
export default connect(mapStateToProps, mapDispatchToProps)(Attributes)