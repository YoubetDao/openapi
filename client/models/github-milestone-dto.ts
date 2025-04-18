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
import type { GithubUserDto } from './github-user-dto';

/**
 * 
 * @export
 * @interface GithubMilestoneDto
 */
export interface GithubMilestoneDto {
    /**
     * 
     * @type {string}
     * @memberof GithubMilestoneDto
     */
    'url': string;
    /**
     * 
     * @type {string}
     * @memberof GithubMilestoneDto
     */
    'html_url': string;
    /**
     * 
     * @type {string}
     * @memberof GithubMilestoneDto
     */
    'labels_url': string;
    /**
     * 
     * @type {number}
     * @memberof GithubMilestoneDto
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof GithubMilestoneDto
     */
    'node_id': string;
    /**
     * 
     * @type {number}
     * @memberof GithubMilestoneDto
     */
    'number': number;
    /**
     * 
     * @type {string}
     * @memberof GithubMilestoneDto
     */
    'state': string;
    /**
     * 
     * @type {string}
     * @memberof GithubMilestoneDto
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof GithubMilestoneDto
     */
    'description'?: string;
    /**
     * 
     * @type {GithubUserDto}
     * @memberof GithubMilestoneDto
     */
    'creator': GithubUserDto;
    /**
     * 
     * @type {number}
     * @memberof GithubMilestoneDto
     */
    'open_issues': number;
    /**
     * 
     * @type {number}
     * @memberof GithubMilestoneDto
     */
    'closed_issues': number;
    /**
     * 
     * @type {string}
     * @memberof GithubMilestoneDto
     */
    'created_at': string;
    /**
     * 
     * @type {string}
     * @memberof GithubMilestoneDto
     */
    'updated_at': string;
    /**
     * 
     * @type {string}
     * @memberof GithubMilestoneDto
     */
    'closed_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof GithubMilestoneDto
     */
    'due_on'?: string;
}

