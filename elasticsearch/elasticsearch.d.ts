// Type definitions for elasticsearch.js v11.0.1
// Project: http://elastic.co/
// Definitions by: Jake Bassett <https://github.com/JakeBassett/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module Elasticsearch {

    export class Client {
        constructor(params : any);

        indices : Indices;

        bulk(params : BulkDocumentsIndexParams) : Promise<any>;
        bulk(params : BulkDocumentsIndexParams, callback : (error : any, response : any) => void) : void;

        index<T>(params : IndexParams<T>) : Promise<any>;
        index<T>(params : IndexParams<T>, callback : (error : any, response : any) => void) : void;

        create(params : CreateParams) : Promise<CreateResponse>;
        create(params : CreateParams, callback : (error : any, response : CreateResponse) => void) : void;
        delete(params : DeleteParams) : Promise<DeleteResponse>;
        delete(params : DeleteParams, callback : (error : any, response : DeleteResponse) => void) : void;
        get(params : GetParams, callback : (error : any, response : any) => void) : void;
        get<T>(params : GetParams) : Promise<GetResponse<T>>;
        update(params : UpdateParams) : Promise<UpdateResponse>;
        update(params : UpdateParams, callback : (error : any, response : UpdateResponse) => void) : void;

        mget(params : MGetParams, callback : (error : any, response : any) => void) : void;
        mget<T>(params : MGetParams) : Promise<GetResponse<T>>;
        msearch(params : MSearchParams, callback : (error : any, response : any) => void) : void;
        msearch<T>(params : MSearchParams) : Promise<GetResponse<T>>;

        scroll(params : ScrollParams) : Promise<any>;
        scroll(params : ScrollParams, callback : (error : any, response : any) => void) : void;
        search(params : SearchParams) : Promise<any>;
        search(params : SearchParams, callback : (error : any, response : any) => void) : void;
        suggest(params : SuggestParams) : Promise<any>;
        suggest(params : SuggestParams, callback : (error : any, response : any) => void) : void;

        ping(params : PingParams) : Promise<any>;
        ping(params : PingParams, callback : (err : any, response : any, status : any) => void) : void;
    }

    export class Indices {
        delete(params : IndicesDeleteParams, callback : (error : any, response : any, status : any) => void) : void;
        delete(params : IndicesDeleteParams) : Promise<any>;
        create(params : IndicesCreateParams, callback : (error : any, response : any, status : any) => void) : void;
        create(params : IndicesCreateParams) : Promise<any>;
        exists(params : IndicesIndexExitsParams, callback : (error : any, response : any, status : any) => void) : void;
        exists(params : IndicesIndexExitsParams) : Promise<any>;
        get(params : IndicesGetParams, callback : (error : any, response : any, status : any) => void) : void;
        get(params : IndicesGetParams) : Promise<any>;
        getAlias(params : IndicesGetAliasParams, callback : (error : any, response : any, status : any) => void) : void;
        getAlias(params : IndicesGetAliasParams) : Promise<any>;
        putAlias(params : IndicesPutAliasParams, callback : (error : any, response : any, status : any) => void) : void;
        putAlias(params : IndicesPutAliasParams) : Promise<any>;
        putMapping(params : IndicesPutMappingParams, callback : (error : any, response : any) => void) : void;
        putMapping(params : IndicesPutMappingParams) : Promise<any>;
        putTemplate(params : IndicesPutTemplateParams, callback : (error : any, response : any) => void) : void;
        putTemplate(params : IndicesPutTemplateParams) : Promise<any>;
        refresh(params : IndicesRefreshParams, callback : (error : any, response : any) => void) : void;
        refresh(params : IndicesRefreshParams) : Promise<any>;
    }

    export interface ClientParams {
        host : string;
        log : any;
        apiVersion : string;
        plugins? : Function[];
        sniffOnStart? : boolean;
        sniffInterval? : number|boolean;
        sniffOnConnectionFault? : boolean;
        maxRetries? : number;
        requestTimeout? : number;
        deadTimeout? : number;
        pingTimeout? : number;
        keepAlive? : boolean;
        maxSockets? : number;
        minSockets? : number;
        suggestCompression? : boolean;
        connectionClass? : string;
        sniffedNodesProtocol? : string;
        ssl? : Object;
        selector? : string;
        defer? : Function;
        nodesToHostCallback? : Function;
        createNodeAgent? : Function;
    }

    export interface GenericParams {
        requestTimeout? : number;
        maxRetries? : number;
        method? : string;
        body? : string | any;
        ignore? : number | number[];
    }

    export interface BulkDocumentsIndexParams extends GenericParams {
        refresh? : boolean;
        routing? : string;
        timeout? : number | Date;
        type? : string;
        fields? : string | string[] | boolean;
        index? : string;
    }

    export interface IndicesGetParams extends GenericParams {
        ignoreUnavailable? : boolean;
        index : string | string[] | boolean;
    }

    export interface IndicesRefreshParams extends GenericParams {
        force? : boolean;
        ignoreUnavailable? : boolean;
        index : string | string[] | boolean;
    }

    export interface IndicesDeleteParams extends GenericParams {
        index : string | string[] | boolean;
        timeout? : Date | number;
        masterTimeout? : Date | number;
    }

    export interface IndicesCreateParams extends GenericParams {
        index : string | string[] | boolean;
        timeout? : Date | number;
        masterTimeout? : Date | number;
    }

    export interface IndicesPutMappingParams extends GenericParams {
        index: string | string[];
        type: string;
        timeout? : Date | number;
        masterTimeout? : Date | number;
        ignoreUnavailable? : boolean;
        allowNoIndices? : boolean;
        expandWildCards? : string;
        updateAllTypes? : boolean;
    }

    export interface IndicesPutTemplateParams extends GenericParams {
        order? : number;
        create? : boolean;
        timeout? : Date | number;
        masterTimeout? : Date | number;
        flatSettings? : boolean;
        name : string;
    }

    export interface IndicesGetAliasParams extends GenericParams {
        ignoreUnavailable? : boolean;
        allowNoIndices? : boolean;
        expandWildcards? : string;
        local? : boolean;
        index? : string | string[] | boolean;
        name : string | string[] | boolean;
    }

    export interface IndicesPutAliasParams extends GenericParams {
        index? : string | string[] | boolean;
        name : string | string[] | boolean;
    }

    export interface CreateResponse extends GenericParams {
        _index: string,
        _type : string;
        _id : string;
        _version : number;
        _shards : {
            total: number,
            successful: number,
            failed: number
        }
        created: boolean;
    }

    export interface UpdateResponse extends GenericParams {
        _index: string,
        _type : string;
        _id : string;
        _version : number;
        _shards : {
            total: number,
            successful: number,
            failed: number
        }
    }

    export interface DeleteResponse extends GenericParams {
        _index: string,
        _type : string;
        _id : string;
        _version : number;
        _shards : {
            total: number,
            successful: number,
            failed: number
        },
        found : boolean;
    }

    export interface GetParams extends GenericParams {
        index : string;
        type : string;
        id : string;
        fields? : string | string[] | boolean;
        parent? : string;
        preference? : string;
        realtime? : boolean;
        refresh? : boolean;
        routing? : string;
        _source? : string | string[] | boolean;
        _sourceExclude? : string | string[] | boolean;
        _sourceInclude? : string | string[] | boolean;
        version? : number;
        versionType? : string;
    }

    export interface GetResponse<T> extends GenericParams {
        _type : string;
        _id : string;
        _version : number;
        found : boolean;
        _source : T;
    }

    export interface IndexParams<T> extends GenericParams {
        index : string;
        type : string;
        id : string;
        body : T;
        consistensy? : string;
        parent? : string;
        replication? : string;
        routing? : string;
        timeout? : Date | number;
        timestamp? : Date | number;
        version? : number;
        versionType? : string;
    }

    export interface ScrollParams extends GenericParams {
        scroll : string;
        scrollId : string;
    }

    export interface SearchParams extends GenericParams {
        index? : string;
        type? : string | string[] | number;
        body? : any;
        q? : string;
        scroll? : string;
        search_type? : string;
        fields? : string[];
        size? : number;
        sort? : string | string[] | boolean;
        _source? : string | string[] | boolean;
        _sourceExclude? : string | string[] | boolean;
        _sourceInclude? : string | string[] | boolean;
        stats? : string | string[] | boolean;
        suggestField? : string;
        suggestSize? : number;
        suggestText? : string;
        timeout? : Date | number;
    }

    export interface MSearchParams extends GenericParams {
        index? : string | string[] | boolean;
        type? : string | string[] | boolean;
        search_type? : string;
    }

    export interface MGetParams extends GenericParams {
        fields? : string | string[] | boolean;
        preference? : string;
        realtime? : boolean;
        refresh? : boolean;
        _sourceExclude? : string | string[] | boolean;
        _sourceInclude? : string | string[] | boolean;
        index? : string;
        type? : string;
    }

    export interface IndicesIndexExitsParams extends GenericParams {
        index : string | string[] | boolean;
        ignoreUnavailable? : boolean;
    }

    export interface PingParams extends GenericParams {
        requestTimeout? : number;
        hello? : string;
    }

    export interface DeleteParams extends GenericParams {
        index : string;
        type : string;
        id : string;
        refresh? : boolean;
    }

    export interface CreateParams extends GenericParams {
        index : string;
        type : string;
        id? : string;
        version? : number;
        versionType? : string;
        timeout?: Date | number;
        timesstamp? : Date | number;
        routing? : string;
        refresh? : boolean;
        parent? : string;
        consistency? : string;
    }

    export interface UpdateParams extends GenericParams {
        index : string;
        type : string;
        id : string;
        version? : number;
        timesstamp? : Date | number;
        scriptedUpsert? : boolean;
        scriptId? : any;
        script? : any;
        routing? : string;
        retryOnConflict? : number;
        refresh? : boolean;
        parent? : string;
        lang? : string;
        fields? : string | string[] | boolean;
        consistency? : string;
    }

    export interface SuggestParams extends GenericParams {
        ignoreUnavailable? : boolean;
        allowNoIndices? : boolean;
        expandWildcards? : string;
        preference? : string;
        routing? : string;
        source? : string;
        body : string | any;
        index : string | string[] | boolean;
    }
}

declare module "elasticsearch" {
    export = Elasticsearch;
}
