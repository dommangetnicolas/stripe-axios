import { AxiosPromise, AxiosResponse } from "axios";

export namespace PaymentMethods {
    interface PaymentMethodsCreateParams {
        type: string;
        card: {
            number: string;
            exp_month: string;
            exp_year: string;
            cvc: string;
        };
        billing_details?: {
            address?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
            };
            name?: string;
            email?: string;
            phone?: string;
        };
    }

    declare function create(params: PaymentMethodsCreateParams): AxiosPromise;
}