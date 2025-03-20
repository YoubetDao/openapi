/* tslint:disable */
/* eslint-disable */
/**
 * YouBet Task API
 * YouBet Task RESTful API 文档
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface Receipt
 */
export interface Receipt {
    /**
     * 
     * @type {string}
     * @memberof Receipt
     */
    'user': string;
    /**
     * 
     * @type {object}
     * @memberof Receipt
     */
    'source': object;
    /**
     * 
     * @type {string}
     * @memberof Receipt
     */
    'type': string;
    /**
     * 
     * @type {object}
     * @memberof Receipt
     */
    'detail': object;
    /**
     * 
     * @type {object}
     * @memberof Receipt
     */
    'transactionInfo': object;
    /**
     * 
     * @type {string}
     * @memberof Receipt
     */
    'status': string;
    /**
     * 
     * @type {string}
     * @memberof Receipt
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof Receipt
     */
    'updatedAt': string;
}

