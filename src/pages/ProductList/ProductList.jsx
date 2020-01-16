import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';
import PropTypes from 'prop-types';


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.onLoad();
    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div>
                            {this.props.products
                                .filter(item => item.ParentID === null && item.isDeleted === false)
                                .map(item => <ProductCard key={item.ProductID} product={item} subProducts={
                                    this.props.products.filter(subItem => subItem.ParentID === item.ProductID && item.isDeleted === false)
                            } />)}
                        </div>
                    </div>
                </div>
                    
            </div>
        );
    }
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired, 
    onLoad: PropTypes.func.isRequired,
    onUnload: PropTypes.func.isRequired
};

ProductList.defaultProps = {
    products: [],
    onLoad: () => { },
    onUnload: () => { }
};

export default ProductList;