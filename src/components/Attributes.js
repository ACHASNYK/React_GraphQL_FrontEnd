import React, {Component, Fragment} from "react";
import { connect } from 'react-redux';
// import { set_sizeid } from '../redux/size';
// import { set_swatchid } from '../redux/swatchid';
import { set_detailes } from '../redux/detail_data';
import { setDefaultAttributes} from '../utilities/handleAttributes'
import styled from "styled-components";

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
        return (<AttributesContainer>
            {data?.map((element, i) => {
                    
               
                if (element.type === "swatch") {
                        
                    return (<SwatchContainer key={i}>
                        <SwatchName>{element.name}</SwatchName>
                        <SwatchElement>{element.items.map((e, i) => {
                            return (
                                <div className={`attributes_swatch ${element.id===e.value? "s_marked": ""} `}
                                    key={i}
                                    name={element.name}
                                    onClick={() => this.setAttributes(element.name, e.value, data)}
                                    style={{ background: `${e.value}` }} >
                                </div>)
                        })}</SwatchElement>

                                                  
                    </SwatchContainer >);
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
            }</AttributesContainer>)

    }   
    
}

const SwatchContainer = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
`;
const SwatchName = styled.div`
font-family: 'Roboto Condensed';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 18px;
color: #1D1F22;
border: 1px solid black;
`;
const SwatchElement = styled.ul`
list-style: none;
display: flex;
flex-direction: row;
border: 1px solid black;
margin-top: 8px;
margin-left: -35px;
gap:5px;
align-items: center;
justify-content: center;
`;

// const SwatchMarked = styled.div`
//     position: relative;
//     display: none;
//     /* ${props => props.id===props.value? 'flex' : 'none'}; */
//     width: 36px;
//     height: 36px;
//     border: 1px solid #5ECE7B;
//     align-items: center;
//     justify-content: center;
// `;

const SwatchItem = styled.div` 
    position: absolute;
    height: 31px;
    width: 31px;
    border: ${props=> props.id===props.value? '#ffffff 5px solid': '#1D1F22 1px solid'};
    outline: ${props=>props.id===props.value? '1px #5ECE7B solid' : 'none'};
`;     
 


const mapStateToProps = state => {
    return { data: state.detailes.value }
  
};
const mapDispatchToProps = { set_detailes };
export default connect(mapStateToProps, mapDispatchToProps)(Attributes)