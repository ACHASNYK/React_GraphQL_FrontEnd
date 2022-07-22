import React, {Component} from "react";
import styled, {css } from "styled-components";


class BigCartAttributes extends Component {
           

    render() {
      
        const data = this.props.attributes;
        if (data===undefined) {
            return null
        }
        console.log(data)

            
            return (<BigAttrContainer>
                {data.map((element, i) => {
                                       
                    if (element.type === "swatch")
                        
                        return (<SwatchContainer key={i}>
                            <SwatchElementName>{element.name}</SwatchElementName>
                            <SwatchElement>{element.items.map((e, i) => {
                                return (
                                    <ElementItem id={element.id} value={e.value}
                                        key={i}
                                        >
                                    </ElementItem>)
                            })
                            }</SwatchElement>;

                                                  
                        </SwatchContainer>);
                    else

                        return (<AtrrTextContainer key={i}>

                            <AttrTextName>{element.name}</AttrTextName>
                            <AttrTextElement>{element.items.map((e, i) => {
                                return (<TextElementItem id={element.id} value={e.value}
                                    key={i}
                                >
                                    {e.value}
                                </TextElementItem>)
                            })}</AttrTextElement>
                        </AtrrTextContainer>);
                    
                })
                }</BigAttrContainer>)
        }
        

        
    
}
const BigAttrContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

`;
const SwatchContainer = styled.div`
display: flex;
margin-top: 10px;
flex-direction: column;
gap:10px;
`;
const SwatchElementName = styled.div`
font-family: 'Roboto Condensed';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 18px;
align-items: center;
`;
const SwatchElement = styled.div`
display: flex;
flex-direction: row;
gap:8px;
padding: 3px;
align-items: flex-start;
justify-content: center;
`;
const ElementItem = styled.div`
width: 32px; 
height: 32px;
border: 0.5px solid #1D1F22;
${props => props.id === props.value && css`
    border: 3px solid #ffffff;
    outline: 1px solid #5ECE7B;
`};
${props => props.value && css`
    background-color: ${props.value};
`};

`;
const AtrrTextContainer = styled.div`
margin-top: 10px;
display: flex;
flex-direction: column;
align-items: flex-start;

`;

const AttrTextName = styled.div`
font-family: 'Roboto Condensed';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 18px;
align-items: center;
`;
const AttrTextElement = styled.div`
display: flex;
flex-direction: row;
gap:8px;
align-items: flex-start;
`;
const TextElementItem = styled.div`
margin-top: 8px;
display: flex;
width: 63px;
height: 45px;
border: 1px #1D1F22 solid;
background: ${props=>props.id===props.value? '#1D1F22': '#ffffff'};
font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 18px;
align-items: center;
justify-content: center;
letter-spacing: 0.05em;
color: ${props=>props.id===props.value? '#ffffff': '#1D1F22'};
`;
export default BigCartAttributes