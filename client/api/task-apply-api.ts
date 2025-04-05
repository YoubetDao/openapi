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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { TaskApplyControllerGetTaskApplies200Response } from '../models';
/**
 * TaskApplyApi - axios parameter creator
 * @export
 */
export const TaskApplyApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskApplyControllerApplyTask: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/task-applies`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskApplyControllerApproveTaskApply: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('taskApplyControllerApproveTaskApply', 'id', id)
            const localVarPath = `/task-applies/{id}/approve`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} namespace 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskApplyControllerGetTaskApplies: async (namespace: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'namespace' is not null or undefined
            assertParamExists('taskApplyControllerGetTaskApplies', 'namespace', namespace)
            const localVarPath = `/task-applies`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} project 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskApplyControllerMyTaskApplies: async (project: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'project' is not null or undefined
            assertParamExists('taskApplyControllerMyTaskApplies', 'project', project)
            const localVarPath = `/task-applies/mine`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (project !== undefined) {
                localVarQueryParameter['project'] = project;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskApplyControllerRejectTaskApply: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('taskApplyControllerRejectTaskApply', 'id', id)
            const localVarPath = `/task-applies/{id}/reject`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskApplyControllerWithdrawApply: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('taskApplyControllerWithdrawApply', 'id', id)
            const localVarPath = `/task-applies/{id}/withdraw`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TaskApplyApi - functional programming interface
 * @export
 */
export const TaskApplyApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TaskApplyApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async taskApplyControllerApplyTask(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.taskApplyControllerApplyTask(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TaskApplyApi.taskApplyControllerApplyTask']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async taskApplyControllerApproveTaskApply(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.taskApplyControllerApproveTaskApply(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TaskApplyApi.taskApplyControllerApproveTaskApply']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} namespace 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async taskApplyControllerGetTaskApplies(namespace: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskApplyControllerGetTaskApplies200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.taskApplyControllerGetTaskApplies(namespace, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TaskApplyApi.taskApplyControllerGetTaskApplies']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} project 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async taskApplyControllerMyTaskApplies(project: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskApplyControllerGetTaskApplies200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.taskApplyControllerMyTaskApplies(project, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TaskApplyApi.taskApplyControllerMyTaskApplies']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async taskApplyControllerRejectTaskApply(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.taskApplyControllerRejectTaskApply(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TaskApplyApi.taskApplyControllerRejectTaskApply']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async taskApplyControllerWithdrawApply(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.taskApplyControllerWithdrawApply(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TaskApplyApi.taskApplyControllerWithdrawApply']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * TaskApplyApi - factory interface
 * @export
 */
export const TaskApplyApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TaskApplyApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskApplyControllerApplyTask(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.taskApplyControllerApplyTask(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskApplyControllerApproveTaskApply(id: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.taskApplyControllerApproveTaskApply(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} namespace 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskApplyControllerGetTaskApplies(namespace: string, options?: RawAxiosRequestConfig): AxiosPromise<TaskApplyControllerGetTaskApplies200Response> {
            return localVarFp.taskApplyControllerGetTaskApplies(namespace, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} project 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskApplyControllerMyTaskApplies(project: string, options?: RawAxiosRequestConfig): AxiosPromise<TaskApplyControllerGetTaskApplies200Response> {
            return localVarFp.taskApplyControllerMyTaskApplies(project, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskApplyControllerRejectTaskApply(id: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.taskApplyControllerRejectTaskApply(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskApplyControllerWithdrawApply(id: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.taskApplyControllerWithdrawApply(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TaskApplyApi - interface
 * @export
 * @interface TaskApplyApi
 */
export interface TaskApplyApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApplyApiInterface
     */
    taskApplyControllerApplyTask(options?: RawAxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApplyApiInterface
     */
    taskApplyControllerApproveTaskApply(id: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} namespace 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApplyApiInterface
     */
    taskApplyControllerGetTaskApplies(namespace: string, options?: RawAxiosRequestConfig): AxiosPromise<TaskApplyControllerGetTaskApplies200Response>;

    /**
     * 
     * @param {string} project 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApplyApiInterface
     */
    taskApplyControllerMyTaskApplies(project: string, options?: RawAxiosRequestConfig): AxiosPromise<TaskApplyControllerGetTaskApplies200Response>;

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApplyApiInterface
     */
    taskApplyControllerRejectTaskApply(id: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApplyApiInterface
     */
    taskApplyControllerWithdrawApply(id: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;

}

/**
 * TaskApplyApi - object-oriented interface
 * @export
 * @class TaskApplyApi
 * @extends {BaseAPI}
 */
export class TaskApplyApi extends BaseAPI implements TaskApplyApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApplyApi
     */
    public taskApplyControllerApplyTask(options?: RawAxiosRequestConfig) {
        return TaskApplyApiFp(this.configuration).taskApplyControllerApplyTask(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApplyApi
     */
    public taskApplyControllerApproveTaskApply(id: string, options?: RawAxiosRequestConfig) {
        return TaskApplyApiFp(this.configuration).taskApplyControllerApproveTaskApply(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} namespace 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApplyApi
     */
    public taskApplyControllerGetTaskApplies(namespace: string, options?: RawAxiosRequestConfig) {
        return TaskApplyApiFp(this.configuration).taskApplyControllerGetTaskApplies(namespace, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} project 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApplyApi
     */
    public taskApplyControllerMyTaskApplies(project: string, options?: RawAxiosRequestConfig) {
        return TaskApplyApiFp(this.configuration).taskApplyControllerMyTaskApplies(project, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApplyApi
     */
    public taskApplyControllerRejectTaskApply(id: string, options?: RawAxiosRequestConfig) {
        return TaskApplyApiFp(this.configuration).taskApplyControllerRejectTaskApply(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskApplyApi
     */
    public taskApplyControllerWithdrawApply(id: string, options?: RawAxiosRequestConfig) {
        return TaskApplyApiFp(this.configuration).taskApplyControllerWithdrawApply(id, options).then((request) => request(this.axios, this.basePath));
    }
}

