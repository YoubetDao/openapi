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


// May contain unused imports in some cases
// @ts-ignore
import type { ReceiptControllerMyReceipts200ResponsePagination } from './receipt-controller-my-receipts200-response-pagination';
// May contain unused imports in some cases
// @ts-ignore
import type { Task } from './task';

/**
 * 
 * @export
 * @interface TaskControllerGetTasks200Response
 */
export interface TaskControllerGetTasks200Response {
    /**
     * 
     * @type {ReceiptControllerMyReceipts200ResponsePagination}
     * @memberof TaskControllerGetTasks200Response
     */
    'pagination'?: ReceiptControllerMyReceipts200ResponsePagination;
    /**
     * 
     * @type {Array<Task>}
     * @memberof TaskControllerGetTasks200Response
     */
    'data'?: Array<Task>;
}

