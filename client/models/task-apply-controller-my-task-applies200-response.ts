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
import type { TaskApply } from './task-apply';
// May contain unused imports in some cases
// @ts-ignore
import type { UserControllerLeaderboard200ResponsePagination } from './user-controller-leaderboard200-response-pagination';

/**
 * 
 * @export
 * @interface TaskApplyControllerMyTaskApplies200Response
 */
export interface TaskApplyControllerMyTaskApplies200Response {
    /**
     * 
     * @type {UserControllerLeaderboard200ResponsePagination}
     * @memberof TaskApplyControllerMyTaskApplies200Response
     */
    'pagination'?: UserControllerLeaderboard200ResponsePagination;
    /**
     * 
     * @type {Array<TaskApply>}
     * @memberof TaskApplyControllerMyTaskApplies200Response
     */
    'data'?: Array<TaskApply>;
}

