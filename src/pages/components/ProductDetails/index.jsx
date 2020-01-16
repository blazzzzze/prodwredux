import React, { Component } from 'react';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="sub-products p-1 m-2">
                    <div>Name: {this.props.product.Name}</div>
                    <div>Type: {this.props.product.Type}</div>
                    <div>Description: {this.props.product.descriptionru}</div>              
            </div>
        );
    }
}

export default ProductDetails;