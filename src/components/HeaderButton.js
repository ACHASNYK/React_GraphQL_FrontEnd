import react, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { set_category } from '../redux/category'; 

class HeaderButton extends Component {

  handleClick(e) {
    this.props.updateParent(e);
    
  }
    
    render() {
  
      return (
        <div className="button">
          <button link={this.props.name} onClick={(e) => this.props(set_category(e.target.innerText))}>{this.props.name}</button>
          
        </div>
      );
    }
    // { this.handleClick(e.target.innerText) }
}
const mapDispatchToProps = { set_category };

export default connect(mapDispatchToProps)(HeaderButton);