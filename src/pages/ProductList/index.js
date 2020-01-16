import { connect } from "react-redux";
import { Load, Unload, setError } from "../../store";
import ProductList from './ProductList';
import { DataSource } from "../../web/DataSource";
import apiRoutes from "../../routes/apiRoutes";

const webSvc = new DataSource(apiRoutes.products.url);

const mapStateToProps = (state) => {
        
    return {
        products: state.products
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => {
                webSvc.GetProducts()
                    .then(resp => dispatch(Load(resp.data)))
                    .catch(err => dispatch(setError(err.message)));
        },
        onUnload: () => dispatch(Unload())
    }
}


const wrapper = connect(mapStateToProps, mapDispatchToProps);
const wrappedComponent = wrapper(ProductList);
export default wrappedComponent;