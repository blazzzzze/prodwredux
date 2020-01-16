import { connect } from "react-redux";
import { hideError } from "../../../store";
import ErrorMessage from './ErrorMessage';

const mapStoreToProps = store => ({
    errMessage: store.errMessage,
    showError: store.showError
});

const mapDispatchToProps = {
    onClose: hideError
};

const wrapper = connect(mapStoreToProps, mapDispatchToProps);
const wrappedComponent = wrapper(ErrorMessage);
export default wrappedComponent;