import { StripeAxios } from "../@types";
import { PaymentMethods } from "../@types/PaymentMethods";
import parser from "../utils/parser.utils";

export const create = function(this: StripeAxios, params: PaymentMethods.PaymentMethodsCreateParams) {
    return this?.axios.post('/payment_methods', parser(params));
}