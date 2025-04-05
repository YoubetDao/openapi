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
import type { Receipt } from '../models';
// @ts-ignore
import type { Task } from '../models';
// @ts-ignore
import type { TaskApply } from '../models';
// @ts-ignore
import type { TaskControllerGetTasks200Response } from '../models';
// @ts-ignore
import type { UpdateTaskDto } from '../models';
/**
 * TasksApi - axios parameter creator
 * @export
 */
export const TasksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} projectList 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskControllerGetCompletedTasks: async (projectList: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectList' is not null or undefined
            assertParamExists('taskControllerGetCompletedTasks', 'projectList', projectList)
            const localVarPath = `/tasks/completed`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (projectList !== undefined) {
                localVarQueryParameter['projectList'] = projectList;
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
         * @param {number} githubId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskControllerGetTask: async (githubId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'githubId' is not null or undefined
            assertParamExists('taskControllerGetTask', 'githubId', githubId)
            const localVarPath = `/tasks/{githubId}`
                .replace(`{${"githubId"}}`, encodeURIComponent(String(githubId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
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
         * @param {string} project 
         * @param {string} assignee 
         * @param {string} states 
         * @param {string} assignmentStatus 
         * @param {number} [offset] 分页偏移量
         * @param {number} [limit] 每页数量
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskControllerGetTasks: async (project: string, assignee: string, states: string, assignmentStatus: string, offset?: number, limit?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'project' is not null or undefined
            assertParamExists('taskControllerGetTasks', 'project', project)
            // verify required parameter 'assignee' is not null or undefined
            assertParamExists('taskControllerGetTasks', 'assignee', assignee)
            // verify required parameter 'states' is not null or undefined
            assertParamExists('taskControllerGetTasks', 'states', states)
            // verify required parameter 'assignmentStatus' is not null or undefined
            assertParamExists('taskControllerGetTasks', 'assignmentStatus', assignmentStatus)
            const localVarPath = `/tasks`;
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

            if (assignee !== undefined) {
                localVarQueryParameter['assignee'] = assignee;
            }

            if (states !== undefined) {
                localVarQueryParameter['states'] = states;
            }

            if (assignmentStatus !== undefined) {
                localVarQueryParameter['assignmentStatus'] = assignmentStatus;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
         * @param {string} taskId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskControllerGrantRewards: async (taskId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskId' is not null or undefined
            assertParamExists('taskControllerGrantRewards', 'taskId', taskId)
            const localVarPath = `/tasks/{taskId}/rewards`
                .replace(`{${"taskId"}}`, encodeURIComponent(String(taskId)));
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
         * @param {number} taskGithubId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskControllerMyTaskApply: async (taskGithubId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskGithubId' is not null or undefined
            assertParamExists('taskControllerMyTaskApply', 'taskGithubId', taskGithubId)
            const localVarPath = `/tasks/{taskGithubId}/my-applies`
                .replace(`{${"taskGithubId"}}`, encodeURIComponent(String(taskGithubId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
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
         * @param {string} states 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskControllerMyTasks: async (states: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'states' is not null or undefined
            assertParamExists('taskControllerMyTasks', 'states', states)
            const localVarPath = `/tasks/mine`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (states !== undefined) {
                localVarQueryParameter['states'] = states;
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
         * @param {number} githubId 
         * @param {UpdateTaskDto} updateTaskDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskControllerUpdateTask: async (githubId: number, updateTaskDto: UpdateTaskDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'githubId' is not null or undefined
            assertParamExists('taskControllerUpdateTask', 'githubId', githubId)
            // verify required parameter 'updateTaskDto' is not null or undefined
            assertParamExists('taskControllerUpdateTask', 'updateTaskDto', updateTaskDto)
            const localVarPath = `/tasks/{githubId}`
                .replace(`{${"githubId"}}`, encodeURIComponent(String(githubId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateTaskDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TasksApi - functional programming interface
 * @export
 */
export const TasksApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TasksApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} projectList 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async taskControllerGetCompletedTasks(projectList: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskControllerGetTasks200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.taskControllerGetCompletedTasks(projectList, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TasksApi.taskControllerGetCompletedTasks']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} githubId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async taskControllerGetTask(githubId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Task>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.taskControllerGetTask(githubId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TasksApi.taskControllerGetTask']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} project 
         * @param {string} assignee 
         * @param {string} states 
         * @param {string} assignmentStatus 
         * @param {number} [offset] 分页偏移量
         * @param {number} [limit] 每页数量
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async taskControllerGetTasks(project: string, assignee: string, states: string, assignmentStatus: string, offset?: number, limit?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskControllerGetTasks200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.taskControllerGetTasks(project, assignee, states, assignmentStatus, offset, limit, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TasksApi.taskControllerGetTasks']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} taskId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async taskControllerGrantRewards(taskId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Receipt>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.taskControllerGrantRewards(taskId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TasksApi.taskControllerGrantRewards']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} taskGithubId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async taskControllerMyTaskApply(taskGithubId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TaskApply>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.taskControllerMyTaskApply(taskGithubId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TasksApi.taskControllerMyTaskApply']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} states 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async taskControllerMyTasks(states: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskControllerGetTasks200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.taskControllerMyTasks(states, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TasksApi.taskControllerMyTasks']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} githubId 
         * @param {UpdateTaskDto} updateTaskDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async taskControllerUpdateTask(githubId: number, updateTaskDto: UpdateTaskDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.taskControllerUpdateTask(githubId, updateTaskDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TasksApi.taskControllerUpdateTask']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * TasksApi - factory interface
 * @export
 */
export const TasksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TasksApiFp(configuration)
    return {
        /**
         * 
         * @param {string} projectList 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskControllerGetCompletedTasks(projectList: string, options?: RawAxiosRequestConfig): AxiosPromise<TaskControllerGetTasks200Response> {
            return localVarFp.taskControllerGetCompletedTasks(projectList, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} githubId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskControllerGetTask(githubId: number, options?: RawAxiosRequestConfig): AxiosPromise<Task> {
            return localVarFp.taskControllerGetTask(githubId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} project 
         * @param {string} assignee 
         * @param {string} states 
         * @param {string} assignmentStatus 
         * @param {number} [offset] 分页偏移量
         * @param {number} [limit] 每页数量
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskControllerGetTasks(project: string, assignee: string, states: string, assignmentStatus: string, offset?: number, limit?: number, options?: RawAxiosRequestConfig): AxiosPromise<TaskControllerGetTasks200Response> {
            return localVarFp.taskControllerGetTasks(project, assignee, states, assignmentStatus, offset, limit, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} taskId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskControllerGrantRewards(taskId: string, options?: RawAxiosRequestConfig): AxiosPromise<Array<Receipt>> {
            return localVarFp.taskControllerGrantRewards(taskId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} taskGithubId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskControllerMyTaskApply(taskGithubId: number, options?: RawAxiosRequestConfig): AxiosPromise<Array<TaskApply>> {
            return localVarFp.taskControllerMyTaskApply(taskGithubId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} states 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskControllerMyTasks(states: string, options?: RawAxiosRequestConfig): AxiosPromise<TaskControllerGetTasks200Response> {
            return localVarFp.taskControllerMyTasks(states, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} githubId 
         * @param {UpdateTaskDto} updateTaskDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskControllerUpdateTask(githubId: number, updateTaskDto: UpdateTaskDto, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.taskControllerUpdateTask(githubId, updateTaskDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TasksApi - interface
 * @export
 * @interface TasksApi
 */
export interface TasksApiInterface {
    /**
     * 
     * @param {string} projectList 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApiInterface
     */
    taskControllerGetCompletedTasks(projectList: string, options?: RawAxiosRequestConfig): AxiosPromise<TaskControllerGetTasks200Response>;

    /**
     * 
     * @param {number} githubId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApiInterface
     */
    taskControllerGetTask(githubId: number, options?: RawAxiosRequestConfig): AxiosPromise<Task>;

    /**
     * 
     * @param {string} project 
     * @param {string} assignee 
     * @param {string} states 
     * @param {string} assignmentStatus 
     * @param {number} [offset] 分页偏移量
     * @param {number} [limit] 每页数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApiInterface
     */
    taskControllerGetTasks(project: string, assignee: string, states: string, assignmentStatus: string, offset?: number, limit?: number, options?: RawAxiosRequestConfig): AxiosPromise<TaskControllerGetTasks200Response>;

    /**
     * 
     * @param {string} taskId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApiInterface
     */
    taskControllerGrantRewards(taskId: string, options?: RawAxiosRequestConfig): AxiosPromise<Array<Receipt>>;

    /**
     * 
     * @param {number} taskGithubId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApiInterface
     */
    taskControllerMyTaskApply(taskGithubId: number, options?: RawAxiosRequestConfig): AxiosPromise<Array<TaskApply>>;

    /**
     * 
     * @param {string} states 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApiInterface
     */
    taskControllerMyTasks(states: string, options?: RawAxiosRequestConfig): AxiosPromise<TaskControllerGetTasks200Response>;

    /**
     * 
     * @param {number} githubId 
     * @param {UpdateTaskDto} updateTaskDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApiInterface
     */
    taskControllerUpdateTask(githubId: number, updateTaskDto: UpdateTaskDto, options?: RawAxiosRequestConfig): AxiosPromise<void>;

}

/**
 * TasksApi - object-oriented interface
 * @export
 * @class TasksApi
 * @extends {BaseAPI}
 */
export class TasksApi extends BaseAPI implements TasksApiInterface {
    /**
     * 
     * @param {string} projectList 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public taskControllerGetCompletedTasks(projectList: string, options?: RawAxiosRequestConfig) {
        return TasksApiFp(this.configuration).taskControllerGetCompletedTasks(projectList, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} githubId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public taskControllerGetTask(githubId: number, options?: RawAxiosRequestConfig) {
        return TasksApiFp(this.configuration).taskControllerGetTask(githubId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} project 
     * @param {string} assignee 
     * @param {string} states 
     * @param {string} assignmentStatus 
     * @param {number} [offset] 分页偏移量
     * @param {number} [limit] 每页数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public taskControllerGetTasks(project: string, assignee: string, states: string, assignmentStatus: string, offset?: number, limit?: number, options?: RawAxiosRequestConfig) {
        return TasksApiFp(this.configuration).taskControllerGetTasks(project, assignee, states, assignmentStatus, offset, limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} taskId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public taskControllerGrantRewards(taskId: string, options?: RawAxiosRequestConfig) {
        return TasksApiFp(this.configuration).taskControllerGrantRewards(taskId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} taskGithubId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public taskControllerMyTaskApply(taskGithubId: number, options?: RawAxiosRequestConfig) {
        return TasksApiFp(this.configuration).taskControllerMyTaskApply(taskGithubId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} states 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public taskControllerMyTasks(states: string, options?: RawAxiosRequestConfig) {
        return TasksApiFp(this.configuration).taskControllerMyTasks(states, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} githubId 
     * @param {UpdateTaskDto} updateTaskDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public taskControllerUpdateTask(githubId: number, updateTaskDto: UpdateTaskDto, options?: RawAxiosRequestConfig) {
        return TasksApiFp(this.configuration).taskControllerUpdateTask(githubId, updateTaskDto, options).then((request) => request(this.axios, this.basePath));
    }
}

