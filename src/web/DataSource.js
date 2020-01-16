import Axios from "axios";

export class DataSource {
    constructor(baseUrl, errorHandler) {
        this.BASE_URL = baseUrl;
        this.errorHandler = errorHandler;
    }

    GetProducts(callback) {
        return this.SendRequest("get", `${this.BASE_URL}`, callback);
    }

    SendRequest(method, url, callback, data) {
        let response = Axios.request({
                method: method,
                url: url,
                data: data});

        if (callback) {
            response.then(resp => callback(resp.data))
                .catch(err => this.errorHandler(err));
        }
        else
            return response;
    }
}