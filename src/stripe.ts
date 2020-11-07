import { AxiosInstance } from "axios"
import { initAxios } from "./utils/axios.utils";

import resources from './resources'

export default class Stripe {
    protected axios: AxiosInstance;

    constructor(apiKey: string) {
        this.axios = initAxios(apiKey)

        for (const name in resources) {
            this[name] = resources[name];
            this[name].axios = this.axios
        }
    }

    public paymentMethods = resources.paymentMethods
}