import { operations } from './discourse-openapi';

export type GetBackupsContentResponseContent =
  operations['getBackups']['responses']['200']['content']['application/json'];
export type CreateBackupContentResponseContent =
  operations['createBackup']['responses']['200']['content']['application/json'];
export type DownloadBackupResponseContent = never;
export type SendDownloadBackupEmailResponseContent = never;
export type AdminListBadgesResponseContent =
  operations['adminListBadges']['responses']['200']['content']['application/json'];
export type CreateBadgeResponseContent =
  operations['createBadge']['responses']['200']['content']['application/json'];
export type UpdateBadgeResponseContent =
  operations['updateBadge']['responses']['200']['content']['application/json'];
export type DeleteBadgeResponseContent = never;
export type ListCategoriesResponseContent =
  operations['listCategories']['responses']['200']['content']['application/json'];
export type CreateCategoryResponseContent =
  operations['createCategory']['responses']['200']['content']['application/json'];
export type UpdateCategoryResponseContent =
  operations['updateCategory']['responses']['200']['content']['application/json'];
export type ListCategoryTopicsResponseContent =
  operations['listCategoryTopics']['responses']['200']['content']['application/json'];
export type ListSubcategoryTopicsResponseContent =
  operations['listSubcategoryTopics']['responses']['200']['content']['application/json'];
export type GetCategoryResponseContent =
  operations['getCategory']['responses']['200']['content']['application/json'];
export type CreateGroupResponseContent =
  operations['createGroup']['responses']['200']['content']['application/json'];
export type DeleteGroupResponseContent =
  operations['deleteGroup']['responses']['200']['content']['application/json'];
export type GetGroupResponseContent =
  operations['getGroup']['responses']['200']['content']['application/json'];
export type UpdateGroupResponseContent =
  operations['updateGroup']['responses']['200']['content']['application/json'];
export type ListGroupMembersResponseContent =
  operations['listGroupMembers']['responses']['200']['content']['application/json'];
export type AddGroupMembersResponseContent =
  operations['addGroupMembers']['responses']['200']['content']['application/json'];
export type RemoveGroupMembersResponseContent =
  operations['removeGroupMembers']['responses']['200']['content']['application/json'];
export type ListGroupsResponseContent =
  operations['listGroups']['responses']['200']['content']['application/json'];
export type CreateInviteResponseContent =
  operations['createInvite']['responses']['200']['content']['application/json'];
export type GetNotificationsResponseContent =
  operations['getNotifications']['responses']['200']['content']['application/json'];
export type MarkNotificationsAsReadResponseContent =
  operations['getNotifications']['responses']['200']['content']['application/json'];
export type ListPostsResponseContent =
  operations['listPosts']['responses']['200']['content']['application/json'];
export type CreateTopicPostPMResponseContent =
  operations['createTopicPostPM']['responses']['200']['content']['application/json'];
export type GetPostResponseContent =
  operations['getPost']['responses']['200']['content']['application/json'];
export type UpdatePostResponseContent =
  operations['updatePost']['responses']['200']['content']['application/json'];
export type DeletePostResponseContent = never;
export type LockPostResponseContent =
  operations['lockPost']['responses']['200']['content']['application/json'];
export type PerformPostActionResponseContent =
  operations['performPostAction']['responses']['200']['content']['application/json'];
export type ListUserPrivateMessagesResponseContent =
  operations['listUserPrivateMessages']['responses']['200']['content']['application/json'];
export type GetUserSentPrivateMessagesResponseContent =
  operations['getUserSentPrivateMessages']['responses']['200']['content']['application/json'];
export type SearchResponseContent =
  operations['search']['responses']['200']['content']['application/json'];
export type GetSiteResponseContent =
  operations['getSite']['responses']['200']['content']['application/json'];
export type ListTagGroupsResponseContent =
  operations['listTagGroups']['responses']['200']['content']['application/json'];
export type CreateTagGroupResponseContent =
  operations['createTagGroup']['responses']['200']['content']['application/json'];
export type GetTagGroupResponseContent =
  operations['getTagGroup']['responses']['200']['content']['application/json'];
export type UpdateTagGroupResponseContent =
  operations['updateTagGroup']['responses']['200']['content']['application/json'];
export type ListTagsResponseContent =
  operations['listTags']['responses']['200']['content']['application/json'];
export type GetTagResponseContent =
  operations['getTag']['responses']['200']['content']['application/json'];
export type GetSpecificPostsFromTopicResponseContent =
  operations['getSpecificPostsFromTopic']['responses']['200']['content']['application/json'];
export type GetTopicResponseContent =
  operations['getTopic']['responses']['200']['content']['application/json'];
export type RemoveTopicResponseContent = never;
export type UpdateTopicResponseContent =
  operations['updateTopic']['responses']['200']['content']['application/json'];
export type InviteToTopicResponseContent =
  operations['inviteToTopic']['responses']['200']['content']['application/json'];
export type BookmarkTopicResponseContent = never;
export type UpdateTopicStatusResponseContent =
  operations['updateTopicStatus']['responses']['200']['content']['application/json'];
export type ListLatestTopicsResponseContent =
  operations['listLatestTopics']['responses']['200']['content']['application/json'];
export type ListTopTopicsResponseContent =
  operations['listTopTopics']['responses']['200']['content']['application/json'];
export type SetNotificationLevelResponseContent =
  operations['setNotificationLevel']['responses']['200']['content']['application/json'];
export type UpdateTopicTimestampResponseContent =
  operations['setNotificationLevel']['responses']['200']['content']['application/json'];
export type CreateTopicTimerResponseContent =
  operations['createTopicTimer']['responses']['200']['content']['application/json'];
export type CreateUploadResponseContent =
  operations['createUpload']['responses']['200']['content']['application/json'];
export type GeneratePresignedPutResponseContent =
  operations['generatePresignedPut']['responses']['200']['content']['application/json'];
export type CompleteExternalUploadResponseContent =
  operations['completeExternalUpload']['responses']['200']['content']['application/json'];
export type createMultipartUploadResponseContent =
  operations['createMultipartUpload']['responses']['200']['content']['application/json'];
export type batchPresignMultipartPartsResponseContent =
  operations['batchPresignMultipartParts']['responses']['200']['content']['application/json'];
export type AbortMultipartResponseContent =
  operations['abortMultipart']['responses']['200']['content']['application/json'];
export type CompleteMultipartResponseContent =
  operations['completeMultipart']['responses']['200']['content']['application/json'];
export type ListUserBadgesResponseContent =
  operations['listUserBadges']['responses']['200']['content']['application/json'];
export type CreateUserResponseContent =
  operations['createUser']['responses']['200']['content']['application/json'];
export type GetUserResponseContent =
  operations['getUser']['responses']['200']['content']['application/json'];
export type GetUserExternalIdResponseContent =
  operations['getUserExternalId']['responses']['200']['content']['application/json'];
export type GetUserIdentiyProviderExternalIdResponseContent =
  operations['getUserIdentiyProviderExternalId']['responses']['200']['content']['application/json'];
export type UpdateAvatarResponseContent =
  operations['updateAvatar']['responses']['200']['content']['application/json'];
export type UpdateEmailResponseContent = never;
export type ListUsersPublicResponseContent =
  operations['listUsersPublic']['responses']['200']['content']['application/json'];
export type AdminGetUserResponseContent =
  operations['adminGetUser']['responses']['200']['content']['application/json'];
export type DeleteUserResponseContent =
  operations['deleteUser']['responses']['200']['content']['application/json'];
export type suspendUserResponseContent =
  operations['suspendUser']['responses']['200']['content']['application/json'];
export type AnonymizeUserResponseContent =
  operations['anonymizeUser']['responses']['200']['content']['application/json'];
export type LogOutUserResponseContent =
  operations['logOutUser']['responses']['200']['content']['application/json'];
export type RefreshGravatarResponseContent =
  operations['refreshGravatar']['responses']['200']['content']['application/json'];
export type AdminListUsersResponseContent =
  operations['adminListUsers']['responses']['200']['content']['application/json'];
export type ListUserActionsResponseContent =
  operations['listUserActions']['responses']['200']['content']['application/json'];
export type SendPasswordResetEmailResponseContent =
  operations['sendPasswordResetEmail']['responses']['200']['content']['application/json'];
export type ChangePasswordResponseContent = never;
export type GetUserEmailsResponseContent =
  operations['getUserEmails']['responses']['200']['content']['application/json'];
