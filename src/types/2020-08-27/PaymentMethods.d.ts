import { AxiosPromise } from "axios";
import { RequestOptions } from "../lib";
import { Address, Metadata, MetadataParam, PaginationParams } from "../shared";

export interface PaymentMethod {
/**
 * Unique identifier for the object.
 */
id: string;

/**
 * String representing the object's type. Objects of the same type share the same value.
 */
object: 'payment_method';

alipay?: PaymentMethod.Alipay;

au_becs_debit?: PaymentMethod.AuBecsDebit;

bacs_debit?: PaymentMethod.BacsDebit;

bancontact?: PaymentMethod.Bancontact;

billing_details: PaymentMethod.BillingDetails;

card?: PaymentMethod.Card;

card_present?: PaymentMethod.CardPresent;

/**
 * Time at which the object was created. Measured in seconds since the Unix epoch.
 */
created: number;

/**
 * The ID of the Customer to which this PaymentMethod is saved. This will not be set when the PaymentMethod has not been saved to a Customer.
 */
customer: string | null;

eps?: PaymentMethod.Eps;

fpx?: PaymentMethod.Fpx;

giropay?: PaymentMethod.Giropay;

ideal?: PaymentMethod.Ideal;

interac_present?: PaymentMethod.InteracPresent;

/**
 * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
 */
livemode: boolean;

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 */
metadata: Metadata | null;

oxxo?: PaymentMethod.Oxxo;

p24?: PaymentMethod.P24;

sepa_debit?: PaymentMethod.SepaDebit;

sofort?: PaymentMethod.Sofort;

/**
 * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
 */
type: PaymentMethod.Type;
}

export namespace PaymentMethod {
export interface Alipay {}

export interface AuBecsDebit {
    /**
     * Six-digit number identifying bank and branch associated with this bank account.
     */
    bsb_number: string | null;

    /**
     * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
     */
    fingerprint: string | null;

    /**
     * Last four digits of the bank account number.
     */
    last4: string | null;
}

export interface BacsDebit {
    /**
     * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
     */
    fingerprint: string | null;

    /**
     * Last four digits of the bank account number.
     */
    last4: string | null;

    /**
     * Sort code of the bank account. (e.g., `10-20-30`)
     */
    sort_code: string | null;
}

export interface Bancontact {}

export interface BillingDetails {
    /**
     * Billing address.
     */
    address: Address | null;

    /**
     * Email address.
     */
    email: string | null;

    /**
     * Full name.
     */
    name: string | null;

    /**
     * Billing phone number (including extension).
     */
    phone: string | null;
}

export interface Card {
    /**
     * Card brand. Can be `amex`, `diners`, `discover`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
     */
    brand: string;

    /**
     * Checks on Card address and CVC if provided.
     */
    checks: Card.Checks | null;

    /**
     * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
     */
    country: string | null;

    /**
     * Card description. (For internal use only and not typically available in standard API requests.)
     */
    description?: string | null;

    /**
     * Two-digit number representing the card's expiration month.
     */
    exp_month: number;

    /**
     * Four-digit number representing the card's expiration year.
     */
    exp_year: number;

    /**
     * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
     */
    fingerprint?: string | null;

    /**
     * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
     */
    funding: string;

    /**
     * Issuer identification number of the card. (For internal use only and not typically available in standard API requests.)
     */
    iin?: string | null;

    /**
     * Issuer bank name of the card. (For internal use only and not typically available in standard API requests.)
     */
    issuer?: string | null;

    /**
     * The last four digits of the card.
     */
    last4: string;

    /**
     * Contains information about card networks that can be used to process the payment.
     */
    networks: Card.Networks | null;

    /**
     * Contains details on how this Card maybe be used for 3D Secure authentication.
     */
    three_d_secure_usage: Card.ThreeDSecureUsage | null;

    /**
     * If this Card is part of a card wallet, this contains the details of the card wallet.
     */
    wallet: Card.Wallet | null;
}

export namespace Card {
    export interface Checks {
    /**
     * If a address line1 was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
     */
    address_line1_check: string | null;

    /**
     * If a address postal code was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
     */
    address_postal_code_check: string | null;

    /**
     * If a CVC was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
     */
    cvc_check: string | null;
    }

    export interface Networks {
    /**
     * All available networks for the card.
     */
    available: Array<string>;

    /**
     * The preferred network for the card.
     */
    preferred: string | null;
    }

    export interface ThreeDSecureUsage {
    /**
     * Whether 3D Secure is supported on this card.
     */
    supported: boolean;
    }

    export interface Wallet {
    amex_express_checkout?: Wallet.AmexExpressCheckout;

    apple_pay?: Wallet.ApplePay;

    /**
     * (For tokenized numbers only.) The last four digits of the device account number.
     */
    dynamic_last4: string | null;

    google_pay?: Wallet.GooglePay;

    masterpass?: Wallet.Masterpass;

    samsung_pay?: Wallet.SamsungPay;

    /**
     * The type of the card wallet, one of `amex_express_checkout`, `apple_pay`, `google_pay`, `masterpass`, `samsung_pay`, or `visa_checkout`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
     */
    type: Wallet.Type;

    visa_checkout?: Wallet.VisaCheckout;
    }

    export namespace Wallet {
    export interface AmexExpressCheckout {}

    export interface ApplePay {}

    export interface GooglePay {}

    export interface Masterpass {
        /**
         * Owner's verified billing address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
         */
        billing_address: Address | null;

        /**
         * Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
         */
        email: string | null;

        /**
         * Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
         */
        name: string | null;

        /**
         * Owner's verified shipping address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
         */
        shipping_address: Address | null;
    }

    export interface SamsungPay {}

    type Type =
        | 'amex_express_checkout'
        | 'apple_pay'
        | 'google_pay'
        | 'masterpass'
        | 'samsung_pay'
        | 'visa_checkout';

    export interface VisaCheckout {
        /**
         * Owner's verified billing address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
         */
        billing_address: Address | null;

        /**
         * Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
         */
        email: string | null;

        /**
         * Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
         */
        name: string | null;

        /**
         * Owner's verified shipping address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
         */
        shipping_address: Address | null;
    }
    }
}

export interface CardPresent {}

export interface Eps {}

export interface Fpx {
    /**
     * Account holder type, if provided. Can be one of `individual` or `company`.
     */
    account_holder_type: Fpx.AccountHolderType | null;

    /**
     * The customer's bank, if provided. Can be one of `affin_bank`, `alliance_bank`, `ambank`, `bank_islam`, `bank_muamalat`, `bank_rakyat`, `bsn`, `cimb`, `hong_leong_bank`, `hsbc`, `kfh`, `maybank2u`, `ocbc`, `public_bank`, `rhb`, `standard_chartered`, `uob`, `deutsche_bank`, `maybank2e`, or `pb_enterprise`.
     */
    bank: Fpx.Bank;
}

export namespace Fpx {
    type AccountHolderType = 'company' | 'individual';

    type Bank =
    | 'affin_bank'
    | 'alliance_bank'
    | 'ambank'
    | 'bank_islam'
    | 'bank_muamalat'
    | 'bank_rakyat'
    | 'bsn'
    | 'cimb'
    | 'deutsche_bank'
    | 'hong_leong_bank'
    | 'hsbc'
    | 'kfh'
    | 'maybank2e'
    | 'maybank2u'
    | 'ocbc'
    | 'pb_enterprise'
    | 'public_bank'
    | 'rhb'
    | 'standard_chartered'
    | 'uob';
}

export interface Giropay {}

export interface Ideal {
    /**
     * The customer's bank, if provided. Can be one of `abn_amro`, `asn_bank`, `bunq`, `handelsbanken`, `ing`, `knab`, `moneyou`, `rabobank`, `regiobank`, `sns_bank`, `triodos_bank`, or `van_lanschot`.
     */
    bank: Ideal.Bank | null;

    /**
     * The Bank Identifier Code of the customer's bank, if the bank was provided.
     */
    bic: Ideal.Bic | null;
}

export namespace Ideal {
    type Bank =
    | 'abn_amro'
    | 'asn_bank'
    | 'bunq'
    | 'handelsbanken'
    | 'ing'
    | 'knab'
    | 'moneyou'
    | 'rabobank'
    | 'regiobank'
    | 'sns_bank'
    | 'triodos_bank'
    | 'van_lanschot';

    type Bic =
    | 'ABNANL2A'
    | 'ASNBNL21'
    | 'BUNQNL2A'
    | 'FVLBNL22'
    | 'HANDNL2A'
    | 'INGBNL2A'
    | 'KNABNL2H'
    | 'MOYONL21'
    | 'RABONL2U'
    | 'RBRBNL21'
    | 'SNSBNL2A'
    | 'TRIONL2U';
}

export interface InteracPresent {}

export interface Oxxo {}

export interface P24 {
    /**
     * The customer's bank, if provided.
     */
    bank: P24.Bank | null;
}

export namespace P24 {
    type Bank =
    | 'alior_bank'
    | 'bank_millennium'
    | 'bank_nowy_bfg_sa'
    | 'bank_pekao_sa'
    | 'banki_spbdzielcze'
    | 'blik'
    | 'bnp_paribas'
    | 'boz'
    | 'citi_handlowy'
    | 'credit_agricole'
    | 'envelobank'
    | 'etransfer_pocztowy24'
    | 'getin_bank'
    | 'ideabank'
    | 'ing'
    | 'inteligo'
    | 'mbank_mtransfer'
    | 'nest_przelew'
    | 'noble_pay'
    | 'pbac_z_ipko'
    | 'plus_bank'
    | 'santander_przelew24'
    | 'tmobile_usbugi_bankowe'
    | 'toyota_bank'
    | 'volkswagen_bank';
}

export interface SepaDebit {
    /**
     * Bank code of bank associated with the bank account.
     */
    bank_code: string | null;

    /**
     * Branch code of bank associated with the bank account.
     */
    branch_code: string | null;

    /**
     * Two-letter ISO code representing the country the bank account is located in.
     */
    country: string | null;

    /**
     * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
     */
    fingerprint: string | null;

    /**
     * Information about the object that generated this PaymentMethod.
     */
    generated_from: SepaDebit.GeneratedFrom | null;

    /**
     * Last four characters of the IBAN.
     */
    last4: string | null;
}

export namespace SepaDebit {
    export interface GeneratedFrom {
    /**
     * The ID of the Charge that generated this PaymentMethod, if any.
     */
    charge: string | null;

    /**
     * The ID of the SetupAttempt that generated this PaymentMethod, if any.
     */
    setup_attempt: string | null;
    }
}

export interface Sofort {
    /**
     * Two-letter ISO code representing the country the bank account is located in.
     */
    country: string | null;
}

type Type =
    | 'alipay'
    | 'au_becs_debit'
    | 'bacs_debit'
    | 'bancontact'
    | 'card'
    | 'eps'
    | 'fpx'
    | 'giropay'
    | 'ideal'
    | 'oxxo'
    | 'p24'
    | 'sepa_debit'
    | 'sofort';
}

export interface PaymentMethodCreateParams {
/**
 * If this is an `Alipay` PaymentMethod, this hash contains details about the Alipay payment method.
 */
alipay?: PaymentMethodCreateParams.Alipay;

/**
 * If this is an `au_becs_debit` PaymentMethod, this hash contains details about the bank account.
 */
au_becs_debit?: PaymentMethodCreateParams.AuBecsDebit;

/**
 * If this is a `bacs_debit` PaymentMethod, this hash contains details about the Bacs Direct Debit bank account.
 */
bacs_debit?: PaymentMethodCreateParams.BacsDebit;

/**
 * If this is a `bancontact` PaymentMethod, this hash contains details about the Bancontact payment method.
 */
bancontact?: PaymentMethodCreateParams.Bancontact;

/**
 * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
 */
billing_details?: PaymentMethodCreateParams.BillingDetails;

/**
 * If this is a `card` PaymentMethod, this hash contains the user's card details. For backwards compatibility, you can alternatively provide a Stripe token (e.g., for Apple Pay, Amex Express Checkout, or legacy Checkout) into the card hash with format `card: {token: "tok_visa"}`. When providing a card number, you must meet the requirements for [PCI compliance](https://stripe.com/docs/security#validating-pci-compliance). We strongly recommend using Stripe.js instead of interacting with this API directly.
 */
card?: PaymentMethodCreateParams.Card1 | PaymentMethodCreateParams.Card2;

/**
 * The `Customer` to whom the original PaymentMethod is attached.
 */
customer?: string;

/**
 * If this is an `eps` PaymentMethod, this hash contains details about the EPS payment method.
 */
eps?: PaymentMethodCreateParams.Eps;

/**
 * Specifies which fields in the response should be expanded.
 */
expand?: Array<string>;

/**
 * If this is an `fpx` PaymentMethod, this hash contains details about the FPX payment method.
 */
fpx?: PaymentMethodCreateParams.Fpx;

/**
 * If this is a `giropay` PaymentMethod, this hash contains details about the Giropay payment method.
 */
giropay?: PaymentMethodCreateParams.Giropay;

/**
 * If this is an `ideal` PaymentMethod, this hash contains details about the iDEAL payment method.
 */
ideal?: PaymentMethodCreateParams.Ideal;

/**
 * If this is an `interac_present` PaymentMethod, this hash contains details about the Interac Present payment method.
 */
interac_present?: PaymentMethodCreateParams.InteracPresent;

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
 */
metadata?: MetadataParam;

/**
 * If this is an `oxxo` PaymentMethod, this hash contains details about the OXXO payment method.
 */
oxxo?: PaymentMethodCreateParams.Oxxo;

/**
 * If this is a `p24` PaymentMethod, this hash contains details about the P24 payment method.
 */
p24?: PaymentMethodCreateParams.P24;

/**
 * The PaymentMethod to share.
 */
payment_method?: string;

/**
 * If this is a `sepa_debit` PaymentMethod, this hash contains details about the SEPA debit bank account.
 */
sepa_debit?: PaymentMethodCreateParams.SepaDebit;

/**
 * If this is a `sofort` PaymentMethod, this hash contains details about the SOFORT payment method.
 */
sofort?: PaymentMethodCreateParams.Sofort;

/**
 * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
 */
type?: PaymentMethodCreateParams.Type;
}

export namespace PaymentMethodCreateParams {
export interface Alipay {}

export interface AuBecsDebit {
    /**
     * The account number for the bank account.
     */
    account_number: string;

    /**
     * Bank-State-Branch number of the bank account.
     */
    bsb_number: string;
}

export interface BacsDebit {
    /**
     * Account number of the bank account that the funds will be debited from.
     */
    account_number?: string;

    /**
     * Sort code of the bank account. (e.g., `10-20-30`)
     */
    sort_code?: string;
}

export interface Bancontact {}

export interface BillingDetails {
    /**
     * Billing address.
     */
    address?: BillingDetails.Address;

    /**
     * Email address.
     */
    email?: string;

    /**
     * Full name.
     */
    name?: string;

    /**
     * Billing phone number (including extension).
     */
    phone?: string;
}

export namespace BillingDetails {
    export interface Address {
    /**
     * City, district, suburb, town, or village.
     */
    city?: string;

    /**
     * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
     */
    country?: string;

    /**
     * Address line 1 (e.g., street, PO Box, or company name).
     */
    line1?: string;

    /**
     * Address line 2 (e.g., apartment, suite, unit, or building).
     */
    line2?: string;

    /**
     * ZIP or postal code.
     */
    postal_code?: string;

    /**
     * State, county, province, or region.
     */
    state?: string;
    }
}

export interface Card1 {
    /**
     * The card's CVC. It is highly recommended to always include this value.
     */
    cvc?: string;

    /**
     * Two-digit number representing the card's expiration month.
     */
    exp_month: number;

    /**
     * Four-digit number representing the card's expiration year.
     */
    exp_year: number;

    /**
     * The card number, as a string without any separators.
     */
    number: string;
}

export interface Card2 {
    token: string;
}

export interface Eps {}

export interface Fpx {
    /**
     * Account holder type for FPX transaction
     */
    account_holder_type?: Fpx.AccountHolderType;

    /**
     * The customer's bank.
     */
    bank: Fpx.Bank;
}

export namespace Fpx {
    type AccountHolderType = 'company' | 'individual';

    type Bank =
    | 'affin_bank'
    | 'alliance_bank'
    | 'ambank'
    | 'bank_islam'
    | 'bank_muamalat'
    | 'bank_rakyat'
    | 'bsn'
    | 'cimb'
    | 'deutsche_bank'
    | 'hong_leong_bank'
    | 'hsbc'
    | 'kfh'
    | 'maybank2e'
    | 'maybank2u'
    | 'ocbc'
    | 'pb_enterprise'
    | 'public_bank'
    | 'rhb'
    | 'standard_chartered'
    | 'uob';
}

export interface Giropay {}

export interface Ideal {
    /**
     * The customer's bank.
     */
    bank?: Ideal.Bank;
}

export namespace Ideal {
    type Bank =
    | 'abn_amro'
    | 'asn_bank'
    | 'bunq'
    | 'handelsbanken'
    | 'ing'
    | 'knab'
    | 'moneyou'
    | 'rabobank'
    | 'regiobank'
    | 'sns_bank'
    | 'triodos_bank'
    | 'van_lanschot';
}

export interface InteracPresent {}

export interface Oxxo {}

export interface P24 {
    /**
     * The customer's bank.
     */
    bank?: P24.Bank;
}

export namespace P24 {
    type Bank =
    | 'alior_bank'
    | 'bank_millennium'
    | 'bank_nowy_bfg_sa'
    | 'bank_pekao_sa'
    | 'banki_spbdzielcze'
    | 'blik'
    | 'bnp_paribas'
    | 'boz'
    | 'citi_handlowy'
    | 'credit_agricole'
    | 'envelobank'
    | 'etransfer_pocztowy24'
    | 'getin_bank'
    | 'ideabank'
    | 'ing'
    | 'inteligo'
    | 'mbank_mtransfer'
    | 'nest_przelew'
    | 'noble_pay'
    | 'pbac_z_ipko'
    | 'plus_bank'
    | 'santander_przelew24'
    | 'tmobile_usbugi_bankowe'
    | 'toyota_bank'
    | 'volkswagen_bank';
}

export interface SepaDebit {
    /**
     * IBAN of the bank account.
     */
    iban: string;
}

export interface Sofort {
    /**
     * Two-letter ISO code representing the country the bank account is located in.
     */
    country: Sofort.Country;
}

export namespace Sofort {
    type Country = 'AT' | 'BE' | 'DE' | 'ES' | 'IT' | 'NL';
}

type Type =
    | 'alipay'
    | 'au_becs_debit'
    | 'bacs_debit'
    | 'bancontact'
    | 'card'
    | 'eps'
    | 'fpx'
    | 'giropay'
    | 'ideal'
    | 'oxxo'
    | 'p24'
    | 'sepa_debit'
    | 'sofort';
}

export interface PaymentMethodRetrieveParams {
/**
 * Specifies which fields in the response should be expanded.
 */
expand?: Array<string>;
}

export interface PaymentMethodUpdateParams {
/**
 * This is a legacy parameter that will be removed in the future. It is a hash that does not accept any keys.
 */
au_becs_debit?: PaymentMethodUpdateParams.AuBecsDebit;

/**
 * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
 */
billing_details?: PaymentMethodUpdateParams.BillingDetails;

/**
 * If this is a `card` PaymentMethod, this hash contains the user's card details.
 */
card?: PaymentMethodUpdateParams.Card;

/**
 * Specifies which fields in the response should be expanded.
 */
expand?: Array<string>;

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
 */
metadata?: MetadataParam;

/**
 * This is a legacy parameter that will be removed in the future. It is a hash that does not accept any keys.
 */
sepa_debit?: PaymentMethodUpdateParams.SepaDebit;
}

export namespace PaymentMethodUpdateParams {
export interface AuBecsDebit {}

export interface BillingDetails {
    /**
     * Billing address.
     */
    address?: BillingDetails.Address;

    /**
     * Email address.
     */
    email?: string;

    /**
     * Full name.
     */
    name?: string;

    /**
     * Billing phone number (including extension).
     */
    phone?: string;
}

export namespace BillingDetails {
    export interface Address {
    /**
     * City, district, suburb, town, or village.
     */
    city?: string;

    /**
     * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
     */
    country?: string;

    /**
     * Address line 1 (e.g., street, PO Box, or company name).
     */
    line1?: string;

    /**
     * Address line 2 (e.g., apartment, suite, unit, or building).
     */
    line2?: string;

    /**
     * ZIP or postal code.
     */
    postal_code?: string;

    /**
     * State, county, province, or region.
     */
    state?: string;
    }
}

export interface Card {
    /**
     * Two-digit number representing the card's expiration month.
     */
    exp_month?: number;

    /**
     * Four-digit number representing the card's expiration year.
     */
    exp_year?: number;
}

export interface SepaDebit {}
}

export interface PaymentMethodListParams extends PaginationParams {
/**
 * The ID of the customer whose PaymentMethods will be retrieved.
 */
customer: string;

/**
 * A required filter on the list, based on the object `type` field.
 */
type: PaymentMethodListParams.Type;

/**
 * Specifies which fields in the response should be expanded.
 */
expand?: Array<string>;
}

export namespace PaymentMethodListParams {
type Type =
    | 'alipay'
    | 'au_becs_debit'
    | 'bacs_debit'
    | 'bancontact'
    | 'card'
    | 'card_present'
    | 'eps'
    | 'fpx'
    | 'giropay'
    | 'ideal'
    | 'oxxo'
    | 'p24'
    | 'sepa_debit'
    | 'sofort';
}

export interface PaymentMethodAttachParams {
/**
 * The ID of the customer to which to attach the PaymentMethod.
 */
customer: string;

/**
 * Specifies which fields in the response should be expanded.
 */
expand?: Array<string>;
}

export interface PaymentMethodDetachParams {
/**
 * Specifies which fields in the response should be expanded.
 */
expand?: Array<string>;
}

export class PaymentMethodsResource {
/**
 * Creates a PaymentMethod object. Read the [Stripe.js reference](https://stripe.com/docs/stripe-js/reference#stripe-create-payment-method) to learn how to create PaymentMethods via Stripe.js.
 */
create(
    params?: PaymentMethodCreateParams,
    options?: RequestOptions
): Promise<AxiosPromise>;
create(
    options?: RequestOptions
): Promise<AxiosPromise>;
}
