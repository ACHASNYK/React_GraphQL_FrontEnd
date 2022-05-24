import React, { Component } from "react";
import { connect } from 'react-redux'
import { set_imglink } from '../redux/imglink'





class Small_Img extends Component {
    constructor(props) {
        super(props);
        this.states = {
            id: '',
            link: ''
                        
        }
    }    

    
    render() {

        return (
            // console.log(this.props)
            
                <div className="small_card" onClick={() => this.props.set_imglink(this.props.photo)} >                
                    <img className="small_images" src={this.props.photo} />
                    
                </div>
                 
                
           
            //         <p>
            //             {}
            //         </p>
            //     </div>
            // </div>
        )
       
    
    }
  
}
const mapDispatchToProps = { set_imglink };
export default connect(null, mapDispatchToProps)(Small_Img)