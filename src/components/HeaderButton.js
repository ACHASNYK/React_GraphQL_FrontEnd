import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { set_category } from '../redux/category'; 

class HeaderButton extends Component {

  // handleClick(e) {
  //   this.props.updateParent(e);
    
  // }
  saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    sessionStorage.setItem("category", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}
    
    render() {
  
      return (
        <Link to="/" className="router_links">
          <div className="button" link={this.props.name} onClick={(e) => { this.props.set_category(e.target.innerHTML); this.saveToLocalStorage(e.target.innerHTML) }}>
            <p className="label">{this.props.name}</p>
            <div className="border">
              <div className="padding"></div>
              <div className="bottom"></div>
              <div className="padding">         
              </div>
          </div>
          </div>
            {/* <button link={this.props.name}
              onClick={(e) =>
                this.props.set_category(e.target.innerText)}>
              {this.props.name}
            </button> */}
          
          {/* </div> */}
        </Link>  
      );
    }
    // { this.handleClick(e.target.innerText) }
}

const mapDispatchToProps = { set_category };

export default connect(null, mapDispatchToProps)(HeaderButton);