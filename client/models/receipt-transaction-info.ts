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
 * @interface ReceiptTransactionInfo
 */
export interface ReceiptTransactionInfo {
    /**
     * 
     * @type {number}
     * @memberof ReceiptTransactionInfo
     */
    'chainId': number;
    /**
     * 
     * @type {string}
     * @memberof ReceiptTransactionInfo
     */
    'contractAddress': string;
    /**
     * 
     * @type {string}
     * @memberof ReceiptTransactionInfo
     */
    'from': string;
    /**
     * 
     * @type {string}
     * @memberof ReceiptTransactionInfo
     */
    'to': string;
    /**
     * 
     * @type {string}
     * @memberof ReceiptTransactionInfo
     */
    'txId': string;
    /**
     * 
     * @type {string}
     * @memberof ReceiptTransactionInfo
     */
    'txTimestamp': string;
}

