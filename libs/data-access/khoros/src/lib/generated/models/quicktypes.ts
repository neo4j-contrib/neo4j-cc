/* eslint-disable no-prototype-builtins */
// Khoros v2 API requests

/**
 * Query a single collection
 *
 * GET {{KHOROS_V2_ENDPOINT}}/search?q={{LIQL}}
 *
 * Search a single collection with a LiQL-based query
 */
export interface QueryASingleCollection {
    status:    string;
    message:   string;
    http_code: number;
    data:      QueryASingleCollectionData;
    metadata:  MetadataClass;
}

export interface QueryASingleCollectionData {
    type:           string;
    list_item_type: string;
    size:           number;
    items:          Item[];
    next_cursor?:   string;
}

export interface Item {
    type:                              string;
    id:                                string;
    href?:                             string;
    view_href?:                        string;
    author?:                           Author;
    subject?:                          string;
    search_snippet?:                   string;
    body?:                             string;
    teaser?:                           string;
    board?:                            Author;
    conversation?:                     Conversation;
    topic?:                            Author;
    parent?:                           Author;
    post_time?:                        Date;
    post_time_friendly?:               string;
    depth?:                            number;
    read_only?:                        boolean;
    edit_frozen?:                      boolean;
    language?:                         Language;
    can_accept_solution?:              boolean;
    placeholder?:                      boolean;
    is_solution?:                      boolean;
    solution_data?:                    SolutionData;
    metrics?:                          Metrics;
    current_revision?:                 CurrentRevision;
    kudos?:                            Attachments;
    tags?:                             Attachments;
    labels?:                           Attachments;
    images?:                           Attachments;
    videos?:                           Attachments;
    attachments?:                      Attachments;
    replies?:                          Attachments;
    ratings?:                          Attachments;
    custom_tags?:                      Attachments;
    moderation_status?:                ModerationStatus;
    user_context?:                     ItemUserContext;
    device_id?:                        DeviceID;
    popularity?:                       number;
    excluded_from_kudos_leaderboards?: boolean;
    is_promoted?:                      boolean;
    seo_title?:                        string;
    seo_description?:                  string;
    me_toos?:                          Attachments;
    contributors?:                     Attachments;
    helpfulness_allowed?:              boolean;
    latest_version?:                   string;
    content_workflow?:                 ContentWorkflow;
    user?:                             Author;
    message?:                          Author;
    time?:                             Date;
    weight?:                           number;
    text?:                             string;
    messages?:                         Attachments;
    title?:                            string;
    description?:                      string;
    tiny_href?:                        string;
    thumb_href?:                       string;
    small_href?:                       string;
    medium_href?:                      string;
    large_href?:                       string;
    original_href?:                    string;
    width?:                            number;
    height?:                           number;
    owner?:                            Author;
    upload_time?:                      Date;
    upload_time_friendly?:             string;
    comments?:                         Attachments;
    visibility?:                       string;
    filename?:                         string;
    filesize?:                         number;
    url?:                              string;
    content_type?:                     string;
    position?:                         number;
    value?:                            number;
}

export interface Attachments {
    query: string;
}

export interface Author {
    type:      AuthorType;
    id:        string;
    href:      string;
    view_href: string;
    login?:    string;
}

export enum AuthorType {
    Board = "board",
    Message = "message",
    User = "user",
}

export interface ContentWorkflow {
    type:                  string;
    state:                 string;
    message_draft_history: Attachments;
    user_context:          ContentWorkflowUserContext;
    view_href:             string;
}

export interface ContentWorkflowUserContext {
    type:     string;
    can_edit: boolean;
}

export interface Conversation {
    type:                    ConversationType;
    id:                      string;
    href:                    string;
    view_href:               string;
    style:                   Style;
    thread_style:            Style;
    messages_count:          number;
    solved:                  boolean;
    last_post_time:          Date;
    last_post_time_friendly: string;
}

export enum Style {
    Forum = "forum",
    Tkb = "tkb",
}

export enum ConversationType {
    Conversation = "conversation",
}

export interface CurrentRevision {
    type:             CurrentRevisionType;
    id:               string;
    last_edit_author: Author;
    last_edit_time:   Date;
}

export enum CurrentRevisionType {
    Revision = "revision",
}

export enum DeviceID {
    Firefox102_0 = "firefox_102_0",
    GoogleChrome101 = "google_chrome_101",
    GoogleChrome99 = "google_chrome_99",
}

export enum Language {
    En = "EN",
}

export interface Metrics {
    type:  MetricsType;
    views: number;
}

export enum MetricsType {
    MessageMetrics = "message_metrics",
}

export enum ModerationStatus {
    Approved = "approved",
}

export interface SolutionData {
    type?:       string;
    message_id?: string;
    accepter?:   Author;
    time?:       Date;
}

export interface ItemUserContext {
    type:       UserContextType;
    kudo:       boolean;
    read:       boolean;
    can_reply:  boolean;
    can_kudo:   boolean;
    can_delete: boolean;
    me_too?:    boolean;
}

export enum UserContextType {
    UserContext = "user_context",
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MetadataClass {
}

/**
 * Get Message
 *
 * GET {{KHOROS_V2_ENDPOINT}}/messages/{{message-id}}
 *
 * Get a message object by ID
 */
export interface GetMessage {
    status:    string;
    message:   string;
    http_code: number;
    data:      GetMessageData;
    metadata:  MetadataClass;
}

export interface GetMessageData {
    type:                             AuthorType;
    id:                               string;
    href:                             string;
    view_href:                        string;
    author:                           Author;
    subject:                          string;
    body:                             string;
    teaser:                           string;
    seo_title:                        string;
    seo_description:                  string;
    board:                            Author;
    conversation:                     Conversation;
    topic:                            Author;
    post_time:                        Date;
    post_time_friendly:               string;
    depth:                            number;
    read_only:                        boolean;
    edit_frozen:                      boolean;
    language:                         Language;
    can_accept_solution:              boolean;
    placeholder:                      boolean;
    is_solution:                      boolean;
    solution_data:                    MetadataClass;
    metrics:                          Metrics;
    current_revision:                 CurrentRevision;
    kudos:                            Attachments;
    tags:                             Attachments;
    me_toos:                          Attachments;
    labels:                           Attachments;
    images:                           Attachments;
    videos:                           Attachments;
    attachments:                      Attachments;
    replies:                          Attachments;
    ratings:                          Attachments;
    custom_tags:                      Attachments;
    moderation_status:                ModerationStatus;
    user_context:                     ItemUserContext;
    device_id:                        DeviceID;
    popularity:                       number;
    excluded_from_kudos_leaderboards: boolean;
    is_promoted:                      boolean;
}

/**
 * Get message attachment
 *
 * GET {{KHOROS_V2_ENDPOINT}}/messages/{{message-id}}/attachments/{{attachment-id}}
 *
 * Retrieve a specified attachment on a message
 */
export interface GetMessageAttachment {
    status:    string;
    message:   string;
    http_code: number;
    data:      GetMessageAttachmentData;
    metadata:  MetadataClass;
}

export interface GetMessageAttachmentData {
    type:         string;
    id:           string;
    href:         string;
    filename:     string;
    filesize:     number;
    url:          string;
    content_type: string;
    message:      Author;
    position:     number;
}

/**
 * Get message label
 *
 * GET {{KHOROS_V2_ENDPOINT}}/messages/{{message-id}}/labels/{{label-text}}
 *
 * Retrieve a specified label applied to a message
 */
export interface GetMessageLabel {
    status:    string;
    message:   string;
    http_code: number;
    data:      GetMessageLabelData;
    metadata:  MetadataClass;
}

export interface GetMessageLabelData {
    type:     string;
    id:       string;
    href:     string;
    text:     string;
    messages: Attachments;
    time?:    Date;
}

/**
 * Get product associated with message
 *
 * GET {{KHOROS_V2_ENDPOINT}}/messages/{{message-id}}/products/{{product-id}}
 *
 * Get a single product associated on a message with a product association
 */
export interface GetProductAssociatedWithMessage {
    status:    string;
    message:   string;
    http_code: number;
    data:      GetProductAssociatedWithMessageData;
    metadata:  MetadataClass;
}

export interface GetProductAssociatedWithMessageData {
    type:               string;
    id:                 string;
    title:              string;
    description:        string;
    status:             string;
    product_url:        string;
    image_url:          string;
    product_categories: Attachments;
    manufacturer:       string;
    price:              Price;
    availability:       string;
}

export interface Price {
    type:     string;
    currency: string;
}

/**
 * Get message tag
 *
 * GET {{KHOROS_V2_ENDPOINT}}/messages/{{message-id}}/tags/{{tag-text}}
 *
 * Retrieve an individual tag from a message
 */
export interface GetMessageTag {
    status:    string;
    message:   string;
    http_code: number;
    data:      GetMessageLabelData;
    metadata:  MetadataClass;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toQueryASingleCollection(json: string): QueryASingleCollection {
        return cast(JSON.parse(json), r("QueryASingleCollection"));
    }

    public static queryASingleCollectionToJson(value: QueryASingleCollection): string {
        return JSON.stringify(uncast(value, r("QueryASingleCollection")), null, 2);
    }

    public static toGetMessage(json: string): GetMessage {
        return cast(JSON.parse(json), r("GetMessage"));
    }

    public static getMessageToJson(value: GetMessage): string {
        return JSON.stringify(uncast(value, r("GetMessage")), null, 2);
    }

    public static toGetMessageAttachment(json: string): GetMessageAttachment {
        return cast(JSON.parse(json), r("GetMessageAttachment"));
    }

    public static getMessageAttachmentToJson(value: GetMessageAttachment): string {
        return JSON.stringify(uncast(value, r("GetMessageAttachment")), null, 2);
    }

    public static toGetMessageLabel(json: string): GetMessageLabel {
        return cast(JSON.parse(json), r("GetMessageLabel"));
    }

    public static getMessageLabelToJson(value: GetMessageLabel): string {
        return JSON.stringify(uncast(value, r("GetMessageLabel")), null, 2);
    }

    public static toGetProductAssociatedWithMessage(json: string): GetProductAssociatedWithMessage {
        return cast(JSON.parse(json), r("GetProductAssociatedWithMessage"));
    }

    public static getProductAssociatedWithMessageToJson(value: GetProductAssociatedWithMessage): string {
        return JSON.stringify(uncast(value, r("GetProductAssociatedWithMessage")), null, 2);
    }

    public static toGetMessageTag(json: string): GetMessageTag {
        return cast(JSON.parse(json), r("GetMessageTag"));
    }

    public static getMessageTagToJson(value: GetMessageTag): string {
        return JSON.stringify(uncast(value, r("GetMessageTag")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {console.error(_)}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "QueryASingleCollection": o([
        { json: "status", js: "status", typ: "" },
        { json: "message", js: "message", typ: "" },
        { json: "http_code", js: "http_code", typ: 0 },
        { json: "data", js: "data", typ: r("QueryASingleCollectionData") },
        { json: "metadata", js: "metadata", typ: r("MetadataClass") },
    ], false),
    "QueryASingleCollectionData": o([
        { json: "type", js: "type", typ: "" },
        { json: "list_item_type", js: "list_item_type", typ: "" },
        { json: "size", js: "size", typ: 0 },
        { json: "items", js: "items", typ: a(r("Item")) },
        { json: "next_cursor", js: "next_cursor", typ: u(undefined, "") },
    ], false),
    "Item": o([
        { json: "type", js: "type", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "href", js: "href", typ: u(undefined, "") },
        { json: "view_href", js: "view_href", typ: u(undefined, "") },
        { json: "author", js: "author", typ: u(undefined, r("Author")) },
        { json: "subject", js: "subject", typ: u(undefined, "") },
        { json: "search_snippet", js: "search_snippet", typ: u(undefined, "") },
        { json: "body", js: "body", typ: u(undefined, "") },
        { json: "teaser", js: "teaser", typ: u(undefined, "") },
        { json: "board", js: "board", typ: u(undefined, r("Author")) },
        { json: "conversation", js: "conversation", typ: u(undefined, r("Conversation")) },
        { json: "topic", js: "topic", typ: u(undefined, r("Author")) },
        { json: "parent", js: "parent", typ: u(undefined, r("Author")) },
        { json: "post_time", js: "post_time", typ: u(undefined, Date) },
        { json: "post_time_friendly", js: "post_time_friendly", typ: u(undefined, "") },
        { json: "depth", js: "depth", typ: u(undefined, 0) },
        { json: "read_only", js: "read_only", typ: u(undefined, true) },
        { json: "edit_frozen", js: "edit_frozen", typ: u(undefined, true) },
        { json: "language", js: "language", typ: u(undefined, r("Language")) },
        { json: "can_accept_solution", js: "can_accept_solution", typ: u(undefined, true) },
        { json: "placeholder", js: "placeholder", typ: u(undefined, true) },
        { json: "is_solution", js: "is_solution", typ: u(undefined, true) },
        { json: "solution_data", js: "solution_data", typ: u(undefined, r("SolutionData")) },
        { json: "metrics", js: "metrics", typ: u(undefined, r("Metrics")) },
        { json: "current_revision", js: "current_revision", typ: u(undefined, r("CurrentRevision")) },
        { json: "kudos", js: "kudos", typ: u(undefined, r("Attachments")) },
        { json: "tags", js: "tags", typ: u(undefined, r("Attachments")) },
        { json: "labels", js: "labels", typ: u(undefined, r("Attachments")) },
        { json: "images", js: "images", typ: u(undefined, r("Attachments")) },
        { json: "videos", js: "videos", typ: u(undefined, r("Attachments")) },
        { json: "attachments", js: "attachments", typ: u(undefined, r("Attachments")) },
        { json: "replies", js: "replies", typ: u(undefined, r("Attachments")) },
        { json: "ratings", js: "ratings", typ: u(undefined, r("Attachments")) },
        { json: "custom_tags", js: "custom_tags", typ: u(undefined, r("Attachments")) },
        { json: "moderation_status", js: "moderation_status", typ: u(undefined, r("ModerationStatus")) },
        { json: "user_context", js: "user_context", typ: u(undefined, r("ItemUserContext")) },
        { json: "device_id", js: "device_id", typ: u(undefined, r("DeviceID")) },
        { json: "popularity", js: "popularity", typ: u(undefined, 3.14) },
        { json: "excluded_from_kudos_leaderboards", js: "excluded_from_kudos_leaderboards", typ: u(undefined, true) },
        { json: "is_promoted", js: "is_promoted", typ: u(undefined, true) },
        { json: "seo_title", js: "seo_title", typ: u(undefined, "") },
        { json: "seo_description", js: "seo_description", typ: u(undefined, "") },
        { json: "me_toos", js: "me_toos", typ: u(undefined, r("Attachments")) },
        { json: "contributors", js: "contributors", typ: u(undefined, r("Attachments")) },
        { json: "helpfulness_allowed", js: "helpfulness_allowed", typ: u(undefined, true) },
        { json: "latest_version", js: "latest_version", typ: u(undefined, "") },
        { json: "content_workflow", js: "content_workflow", typ: u(undefined, r("ContentWorkflow")) },
        { json: "user", js: "user", typ: u(undefined, r("Author")) },
        { json: "message", js: "message", typ: u(undefined, r("Author")) },
        { json: "time", js: "time", typ: u(undefined, Date) },
        { json: "weight", js: "weight", typ: u(undefined, 0) },
        { json: "text", js: "text", typ: u(undefined, "") },
        { json: "messages", js: "messages", typ: u(undefined, r("Attachments")) },
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "tiny_href", js: "tiny_href", typ: u(undefined, "") },
        { json: "thumb_href", js: "thumb_href", typ: u(undefined, "") },
        { json: "small_href", js: "small_href", typ: u(undefined, "") },
        { json: "medium_href", js: "medium_href", typ: u(undefined, "") },
        { json: "large_href", js: "large_href", typ: u(undefined, "") },
        { json: "original_href", js: "original_href", typ: u(undefined, "") },
        { json: "width", js: "width", typ: u(undefined, 0) },
        { json: "height", js: "height", typ: u(undefined, 0) },
        { json: "owner", js: "owner", typ: u(undefined, r("Author")) },
        { json: "upload_time", js: "upload_time", typ: u(undefined, Date) },
        { json: "upload_time_friendly", js: "upload_time_friendly", typ: u(undefined, "") },
        { json: "comments", js: "comments", typ: u(undefined, r("Attachments")) },
        { json: "visibility", js: "visibility", typ: u(undefined, "") },
        { json: "filename", js: "filename", typ: u(undefined, "") },
        { json: "filesize", js: "filesize", typ: u(undefined, 0) },
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "content_type", js: "content_type", typ: u(undefined, "") },
        { json: "position", js: "position", typ: u(undefined, 0) },
        { json: "value", js: "value", typ: u(undefined, 0) },
    ], false),
    "Attachments": o([
        { json: "query", js: "query", typ: "" },
    ], false),
    "Author": o([
        { json: "type", js: "type", typ: r("AuthorType") },
        { json: "id", js: "id", typ: "" },
        { json: "href", js: "href", typ: "" },
        { json: "view_href", js: "view_href", typ: "" },
        { json: "login", js: "login", typ: u(undefined, "") },
    ], false),
    "ContentWorkflow": o([
        { json: "type", js: "type", typ: "" },
        { json: "state", js: "state", typ: "" },
        { json: "message_draft_history", js: "message_draft_history", typ: r("Attachments") },
        { json: "user_context", js: "user_context", typ: r("ContentWorkflowUserContext") },
        { json: "view_href", js: "view_href", typ: "" },
    ], false),
    "ContentWorkflowUserContext": o([
        { json: "type", js: "type", typ: "" },
        { json: "can_edit", js: "can_edit", typ: true },
    ], false),
    "Conversation": o([
        { json: "type", js: "type", typ: r("ConversationType") },
        { json: "id", js: "id", typ: "" },
        { json: "href", js: "href", typ: "" },
        { json: "view_href", js: "view_href", typ: "" },
        { json: "style", js: "style", typ: r("Style") },
        { json: "thread_style", js: "thread_style", typ: r("Style") },
        { json: "messages_count", js: "messages_count", typ: 0 },
        { json: "solved", js: "solved", typ: true },
        { json: "last_post_time", js: "last_post_time", typ: Date },
        { json: "last_post_time_friendly", js: "last_post_time_friendly", typ: "" },
    ], false),
    "CurrentRevision": o([
        { json: "type", js: "type", typ: r("CurrentRevisionType") },
        { json: "id", js: "id", typ: "" },
        { json: "last_edit_author", js: "last_edit_author", typ: r("Author") },
        { json: "last_edit_time", js: "last_edit_time", typ: Date },
    ], false),
    "Metrics": o([
        { json: "type", js: "type", typ: r("MetricsType") },
        { json: "views", js: "views", typ: 0 },
    ], false),
    "SolutionData": o([
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "message_id", js: "message_id", typ: u(undefined, "") },
        { json: "accepter", js: "accepter", typ: u(undefined, r("Author")) },
        { json: "time", js: "time", typ: u(undefined, Date) },
    ], false),
    "ItemUserContext": o([
        { json: "type", js: "type", typ: r("UserContextType") },
        { json: "kudo", js: "kudo", typ: true },
        { json: "read", js: "read", typ: true },
        { json: "can_reply", js: "can_reply", typ: true },
        { json: "can_kudo", js: "can_kudo", typ: true },
        { json: "can_delete", js: "can_delete", typ: true },
        { json: "me_too", js: "me_too", typ: u(undefined, true) },
    ], false),
    "MetadataClass": o([
    ], false),
    "GetMessage": o([
        { json: "status", js: "status", typ: "" },
        { json: "message", js: "message", typ: "" },
        { json: "http_code", js: "http_code", typ: 0 },
        { json: "data", js: "data", typ: r("GetMessageData") },
        { json: "metadata", js: "metadata", typ: r("MetadataClass") },
    ], false),
    "GetMessageData": o([
        { json: "type", js: "type", typ: r("AuthorType") },
        { json: "id", js: "id", typ: "" },
        { json: "href", js: "href", typ: "" },
        { json: "view_href", js: "view_href", typ: "" },
        { json: "author", js: "author", typ: r("Author") },
        { json: "subject", js: "subject", typ: "" },
        { json: "body", js: "body", typ: "" },
        { json: "teaser", js: "teaser", typ: "" },
        { json: "seo_title", js: "seo_title", typ: "" },
        { json: "seo_description", js: "seo_description", typ: "" },
        { json: "board", js: "board", typ: r("Author") },
        { json: "conversation", js: "conversation", typ: r("Conversation") },
        { json: "topic", js: "topic", typ: r("Author") },
        { json: "post_time", js: "post_time", typ: Date },
        { json: "post_time_friendly", js: "post_time_friendly", typ: "" },
        { json: "depth", js: "depth", typ: 0 },
        { json: "read_only", js: "read_only", typ: true },
        { json: "edit_frozen", js: "edit_frozen", typ: true },
        { json: "language", js: "language", typ: r("Language") },
        { json: "can_accept_solution", js: "can_accept_solution", typ: true },
        { json: "placeholder", js: "placeholder", typ: true },
        { json: "is_solution", js: "is_solution", typ: true },
        { json: "solution_data", js: "solution_data", typ: r("MetadataClass") },
        { json: "metrics", js: "metrics", typ: r("Metrics") },
        { json: "current_revision", js: "current_revision", typ: r("CurrentRevision") },
        { json: "kudos", js: "kudos", typ: r("Attachments") },
        { json: "tags", js: "tags", typ: r("Attachments") },
        { json: "me_toos", js: "me_toos", typ: r("Attachments") },
        { json: "labels", js: "labels", typ: r("Attachments") },
        { json: "images", js: "images", typ: r("Attachments") },
        { json: "videos", js: "videos", typ: r("Attachments") },
        { json: "attachments", js: "attachments", typ: r("Attachments") },
        { json: "replies", js: "replies", typ: r("Attachments") },
        { json: "ratings", js: "ratings", typ: r("Attachments") },
        { json: "custom_tags", js: "custom_tags", typ: r("Attachments") },
        { json: "moderation_status", js: "moderation_status", typ: r("ModerationStatus") },
        { json: "user_context", js: "user_context", typ: r("ItemUserContext") },
        { json: "device_id", js: "device_id", typ: r("DeviceID") },
        { json: "popularity", js: "popularity", typ: 3.14 },
        { json: "excluded_from_kudos_leaderboards", js: "excluded_from_kudos_leaderboards", typ: true },
        { json: "is_promoted", js: "is_promoted", typ: true },
    ], false),
    "GetMessageAttachment": o([
        { json: "status", js: "status", typ: "" },
        { json: "message", js: "message", typ: "" },
        { json: "http_code", js: "http_code", typ: 0 },
        { json: "data", js: "data", typ: r("GetMessageAttachmentData") },
        { json: "metadata", js: "metadata", typ: r("MetadataClass") },
    ], false),
    "GetMessageAttachmentData": o([
        { json: "type", js: "type", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "href", js: "href", typ: "" },
        { json: "filename", js: "filename", typ: "" },
        { json: "filesize", js: "filesize", typ: 0 },
        { json: "url", js: "url", typ: "" },
        { json: "content_type", js: "content_type", typ: "" },
        { json: "message", js: "message", typ: r("Author") },
        { json: "position", js: "position", typ: 0 },
    ], false),
    "GetMessageLabel": o([
        { json: "status", js: "status", typ: "" },
        { json: "message", js: "message", typ: "" },
        { json: "http_code", js: "http_code", typ: 0 },
        { json: "data", js: "data", typ: r("GetMessageLabelData") },
        { json: "metadata", js: "metadata", typ: r("MetadataClass") },
    ], false),
    "GetMessageLabelData": o([
        { json: "type", js: "type", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "href", js: "href", typ: "" },
        { json: "text", js: "text", typ: "" },
        { json: "messages", js: "messages", typ: r("Attachments") },
        { json: "time", js: "time", typ: u(undefined, Date) },
    ], false),
    "GetProductAssociatedWithMessage": o([
        { json: "status", js: "status", typ: "" },
        { json: "message", js: "message", typ: "" },
        { json: "http_code", js: "http_code", typ: 0 },
        { json: "data", js: "data", typ: r("GetProductAssociatedWithMessageData") },
        { json: "metadata", js: "metadata", typ: r("MetadataClass") },
    ], false),
    "GetProductAssociatedWithMessageData": o([
        { json: "type", js: "type", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "status", js: "status", typ: "" },
        { json: "product_url", js: "product_url", typ: "" },
        { json: "image_url", js: "image_url", typ: "" },
        { json: "product_categories", js: "product_categories", typ: r("Attachments") },
        { json: "manufacturer", js: "manufacturer", typ: "" },
        { json: "price", js: "price", typ: r("Price") },
        { json: "availability", js: "availability", typ: "" },
    ], false),
    "Price": o([
        { json: "type", js: "type", typ: "" },
        { json: "currency", js: "currency", typ: "" },
    ], false),
    "GetMessageTag": o([
        { json: "status", js: "status", typ: "" },
        { json: "message", js: "message", typ: "" },
        { json: "http_code", js: "http_code", typ: 0 },
        { json: "data", js: "data", typ: r("GetMessageLabelData") },
        { json: "metadata", js: "metadata", typ: r("MetadataClass") },
    ], false),
    "AuthorType": [
        "board",
        "message",
        "user",
    ],
    "Style": [
        "forum",
        "tkb",
    ],
    "ConversationType": [
        "conversation",
    ],
    "CurrentRevisionType": [
        "revision",
    ],
    "DeviceID": [
        "firefox_102_0",
        "google_chrome_101",
        "google_chrome_99",
    ],
    "Language": [
        "EN",
    ],
    "MetricsType": [
        "message_metrics",
    ],
    "ModerationStatus": [
        "approved",
    ],
    "UserContextType": [
        "user_context",
    ],
};
