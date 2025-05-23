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
/**
 * TutorialApi - axios parameter creator
 * @export
 */
export const TutorialApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} owner 
         * @param {string} repo 
         * @param {string} path 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tutorialControllerFetchMarkdown: async (owner: string, repo: string, path: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'owner' is not null or undefined
            assertParamExists('tutorialControllerFetchMarkdown', 'owner', owner)
            // verify required parameter 'repo' is not null or undefined
            assertParamExists('tutorialControllerFetchMarkdown', 'repo', repo)
            // verify required parameter 'path' is not null or undefined
            assertParamExists('tutorialControllerFetchMarkdown', 'path', path)
            const localVarPath = `/tutorials/{owner}/{repo}/content`
                .replace(`{${"owner"}}`, encodeURIComponent(String(owner)))
                .replace(`{${"repo"}}`, encodeURIComponent(String(repo)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (path !== undefined) {
                localVarQueryParameter['path'] = path;
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
         * @param {string} owner 
         * @param {string} repo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tutorialControllerGetMdbookChapters: async (owner: string, repo: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'owner' is not null or undefined
            assertParamExists('tutorialControllerGetMdbookChapters', 'owner', owner)
            // verify required parameter 'repo' is not null or undefined
            assertParamExists('tutorialControllerGetMdbookChapters', 'repo', repo)
            const localVarPath = `/tutorials/{owner}/{repo}/chapters`
                .replace(`{${"owner"}}`, encodeURIComponent(String(owner)))
                .replace(`{${"repo"}}`, encodeURIComponent(String(repo)));
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
         * @param {number} githubId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tutorialControllerGetTutorialContent: async (githubId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'githubId' is not null or undefined
            assertParamExists('tutorialControllerGetTutorialContent', 'githubId', githubId)
            const localVarPath = `/tutorials/{githubId}`
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
         * @param {string} categories 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tutorialControllerGetTutorials: async (categories: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'categories' is not null or undefined
            assertParamExists('tutorialControllerGetTutorials', 'categories', categories)
            const localVarPath = `/tutorials`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (categories !== undefined) {
                localVarQueryParameter['categories'] = categories;
            }


    
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
 * TutorialApi - functional programming interface
 * @export
 */
export const TutorialApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TutorialApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} owner 
         * @param {string} repo 
         * @param {string} path 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tutorialControllerFetchMarkdown(owner: string, repo: string, path: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tutorialControllerFetchMarkdown(owner, repo, path, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TutorialApi.tutorialControllerFetchMarkdown']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} owner 
         * @param {string} repo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tutorialControllerGetMdbookChapters(owner: string, repo: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tutorialControllerGetMdbookChapters(owner, repo, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TutorialApi.tutorialControllerGetMdbookChapters']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} githubId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tutorialControllerGetTutorialContent(githubId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tutorialControllerGetTutorialContent(githubId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TutorialApi.tutorialControllerGetTutorialContent']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} categories 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tutorialControllerGetTutorials(categories: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tutorialControllerGetTutorials(categories, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TutorialApi.tutorialControllerGetTutorials']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * TutorialApi - factory interface
 * @export
 */
export const TutorialApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TutorialApiFp(configuration)
    return {
        /**
         * 
         * @param {string} owner 
         * @param {string} repo 
         * @param {string} path 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tutorialControllerFetchMarkdown(owner: string, repo: string, path: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.tutorialControllerFetchMarkdown(owner, repo, path, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} owner 
         * @param {string} repo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tutorialControllerGetMdbookChapters(owner: string, repo: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.tutorialControllerGetMdbookChapters(owner, repo, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} githubId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tutorialControllerGetTutorialContent(githubId: number, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.tutorialControllerGetTutorialContent(githubId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} categories 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tutorialControllerGetTutorials(categories: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.tutorialControllerGetTutorials(categories, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TutorialApi - interface
 * @export
 * @interface TutorialApi
 */
export interface TutorialApiInterface {
    /**
     * 
     * @param {string} owner 
     * @param {string} repo 
     * @param {string} path 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TutorialApiInterface
     */
    tutorialControllerFetchMarkdown(owner: string, repo: string, path: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} owner 
     * @param {string} repo 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TutorialApiInterface
     */
    tutorialControllerGetMdbookChapters(owner: string, repo: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {number} githubId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TutorialApiInterface
     */
    tutorialControllerGetTutorialContent(githubId: number, options?: RawAxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {string} categories 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TutorialApiInterface
     */
    tutorialControllerGetTutorials(categories: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;

}

/**
 * TutorialApi - object-oriented interface
 * @export
 * @class TutorialApi
 * @extends {BaseAPI}
 */
export class TutorialApi extends BaseAPI implements TutorialApiInterface {
    /**
     * 
     * @param {string} owner 
     * @param {string} repo 
     * @param {string} path 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TutorialApi
     */
    public tutorialControllerFetchMarkdown(owner: string, repo: string, path: string, options?: RawAxiosRequestConfig) {
        return TutorialApiFp(this.configuration).tutorialControllerFetchMarkdown(owner, repo, path, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} owner 
     * @param {string} repo 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TutorialApi
     */
    public tutorialControllerGetMdbookChapters(owner: string, repo: string, options?: RawAxiosRequestConfig) {
        return TutorialApiFp(this.configuration).tutorialControllerGetMdbookChapters(owner, repo, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} githubId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TutorialApi
     */
    public tutorialControllerGetTutorialContent(githubId: number, options?: RawAxiosRequestConfig) {
        return TutorialApiFp(this.configuration).tutorialControllerGetTutorialContent(githubId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} categories 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TutorialApi
     */
    public tutorialControllerGetTutorials(categories: string, options?: RawAxiosRequestConfig) {
        return TutorialApiFp(this.configuration).tutorialControllerGetTutorials(categories, options).then((request) => request(this.axios, this.basePath));
    }
}

