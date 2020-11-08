import { AxiosInstance, AxiosPromise } from "axios";
import { PaymentMethodCreateParams } from "./2020-08-27/PaymentMethods";

export interface IStripeAxiosThis {
   axios: AxiosInstance
}

declare class StripeAxios {
   axios: AxiosInstance

   constructor(apiKey: string);

   paymentMethods: {
      create(params: PaymentMethodCreateParams): AxiosPromise;
   }
}

export default StripeAxios