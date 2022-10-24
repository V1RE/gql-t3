import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _DateTime: any;
};

/** This union type holds all content models. */
export type AllModels = Category | Content | ContentArchive | Filter | GlobalContent | Home | Menu | MenuItem | PageNotFound | Phase | Tool | ToolArchive;

/** Prepr Asset model. */
export type Asset = {
  __typename?: 'Asset';
  /** Unique identifier for each asset. */
  _id: Scalars['String'];
  _type: Scalars['String'];
  alignment?: Maybe<AssetAlignment>;
  author?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  mime_type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  original_name?: Maybe<Scalars['String']>;
  /** Mux Playback ID for Audio & Video assets. */
  playback_id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Prepr Asset model. */
export type AssetCoverArgs = {
  animated?: InputMaybe<Scalars['Boolean']>;
  end?: InputMaybe<Scalars['Float']>;
  fit_mode?: InputMaybe<Scalars['String']>;
  flip_h?: InputMaybe<Scalars['Boolean']>;
  flip_v?: InputMaybe<Scalars['Boolean']>;
  fps?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Float']>;
  time?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Int']>;
};


/** Prepr Asset model. */
export type AssetUrlArgs = {
  crop?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  player?: InputMaybe<Scalars['String']>;
  preset?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  res?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export enum AssetAlignment {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

/** Collection of assets used in a content item. */
export type Assets = {
  __typename?: 'Assets';
  _type?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Asset>>>;
};

/** List of Categories items. */
export type Categories = {
  __typename?: 'Categories';
  items: Array<Category>;
  total: Scalars['Int'];
};

/** Single Category. */
export type Category = {
  __typename?: 'Category';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']>;
  /** The time the content item was created. */
  _created_on: Scalars['String'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String'];
  /** Unique identifier for each content item. */
  _id: Scalars['String'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']>;
  icon?: Maybe<Icon>;
  title?: Maybe<Scalars['String']>;
};

export enum CategorySortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type CategoryWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars['String']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars['Boolean']>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches if the field is equal to the given value. */
  title?: InputMaybe<Scalars['String']>;
  /** Full fuzzy text search, not case sensitive. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** Matches if the field ends with the given value. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field starts with the given value. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

/** Single Content. */
export type Content = {
  __typename?: 'Content';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']>;
  /** The time the content item was created. */
  _created_on: Scalars['String'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String'];
  /** Unique identifier for each content item. */
  _id: Scalars['String'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<ContentArchive>>;
  dynamic_content?: Maybe<Array<Maybe<_Prepr_Types>>>;
  featured_content?: Maybe<FeaturedContent>;
  lead_paragraph?: Maybe<Scalars['String']>;
  metadata?: Maybe<Metadata>;
  show_global_featured_tool?: Maybe<Scalars['Boolean']>;
  show_share_buttons?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  title?: Maybe<Scalars['String']>;
};

/** Single ContentArchive. */
export type ContentArchive = {
  __typename?: 'ContentArchive';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']>;
  /** The time the content item was created. */
  _created_on: Scalars['String'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String'];
  /** Unique identifier for each content item. */
  _id: Scalars['String'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']>;
  lead_paragraph?: Maybe<Scalars['String']>;
  metadata?: Maybe<Metadata>;
  title?: Maybe<Scalars['String']>;
};

export enum ContentArchiveSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  LeadParagraphAsc = 'lead_paragraph_ASC',
  LeadParagraphDesc = 'lead_paragraph_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContentArchiveWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars['String']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars['Boolean']>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches if the field is equal to the given value. */
  lead_paragraph?: InputMaybe<Scalars['String']>;
  /** Full fuzzy text search, not case sensitive. */
  lead_paragraph_contains?: InputMaybe<Scalars['String']>;
  /** Matches if the field ends with the given value. */
  lead_paragraph_ends_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field starts with the given value. */
  lead_paragraph_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field is equal to the given value. */
  title?: InputMaybe<Scalars['String']>;
  /** Full fuzzy text search, not case sensitive. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** Matches if the field ends with the given value. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field starts with the given value. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

/** List of ContentArchives items. */
export type ContentArchives = {
  __typename?: 'ContentArchives';
  items: Array<ContentArchive>;
  total: Scalars['Int'];
};

export type ContentIntegration = {
  __typename?: 'ContentIntegration';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  data?: Maybe<Array<Maybe<KeyValue>>>;
};

/** Collection of items out of an content integration. */
export type ContentIntegrations = {
  __typename?: 'ContentIntegrations';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<ContentIntegration>>>;
};

export type ContentItems = {
  __typename?: 'ContentItems';
  items?: Maybe<Array<Maybe<AllModels>>>;
  total?: Maybe<Scalars['Int']>;
};

export enum ContentItemsSortInput {
  ChangedOn = 'changed_on',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnDesc = 'created_on_DESC',
  /** Sort content items by most viewed. */
  Popular = 'popular',
  PublishOn = 'publish_on',
  PublishOnDesc = 'publish_on_DESC'
}

export type ContentItemsWhereInput = {
  _channels_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _search?: InputMaybe<Scalars['String']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _stories_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _stories_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _tags_has?: InputMaybe<Scalars['Boolean']>;
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _typename_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum ContentSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  LeadParagraphAsc = 'lead_paragraph_ASC',
  LeadParagraphDesc = 'lead_paragraph_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** ContentSummary component. */
export type ContentSummary = {
  __typename?: 'ContentSummary';
  _id?: Maybe<Scalars['String']>;
  button_label?: Maybe<Scalars['String']>;
  button_reference: Array<ContentSummary_ButtonReference>;
  lead_paragraph?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContentSummary_ButtonReference = Content | ContentArchive | Tool;

export type ContentWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars['String']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars['Boolean']>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category?: InputMaybe<ContentArchiveWhereInput>;
  /** Matches if the field is equal to the given value. */
  lead_paragraph?: InputMaybe<Scalars['String']>;
  /** Full fuzzy text search, not case sensitive. */
  lead_paragraph_contains?: InputMaybe<Scalars['String']>;
  /** Matches if the field ends with the given value. */
  lead_paragraph_ends_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field starts with the given value. */
  lead_paragraph_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field is equal to the given value. */
  show_global_featured_tool?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the field is equal to the given value. */
  show_share_buttons?: InputMaybe<Scalars['Boolean']>;
  tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_has?: InputMaybe<Scalars['Boolean']>;
  tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches if the field is equal to the given value. */
  title?: InputMaybe<Scalars['String']>;
  /** Full fuzzy text search, not case sensitive. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** Matches if the field ends with the given value. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field starts with the given value. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

/** List of Contents items. */
export type Contents = {
  __typename?: 'Contents';
  items: Array<Content>;
  total: Scalars['Int'];
};

/** Represents a geolocation point with latitude and longitude. */
export type Coordinates = {
  __typename?: 'Coordinates';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

/** ExternalContentReference component. */
export type ExternalContentReference = {
  __typename?: 'ExternalContentReference';
  _id?: Maybe<Scalars['String']>;
  external_content_reference?: Maybe<Resource>;
};

export type FacebookPost = {
  __typename?: 'FacebookPost';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** FeaturedContent component. */
export type FeaturedContent = {
  __typename?: 'FeaturedContent';
  _id?: Maybe<Scalars['String']>;
  button_label?: Maybe<Scalars['String']>;
  button_reference: Array<FeaturedContent_ButtonReference>;
  content: Array<FeaturedContent_Content>;
  lead_paragraph?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type FeaturedContent_ButtonReference = Content | Tool;

export type FeaturedContent_Content = Content | Tool;

/** FeaturedFile component. */
export type FeaturedFile = {
  __typename?: 'FeaturedFile';
  _id?: Maybe<Scalars['String']>;
  button_label?: Maybe<Scalars['String']>;
  button_reference?: Maybe<Array<Maybe<Asset>>>;
  lead_paragraph?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** FeaturedText component. */
export type FeaturedText = {
  __typename?: 'FeaturedText';
  _id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** FeaturedTool component. */
export type FeaturedTool = {
  __typename?: 'FeaturedTool';
  _id?: Maybe<Scalars['String']>;
  button_label?: Maybe<Scalars['String']>;
  button_reference?: Maybe<Array<Tool>>;
  image?: Maybe<Array<Maybe<Asset>>>;
  lead_paragraph?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** Single Filter. */
export type Filter = {
  __typename?: 'Filter';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']>;
  /** The time the content item was created. */
  _created_on: Scalars['String'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String'];
  /** Unique identifier for each content item. */
  _id: Scalars['String'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']>;
  phase?: Maybe<Array<Phase>>;
  title?: Maybe<Scalars['String']>;
};

export enum FilterSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type FilterWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars['String']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars['Boolean']>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phase?: InputMaybe<PhaseWhereInput>;
  /** Matches if the field is equal to the given value. */
  title?: InputMaybe<Scalars['String']>;
  /** Full fuzzy text search, not case sensitive. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** Matches if the field ends with the given value. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field starts with the given value. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

/** List of Filters items. */
export type Filters = {
  __typename?: 'Filters';
  items: Array<Filter>;
  total: Scalars['Int'];
};

/** Single GlobalContent. */
export type GlobalContent = {
  __typename?: 'GlobalContent';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']>;
  /** The time the content item was created. */
  _created_on: Scalars['String'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String'];
  /** Unique identifier for each content item. */
  _id: Scalars['String'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']>;
  featured_tool?: Maybe<FeaturedTool>;
  footer_menus?: Maybe<Array<Menu>>;
  header_menu?: Maybe<Array<Menu>>;
  title?: Maybe<Scalars['String']>;
};

/** Single Home. */
export type Home = {
  __typename?: 'Home';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']>;
  /** The time the content item was created. */
  _created_on: Scalars['String'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String'];
  /** Unique identifier for each content item. */
  _id: Scalars['String'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']>;
  content_summary_left?: Maybe<ContentSummary>;
  content_summary_right?: Maybe<ContentSummary>;
  featured_content?: Maybe<FeaturedContent>;
  featured_phases?: Maybe<Array<Phase>>;
  image?: Maybe<Array<Maybe<Asset>>>;
  lead_paragraph?: Maybe<Scalars['String']>;
  metadata?: Maybe<Metadata>;
  title?: Maybe<Scalars['String']>;
};

/** HorizontalRule component. */
export type HorizontalRule = {
  __typename?: 'HorizontalRule';
  _id?: Maybe<Scalars['String']>;
  space?: Maybe<Scalars['String']>;
};

/** Icon component. */
export type Icon = {
  __typename?: 'Icon';
  _id?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type InstagramPost = {
  __typename?: 'InstagramPost';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** InternalContentReference component. */
export type InternalContentReference = {
  __typename?: 'InternalContentReference';
  _id?: Maybe<Scalars['String']>;
  internal_content_reference: Array<InternalContentReference_InternalContentReference>;
  title?: Maybe<Scalars['String']>;
};

export type InternalContentReference_InternalContentReference = Content | ContentArchive | Tool;

export type KeyValue = {
  __typename?: 'KeyValue';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** Single Menu. */
export type Menu = {
  __typename?: 'Menu';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']>;
  /** The time the content item was created. */
  _created_on: Scalars['String'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String'];
  /** Unique identifier for each content item. */
  _id: Scalars['String'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<MenuItem>>;
  title?: Maybe<Scalars['String']>;
};

/** Single MenuItem. */
export type MenuItem = {
  __typename?: 'MenuItem';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']>;
  /** The time the content item was created. */
  _created_on: Scalars['String'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String'];
  /** Unique identifier for each content item. */
  _id: Scalars['String'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']>;
  content_reference?: Maybe<Array<Maybe<AllModels>>>;
  label?: Maybe<Scalars['String']>;
};

export enum MenuItemSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC'
}

export type MenuItemWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars['String']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars['Boolean']>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches if the field is equal to the given value. */
  label?: InputMaybe<Scalars['String']>;
  /** Full fuzzy text search, not case sensitive. */
  label_contains?: InputMaybe<Scalars['String']>;
  /** Matches if the field ends with the given value. */
  label_ends_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field starts with the given value. */
  label_starts_with?: InputMaybe<Scalars['String']>;
};

/** List of MenuItems items. */
export type MenuItems = {
  __typename?: 'MenuItems';
  items: Array<MenuItem>;
  total: Scalars['Int'];
};

export enum MenuSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type MenuWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars['String']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars['Boolean']>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  items?: InputMaybe<MenuItemWhereInput>;
  /** Matches if the field is equal to the given value. */
  title?: InputMaybe<Scalars['String']>;
  /** Full fuzzy text search, not case sensitive. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** Matches if the field ends with the given value. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field starts with the given value. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

/** List of Menus items. */
export type Menus = {
  __typename?: 'Menus';
  items: Array<Menu>;
  total: Scalars['Int'];
};

/** Metadata component. */
export type Metadata = {
  __typename?: 'Metadata';
  _id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<Asset>>>;
  keywords?: Maybe<Scalars['String']>;
  no_follow?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

export type NavigationItem = {
  __typename?: 'NavigationItem';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Number = {
  __typename?: 'Number';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** Single PageNotFound. */
export type PageNotFound = {
  __typename?: 'PageNotFound';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']>;
  /** The time the content item was created. */
  _created_on: Scalars['String'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String'];
  /** Unique identifier for each content item. */
  _id: Scalars['String'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']>;
  lead_paragraph?: Maybe<Scalars['String']>;
  metadata?: Maybe<Metadata>;
  suggestions?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** Single Phase. */
export type Phase = {
  __typename?: 'Phase';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']>;
  /** The time the content item was created. */
  _created_on: Scalars['String'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String'];
  /** Unique identifier for each content item. */
  _id: Scalars['String'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']>;
  image?: Maybe<Array<Maybe<Asset>>>;
  title?: Maybe<Scalars['String']>;
};

export enum PhaseSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PhaseWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars['String']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars['Boolean']>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches if the field is equal to the given value. */
  title?: InputMaybe<Scalars['String']>;
  /** Full fuzzy text search, not case sensitive. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** Matches if the field ends with the given value. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field starts with the given value. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

/** List of Phases items. */
export type Phases = {
  __typename?: 'Phases';
  items: Array<Phase>;
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve multiple Categories. */
  Categories?: Maybe<Categories>;
  /** Retrieve a single Category. */
  Category?: Maybe<Category>;
  /** Retrieve a single Content. */
  Content?: Maybe<Content>;
  /** Retrieve a single ContentArchive. */
  ContentArchive?: Maybe<ContentArchive>;
  /** Retrieve multiple ContentArchives. */
  ContentArchives?: Maybe<ContentArchives>;
  /** Retrieve content items from all models. */
  ContentItems?: Maybe<ContentItems>;
  /** Retrieve multiple Contents. */
  Contents?: Maybe<Contents>;
  /** Retrieve a single Filter. */
  Filter?: Maybe<Filter>;
  /** Retrieve multiple Filters. */
  Filters?: Maybe<Filters>;
  /** Retrieve GlobalContent. */
  GlobalContent?: Maybe<GlobalContent>;
  /** Retrieve Home. */
  Home?: Maybe<Home>;
  /** Retrieve a single Menu. */
  Menu?: Maybe<Menu>;
  /** Retrieve a single MenuItem. */
  MenuItem?: Maybe<MenuItem>;
  /** Retrieve multiple MenuItems. */
  MenuItems?: Maybe<MenuItems>;
  /** Retrieve multiple Menus. */
  Menus?: Maybe<Menus>;
  /** Retrieve PageNotFound. */
  PageNotFound?: Maybe<PageNotFound>;
  /** Retrieve personalized Categories for the giving Customer ID. */
  Personalized_Categories?: Maybe<Categories>;
  /** Retrieve personalized ContentArchives for the giving Customer ID. */
  Personalized_ContentArchives?: Maybe<ContentArchives>;
  /** Retrieve personalized Contents for the giving Customer ID. */
  Personalized_Contents?: Maybe<Contents>;
  /** Retrieve personalized Filters for the giving Customer ID. */
  Personalized_Filters?: Maybe<Filters>;
  /** Retrieve personalized MenuItems for the giving Customer ID. */
  Personalized_MenuItems?: Maybe<MenuItems>;
  /** Retrieve personalized Menus for the giving Customer ID. */
  Personalized_Menus?: Maybe<Menus>;
  /** Retrieve personalized Phases for the giving Customer ID. */
  Personalized_Phases?: Maybe<Phases>;
  /** Retrieve personalized Tools for the giving Customer ID. */
  Personalized_Tools?: Maybe<Tools>;
  /** Retrieve a single Phase. */
  Phase?: Maybe<Phase>;
  /** Retrieve multiple Phases. */
  Phases?: Maybe<Phases>;
  /** Recommendation recipe suitable for recommending globally popular Categories */
  Popular_Categories?: Maybe<Categories>;
  /** Recommendation recipe suitable for recommending globally popular ContentArchives */
  Popular_ContentArchives?: Maybe<ContentArchives>;
  /** Recommendation recipe suitable for recommending globally popular Contents */
  Popular_Contents?: Maybe<Contents>;
  /** Recommendation recipe suitable for recommending globally popular Filters */
  Popular_Filters?: Maybe<Filters>;
  /** Recommendation recipe suitable for recommending globally popular MenuItems */
  Popular_MenuItems?: Maybe<MenuItems>;
  /** Recommendation recipe suitable for recommending globally popular Menus */
  Popular_Menus?: Maybe<Menus>;
  /** Recommendation recipe suitable for recommending globally popular Phases */
  Popular_Phases?: Maybe<Phases>;
  /** Recommendation recipe suitable for recommending globally popular Tools */
  Popular_Tools?: Maybe<Tools>;
  /** Recommendation recipe suitable for recommending Categories which are similar to the giving item */
  Similar_Categories?: Maybe<Categories>;
  /** Recommendation recipe suitable for recommending ContentArchives which are similar to the giving item */
  Similar_ContentArchives?: Maybe<ContentArchives>;
  /** Recommendation recipe suitable for recommending Contents which are similar to the giving item */
  Similar_Contents?: Maybe<Contents>;
  /** Recommendation recipe suitable for recommending Filters which are similar to the giving item */
  Similar_Filters?: Maybe<Filters>;
  /** Recommendation recipe suitable for recommending MenuItems which are similar to the giving item */
  Similar_MenuItems?: Maybe<MenuItems>;
  /** Recommendation recipe suitable for recommending Menus which are similar to the giving item */
  Similar_Menus?: Maybe<Menus>;
  /** Recommendation recipe suitable for recommending Phases which are similar to the giving item */
  Similar_Phases?: Maybe<Phases>;
  /** Recommendation recipe suitable for recommending Tools which are similar to the giving item */
  Similar_Tools?: Maybe<Tools>;
  /** Retrieve a single Tool. */
  Tool?: Maybe<Tool>;
  /** Retrieve ToolArchive. */
  ToolArchive?: Maybe<ToolArchive>;
  /** Retrieve multiple Tools. */
  Tools?: Maybe<Tools>;
};


export type QueryCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<CategorySortInput>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryContentArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryContentArchiveArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryContentArchivesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentArchiveSortInput>;
  where?: InputMaybe<ContentArchiveWhereInput>;
};


export type QueryContentItemsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentItemsSortInput>;
  where?: InputMaybe<ContentItemsWhereInput>;
};


export type QueryContentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ContentSortInput>;
  where?: InputMaybe<ContentWhereInput>;
};


export type QueryFilterArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryFiltersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FilterSortInput>;
  where?: InputMaybe<FilterWhereInput>;
};


export type QueryGlobalContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryHomeArgs = {
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMenuArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryMenuItemArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryMenuItemsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<MenuItemSortInput>;
  where?: InputMaybe<MenuItemWhereInput>;
};


export type QueryMenusArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<MenuSortInput>;
  where?: InputMaybe<MenuWhereInput>;
};


export type QueryPageNotFoundArgs = {
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPersonalized_CategoriesArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryPersonalized_ContentArchivesArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryPersonalized_ContentsArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryPersonalized_FiltersArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryPersonalized_MenuItemsArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryPersonalized_MenusArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryPersonalized_PhasesArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryPersonalized_ToolsArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryPhaseArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryPhasesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<PhaseSortInput>;
  where?: InputMaybe<PhaseWhereInput>;
};


export type QueryPopular_CategoriesArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryPopular_ContentArchivesArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentArchiveWhereInput>;
};


export type QueryPopular_ContentsArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentWhereInput>;
};


export type QueryPopular_FiltersArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FilterWhereInput>;
};


export type QueryPopular_MenuItemsArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuItemWhereInput>;
};


export type QueryPopular_MenusArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuWhereInput>;
};


export type QueryPopular_PhasesArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PhaseWhereInput>;
};


export type QueryPopular_ToolsArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ToolWhereInput>;
};


export type QuerySimilar_CategoriesArgs = {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QuerySimilar_ContentArchivesArgs = {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentArchiveWhereInput>;
};


export type QuerySimilar_ContentsArgs = {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentWhereInput>;
};


export type QuerySimilar_FiltersArgs = {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FilterWhereInput>;
};


export type QuerySimilar_MenuItemsArgs = {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuItemWhereInput>;
};


export type QuerySimilar_MenusArgs = {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuWhereInput>;
};


export type QuerySimilar_PhasesArgs = {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PhaseWhereInput>;
};


export type QuerySimilar_ToolsArgs = {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ToolWhereInput>;
};


export type QueryToolArgs = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryToolArchiveArgs = {
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryToolsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ToolSortInput>;
  where?: InputMaybe<ToolWhereInput>;
};

export type Quote = {
  __typename?: 'Quote';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type Resource = {
  __typename?: 'Resource';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SearchOptionsInput = {
  includeReferences?: InputMaybe<Scalars['Boolean']>;
};

export type SimilarRulesInput = {
  /** Adjust the weight of AI generated entities in the recommendation algorithm. */
  entities?: InputMaybe<Scalars['Float']>;
  /** Adjust the weight of content references in the recommendation algorithm. */
  references?: InputMaybe<Scalars['Float']>;
  /** Adjust the weight of tags in the recommendation algorithm. */
  tags?: InputMaybe<Scalars['Float']>;
};

export type SoundCloudPost = {
  __typename?: 'SoundCloudPost';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SpotifyPlaylist = {
  __typename?: 'SpotifyPlaylist';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type Text = {
  __typename?: 'Text';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  format?: Maybe<TextFormat>;
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export enum TextFormat {
  Code = 'Code',
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  Html = 'HTML'
}

export type TikTokPost = {
  __typename?: 'TikTokPost';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** Single Tool. */
export type Tool = {
  __typename?: 'Tool';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']>;
  /** The time the content item was created. */
  _created_on: Scalars['String'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String'];
  /** Unique identifier for each content item. */
  _id: Scalars['String'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Category>>;
  dynamic_content?: Maybe<Array<Maybe<_Prepr_Types>>>;
  filter?: Maybe<Array<Filter>>;
  image?: Maybe<Array<Maybe<Asset>>>;
  lead_paragraph?: Maybe<Scalars['String']>;
  metadata?: Maybe<Metadata>;
  other_resources?: Maybe<Array<Maybe<_Prepr_Types>>>;
  primary_file?: Maybe<FeaturedFile>;
  secondary_file?: Maybe<FeaturedFile>;
  title?: Maybe<Scalars['String']>;
};

/** Single ToolArchive. */
export type ToolArchive = {
  __typename?: 'ToolArchive';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']>;
  /** The time the content item was created. */
  _created_on: Scalars['String'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String'];
  /** Unique identifier for each content item. */
  _id: Scalars['String'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']>;
  lead_paragraph?: Maybe<Scalars['String']>;
  metadata?: Maybe<Metadata>;
  title?: Maybe<Scalars['String']>;
};

export enum ToolSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  LeadParagraphAsc = 'lead_paragraph_ASC',
  LeadParagraphDesc = 'lead_paragraph_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ToolWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars['String']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars['Boolean']>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category?: InputMaybe<CategoryWhereInput>;
  filter?: InputMaybe<FilterWhereInput>;
  /** Matches if the field is equal to the given value. */
  lead_paragraph?: InputMaybe<Scalars['String']>;
  /** Full fuzzy text search, not case sensitive. */
  lead_paragraph_contains?: InputMaybe<Scalars['String']>;
  /** Matches if the field ends with the given value. */
  lead_paragraph_ends_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field starts with the given value. */
  lead_paragraph_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field is equal to the given value. */
  title?: InputMaybe<Scalars['String']>;
  /** Full fuzzy text search, not case sensitive. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** Matches if the field ends with the given value. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field starts with the given value. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

/** List of Tools items. */
export type Tools = {
  __typename?: 'Tools';
  items: Array<Tool>;
  total: Scalars['Int'];
};

export type TwitterPost = {
  __typename?: 'TwitterPost';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type VimeoPost = {
  __typename?: 'VimeoPost';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type YouTubePost = {
  __typename?: 'YouTubePost';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** Event type is specifying the kind of event the customer has with your content. */
export enum _Event {
  Bookmark = 'Bookmark',
  Clickthrough = 'Clickthrough',
  Comment = 'Comment',
  Like = 'Like',
  Purchase = 'Purchase',
  Share = 'Share',
  Subscribe = 'Subscribe',
  View = 'View',
  Vote = 'Vote'
}

/** This union type contains all components. */
export type _Prepr_Types = Assets | ContentIntegrations | ContentSummary | Coordinates | ExternalContentReference | FacebookPost | FeaturedContent | FeaturedFile | FeaturedText | FeaturedTool | HorizontalRule | Icon | InstagramPost | InternalContentReference | Metadata | NavigationItem | Number | Quote | Resource | SoundCloudPost | SpotifyPlaylist | Text | TikTokPost | TwitterPost | VimeoPost | YouTubePost;

export type SearchQueryVariables = Exact<{
  lol: Scalars['String'];
}>;


export type SearchQuery = { __typename?: 'Query', ContentItems?: { __typename?: 'ContentItems', items?: Array<{ __typename: 'Category', title?: string | null, _id: string } | { __typename: 'Content', title?: string | null, _id: string } | { __typename: 'ContentArchive' } | { __typename: 'Filter', title?: string | null, _id: string } | { __typename: 'GlobalContent' } | { __typename: 'Home', title?: string | null, _id: string } | { __typename: 'Menu' } | { __typename: 'MenuItem' } | { __typename: 'PageNotFound' } | { __typename: 'Phase', title?: string | null, _id: string } | { __typename: 'Tool', title?: string | null, _id: string } | { __typename: 'ToolArchive' } | null> | null } | null };


export const SearchDocument = gql`
    query search($lol: String!) {
  ContentItems(where: {_search: $lol}) {
    items {
      __typename
      ... on Home {
        title
        _id
      }
      ... on Content {
        title
        _id
      }
      ... on Tool {
        title
        _id
      }
      ... on Filter {
        title
        _id
      }
      ... on Category {
        title
        _id
      }
      ... on Phase {
        title
        _id
      }
      ... on Filter {
        title
        _id
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    search(variables: SearchQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SearchQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SearchQuery>(SearchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'search', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;