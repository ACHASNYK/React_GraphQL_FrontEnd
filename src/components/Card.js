import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { set_productid } from '../redux/productid';
import { set_imglink } from '../redux/imglink';


class Card extends Component {
    // constructor(props) {
    //     super(props);
    // }
   
    render() {

        return (
            // console.log(this.props)
            <Link to="/pdp">
                <div onClick={() => { this.props.set_productid(this.props.item_key); this.props.set_imglink(this.props.photo) } } className="card">
                    <div className="image">                
                        <img className="photo_card" alt="product_img" src={this.props.photo} />
                    </div>
                    <div className="image_text"><h2>OUT OF STOCK</h2></div>
                    <div className="card_title">
                        {this.props.name}
                    </div>                
                    
                </div>
            </Link>    
            //         <p>
            //             {}
            //         </p>
            //     </div>
            // </div>
        )
       
    
    }
  
}

const mapDispatchToProps = { set_productid, set_imglink };
export default connect(null, mapDispatchToProps )(Card)