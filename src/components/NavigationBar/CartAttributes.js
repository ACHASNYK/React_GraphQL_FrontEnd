import React, {Component} from "react";
import styled, {css } from "styled-components";


class CartAttributes extends Component {
    

    

    render() {
        
        const data = this.props.attributes;
        if (data===undefined) {
            return null
        }
         

            
        return (<AttributesContainer>{
            data.map((element, i) => {
                                
                if (element.type === "swatch")
                        
                    return (<SwatchContainer key={i}>
                        <ElementName>{element.name}</ElementName>
                        <SwatchElement>{element.items.map((e, i) => {
                            return (
                                <SwatchItem id={element.id} value={e.value}
                                    key={i}                                    
                                    >
                                </SwatchItem>)
                        })
                        }</SwatchElement>

                                                  
                    </SwatchContainer>);
                else

                    return (<TextAttrContainer key={i}>

                        <TextAttrName>{element.name}</TextAttrName>
                        <TextAtrElement>{element.items.map((e, i) => {
                            return (<TextAtrrItem id={element.id} value={e.value}
                                key={i}>
                                {e.value}
                            </TextAtrrItem>)
                        })}</TextAtrElement>
                    </TextAttrContainer >);
                    
            })
        }</AttributesContainer>)
        }
        

        
    
}

const AttributesContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 2px;
gap:8px;
`;
const SwatchContainer = styled.div`
display: flex;
flex-direction: column;

`;
const ElementName = styled.div`
    display: flex;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    align-items: center;
`;

const SwatchElement = styled.div`
margin-top: 8px;
display: flex;
flex-direction: row;
`;

const SwatchItem = styled.div`

    display: flex;
    height: 16px;
    width: 16px;
    margin-right: 4px;
    border: #1D1F22 0.5px solid;
    ${props => props.id === props.value && css`
        border: #ffffff 2px solid;
        outline: 1px solid #5ECE7B;
    `};
    ${props => props.value && css` 
    background-color: ${props.value}`} ;
`;

const TextAttrContainer = styled.div`
    top: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
   
`;

const TextAttrName = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #1D1F22;
  

`;

const TextAtrElement = styled.div`
    display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 8px;

`;

const TextAtrrItem = styled.div`
    width: max-content;
    min-width: 24px;
    height: 24px;
    padding-left: 3px;
    padding-right: 3px;
    gap: 8px;
    box-sizing: border-box;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1D1F22;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid #1D1F22;
    ${props => props.id === props.value && css`
        background-color: #1D1F22;
        color: white;
    `}

`;
export default CartAttributes;