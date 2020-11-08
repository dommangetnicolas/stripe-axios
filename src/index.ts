import resources from './resources';
import { initAxios } from "./utils/axios.utils";


class StripeAxios {
    axios;

    constructor(apiKey) {
        this.axios = initAxios(apiKey)

        for (const name in resources) {
            this[name] = resources[name];
            this[name].axios = this.axios
        }
    }

    paymentMethods = resources.paymentMethods
}

export default StripeAxios