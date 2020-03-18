import BaseWebService from "./baseWebService";

class ProductService extends BaseWebService {

    load = (callback) => {
        return this.sendRequest(`${this.BASE_URL}`, "get", callback);
    }
}

export default ProductService;