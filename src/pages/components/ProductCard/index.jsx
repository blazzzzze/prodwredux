import React, { Component } from 'react';
import ProductDetails from '../ProductDetails';

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };
    }

    onToggle = () => {
        this.setState({ isToggleOn: !this.state.isToggleOn });
    }

    render() {
        return (
            <div className="p-1 m-1 width100" >
                <div>{this.props.product.Name}</div>
                <div>{this.props.product.descriptionru}</div>   

                <div className="d-inline-block">
                    <button type="button" style={{ "verticalAlign": "baseline", "textDecoration": "none" }} className="btn btn-link d-inline-block" onClick={this.onToggle} >[{this.state.isToggleOn ? "-" : "+"}]</button>
                    <div className="d-inline-block">Под-продукты</div>
                </div>

                {this.state.isToggleOn && <div className="width100">
                    {this.props.subProducts.map(item => <ProductDetails key={item.ProductID} product={item} />)}
                </div> }
            </div>
        );
    }
}

export default ProductCard;

//<div>{JSON.stringify(this.props.subProducts)}</div>