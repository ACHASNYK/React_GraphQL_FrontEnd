import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { set_modal } from '../redux/modal';
import { productById } from '../queries/query';



class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            dataIsLoaded: false,
        }
    }

    // componentDidMount() {
        
    // const query_variable = {
            
    //         "productId": `${this.props.product_id}`

    //     }
    // client.query({ query: productById, variables: query_variable })
    //     .then(result => {
    //         this.setState({
    //             data: result.data,
    //             dataIsLoaded: true
    //         });this.props.set_detailes(result.data)
    //       });
           
        
    // }    
    

    render() {
        const showHideClassName = this.props.modal ? "modal display-block" : "modal display-none";
        return ReactDOM.createPortal(
            <div className={showHideClassName}>
                <div className="modal-main">
                    <h1>"This is modal"</h1>
                    <button type="button" onClick={() => { this.props.set_modal(false) }}>close</button>
                </div>
            </div>,
            document.getElementById('portal')
        )
    }
}

const mapStateToProps = state => {
    return { modal: state.modal.value }
};

const mapDispatchToProps = { set_modal };

export default connect(mapStateToProps,mapDispatchToProps)(Modal)