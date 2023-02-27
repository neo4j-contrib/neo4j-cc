/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DefaultService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Query a single collection
   * Search a single collection with a LiQL-based query
   * @returns any OK
   * @throws ApiError
   */
  public getSearch({
    q,
  }: {
    /**
     * encoded LIQL statement
     */
    q?: string;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/search',
      query: {
        q: q,
      },
    });
  }

  /**
   * Get Message
   * Get a message object by ID
   * @returns any OK
   * @throws ApiError
   */
  public getMessages({
    messageId,
  }: {
    messageId: string;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/messages/{message-id}',
      path: {
        'message-id': messageId,
      },
    });
  }

  /**
   * Get message attachment
   * Retrieve a specified attachment on a message
   * @returns any OK
   * @throws ApiError
   */
  public getMessagesAttachments({
    messageId,
    attachmentId,
  }: {
    messageId: string;
    attachmentId: string;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/messages/{message-id}/attachments/{attachment-id}',
      path: {
        'message-id': messageId,
        'attachment-id': attachmentId,
      },
    });
  }

  /**
   * Get message label
   * Retrieve a specified label applied to a message
   * @returns any OK
   * @throws ApiError
   */
  public getMessagesLabels({
    messageId,
    labelText,
  }: {
    messageId: string;
    labelText: string;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/messages/{message-id}/labels/{label-text}',
      path: {
        'message-id': messageId,
        'label-text': labelText,
      },
    });
  }

  /**
   * Get product associated with message
   * Get a single product associated on a message with a product association
   * @returns any OK
   * @throws ApiError
   */
  public getMessagesProducts({
    messageId,
    productId,
  }: {
    messageId: string;
    productId: string;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/messages/{message-id}/products/{product-id}',
      path: {
        'message-id': messageId,
        'product-id': productId,
      },
    });
  }

  /**
   * Get message tag
   * Retrieve an individual tag from a message
   * @returns any OK
   * @throws ApiError
   */
  public getMessagesTags({
    messageId,
    tagText,
  }: {
    messageId: string;
    tagText: string;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/messages/{message-id}/tags/{tag-text}',
      path: {
        'message-id': messageId,
        'tag-text': tagText,
      },
    });
  }
}
