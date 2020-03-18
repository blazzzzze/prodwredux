import { connect } from "react-redux";
import { StartLoad, Unload } from "../../store";
import ProductList from './ProductList';
//import { DataSource } from "../../web/DataSource";
//import apiRoutes from "../../routes/apiRoutes";

//const webSvc = new DataSource(apiRoutes.products.url);

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

const mapDispatchToProps = {
    onLoad: StartLoad,
    onUnload: Unload
};

const wrapper = connect(mapStateToProps, mapDispatchToProps);
const wrappedComponent = wrapper(ProductList);
export default wrappedComponent;

