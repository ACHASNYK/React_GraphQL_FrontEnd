import React, {Component, Fragment} from "react";
import { connect } from 'react-redux';
// import { set_sizeid } from '../redux/size';
// import { set_swatchid } from '../redux/swatchid';
import { set_detailes } from '../redux/detail_data';
import { setDefaultAttributes} from '../utilities/handleAttributes'


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
      setAttributes = (propname, value, data) => {
        // const index = data?.findIndex(x => x.name === `${propname}`);
        
        const newData = data.map(obj => {
            if (obj.name === `${propname}`) {
                return { ...obj, id: value };
            }
                return obj;                
        });
    
        
        const storage = { ...this.props?.data, product: { ...this.props?.data?.product, attributes: newData } }
        // console.log(index)
        console.log(newData)
        this.props.set_detailes(storage);
    }
    
    
    // setAttributes(propname, value, data) {
    //     // const index = data?.findIndex(x => x.name === `${propname}`);
        
    //     const newData = data.map(obj => {
    //         if (obj.name === `${propname}`) {
    //             return { ...obj, id: value };
    //         }
    //             return obj;                
    //     });
    //     const storage = { ...this.props.data, product: { ...this.props.data.product, attributes: newData } }
    //     // console.log(index)
    //     console.log(newData)
    //     this.props.set_detailes(storage);
    // }
    
    // setDefaultAttributes =(data) => {
    //     const newData = data.map(obj => {
    //         if (obj.id===obj.name) {
    //             return {...obj, id : obj.items[0].value}
    //         } return obj;
        
    //     }) 
    //     return newData;
    // }
    
    
    render() {
        const data = setDefaultAttributes(this.props.data.product.attributes)
        console.log(data)
        return (
            data?.map((element, i) => {
                    
               
                if (element.type === "swatch") {
                        
                    return (<div key={i}>
                        <div><p>{element.name}</p></div>
                        <div>{element.items.map((e, i) => {
                            return (
                                <button className={`attributes_swatch ${element.id===e.value ? "s_marked" : ""}`}
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
                                
                            
                            return (<div className={`attributes_text ${element.id===e.value ? "marked" : ""}`}
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