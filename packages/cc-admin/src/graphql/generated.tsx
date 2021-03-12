import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  isActive: Scalars['Boolean'];
};

export type DataCatalog = {
  __typename?: 'DataCatalog';
  /** UUID */
  id: Scalars['ID'];
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The subject matter of the content. Inverse property: subjectOf. */
  about?: Maybe<Array<Scalars['String']>>;
  /** Reference to Person who created the work. */
  creator?: Maybe<Scalars['ID']>;
  /** Reference to Person who publushed the work. */
  publisher?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** An award won by or for this CreativeWork. */
  award?: Maybe<Scalars['String']>;
};

export type Dataset = {
  __typename?: 'Dataset';
  /** UUID */
  id: Scalars['ID'];
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The subject matter of the content. Inverse property: subjectOf. */
  about?: Maybe<Array<Scalars['String']>>;
  /** Reference to Person who created the work. */
  creator?: Maybe<Scalars['ID']>;
  /** Reference to Person who publushed the work. */
  publisher?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** An award won by or for this CreativeWork. */
  award?: Maybe<Scalars['String']>;
  /** URL to the direct data download. Distinct from the optional "url" field, which should lead to a page about the data. */
  distribution: Scalars['String'];
};

export type Person = {
  __typename?: 'Person';
  /** UUID */
  id: Scalars['ID'];
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** A callsign, as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles. Typically correlates with username, when available. */
  callSign?: Maybe<Scalars['String']>;
  /** Primary email address */
  email?: Maybe<Scalars['String']>;
};

export type SoftwareSourceCode = {
  __typename?: 'SoftwareSourceCode';
  /** UUID */
  id: Scalars['ID'];
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The subject matter of the content. Inverse property: subjectOf. */
  about?: Maybe<Array<Scalars['String']>>;
  /** Reference to Person who created the work. */
  creator?: Maybe<Scalars['ID']>;
  /** Reference to Person who publushed the work. */
  publisher?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** An award won by or for this CreativeWork. */
  award?: Maybe<Scalars['String']>;
  /** Link to the repository where the un-compiled, human readable code and related code is located (SVN, github, CodePlex). */
  codeRepository?: Maybe<Scalars['String']>;
  /** The computer programming language. */
  programmingLanguage?: Maybe<Scalars['String']>;
  /** Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0). */
  runtimePlatform?: Maybe<Scalars['String']>;
};

export type Notebook = {
  __typename?: 'Notebook';
  /** UUID */
  id: Scalars['ID'];
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The subject matter of the content. Inverse property: subjectOf. */
  about?: Maybe<Array<Scalars['String']>>;
  /** Reference to Person who created the work. */
  creator?: Maybe<Scalars['ID']>;
  /** Reference to Person who publushed the work. */
  publisher?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** An award won by or for this CreativeWork. */
  award?: Maybe<Scalars['String']>;
  /** Link to the repository where the un-compiled, human readable code and related code is located (SVN, github, CodePlex). */
  codeRepository?: Maybe<Scalars['String']>;
  /** The computer programming language */
  programmingLanguage?: Maybe<Scalars['String']>;
  /** Runtime platform or script interpreter dependencies. For example: GraphGist, Jupyter, ObservableHQ */
  runtimePlatform?: Maybe<Scalars['String']>;
};

export type Organization = {
  __typename?: 'Organization';
  /** UUID */
  id: Scalars['ID'];
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** Primary email address */
  email?: Maybe<Scalars['String']>;
};

export type SoftwareApplication = {
  __typename?: 'SoftwareApplication';
  /** UUID */
  id: Scalars['ID'];
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The subject matter of the content. Inverse property: subjectOf. */
  about?: Maybe<Array<Scalars['String']>>;
  /** Reference to Person who created the work. */
  creator?: Maybe<Scalars['ID']>;
  /** Reference to Person who publushed the work. */
  publisher?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** An award won by or for this CreativeWork. */
  award?: Maybe<Scalars['String']>;
  /** Semantic version of the software instance. */
  softwareVersion?: Maybe<Scalars['String']>;
  /** Type of software application, e.g. "Game, Multimedia". */
  applicationCategory?: Maybe<Scalars['String']>;
  /** If the file can be downloaded, URL to download the binary. */
  downloadUrl?: Maybe<Scalars['String']>;
  /** URL at which the app may be installed, if different from the URL of the item. */
  installUrl?: Maybe<Scalars['String']>;
  /** Operating systems supported (Windows 7, OSX 10.6, Android 1.6). */
  operatingSystem?: Maybe<Scalars['String']>;
};

export type Event = {
  __typename?: 'Event';
  /** UUID */
  id: Scalars['ID'];
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The duration of the item (movie, audio recording, event, etc.) in ISO 8601 date format. */
  duration: Scalars['String'];
  /** The end date and time of the item (in ISO 8601 date format). */
  endDate: Scalars['String'];
  /** The start date and time of the item (in ISO 8601 date format). */
  startDate: Scalars['String'];
  /** The location of, for example, where an event is happening, where an organization is located, or where an action takes place. */
  location: Scalars['String'];
};

export type Course = {
  __typename?: 'Course';
  /** UUID */
  id: Scalars['ID'];
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The subject matter of the content. Inverse property: subjectOf. */
  about?: Maybe<Array<Scalars['String']>>;
  /** Reference to Person who created the work. */
  creator?: Maybe<Scalars['ID']>;
  /** Reference to Person who publushed the work. */
  publisher?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** The certification awarded for successful completion of this course. */
  award: Scalars['String'];
  /** The LearningResource being described is intended to help a person learn the competency or learning outcome defined by the referenced term. */
  teaches?: Maybe<Scalars['String']>;
  /** Knowledge, skill, ability or personal attribute that must be demonstrated by a person or other entity in order to do something such as earn an Educational Occupational Credential or understand a LearningResource. */
  competencyRequired?: Maybe<Array<Scalars['String']>>;
  /** The identifier for the Course used by the course provider (e.g. CS101 or cypher-101) */
  courseCode: Scalars['String'];
};

export type Book = {
  __typename?: 'Book';
  /** UUID */
  id: Scalars['ID'];
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The subject matter of the content. Inverse property: subjectOf. */
  about?: Maybe<Array<Scalars['String']>>;
  /** Reference to Person who created the work. */
  creator?: Maybe<Scalars['ID']>;
  /** Reference to Person who publushed the work. */
  publisher?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** An award won by or for this CreativeWork. */
  award?: Maybe<Scalars['String']>;
  /** The ISBN of the book */
  isbn: Scalars['String'];
};

export type Article = {
  __typename?: 'Article';
  /** UUID */
  id: Scalars['ID'];
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The subject matter of the content. Inverse property: subjectOf. */
  about?: Maybe<Array<Scalars['String']>>;
  /** Reference to Person who created the work. */
  creator?: Maybe<Scalars['ID']>;
  /** Reference to Person who publushed the work. */
  publisher?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** An award won by or for this CreativeWork. */
  award?: Maybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
  user: User;
  dataCatalogs: Array<DataCatalog>;
  dataCatalog: DataCatalog;
  datasets: Array<Dataset>;
  dataset: Dataset;
  persons: Array<Person>;
  person: Person;
  notebooks: Array<Notebook>;
  notebook: Notebook;
  organizations: Array<Organization>;
  organization: Organization;
  softwareApplications: Array<SoftwareApplication>;
  softwareApplication: SoftwareApplication;
  softwareSourceCodes: Array<SoftwareSourceCode>;
  softwareSourceCode: SoftwareSourceCode;
  events: Array<Event>;
  event: Event;
  courses: Array<Course>;
  course: Course;
  books: Array<Book>;
  book: Book;
  articles: Array<Article>;
  article: Article;
  comment: Comment;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryDataCatalogArgs = {
  id: Scalars['ID'];
};


export type QueryDatasetArgs = {
  id: Scalars['ID'];
};


export type QueryPersonArgs = {
  id: Scalars['ID'];
};


export type QueryNotebookArgs = {
  id: Scalars['ID'];
};


export type QueryOrganizationArgs = {
  id: Scalars['ID'];
};


export type QuerySoftwareApplicationArgs = {
  id: Scalars['ID'];
};


export type QuerySoftwareSourceCodeArgs = {
  id: Scalars['ID'];
};


export type QueryEventArgs = {
  id: Scalars['ID'];
};


export type QueryCourseArgs = {
  id: Scalars['ID'];
};


export type QueryBookArgs = {
  id: Scalars['ID'];
};


export type QueryArticleArgs = {
  id: Scalars['ID'];
};


export type QueryCommentArgs = {
  id: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  updateUser: User;
  removeUser: Scalars['Boolean'];
  createDataCatalog: DataCatalog;
  updateDataCatalog: DataCatalog;
  removeDataCatalog: Scalars['Boolean'];
  createDataset: Dataset;
  updateDataset: Dataset;
  removeDataset: Scalars['Boolean'];
  createPerson: Person;
  updatePerson: Person;
  removePerson: Scalars['Boolean'];
  createNotebook: Notebook;
  updateNotebook: Notebook;
  removeNotebook: Scalars['Boolean'];
  createOrganization: Organization;
  updateOrganization: Organization;
  removeOrganization: Scalars['Boolean'];
  createSoftwareApplication: SoftwareApplication;
  updateSoftwareApplication: SoftwareApplication;
  removeSoftwareApplication: Scalars['Boolean'];
  createSoftwareSourceCode: SoftwareSourceCode;
  updateSoftwareSourceCode: SoftwareSourceCode;
  removeSoftwareSourceCode: Scalars['Boolean'];
  createEvent: Event;
  updateEvent: Event;
  removeEvent: Scalars['Boolean'];
  createCourse: Course;
  updateCourse: Course;
  removeCourse: Scalars['Boolean'];
  createBook: Book;
  updateBook: Book;
  removeBook: Scalars['Boolean'];
  createArticle: Article;
  updateArticle: Article;
  removeArticle: Scalars['Boolean'];
  createComment: Comment;
  updateComment: Comment;
  removeComment: Comment;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID'];
};


export type MutationCreateDataCatalogArgs = {
  createDataCatalogInput: CreateDataCatalogInput;
};


export type MutationUpdateDataCatalogArgs = {
  updateDataCatalogInput: UpdateDataCatalogInput;
  id: Scalars['ID'];
};


export type MutationRemoveDataCatalogArgs = {
  id: Scalars['ID'];
};


export type MutationCreateDatasetArgs = {
  createDatasetInput: CreateDatasetInput;
};


export type MutationUpdateDatasetArgs = {
  updateDatasetInput: UpdateDatasetInput;
  id: Scalars['ID'];
};


export type MutationRemoveDatasetArgs = {
  id: Scalars['ID'];
};


export type MutationCreatePersonArgs = {
  createPersonInput: CreatePersonInput;
};


export type MutationUpdatePersonArgs = {
  updatePersonInput: UpdatePersonInput;
  id: Scalars['ID'];
};


export type MutationRemovePersonArgs = {
  id: Scalars['ID'];
};


export type MutationCreateNotebookArgs = {
  createNotebookInput: CreateNotebookInput;
};


export type MutationUpdateNotebookArgs = {
  updateNotebookInput: UpdateNotebookInput;
  id: Scalars['ID'];
};


export type MutationRemoveNotebookArgs = {
  id: Scalars['ID'];
};


export type MutationCreateOrganizationArgs = {
  createOrganizationInput: CreateOrganizationInput;
};


export type MutationUpdateOrganizationArgs = {
  updateOrganizationInput: UpdateOrganizationInput;
  id: Scalars['ID'];
};


export type MutationRemoveOrganizationArgs = {
  id: Scalars['ID'];
};


export type MutationCreateSoftwareApplicationArgs = {
  createSoftwareApplicationInput: CreateSoftwareApplicationInput;
};


export type MutationUpdateSoftwareApplicationArgs = {
  updateSoftwareApplicationInput: UpdateSoftwareApplicationInput;
  id: Scalars['ID'];
};


export type MutationRemoveSoftwareApplicationArgs = {
  id: Scalars['ID'];
};


export type MutationCreateSoftwareSourceCodeArgs = {
  createSoftwareSourceCodeInput: CreateSoftwareSourceCodeInput;
};


export type MutationUpdateSoftwareSourceCodeArgs = {
  updateSoftwareSourceCodeInput: UpdateSoftwareSourceCodeInput;
  id: Scalars['ID'];
};


export type MutationRemoveSoftwareSourceCodeArgs = {
  id: Scalars['ID'];
};


export type MutationCreateEventArgs = {
  createEventInput: CreateEventInput;
};


export type MutationUpdateEventArgs = {
  updateEventInput: UpdateEventInput;
  id: Scalars['ID'];
};


export type MutationRemoveEventArgs = {
  id: Scalars['ID'];
};


export type MutationCreateCourseArgs = {
  createCourseInput: CreateCourseInput;
};


export type MutationUpdateCourseArgs = {
  updateCourseInput: UpdateCourseInput;
  id: Scalars['ID'];
};


export type MutationRemoveCourseArgs = {
  id: Scalars['ID'];
};


export type MutationCreateBookArgs = {
  createBookInput: CreateBookInput;
};


export type MutationUpdateBookArgs = {
  updateBookInput: UpdateBookInput;
  id: Scalars['ID'];
};


export type MutationRemoveBookArgs = {
  id: Scalars['ID'];
};


export type MutationCreateArticleArgs = {
  createArticleInput: CreateArticleInput;
};


export type MutationUpdateArticleArgs = {
  updateArticleInput: UpdateArticleInput;
  id: Scalars['ID'];
};


export type MutationRemoveArticleArgs = {
  id: Scalars['ID'];
};


export type MutationCreateCommentArgs = {
  createCommentInput: CreateCommentInput;
};


export type MutationUpdateCommentArgs = {
  updateCommentInput: UpdateCommentInput;
};


export type MutationRemoveCommentArgs = {
  id: Scalars['Int'];
};

export type CreateUserInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
};

export type UpdateUserInput = {
  id?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreateDataCatalogInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The subject matter of the content. Inverse property: subjectOf. */
  about?: Maybe<Array<Scalars['String']>>;
  /** Reference to Person who created the work. */
  creator?: Maybe<Scalars['ID']>;
  /** Reference to Person who publushed the work. */
  publisher?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** An award won by or for this CreativeWork. */
  award?: Maybe<Scalars['String']>;
};

export type UpdateDataCatalogInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The subject matter of the content. Inverse property: subjectOf. */
  about?: Maybe<Array<Scalars['String']>>;
  /** Reference to Person who created the work. */
  creator?: Maybe<Scalars['ID']>;
  /** Reference to Person who publushed the work. */
  publisher?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** An award won by or for this CreativeWork. */
  award?: Maybe<Scalars['String']>;
};

export type CreateDatasetInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The subject matter of the content. Inverse property: subjectOf. */
  about?: Maybe<Array<Scalars['String']>>;
  /** Reference to Person who created the work. */
  creator?: Maybe<Scalars['ID']>;
  /** Reference to Person who publushed the work. */
  publisher?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** An award won by or for this CreativeWork. */
  award?: Maybe<Scalars['String']>;
  /** URL to the direct data download. Distinct from the optional "url" field, which should lead to a page about the data. */
  distribution: Scalars['String'];
};

export type UpdateDatasetInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The subject matter of the content. Inverse property: subjectOf. */
  about?: Maybe<Array<Scalars['String']>>;
  /** Reference to Person who created the work. */
  creator?: Maybe<Scalars['ID']>;
  /** Reference to Person who publushed the work. */
  publisher?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** An award won by or for this CreativeWork. */
  award?: Maybe<Scalars['String']>;
  /** URL to the direct data download. Distinct from the optional "url" field, which should lead to a page about the data. */
  distribution?: Maybe<Scalars['String']>;
};

export type CreatePersonInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** A callsign, as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles. Typically correlates with username, when available. */
  callSign?: Maybe<Scalars['String']>;
  /** Primary email address */
  email?: Maybe<Scalars['String']>;
};

export type UpdatePersonInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** A callsign, as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles. Typically correlates with username, when available. */
  callSign?: Maybe<Scalars['String']>;
  /** Primary email address */
  email?: Maybe<Scalars['String']>;
};

export type CreateNotebookInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The subject matter of the content. Inverse property: subjectOf. */
  about?: Maybe<Array<Scalars['String']>>;
  /** Reference to Person who created the work. */
  creator?: Maybe<Scalars['ID']>;
  /** Reference to Person who publushed the work. */
  publisher?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** An award won by or for this CreativeWork. */
  award?: Maybe<Scalars['String']>;
  /** Link to the repository where the un-compiled, human readable code and related code is located (SVN, github, CodePlex). */
  codeRepository?: Maybe<Scalars['String']>;
  /** The computer programming language. */
  programmingLanguage?: Maybe<Scalars['String']>;
  /** Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0). */
  runtimePlatform?: Maybe<Scalars['String']>;
};

export type UpdateNotebookInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The subject matter of the content. Inverse property: subjectOf. */
  about?: Maybe<Array<Scalars['String']>>;
  /** Reference to Person who created the work. */
  creator?: Maybe<Scalars['ID']>;
  /** Reference to Person who publushed the work. */
  publisher?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** An award won by or for this CreativeWork. */
  award?: Maybe<Scalars['String']>;
  /** Link to the repository where the un-compiled, human readable code and related code is located (SVN, github, CodePlex). */
  codeRepository?: Maybe<Scalars['String']>;
  /** The computer programming language. */
  programmingLanguage?: Maybe<Scalars['String']>;
  /** Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0). */
  runtimePlatform?: Maybe<Scalars['String']>;
};

export type CreateOrganizationInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** Primary email address */
  email?: Maybe<Scalars['String']>;
};

export type UpdateOrganizationInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** Primary email address */
  email?: Maybe<Scalars['String']>;
};

export type CreateSoftwareApplicationInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The subject matter of the content. Inverse property: subjectOf. */
  about?: Maybe<Array<Scalars['String']>>;
  /** Reference to Person who created the work. */
  creator?: Maybe<Scalars['ID']>;
  /** Reference to Person who publushed the work. */
  publisher?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** An award won by or for this CreativeWork. */
  award?: Maybe<Scalars['String']>;
  /** Semantic version of the software instance. */
  softwareVersion?: Maybe<Scalars['String']>;
  /** Type of software application, e.g. "Game, Multimedia". */
  applicationCategory?: Maybe<Scalars['String']>;
  /** If the file can be downloaded, URL to download the binary. */
  downloadUrl?: Maybe<Scalars['String']>;
  /** URL at which the app may be installed, if different from the URL of the item. */
  installUrl?: Maybe<Scalars['String']>;
  /** Operating systems supported (Windows 7, OSX 10.6, Android 1.6). */
  operatingSystem?: Maybe<Scalars['String']>;
};

export type UpdateSoftwareApplicationInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The subject matter of the content. Inverse property: subjectOf. */
  about?: Maybe<Array<Scalars['String']>>;
  /** Reference to Person who created the work. */
  creator?: Maybe<Scalars['ID']>;
  /** Reference to Person who publushed the work. */
  publisher?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** An award won by or for this CreativeWork. */
  award?: Maybe<Scalars['String']>;
  /** Semantic version of the software instance. */
  softwareVersion?: Maybe<Scalars['String']>;
  /** Type of software application, e.g. "Game, Multimedia". */
  applicationCategory?: Maybe<Scalars['String']>;
  /** If the file can be downloaded, URL to download the binary. */
  downloadUrl?: Maybe<Scalars['String']>;
  /** URL at which the app may be installed, if different from the URL of the item. */
  installUrl?: Maybe<Scalars['String']>;
  /** Operating systems supported (Windows 7, OSX 10.6, Android 1.6). */
  operatingSystem?: Maybe<Scalars['String']>;
};

export type CreateSoftwareSourceCodeInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The subject matter of the content. Inverse property: subjectOf. */
  about?: Maybe<Array<Scalars['String']>>;
  /** Reference to Person who created the work. */
  creator?: Maybe<Scalars['ID']>;
  /** Reference to Person who publushed the work. */
  publisher?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** An award won by or for this CreativeWork. */
  award?: Maybe<Scalars['String']>;
  /** Link to the repository where the un-compiled, human readable code and related code is located (SVN, github, CodePlex). */
  codeRepository?: Maybe<Scalars['String']>;
  /** The computer programming language. */
  programmingLanguage?: Maybe<Scalars['String']>;
  /** Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0). */
  runtimePlatform?: Maybe<Scalars['String']>;
};

export type UpdateSoftwareSourceCodeInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The subject matter of the content. Inverse property: subjectOf. */
  about?: Maybe<Array<Scalars['String']>>;
  /** Reference to Person who created the work. */
  creator?: Maybe<Scalars['ID']>;
  /** Reference to Person who publushed the work. */
  publisher?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** An award won by or for this CreativeWork. */
  award?: Maybe<Scalars['String']>;
  /** Link to the repository where the un-compiled, human readable code and related code is located (SVN, github, CodePlex). */
  codeRepository?: Maybe<Scalars['String']>;
  /** The computer programming language. */
  programmingLanguage?: Maybe<Scalars['String']>;
  /** Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0). */
  runtimePlatform?: Maybe<Scalars['String']>;
};

export type CreateEventInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The duration of the item (movie, audio recording, event, etc.) in ISO 8601 date format. */
  duration: Scalars['String'];
  /** The end date and time of the item (in ISO 8601 date format). */
  endDate: Scalars['String'];
  /** The start date and time of the item (in ISO 8601 date format). */
  startDate: Scalars['String'];
  /** The location of, for example, where an event is happening, where an organization is located, or where an action takes place. */
  location: Scalars['String'];
};

export type UpdateEventInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The duration of the item (movie, audio recording, event, etc.) in ISO 8601 date format. */
  duration?: Maybe<Scalars['String']>;
  /** The end date and time of the item (in ISO 8601 date format). */
  endDate?: Maybe<Scalars['String']>;
  /** The start date and time of the item (in ISO 8601 date format). */
  startDate?: Maybe<Scalars['String']>;
  /** The location of, for example, where an event is happening, where an organization is located, or where an action takes place. */
  location?: Maybe<Scalars['String']>;
};

export type CreateCourseInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The subject matter of the content. Inverse property: subjectOf. */
  about?: Maybe<Array<Scalars['String']>>;
  /** Reference to Person who created the work. */
  creator?: Maybe<Scalars['ID']>;
  /** Reference to Person who publushed the work. */
  publisher?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** An award won by or for this CreativeWork. */
  award?: Maybe<Scalars['String']>;
  /** The LearningResource being described is intended to help a person learn the competency or learning outcome defined by the referenced term. */
  teaches?: Maybe<Scalars['String']>;
  /** Knowledge, skill, ability or personal attribute that must be demonstrated by a person or other entity in order to do something such as earn an Educational Occupational Credential or understand a LearningResource. */
  competencyRequired?: Maybe<Array<Scalars['String']>>;
  /** The identifier for the Course used by the course provider (e.g. CS101 or cypher-101) */
  courseCode: Scalars['String'];
};

export type UpdateCourseInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The subject matter of the content. Inverse property: subjectOf. */
  about?: Maybe<Array<Scalars['String']>>;
  /** Reference to Person who created the work. */
  creator?: Maybe<Scalars['ID']>;
  /** Reference to Person who publushed the work. */
  publisher?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** An award won by or for this CreativeWork. */
  award?: Maybe<Scalars['String']>;
  /** The LearningResource being described is intended to help a person learn the competency or learning outcome defined by the referenced term. */
  teaches?: Maybe<Scalars['String']>;
  /** Knowledge, skill, ability or personal attribute that must be demonstrated by a person or other entity in order to do something such as earn an Educational Occupational Credential or understand a LearningResource. */
  competencyRequired?: Maybe<Array<Scalars['String']>>;
  /** The identifier for the Course used by the course provider (e.g. CS101 or cypher-101) */
  courseCode?: Maybe<Scalars['String']>;
};

export type CreateBookInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The subject matter of the content. Inverse property: subjectOf. */
  about?: Maybe<Array<Scalars['String']>>;
  /** Reference to Person who created the work. */
  creator?: Maybe<Scalars['ID']>;
  /** Reference to Person who publushed the work. */
  publisher?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** An award won by or for this CreativeWork. */
  award?: Maybe<Scalars['String']>;
  /** The ISBN of the book */
  isbn: Scalars['String'];
};

export type UpdateBookInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The subject matter of the content. Inverse property: subjectOf. */
  about?: Maybe<Array<Scalars['String']>>;
  /** Reference to Person who created the work. */
  creator?: Maybe<Scalars['ID']>;
  /** Reference to Person who publushed the work. */
  publisher?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** An award won by or for this CreativeWork. */
  award?: Maybe<Scalars['String']>;
  /** The ISBN of the book */
  isbn?: Maybe<Scalars['String']>;
};

export type CreateArticleInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The subject matter of the content. Inverse property: subjectOf. */
  about?: Maybe<Array<Scalars['String']>>;
  /** Reference to Person who created the work. */
  creator?: Maybe<Scalars['ID']>;
  /** Reference to Person who publushed the work. */
  publisher?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** An award won by or for this CreativeWork. */
  award?: Maybe<Scalars['String']>;
};

export type UpdateArticleInput = {
  labels?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
  /** A brief description of this Thing. */
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** The subject matter of the content. Inverse property: subjectOf. */
  about?: Maybe<Array<Scalars['String']>>;
  /** Reference to Person who created the work. */
  creator?: Maybe<Scalars['ID']>;
  /** Reference to Person who publushed the work. */
  publisher?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateModified?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  /** An award won by or for this CreativeWork. */
  award?: Maybe<Scalars['String']>;
};

export type CreateCommentInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type UpdateCommentInput = {
  /** Example field (placeholder) */
  exampleField?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type ArticleFieldsFragment = (
  { __typename?: 'Article' }
  & Pick<Article, 'id' | 'labels' | 'name' | 'url' | 'description' | 'about' | 'creator' | 'publisher' | 'dateCreated' | 'dateModified' | 'license'>
);

export type CreateArticleMutationVariables = Exact<{
  input: CreateArticleInput;
}>;


export type CreateArticleMutation = (
  { __typename?: 'Mutation' }
  & { createArticle: (
    { __typename?: 'Article' }
    & ArticleFieldsFragment
  ) }
);

export type ArticleQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ArticleQuery = (
  { __typename?: 'Query' }
  & { article: (
    { __typename?: 'Article' }
    & ArticleFieldsFragment
  ) }
);

export type ArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type ArticlesQuery = (
  { __typename?: 'Query' }
  & { articles: Array<(
    { __typename?: 'Article' }
    & ArticleFieldsFragment
  )> }
);

export type UpdateArticleMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateArticleInput;
}>;


export type UpdateArticleMutation = (
  { __typename?: 'Mutation' }
  & { updateArticle: (
    { __typename?: 'Article' }
    & ArticleFieldsFragment
  ) }
);

export type RemoveArticleMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoveArticleMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeArticle'>
);

export type BookFieldsFragment = (
  { __typename?: 'Book' }
  & Pick<Book, 'id' | 'labels' | 'name' | 'url' | 'description' | 'about' | 'creator' | 'publisher' | 'dateCreated' | 'dateModified' | 'license'>
);

export type CreateBookMutationVariables = Exact<{
  input: CreateBookInput;
}>;


export type CreateBookMutation = (
  { __typename?: 'Mutation' }
  & { createBook: (
    { __typename?: 'Book' }
    & BookFieldsFragment
  ) }
);

export type BookQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BookQuery = (
  { __typename?: 'Query' }
  & { book: (
    { __typename?: 'Book' }
    & BookFieldsFragment
  ) }
);

export type BooksQueryVariables = Exact<{ [key: string]: never; }>;


export type BooksQuery = (
  { __typename?: 'Query' }
  & { books: Array<(
    { __typename?: 'Book' }
    & BookFieldsFragment
  )> }
);

export type UpdateBookMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateBookInput;
}>;


export type UpdateBookMutation = (
  { __typename?: 'Mutation' }
  & { updateBook: (
    { __typename?: 'Book' }
    & BookFieldsFragment
  ) }
);

export type RemoveBookMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoveBookMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeBook'>
);

export type CourseFieldsFragment = (
  { __typename?: 'Course' }
  & Pick<Course, 'id' | 'labels' | 'name' | 'url' | 'description' | 'about' | 'creator' | 'publisher' | 'dateCreated' | 'dateModified' | 'license' | 'award' | 'teaches' | 'competencyRequired' | 'courseCode'>
);

export type CreateCourseMutationVariables = Exact<{
  input: CreateCourseInput;
}>;


export type CreateCourseMutation = (
  { __typename?: 'Mutation' }
  & { createCourse: (
    { __typename?: 'Course' }
    & CourseFieldsFragment
  ) }
);

export type CourseQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CourseQuery = (
  { __typename?: 'Query' }
  & { course: (
    { __typename?: 'Course' }
    & CourseFieldsFragment
  ) }
);

export type CoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type CoursesQuery = (
  { __typename?: 'Query' }
  & { courses: Array<(
    { __typename?: 'Course' }
    & CourseFieldsFragment
  )> }
);

export type UpdateCourseMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateCourseInput;
}>;


export type UpdateCourseMutation = (
  { __typename?: 'Mutation' }
  & { updateCourse: (
    { __typename?: 'Course' }
    & CourseFieldsFragment
  ) }
);

export type RemoveCourseMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoveCourseMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeCourse'>
);

export type CreateDataCatalogMutationVariables = Exact<{
  input: CreateDataCatalogInput;
}>;


export type CreateDataCatalogMutation = (
  { __typename?: 'Mutation' }
  & { createDataCatalog: (
    { __typename?: 'DataCatalog' }
    & Pick<DataCatalog, 'id' | 'labels' | 'name' | 'url' | 'description' | 'creator' | 'dateCreated' | 'dateModified' | 'license'>
  ) }
);

export type GetDataCatalogQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetDataCatalogQuery = (
  { __typename?: 'Query' }
  & { dataCatalog: (
    { __typename?: 'DataCatalog' }
    & Pick<DataCatalog, 'id' | 'labels' | 'name' | 'url' | 'description' | 'creator' | 'dateCreated' | 'dateModified' | 'license'>
  ) }
);

export type DataCatalogsQueryVariables = Exact<{ [key: string]: never; }>;


export type DataCatalogsQuery = (
  { __typename?: 'Query' }
  & { dataCatalogs: Array<(
    { __typename?: 'DataCatalog' }
    & Pick<DataCatalog, 'id' | 'labels' | 'url' | 'name' | 'description' | 'creator' | 'dateCreated' | 'dateModified'>
  )> }
);

export type RemoveDataCatalogMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoveDataCatalogMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeDataCatalog'>
);

export type UpdateDataCatalogMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateDataCatalogInput;
}>;


export type UpdateDataCatalogMutation = (
  { __typename?: 'Mutation' }
  & { updateDataCatalog: (
    { __typename?: 'DataCatalog' }
    & Pick<DataCatalog, 'id' | 'labels' | 'url' | 'name' | 'description' | 'creator' | 'dateCreated' | 'dateModified'>
  ) }
);

export type CreateDatasetMutationVariables = Exact<{
  input: CreateDatasetInput;
}>;


export type CreateDatasetMutation = (
  { __typename?: 'Mutation' }
  & { createDataset: (
    { __typename?: 'Dataset' }
    & Pick<Dataset, 'id' | 'url' | 'labels' | 'name' | 'description' | 'creator' | 'dateCreated' | 'dateModified' | 'license' | 'distribution'>
  ) }
);

export type GetDatasetQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetDatasetQuery = (
  { __typename?: 'Query' }
  & { dataset: (
    { __typename?: 'Dataset' }
    & Pick<Dataset, 'id' | 'url' | 'labels' | 'name' | 'description' | 'creator' | 'dateCreated' | 'dateModified' | 'license' | 'distribution'>
  ) }
);

export type DatasetsQueryVariables = Exact<{ [key: string]: never; }>;


export type DatasetsQuery = (
  { __typename?: 'Query' }
  & { datasets: Array<(
    { __typename?: 'Dataset' }
    & Pick<Dataset, 'id' | 'url' | 'labels' | 'name' | 'description' | 'creator' | 'dateCreated' | 'dateModified' | 'license' | 'distribution'>
  )> }
);

export type RemoveDatasetMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoveDatasetMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeDataset'>
);

export type UpdateDatasetMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateDatasetInput;
}>;


export type UpdateDatasetMutation = (
  { __typename?: 'Mutation' }
  & { updateDataset: (
    { __typename?: 'Dataset' }
    & Pick<Dataset, 'id' | 'labels' | 'url' | 'name' | 'description' | 'creator' | 'dateCreated' | 'dateModified' | 'distribution'>
  ) }
);

export type CreateEventMutationVariables = Exact<{
  input: CreateEventInput;
}>;


export type CreateEventMutation = (
  { __typename?: 'Mutation' }
  & { createEvent: (
    { __typename?: 'Event' }
    & EventFieldsFragment
  ) }
);

export type EventFieldsFragment = (
  { __typename?: 'Event' }
  & Pick<Event, 'id' | 'labels' | 'name' | 'url' | 'description' | 'duration' | 'startDate' | 'endDate' | 'location'>
);

export type EventQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type EventQuery = (
  { __typename?: 'Query' }
  & { event: (
    { __typename?: 'Event' }
    & EventFieldsFragment
  ) }
);

export type EventsQueryVariables = Exact<{ [key: string]: never; }>;


export type EventsQuery = (
  { __typename?: 'Query' }
  & { events: Array<(
    { __typename?: 'Event' }
    & EventFieldsFragment
  )> }
);

export type RemoveEventMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoveEventMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeEvent'>
);

export type UpdateEventMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateEventInput;
}>;


export type UpdateEventMutation = (
  { __typename?: 'Mutation' }
  & { updateEvent: (
    { __typename?: 'Event' }
    & EventFieldsFragment
  ) }
);

export type CreateNotebookMutationVariables = Exact<{
  input: CreateNotebookInput;
}>;


export type CreateNotebookMutation = (
  { __typename?: 'Mutation' }
  & { createNotebook: (
    { __typename?: 'Notebook' }
    & NotebookFieldsFragment
  ) }
);

export type NotebookFieldsFragment = (
  { __typename?: 'Notebook' }
  & Pick<Notebook, 'id' | 'url' | 'labels' | 'name' | 'description' | 'creator' | 'dateCreated' | 'dateModified' | 'license' | 'programmingLanguage' | 'runtimePlatform'>
);

export type NotebookQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type NotebookQuery = (
  { __typename?: 'Query' }
  & { notebook: (
    { __typename?: 'Notebook' }
    & NotebookFieldsFragment
  ) }
);

export type NotebooksQueryVariables = Exact<{ [key: string]: never; }>;


export type NotebooksQuery = (
  { __typename?: 'Query' }
  & { notebooks: Array<(
    { __typename?: 'Notebook' }
    & NotebookFieldsFragment
  )> }
);

export type RemoveNotebookMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoveNotebookMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeNotebook'>
);

export type UpdateNotebookMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateNotebookInput;
}>;


export type UpdateNotebookMutation = (
  { __typename?: 'Mutation' }
  & { updateNotebook: (
    { __typename?: 'Notebook' }
    & NotebookFieldsFragment
  ) }
);

export type CreateOrganizationMutationVariables = Exact<{
  input: CreateOrganizationInput;
}>;


export type CreateOrganizationMutation = (
  { __typename?: 'Mutation' }
  & { createOrganization: (
    { __typename?: 'Organization' }
    & Pick<Organization, 'id' | 'url' | 'labels' | 'name' | 'description' | 'email'>
  ) }
);

export type OrganizationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OrganizationQuery = (
  { __typename?: 'Query' }
  & { organization: (
    { __typename?: 'Organization' }
    & Pick<Organization, 'id' | 'url' | 'labels' | 'name' | 'description' | 'email'>
  ) }
);

export type OrganizationsQueryVariables = Exact<{ [key: string]: never; }>;


export type OrganizationsQuery = (
  { __typename?: 'Query' }
  & { organizations: Array<(
    { __typename?: 'Organization' }
    & Pick<Organization, 'id' | 'url' | 'labels' | 'name' | 'description' | 'email'>
  )> }
);

export type RemoveOrganizationMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoveOrganizationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeOrganization'>
);

export type UpdateOrganizationMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateOrganizationInput;
}>;


export type UpdateOrganizationMutation = (
  { __typename?: 'Mutation' }
  & { updateOrganization: (
    { __typename?: 'Organization' }
    & Pick<Organization, 'id' | 'url' | 'labels' | 'name' | 'description' | 'email'>
  ) }
);

export type CreatePersonMutationVariables = Exact<{
  input: CreatePersonInput;
}>;


export type CreatePersonMutation = (
  { __typename?: 'Mutation' }
  & { createPerson: (
    { __typename?: 'Person' }
    & PersonFieldsFragment
  ) }
);

export type PersonFieldsFragment = (
  { __typename?: 'Person' }
  & Pick<Person, 'id' | 'url' | 'labels' | 'name' | 'description' | 'callSign' | 'email'>
);

export type PersonQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PersonQuery = (
  { __typename?: 'Query' }
  & { person: (
    { __typename?: 'Person' }
    & PersonFieldsFragment
  ) }
);

export type PersonsQueryVariables = Exact<{ [key: string]: never; }>;


export type PersonsQuery = (
  { __typename?: 'Query' }
  & { persons: Array<(
    { __typename?: 'Person' }
    & PersonFieldsFragment
  )> }
);

export type RemovePersonMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemovePersonMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removePerson'>
);

export type UpdatePersonMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdatePersonInput;
}>;


export type UpdatePersonMutation = (
  { __typename?: 'Mutation' }
  & { updatePerson: (
    { __typename?: 'Person' }
    & PersonFieldsFragment
  ) }
);

export type CreateSoftwareApplicationMutationVariables = Exact<{
  input: CreateSoftwareApplicationInput;
}>;


export type CreateSoftwareApplicationMutation = (
  { __typename?: 'Mutation' }
  & { createSoftwareApplication: (
    { __typename?: 'SoftwareApplication' }
    & SoftwareApplicationFieldsFragment
  ) }
);

export type SoftwareApplicationFieldsFragment = (
  { __typename?: 'SoftwareApplication' }
  & Pick<SoftwareApplication, 'id' | 'labels' | 'url' | 'name' | 'description' | 'creator' | 'dateCreated' | 'dateModified' | 'about' | 'publisher' | 'license' | 'softwareVersion' | 'applicationCategory' | 'downloadUrl' | 'installUrl' | 'operatingSystem'>
);

export type SoftwareApplicationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SoftwareApplicationQuery = (
  { __typename?: 'Query' }
  & { softwareApplication: (
    { __typename?: 'SoftwareApplication' }
    & Pick<SoftwareApplication, 'id' | 'labels' | 'name' | 'url' | 'description' | 'creator' | 'dateCreated' | 'dateModified' | 'license'>
  ) }
);

export type SoftwareApplicationsQueryVariables = Exact<{ [key: string]: never; }>;


export type SoftwareApplicationsQuery = (
  { __typename?: 'Query' }
  & { softwareApplications: Array<(
    { __typename?: 'SoftwareApplication' }
    & SoftwareApplicationFieldsFragment
  )> }
);

export type RemoveSoftwareApplicationMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoveSoftwareApplicationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeSoftwareApplication'>
);

export type UpdateSoftwareApplicationMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateSoftwareApplicationInput;
}>;


export type UpdateSoftwareApplicationMutation = (
  { __typename?: 'Mutation' }
  & { updateSoftwareApplication: (
    { __typename?: 'SoftwareApplication' }
    & SoftwareApplicationFieldsFragment
  ) }
);

export type CreateSoftwareSourceCodeMutationVariables = Exact<{
  input: CreateSoftwareSourceCodeInput;
}>;


export type CreateSoftwareSourceCodeMutation = (
  { __typename?: 'Mutation' }
  & { createSoftwareSourceCode: (
    { __typename?: 'SoftwareSourceCode' }
    & SoftwareSourceCodeFieldsFragment
  ) }
);

export type SoftwareSourceCodeFieldsFragment = (
  { __typename?: 'SoftwareSourceCode' }
  & Pick<SoftwareSourceCode, 'id' | 'labels' | 'name' | 'url' | 'description' | 'creator' | 'dateCreated' | 'dateModified' | 'license' | 'about' | 'publisher' | 'codeRepository' | 'programmingLanguage' | 'runtimePlatform'>
);

export type SoftwareSourceCodeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SoftwareSourceCodeQuery = (
  { __typename?: 'Query' }
  & { softwareSourceCode: (
    { __typename?: 'SoftwareSourceCode' }
    & SoftwareSourceCodeFieldsFragment
  ) }
);

export type SoftwareSourceCodesQueryVariables = Exact<{ [key: string]: never; }>;


export type SoftwareSourceCodesQuery = (
  { __typename?: 'Query' }
  & { softwareSourceCodes: Array<(
    { __typename?: 'SoftwareSourceCode' }
    & SoftwareSourceCodeFieldsFragment
  )> }
);

export type RemoveSoftwareSourceCodeMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoveSoftwareSourceCodeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeSoftwareSourceCode'>
);

export type UpdateSoftwareSourceCodeMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateSoftwareSourceCodeInput;
}>;


export type UpdateSoftwareSourceCodeMutation = (
  { __typename?: 'Mutation' }
  & { updateSoftwareSourceCode: (
    { __typename?: 'SoftwareSourceCode' }
    & SoftwareSourceCodeFieldsFragment
  ) }
);

export const ArticleFieldsFragmentDoc = gql`
    fragment articleFields on Article {
  id
  labels
  name
  url
  description
  about
  creator
  publisher
  dateCreated
  dateModified
  license
}
    `;
export const BookFieldsFragmentDoc = gql`
    fragment bookFields on Book {
  id
  labels
  name
  url
  description
  about
  creator
  publisher
  dateCreated
  dateModified
  license
}
    `;
export const CourseFieldsFragmentDoc = gql`
    fragment courseFields on Course {
  id
  labels
  name
  url
  description
  about
  creator
  publisher
  dateCreated
  dateModified
  license
  award
  teaches
  competencyRequired
  courseCode
}
    `;
export const EventFieldsFragmentDoc = gql`
    fragment eventFields on Event {
  id
  labels
  name
  url
  description
  duration
  startDate
  endDate
  location
}
    `;
export const NotebookFieldsFragmentDoc = gql`
    fragment notebookFields on Notebook {
  id
  url
  labels
  name
  description
  creator
  dateCreated
  dateModified
  license
  programmingLanguage
  runtimePlatform
}
    `;
export const PersonFieldsFragmentDoc = gql`
    fragment personFields on Person {
  id
  url
  labels
  name
  description
  callSign
  email
}
    `;
export const SoftwareApplicationFieldsFragmentDoc = gql`
    fragment softwareApplicationFields on SoftwareApplication {
  id
  labels
  url
  name
  description
  creator
  dateCreated
  dateModified
  about
  publisher
  license
  softwareVersion
  applicationCategory
  downloadUrl
  installUrl
  operatingSystem
}
    `;
export const SoftwareSourceCodeFieldsFragmentDoc = gql`
    fragment softwareSourceCodeFields on SoftwareSourceCode {
  id
  labels
  name
  url
  description
  creator
  dateCreated
  dateModified
  license
  about
  publisher
  codeRepository
  programmingLanguage
  runtimePlatform
}
    `;
export const CreateArticleDocument = gql`
    mutation createArticle($input: CreateArticleInput!) {
  createArticle(createArticleInput: $input) {
    ...articleFields
  }
}
    ${ArticleFieldsFragmentDoc}`;

export function useCreateArticleMutation() {
  return Urql.useMutation<CreateArticleMutation, CreateArticleMutationVariables>(CreateArticleDocument);
};
export const ArticleDocument = gql`
    query article($id: ID!) {
  article(id: $id) {
    ...articleFields
  }
}
    ${ArticleFieldsFragmentDoc}`;

export function useArticleQuery(options: Omit<Urql.UseQueryArgs<ArticleQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ArticleQuery>({ query: ArticleDocument, ...options });
};
export const ArticlesDocument = gql`
    query articles {
  articles {
    ...articleFields
  }
}
    ${ArticleFieldsFragmentDoc}`;

export function useArticlesQuery(options: Omit<Urql.UseQueryArgs<ArticlesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ArticlesQuery>({ query: ArticlesDocument, ...options });
};
export const UpdateArticleDocument = gql`
    mutation updateArticle($id: ID!, $input: UpdateArticleInput!) {
  updateArticle(id: $id, updateArticleInput: $input) {
    ...articleFields
  }
}
    ${ArticleFieldsFragmentDoc}`;

export function useUpdateArticleMutation() {
  return Urql.useMutation<UpdateArticleMutation, UpdateArticleMutationVariables>(UpdateArticleDocument);
};
export const RemoveArticleDocument = gql`
    mutation removeArticle($id: ID!) {
  removeArticle(id: $id)
}
    `;

export function useRemoveArticleMutation() {
  return Urql.useMutation<RemoveArticleMutation, RemoveArticleMutationVariables>(RemoveArticleDocument);
};
export const CreateBookDocument = gql`
    mutation createBook($input: CreateBookInput!) {
  createBook(createBookInput: $input) {
    ...bookFields
  }
}
    ${BookFieldsFragmentDoc}`;

export function useCreateBookMutation() {
  return Urql.useMutation<CreateBookMutation, CreateBookMutationVariables>(CreateBookDocument);
};
export const BookDocument = gql`
    query book($id: ID!) {
  book(id: $id) {
    ...bookFields
  }
}
    ${BookFieldsFragmentDoc}`;

export function useBookQuery(options: Omit<Urql.UseQueryArgs<BookQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<BookQuery>({ query: BookDocument, ...options });
};
export const BooksDocument = gql`
    query books {
  books {
    ...bookFields
  }
}
    ${BookFieldsFragmentDoc}`;

export function useBooksQuery(options: Omit<Urql.UseQueryArgs<BooksQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<BooksQuery>({ query: BooksDocument, ...options });
};
export const UpdateBookDocument = gql`
    mutation updateBook($id: ID!, $input: UpdateBookInput!) {
  updateBook(id: $id, updateBookInput: $input) {
    ...bookFields
  }
}
    ${BookFieldsFragmentDoc}`;

export function useUpdateBookMutation() {
  return Urql.useMutation<UpdateBookMutation, UpdateBookMutationVariables>(UpdateBookDocument);
};
export const RemoveBookDocument = gql`
    mutation removeBook($id: ID!) {
  removeBook(id: $id)
}
    `;

export function useRemoveBookMutation() {
  return Urql.useMutation<RemoveBookMutation, RemoveBookMutationVariables>(RemoveBookDocument);
};
export const CreateCourseDocument = gql`
    mutation createCourse($input: CreateCourseInput!) {
  createCourse(createCourseInput: $input) {
    ...courseFields
  }
}
    ${CourseFieldsFragmentDoc}`;

export function useCreateCourseMutation() {
  return Urql.useMutation<CreateCourseMutation, CreateCourseMutationVariables>(CreateCourseDocument);
};
export const CourseDocument = gql`
    query course($id: ID!) {
  course(id: $id) {
    ...courseFields
  }
}
    ${CourseFieldsFragmentDoc}`;

export function useCourseQuery(options: Omit<Urql.UseQueryArgs<CourseQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CourseQuery>({ query: CourseDocument, ...options });
};
export const CoursesDocument = gql`
    query courses {
  courses {
    ...courseFields
  }
}
    ${CourseFieldsFragmentDoc}`;

export function useCoursesQuery(options: Omit<Urql.UseQueryArgs<CoursesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CoursesQuery>({ query: CoursesDocument, ...options });
};
export const UpdateCourseDocument = gql`
    mutation updateCourse($id: ID!, $input: UpdateCourseInput!) {
  updateCourse(id: $id, updateCourseInput: $input) {
    ...courseFields
  }
}
    ${CourseFieldsFragmentDoc}`;

export function useUpdateCourseMutation() {
  return Urql.useMutation<UpdateCourseMutation, UpdateCourseMutationVariables>(UpdateCourseDocument);
};
export const RemoveCourseDocument = gql`
    mutation removeCourse($id: ID!) {
  removeCourse(id: $id)
}
    `;

export function useRemoveCourseMutation() {
  return Urql.useMutation<RemoveCourseMutation, RemoveCourseMutationVariables>(RemoveCourseDocument);
};
export const CreateDataCatalogDocument = gql`
    mutation createDataCatalog($input: CreateDataCatalogInput!) {
  createDataCatalog(createDataCatalogInput: $input) {
    id
    labels
    name
    url
    description
    creator
    dateCreated
    dateModified
    license
  }
}
    `;

export function useCreateDataCatalogMutation() {
  return Urql.useMutation<CreateDataCatalogMutation, CreateDataCatalogMutationVariables>(CreateDataCatalogDocument);
};
export const GetDataCatalogDocument = gql`
    query getDataCatalog($id: ID!) {
  dataCatalog(id: $id) {
    id
    labels
    name
    url
    description
    creator
    dateCreated
    dateModified
    license
  }
}
    `;

export function useGetDataCatalogQuery(options: Omit<Urql.UseQueryArgs<GetDataCatalogQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetDataCatalogQuery>({ query: GetDataCatalogDocument, ...options });
};
export const DataCatalogsDocument = gql`
    query dataCatalogs {
  dataCatalogs {
    id
    labels
    url
    name
    description
    creator
    dateCreated
    dateModified
  }
}
    `;

export function useDataCatalogsQuery(options: Omit<Urql.UseQueryArgs<DataCatalogsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<DataCatalogsQuery>({ query: DataCatalogsDocument, ...options });
};
export const RemoveDataCatalogDocument = gql`
    mutation removeDataCatalog($id: ID!) {
  removeDataCatalog(id: $id)
}
    `;

export function useRemoveDataCatalogMutation() {
  return Urql.useMutation<RemoveDataCatalogMutation, RemoveDataCatalogMutationVariables>(RemoveDataCatalogDocument);
};
export const UpdateDataCatalogDocument = gql`
    mutation updateDataCatalog($id: ID!, $input: UpdateDataCatalogInput!) {
  updateDataCatalog(id: $id, updateDataCatalogInput: $input) {
    id
    labels
    url
    name
    description
    creator
    dateCreated
    dateModified
  }
}
    `;

export function useUpdateDataCatalogMutation() {
  return Urql.useMutation<UpdateDataCatalogMutation, UpdateDataCatalogMutationVariables>(UpdateDataCatalogDocument);
};
export const CreateDatasetDocument = gql`
    mutation createDataset($input: CreateDatasetInput!) {
  createDataset(createDatasetInput: $input) {
    id
    url
    labels
    name
    description
    creator
    dateCreated
    dateModified
    license
    distribution
  }
}
    `;

export function useCreateDatasetMutation() {
  return Urql.useMutation<CreateDatasetMutation, CreateDatasetMutationVariables>(CreateDatasetDocument);
};
export const GetDatasetDocument = gql`
    query getDataset($id: ID!) {
  dataset(id: $id) {
    id
    url
    labels
    name
    description
    creator
    dateCreated
    dateModified
    license
    distribution
  }
}
    `;

export function useGetDatasetQuery(options: Omit<Urql.UseQueryArgs<GetDatasetQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetDatasetQuery>({ query: GetDatasetDocument, ...options });
};
export const DatasetsDocument = gql`
    query datasets {
  datasets {
    id
    url
    labels
    name
    description
    creator
    dateCreated
    dateModified
    license
    distribution
  }
}
    `;

export function useDatasetsQuery(options: Omit<Urql.UseQueryArgs<DatasetsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<DatasetsQuery>({ query: DatasetsDocument, ...options });
};
export const RemoveDatasetDocument = gql`
    mutation removeDataset($id: ID!) {
  removeDataset(id: $id)
}
    `;

export function useRemoveDatasetMutation() {
  return Urql.useMutation<RemoveDatasetMutation, RemoveDatasetMutationVariables>(RemoveDatasetDocument);
};
export const UpdateDatasetDocument = gql`
    mutation updateDataset($id: ID!, $input: UpdateDatasetInput!) {
  updateDataset(id: $id, updateDatasetInput: $input) {
    id
    labels
    url
    name
    description
    creator
    dateCreated
    dateModified
    distribution
  }
}
    `;

export function useUpdateDatasetMutation() {
  return Urql.useMutation<UpdateDatasetMutation, UpdateDatasetMutationVariables>(UpdateDatasetDocument);
};
export const CreateEventDocument = gql`
    mutation createEvent($input: CreateEventInput!) {
  createEvent(createEventInput: $input) {
    ...eventFields
  }
}
    ${EventFieldsFragmentDoc}`;

export function useCreateEventMutation() {
  return Urql.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument);
};
export const EventDocument = gql`
    query event($id: ID!) {
  event(id: $id) {
    ...eventFields
  }
}
    ${EventFieldsFragmentDoc}`;

export function useEventQuery(options: Omit<Urql.UseQueryArgs<EventQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<EventQuery>({ query: EventDocument, ...options });
};
export const EventsDocument = gql`
    query events {
  events {
    ...eventFields
  }
}
    ${EventFieldsFragmentDoc}`;

export function useEventsQuery(options: Omit<Urql.UseQueryArgs<EventsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<EventsQuery>({ query: EventsDocument, ...options });
};
export const RemoveEventDocument = gql`
    mutation removeEvent($id: ID!) {
  removeEvent(id: $id)
}
    `;

export function useRemoveEventMutation() {
  return Urql.useMutation<RemoveEventMutation, RemoveEventMutationVariables>(RemoveEventDocument);
};
export const UpdateEventDocument = gql`
    mutation updateEvent($id: ID!, $input: UpdateEventInput!) {
  updateEvent(id: $id, updateEventInput: $input) {
    ...eventFields
  }
}
    ${EventFieldsFragmentDoc}`;

export function useUpdateEventMutation() {
  return Urql.useMutation<UpdateEventMutation, UpdateEventMutationVariables>(UpdateEventDocument);
};
export const CreateNotebookDocument = gql`
    mutation createNotebook($input: CreateNotebookInput!) {
  createNotebook(createNotebookInput: $input) {
    ...notebookFields
  }
}
    ${NotebookFieldsFragmentDoc}`;

export function useCreateNotebookMutation() {
  return Urql.useMutation<CreateNotebookMutation, CreateNotebookMutationVariables>(CreateNotebookDocument);
};
export const NotebookDocument = gql`
    query notebook($id: ID!) {
  notebook(id: $id) {
    ...notebookFields
  }
}
    ${NotebookFieldsFragmentDoc}`;

export function useNotebookQuery(options: Omit<Urql.UseQueryArgs<NotebookQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<NotebookQuery>({ query: NotebookDocument, ...options });
};
export const NotebooksDocument = gql`
    query notebooks {
  notebooks {
    ...notebookFields
  }
}
    ${NotebookFieldsFragmentDoc}`;

export function useNotebooksQuery(options: Omit<Urql.UseQueryArgs<NotebooksQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<NotebooksQuery>({ query: NotebooksDocument, ...options });
};
export const RemoveNotebookDocument = gql`
    mutation removeNotebook($id: ID!) {
  removeNotebook(id: $id)
}
    `;

export function useRemoveNotebookMutation() {
  return Urql.useMutation<RemoveNotebookMutation, RemoveNotebookMutationVariables>(RemoveNotebookDocument);
};
export const UpdateNotebookDocument = gql`
    mutation updateNotebook($id: ID!, $input: UpdateNotebookInput!) {
  updateNotebook(id: $id, updateNotebookInput: $input) {
    ...notebookFields
  }
}
    ${NotebookFieldsFragmentDoc}`;

export function useUpdateNotebookMutation() {
  return Urql.useMutation<UpdateNotebookMutation, UpdateNotebookMutationVariables>(UpdateNotebookDocument);
};
export const CreateOrganizationDocument = gql`
    mutation createOrganization($input: CreateOrganizationInput!) {
  createOrganization(createOrganizationInput: $input) {
    id
    url
    labels
    name
    description
    email
  }
}
    `;

export function useCreateOrganizationMutation() {
  return Urql.useMutation<CreateOrganizationMutation, CreateOrganizationMutationVariables>(CreateOrganizationDocument);
};
export const OrganizationDocument = gql`
    query organization($id: ID!) {
  organization(id: $id) {
    id
    url
    labels
    name
    description
    email
  }
}
    `;

export function useOrganizationQuery(options: Omit<Urql.UseQueryArgs<OrganizationQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<OrganizationQuery>({ query: OrganizationDocument, ...options });
};
export const OrganizationsDocument = gql`
    query organizations {
  organizations {
    id
    url
    labels
    name
    description
    email
  }
}
    `;

export function useOrganizationsQuery(options: Omit<Urql.UseQueryArgs<OrganizationsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<OrganizationsQuery>({ query: OrganizationsDocument, ...options });
};
export const RemoveOrganizationDocument = gql`
    mutation removeOrganization($id: ID!) {
  removeOrganization(id: $id)
}
    `;

export function useRemoveOrganizationMutation() {
  return Urql.useMutation<RemoveOrganizationMutation, RemoveOrganizationMutationVariables>(RemoveOrganizationDocument);
};
export const UpdateOrganizationDocument = gql`
    mutation updateOrganization($id: ID!, $input: UpdateOrganizationInput!) {
  updateOrganization(id: $id, updateOrganizationInput: $input) {
    id
    url
    labels
    name
    description
    email
  }
}
    `;

export function useUpdateOrganizationMutation() {
  return Urql.useMutation<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>(UpdateOrganizationDocument);
};
export const CreatePersonDocument = gql`
    mutation createPerson($input: CreatePersonInput!) {
  createPerson(createPersonInput: $input) {
    ...personFields
  }
}
    ${PersonFieldsFragmentDoc}`;

export function useCreatePersonMutation() {
  return Urql.useMutation<CreatePersonMutation, CreatePersonMutationVariables>(CreatePersonDocument);
};
export const PersonDocument = gql`
    query person($id: ID!) {
  person(id: $id) {
    ...personFields
  }
}
    ${PersonFieldsFragmentDoc}`;

export function usePersonQuery(options: Omit<Urql.UseQueryArgs<PersonQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PersonQuery>({ query: PersonDocument, ...options });
};
export const PersonsDocument = gql`
    query persons {
  persons {
    ...personFields
  }
}
    ${PersonFieldsFragmentDoc}`;

export function usePersonsQuery(options: Omit<Urql.UseQueryArgs<PersonsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PersonsQuery>({ query: PersonsDocument, ...options });
};
export const RemovePersonDocument = gql`
    mutation removePerson($id: ID!) {
  removePerson(id: $id)
}
    `;

export function useRemovePersonMutation() {
  return Urql.useMutation<RemovePersonMutation, RemovePersonMutationVariables>(RemovePersonDocument);
};
export const UpdatePersonDocument = gql`
    mutation updatePerson($id: ID!, $input: UpdatePersonInput!) {
  updatePerson(id: $id, updatePersonInput: $input) {
    ...personFields
  }
}
    ${PersonFieldsFragmentDoc}`;

export function useUpdatePersonMutation() {
  return Urql.useMutation<UpdatePersonMutation, UpdatePersonMutationVariables>(UpdatePersonDocument);
};
export const CreateSoftwareApplicationDocument = gql`
    mutation createSoftwareApplication($input: CreateSoftwareApplicationInput!) {
  createSoftwareApplication(createSoftwareApplicationInput: $input) {
    ...softwareApplicationFields
  }
}
    ${SoftwareApplicationFieldsFragmentDoc}`;

export function useCreateSoftwareApplicationMutation() {
  return Urql.useMutation<CreateSoftwareApplicationMutation, CreateSoftwareApplicationMutationVariables>(CreateSoftwareApplicationDocument);
};
export const SoftwareApplicationDocument = gql`
    query softwareApplication($id: ID!) {
  softwareApplication(id: $id) {
    id
    labels
    name
    url
    description
    creator
    dateCreated
    dateModified
    license
  }
}
    `;

export function useSoftwareApplicationQuery(options: Omit<Urql.UseQueryArgs<SoftwareApplicationQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SoftwareApplicationQuery>({ query: SoftwareApplicationDocument, ...options });
};
export const SoftwareApplicationsDocument = gql`
    query softwareApplications {
  softwareApplications {
    ...softwareApplicationFields
  }
}
    ${SoftwareApplicationFieldsFragmentDoc}`;

export function useSoftwareApplicationsQuery(options: Omit<Urql.UseQueryArgs<SoftwareApplicationsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SoftwareApplicationsQuery>({ query: SoftwareApplicationsDocument, ...options });
};
export const RemoveSoftwareApplicationDocument = gql`
    mutation removeSoftwareApplication($id: ID!) {
  removeSoftwareApplication(id: $id)
}
    `;

export function useRemoveSoftwareApplicationMutation() {
  return Urql.useMutation<RemoveSoftwareApplicationMutation, RemoveSoftwareApplicationMutationVariables>(RemoveSoftwareApplicationDocument);
};
export const UpdateSoftwareApplicationDocument = gql`
    mutation updateSoftwareApplication($id: ID!, $input: UpdateSoftwareApplicationInput!) {
  updateSoftwareApplication(id: $id, updateSoftwareApplicationInput: $input) {
    ...softwareApplicationFields
  }
}
    ${SoftwareApplicationFieldsFragmentDoc}`;

export function useUpdateSoftwareApplicationMutation() {
  return Urql.useMutation<UpdateSoftwareApplicationMutation, UpdateSoftwareApplicationMutationVariables>(UpdateSoftwareApplicationDocument);
};
export const CreateSoftwareSourceCodeDocument = gql`
    mutation createSoftwareSourceCode($input: CreateSoftwareSourceCodeInput!) {
  createSoftwareSourceCode(createSoftwareSourceCodeInput: $input) {
    ...softwareSourceCodeFields
  }
}
    ${SoftwareSourceCodeFieldsFragmentDoc}`;

export function useCreateSoftwareSourceCodeMutation() {
  return Urql.useMutation<CreateSoftwareSourceCodeMutation, CreateSoftwareSourceCodeMutationVariables>(CreateSoftwareSourceCodeDocument);
};
export const SoftwareSourceCodeDocument = gql`
    query softwareSourceCode($id: ID!) {
  softwareSourceCode(id: $id) {
    ...softwareSourceCodeFields
  }
}
    ${SoftwareSourceCodeFieldsFragmentDoc}`;

export function useSoftwareSourceCodeQuery(options: Omit<Urql.UseQueryArgs<SoftwareSourceCodeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SoftwareSourceCodeQuery>({ query: SoftwareSourceCodeDocument, ...options });
};
export const SoftwareSourceCodesDocument = gql`
    query softwareSourceCodes {
  softwareSourceCodes {
    ...softwareSourceCodeFields
  }
}
    ${SoftwareSourceCodeFieldsFragmentDoc}`;

export function useSoftwareSourceCodesQuery(options: Omit<Urql.UseQueryArgs<SoftwareSourceCodesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SoftwareSourceCodesQuery>({ query: SoftwareSourceCodesDocument, ...options });
};
export const RemoveSoftwareSourceCodeDocument = gql`
    mutation removeSoftwareSourceCode($id: ID!) {
  removeSoftwareSourceCode(id: $id)
}
    `;

export function useRemoveSoftwareSourceCodeMutation() {
  return Urql.useMutation<RemoveSoftwareSourceCodeMutation, RemoveSoftwareSourceCodeMutationVariables>(RemoveSoftwareSourceCodeDocument);
};
export const UpdateSoftwareSourceCodeDocument = gql`
    mutation updateSoftwareSourceCode($id: ID!, $input: UpdateSoftwareSourceCodeInput!) {
  updateSoftwareSourceCode(id: $id, updateSoftwareSourceCodeInput: $input) {
    ...softwareSourceCodeFields
  }
}
    ${SoftwareSourceCodeFieldsFragmentDoc}`;

export function useUpdateSoftwareSourceCodeMutation() {
  return Urql.useMutation<UpdateSoftwareSourceCodeMutation, UpdateSoftwareSourceCodeMutationVariables>(UpdateSoftwareSourceCodeDocument);
};