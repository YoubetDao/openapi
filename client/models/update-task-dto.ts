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
import type { RewardDetail } from './reward-detail';

/**
 * 
 * @export
 * @interface UpdateTaskDto
 */
export interface UpdateTaskDto {
    /**
     * 
     * @type {RewardDetail}
     * @memberof UpdateTaskDto
     */
    'reward': RewardDetail;
    /**
     * 
     * @type {string}
     * @memberof UpdateTaskDto
     */
    'level': string;
}

