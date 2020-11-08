export interface RequestOptions {
    /**
     * Use a specific API Key for this request.
     * For Connect, we recommend using `stripeAccount` instead.
     */
    apiKey?: string;
    /** @deprecated Please use apiKey instead. */
    api_key?: string;

    /**
     * See the [idempotency key docs](https://stripe.com/docs/api/idempotency).
     */
    idempotencyKey?: string;
    /** @deprecated Please use idempotencyKey instead. */
    idempotency_key?: string;

    /**
     * An account id on whose behalf you wish to make a request.
     */
    stripeAccount?: string;
    /** @deprecated Please use stripeAccount instead. */
    stripe_account?: string;

    /**
     * The [API Version](https://stripe.com/docs/upgrades) to use for a given request (e.g., '2020-03-02').
     */
    apiVersion?: string;
    /** @deprecated Please use apiVersion instead. */
    stripeVersion?: string;
    /** @deprecated Please use stripeVersion instead. */
    stripe_version?: string;

    /**
     * Specify the number of requests to retry in event of error.
     * This overrides a default set on the Stripe object's config argument.
     */
    maxNetworkRetries?: number;

    /**
     * Specify a timeout for this request in milliseconds.
     */
    timeout?: number;
  }