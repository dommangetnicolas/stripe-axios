import { IStripeAxiosThis } from "../types";
import { PaymentMethodCreateParams } from "../types/2020-08-27/PaymentMethods";
import parser from "../utils/parser.utils";

export const create = function(this: IStripeAxiosThis, params: PaymentMethodCreateParams) {
    return this?.axios.post('/payment_methods', parser(params));
}