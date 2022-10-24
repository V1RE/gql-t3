export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _DateTime: any;
}

/** This union type holds all content models. */
export type IPreprAllModels = IPreprCategory | IPreprContent | IPreprContentArchive | IPreprFilter | IPreprGlobalContent | IPreprHome | IPreprMenu | IPreprMenuItem | IPreprPageNotFound | IPreprPhase | IPreprTool | IPreprToolArchive;

/** Prepr Asset model. */
export interface IPreprAsset {
  __typename?: 'Asset';
  /** Unique identifier for each asset. */
  _id: Scalars['String'];
  _type: Scalars['String'];
  alignment?: Maybe<IPreprAssetAlignment>;
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
}


/** Prepr Asset model. */
export interface IPreprAssetCoverArgs {
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
}


/** Prepr Asset model. */
export interface IPreprAssetUrlArgs {
  crop?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  player?: InputMaybe<Scalars['String']>;
  preset?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  res?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
}

export enum IPreprAssetAlignment {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

/** Collection of assets used in a content item. */
export interface IPreprAssets {
  __typename?: 'Assets';
  _type?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<IPreprAsset>>>;
}

/** List of Categories items. */
export interface IPreprCategories {
  __typename?: 'Categories';
  items: Array<IPreprCategory>;
  total: Scalars['Int'];
}

/** Single Category. */
export interface IPreprCategory {
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
  icon?: Maybe<IPreprIcon>;
  title?: Maybe<Scalars['String']>;
}

export enum IPreprCategorySortInput {
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

export interface IPreprCategoryWhereInput {
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
  _search_options?: InputMaybe<IPreprSearchOptionsInput>;
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
}

/** Single Content. */
export interface IPreprContent {
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
  category?: Maybe<Array<IPreprContentArchive>>;
  dynamic_content?: Maybe<Array<Maybe<IPrepr_Prepr_Types>>>;
  featured_content?: Maybe<IPreprFeaturedContent>;
  lead_paragraph?: Maybe<Scalars['String']>;
  metadata?: Maybe<IPreprMetadata>;
  show_global_featured_tool?: Maybe<Scalars['Boolean']>;
  show_share_buttons?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Array<Maybe<IPreprTag>>>;
  title?: Maybe<Scalars['String']>;
}

/** Single ContentArchive. */
export interface IPreprContentArchive {
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
  metadata?: Maybe<IPreprMetadata>;
  title?: Maybe<Scalars['String']>;
}

export enum IPreprContentArchiveSortInput {
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

export interface IPreprContentArchiveWhereInput {
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
  _search_options?: InputMaybe<IPreprSearchOptionsInput>;
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
}

/** List of ContentArchives items. */
export interface IPreprContentArchives {
  __typename?: 'ContentArchives';
  items: Array<IPreprContentArchive>;
  total: Scalars['Int'];
}

export interface IPreprContentIntegration {
  __typename?: 'ContentIntegration';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  data?: Maybe<Array<Maybe<IPreprKeyValue>>>;
}

/** Collection of items out of an content integration. */
export interface IPreprContentIntegrations {
  __typename?: 'ContentIntegrations';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<IPreprContentIntegration>>>;
}

export interface IPreprContentItems {
  __typename?: 'ContentItems';
  items?: Maybe<Array<Maybe<IPreprAllModels>>>;
  total?: Maybe<Scalars['Int']>;
}

export enum IPreprContentItemsSortInput {
  ChangedOn = 'changed_on',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnDesc = 'created_on_DESC',
  /** Sort content items by most viewed. */
  Popular = 'popular',
  PublishOn = 'publish_on',
  PublishOnDesc = 'publish_on_DESC'
}

export interface IPreprContentItemsWhereInput {
  _channels_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _search?: InputMaybe<Scalars['String']>;
  _search_options?: InputMaybe<IPreprSearchOptionsInput>;
  _stories_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _stories_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _tags_has?: InputMaybe<Scalars['Boolean']>;
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _typename_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export enum IPreprContentSortInput {
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
export interface IPreprContentSummary {
  __typename?: 'ContentSummary';
  _id?: Maybe<Scalars['String']>;
  button_label?: Maybe<Scalars['String']>;
  button_reference: Array<IPreprContentSummary_ButtonReference>;
  lead_paragraph?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export type IPreprContentSummary_ButtonReference = IPreprContent | IPreprContentArchive | IPreprTool;

export interface IPreprContentWhereInput {
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
  _search_options?: InputMaybe<IPreprSearchOptionsInput>;
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
  category?: InputMaybe<IPreprContentArchiveWhereInput>;
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
}

/** List of Contents items. */
export interface IPreprContents {
  __typename?: 'Contents';
  items: Array<IPreprContent>;
  total: Scalars['Int'];
}

/** Represents a geolocation point with latitude and longitude. */
export interface IPreprCoordinates {
  __typename?: 'Coordinates';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
}

/** ExternalContentReference component. */
export interface IPreprExternalContentReference {
  __typename?: 'ExternalContentReference';
  _id?: Maybe<Scalars['String']>;
  external_content_reference?: Maybe<IPreprResource>;
}

export interface IPreprFacebookPost {
  __typename?: 'FacebookPost';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}

/** FeaturedContent component. */
export interface IPreprFeaturedContent {
  __typename?: 'FeaturedContent';
  _id?: Maybe<Scalars['String']>;
  button_label?: Maybe<Scalars['String']>;
  button_reference: Array<IPreprFeaturedContent_ButtonReference>;
  content: Array<IPreprFeaturedContent_Content>;
  lead_paragraph?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export type IPreprFeaturedContent_ButtonReference = IPreprContent | IPreprTool;

export type IPreprFeaturedContent_Content = IPreprContent | IPreprTool;

/** FeaturedFile component. */
export interface IPreprFeaturedFile {
  __typename?: 'FeaturedFile';
  _id?: Maybe<Scalars['String']>;
  button_label?: Maybe<Scalars['String']>;
  button_reference?: Maybe<Array<Maybe<IPreprAsset>>>;
  lead_paragraph?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

/** FeaturedText component. */
export interface IPreprFeaturedText {
  __typename?: 'FeaturedText';
  _id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

/** FeaturedTool component. */
export interface IPreprFeaturedTool {
  __typename?: 'FeaturedTool';
  _id?: Maybe<Scalars['String']>;
  button_label?: Maybe<Scalars['String']>;
  button_reference?: Maybe<Array<IPreprTool>>;
  image?: Maybe<Array<Maybe<IPreprAsset>>>;
  lead_paragraph?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

/** Single Filter. */
export interface IPreprFilter {
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
  phase?: Maybe<Array<IPreprPhase>>;
  title?: Maybe<Scalars['String']>;
}

export enum IPreprFilterSortInput {
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

export interface IPreprFilterWhereInput {
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
  _search_options?: InputMaybe<IPreprSearchOptionsInput>;
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
  phase?: InputMaybe<IPreprPhaseWhereInput>;
  /** Matches if the field is equal to the given value. */
  title?: InputMaybe<Scalars['String']>;
  /** Full fuzzy text search, not case sensitive. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** Matches if the field ends with the given value. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field starts with the given value. */
  title_starts_with?: InputMaybe<Scalars['String']>;
}

/** List of Filters items. */
export interface IPreprFilters {
  __typename?: 'Filters';
  items: Array<IPreprFilter>;
  total: Scalars['Int'];
}

/** Single GlobalContent. */
export interface IPreprGlobalContent {
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
  featured_tool?: Maybe<IPreprFeaturedTool>;
  footer_menus?: Maybe<Array<IPreprMenu>>;
  header_menu?: Maybe<Array<IPreprMenu>>;
  title?: Maybe<Scalars['String']>;
}

/** Single Home. */
export interface IPreprHome {
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
  content_summary_left?: Maybe<IPreprContentSummary>;
  content_summary_right?: Maybe<IPreprContentSummary>;
  featured_content?: Maybe<IPreprFeaturedContent>;
  featured_phases?: Maybe<Array<IPreprPhase>>;
  image?: Maybe<Array<Maybe<IPreprAsset>>>;
  lead_paragraph?: Maybe<Scalars['String']>;
  metadata?: Maybe<IPreprMetadata>;
  title?: Maybe<Scalars['String']>;
}

/** HorizontalRule component. */
export interface IPreprHorizontalRule {
  __typename?: 'HorizontalRule';
  _id?: Maybe<Scalars['String']>;
  space?: Maybe<Scalars['String']>;
}

/** Icon component. */
export interface IPreprIcon {
  __typename?: 'Icon';
  _id?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
}

export interface IPreprInstagramPost {
  __typename?: 'InstagramPost';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}

/** InternalContentReference component. */
export interface IPreprInternalContentReference {
  __typename?: 'InternalContentReference';
  _id?: Maybe<Scalars['String']>;
  internal_content_reference: Array<IPreprInternalContentReference_InternalContentReference>;
  title?: Maybe<Scalars['String']>;
}

export type IPreprInternalContentReference_InternalContentReference = IPreprContent | IPreprContentArchive | IPreprTool;

export interface IPreprKeyValue {
  __typename?: 'KeyValue';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
}

/** Single Menu. */
export interface IPreprMenu {
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
  items?: Maybe<Array<IPreprMenuItem>>;
  title?: Maybe<Scalars['String']>;
}

/** Single MenuItem. */
export interface IPreprMenuItem {
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
  content_reference?: Maybe<Array<Maybe<IPreprAllModels>>>;
  label?: Maybe<Scalars['String']>;
}

export enum IPreprMenuItemSortInput {
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

export interface IPreprMenuItemWhereInput {
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
  _search_options?: InputMaybe<IPreprSearchOptionsInput>;
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
}

/** List of MenuItems items. */
export interface IPreprMenuItems {
  __typename?: 'MenuItems';
  items: Array<IPreprMenuItem>;
  total: Scalars['Int'];
}

export enum IPreprMenuSortInput {
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

export interface IPreprMenuWhereInput {
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
  _search_options?: InputMaybe<IPreprSearchOptionsInput>;
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
  items?: InputMaybe<IPreprMenuItemWhereInput>;
  /** Matches if the field is equal to the given value. */
  title?: InputMaybe<Scalars['String']>;
  /** Full fuzzy text search, not case sensitive. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** Matches if the field ends with the given value. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field starts with the given value. */
  title_starts_with?: InputMaybe<Scalars['String']>;
}

/** List of Menus items. */
export interface IPreprMenus {
  __typename?: 'Menus';
  items: Array<IPreprMenu>;
  total: Scalars['Int'];
}

/** Metadata component. */
export interface IPreprMetadata {
  __typename?: 'Metadata';
  _id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<IPreprAsset>>>;
  keywords?: Maybe<Scalars['String']>;
  no_follow?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
}

export interface IPreprNavigationItem {
  __typename?: 'NavigationItem';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}

export interface IPreprNumber {
  __typename?: 'Number';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

/** Single PageNotFound. */
export interface IPreprPageNotFound {
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
  metadata?: Maybe<IPreprMetadata>;
  suggestions?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

/** Single Phase. */
export interface IPreprPhase {
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
  image?: Maybe<Array<Maybe<IPreprAsset>>>;
  title?: Maybe<Scalars['String']>;
}

export enum IPreprPhaseSortInput {
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

export interface IPreprPhaseWhereInput {
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
  _search_options?: InputMaybe<IPreprSearchOptionsInput>;
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
}

/** List of Phases items. */
export interface IPreprPhases {
  __typename?: 'Phases';
  items: Array<IPreprPhase>;
  total: Scalars['Int'];
}

export interface IPreprQuery {
  __typename?: 'Query';
  /** Retrieve multiple Categories. */
  Categories?: Maybe<IPreprCategories>;
  /** Retrieve a single Category. */
  Category?: Maybe<IPreprCategory>;
  /** Retrieve a single Content. */
  Content?: Maybe<IPreprContent>;
  /** Retrieve a single ContentArchive. */
  ContentArchive?: Maybe<IPreprContentArchive>;
  /** Retrieve multiple ContentArchives. */
  ContentArchives?: Maybe<IPreprContentArchives>;
  /** Retrieve content items from all models. */
  ContentItems?: Maybe<IPreprContentItems>;
  /** Retrieve multiple Contents. */
  Contents?: Maybe<IPreprContents>;
  /** Retrieve a single Filter. */
  Filter?: Maybe<IPreprFilter>;
  /** Retrieve multiple Filters. */
  Filters?: Maybe<IPreprFilters>;
  /** Retrieve GlobalContent. */
  GlobalContent?: Maybe<IPreprGlobalContent>;
  /** Retrieve Home. */
  Home?: Maybe<IPreprHome>;
  /** Retrieve a single Menu. */
  Menu?: Maybe<IPreprMenu>;
  /** Retrieve a single MenuItem. */
  MenuItem?: Maybe<IPreprMenuItem>;
  /** Retrieve multiple MenuItems. */
  MenuItems?: Maybe<IPreprMenuItems>;
  /** Retrieve multiple Menus. */
  Menus?: Maybe<IPreprMenus>;
  /** Retrieve PageNotFound. */
  PageNotFound?: Maybe<IPreprPageNotFound>;
  /** Retrieve personalized Categories for the giving Customer ID. */
  Personalized_Categories?: Maybe<IPreprCategories>;
  /** Retrieve personalized ContentArchives for the giving Customer ID. */
  Personalized_ContentArchives?: Maybe<IPreprContentArchives>;
  /** Retrieve personalized Contents for the giving Customer ID. */
  Personalized_Contents?: Maybe<IPreprContents>;
  /** Retrieve personalized Filters for the giving Customer ID. */
  Personalized_Filters?: Maybe<IPreprFilters>;
  /** Retrieve personalized MenuItems for the giving Customer ID. */
  Personalized_MenuItems?: Maybe<IPreprMenuItems>;
  /** Retrieve personalized Menus for the giving Customer ID. */
  Personalized_Menus?: Maybe<IPreprMenus>;
  /** Retrieve personalized Phases for the giving Customer ID. */
  Personalized_Phases?: Maybe<IPreprPhases>;
  /** Retrieve personalized Tools for the giving Customer ID. */
  Personalized_Tools?: Maybe<IPreprTools>;
  /** Retrieve a single Phase. */
  Phase?: Maybe<IPreprPhase>;
  /** Retrieve multiple Phases. */
  Phases?: Maybe<IPreprPhases>;
  /** Recommendation recipe suitable for recommending globally popular Categories */
  Popular_Categories?: Maybe<IPreprCategories>;
  /** Recommendation recipe suitable for recommending globally popular ContentArchives */
  Popular_ContentArchives?: Maybe<IPreprContentArchives>;
  /** Recommendation recipe suitable for recommending globally popular Contents */
  Popular_Contents?: Maybe<IPreprContents>;
  /** Recommendation recipe suitable for recommending globally popular Filters */
  Popular_Filters?: Maybe<IPreprFilters>;
  /** Recommendation recipe suitable for recommending globally popular MenuItems */
  Popular_MenuItems?: Maybe<IPreprMenuItems>;
  /** Recommendation recipe suitable for recommending globally popular Menus */
  Popular_Menus?: Maybe<IPreprMenus>;
  /** Recommendation recipe suitable for recommending globally popular Phases */
  Popular_Phases?: Maybe<IPreprPhases>;
  /** Recommendation recipe suitable for recommending globally popular Tools */
  Popular_Tools?: Maybe<IPreprTools>;
  /** Recommendation recipe suitable for recommending Categories which are similar to the giving item */
  Similar_Categories?: Maybe<IPreprCategories>;
  /** Recommendation recipe suitable for recommending ContentArchives which are similar to the giving item */
  Similar_ContentArchives?: Maybe<IPreprContentArchives>;
  /** Recommendation recipe suitable for recommending Contents which are similar to the giving item */
  Similar_Contents?: Maybe<IPreprContents>;
  /** Recommendation recipe suitable for recommending Filters which are similar to the giving item */
  Similar_Filters?: Maybe<IPreprFilters>;
  /** Recommendation recipe suitable for recommending MenuItems which are similar to the giving item */
  Similar_MenuItems?: Maybe<IPreprMenuItems>;
  /** Recommendation recipe suitable for recommending Menus which are similar to the giving item */
  Similar_Menus?: Maybe<IPreprMenus>;
  /** Recommendation recipe suitable for recommending Phases which are similar to the giving item */
  Similar_Phases?: Maybe<IPreprPhases>;
  /** Recommendation recipe suitable for recommending Tools which are similar to the giving item */
  Similar_Tools?: Maybe<IPreprTools>;
  /** Retrieve a single Tool. */
  Tool?: Maybe<IPreprTool>;
  /** Retrieve ToolArchive. */
  ToolArchive?: Maybe<IPreprToolArchive>;
  /** Retrieve multiple Tools. */
  Tools?: Maybe<IPreprTools>;
}


export interface IPreprQueryCategoriesArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<IPreprCategorySortInput>;
  where?: InputMaybe<IPreprCategoryWhereInput>;
}


export interface IPreprQueryCategoryArgs {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
}


export interface IPreprQueryContentArgs {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
}


export interface IPreprQueryContentArchiveArgs {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
}


export interface IPreprQueryContentArchivesArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<IPreprContentArchiveSortInput>;
  where?: InputMaybe<IPreprContentArchiveWhereInput>;
}


export interface IPreprQueryContentItemsArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<IPreprContentItemsSortInput>;
  where?: InputMaybe<IPreprContentItemsWhereInput>;
}


export interface IPreprQueryContentsArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<IPreprContentSortInput>;
  where?: InputMaybe<IPreprContentWhereInput>;
}


export interface IPreprQueryFilterArgs {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
}


export interface IPreprQueryFiltersArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<IPreprFilterSortInput>;
  where?: InputMaybe<IPreprFilterWhereInput>;
}


export interface IPreprQueryGlobalContentArgs {
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}


export interface IPreprQueryHomeArgs {
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}


export interface IPreprQueryMenuArgs {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
}


export interface IPreprQueryMenuItemArgs {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
}


export interface IPreprQueryMenuItemsArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<IPreprMenuItemSortInput>;
  where?: InputMaybe<IPreprMenuItemWhereInput>;
}


export interface IPreprQueryMenusArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<IPreprMenuSortInput>;
  where?: InputMaybe<IPreprMenuWhereInput>;
}


export interface IPreprQueryPageNotFoundArgs {
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}


export interface IPreprQueryPersonalized_CategoriesArgs {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
}


export interface IPreprQueryPersonalized_ContentArchivesArgs {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
}


export interface IPreprQueryPersonalized_ContentsArgs {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
}


export interface IPreprQueryPersonalized_FiltersArgs {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
}


export interface IPreprQueryPersonalized_MenuItemsArgs {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
}


export interface IPreprQueryPersonalized_MenusArgs {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
}


export interface IPreprQueryPersonalized_PhasesArgs {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
}


export interface IPreprQueryPersonalized_ToolsArgs {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
}


export interface IPreprQueryPhaseArgs {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
}


export interface IPreprQueryPhasesArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<IPreprPhaseSortInput>;
  where?: InputMaybe<IPreprPhaseWhereInput>;
}


export interface IPreprQueryPopular_CategoriesArgs {
  events?: InputMaybe<Array<InputMaybe<IPrepr_Event>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IPreprCategoryWhereInput>;
}


export interface IPreprQueryPopular_ContentArchivesArgs {
  events?: InputMaybe<Array<InputMaybe<IPrepr_Event>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IPreprContentArchiveWhereInput>;
}


export interface IPreprQueryPopular_ContentsArgs {
  events?: InputMaybe<Array<InputMaybe<IPrepr_Event>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IPreprContentWhereInput>;
}


export interface IPreprQueryPopular_FiltersArgs {
  events?: InputMaybe<Array<InputMaybe<IPrepr_Event>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IPreprFilterWhereInput>;
}


export interface IPreprQueryPopular_MenuItemsArgs {
  events?: InputMaybe<Array<InputMaybe<IPrepr_Event>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IPreprMenuItemWhereInput>;
}


export interface IPreprQueryPopular_MenusArgs {
  events?: InputMaybe<Array<InputMaybe<IPrepr_Event>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IPreprMenuWhereInput>;
}


export interface IPreprQueryPopular_PhasesArgs {
  events?: InputMaybe<Array<InputMaybe<IPrepr_Event>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IPreprPhaseWhereInput>;
}


export interface IPreprQueryPopular_ToolsArgs {
  events?: InputMaybe<Array<InputMaybe<IPrepr_Event>>>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IPreprToolWhereInput>;
}


export interface IPreprQuerySimilar_CategoriesArgs {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rules?: InputMaybe<IPreprSimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IPreprCategoryWhereInput>;
}


export interface IPreprQuerySimilar_ContentArchivesArgs {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rules?: InputMaybe<IPreprSimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IPreprContentArchiveWhereInput>;
}


export interface IPreprQuerySimilar_ContentsArgs {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rules?: InputMaybe<IPreprSimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IPreprContentWhereInput>;
}


export interface IPreprQuerySimilar_FiltersArgs {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rules?: InputMaybe<IPreprSimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IPreprFilterWhereInput>;
}


export interface IPreprQuerySimilar_MenuItemsArgs {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rules?: InputMaybe<IPreprSimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IPreprMenuItemWhereInput>;
}


export interface IPreprQuerySimilar_MenusArgs {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rules?: InputMaybe<IPreprSimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IPreprMenuWhereInput>;
}


export interface IPreprQuerySimilar_PhasesArgs {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rules?: InputMaybe<IPreprSimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IPreprPhaseWhereInput>;
}


export interface IPreprQuerySimilar_ToolsArgs {
  id: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  rules?: InputMaybe<IPreprSimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IPreprToolWhereInput>;
}


export interface IPreprQueryToolArgs {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
}


export interface IPreprQueryToolArchiveArgs {
  locale?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}


export interface IPreprQueryToolsArgs {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: Scalars['String'];
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<IPreprToolSortInput>;
  where?: InputMaybe<IPreprToolWhereInput>;
}

export interface IPreprQuote {
  __typename?: 'Quote';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
}

export interface IPreprResource {
  __typename?: 'Resource';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}

export interface IPreprSearchOptionsInput {
  includeReferences?: InputMaybe<Scalars['Boolean']>;
}

export interface IPreprSimilarRulesInput {
  /** Adjust the weight of AI generated entities in the recommendation algorithm. */
  entities?: InputMaybe<Scalars['Float']>;
  /** Adjust the weight of content references in the recommendation algorithm. */
  references?: InputMaybe<Scalars['Float']>;
  /** Adjust the weight of tags in the recommendation algorithm. */
  tags?: InputMaybe<Scalars['Float']>;
}

export interface IPreprSoundCloudPost {
  __typename?: 'SoundCloudPost';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}

export interface IPreprSpotifyPlaylist {
  __typename?: 'SpotifyPlaylist';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}

export interface IPreprTag {
  __typename?: 'Tag';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
}

export interface IPreprText {
  __typename?: 'Text';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  format?: Maybe<IPreprTextFormat>;
  html?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
}

export enum IPreprTextFormat {
  Code = 'Code',
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  Html = 'HTML'
}

export interface IPreprTikTokPost {
  __typename?: 'TikTokPost';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}

/** Single Tool. */
export interface IPreprTool {
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
  category?: Maybe<Array<IPreprCategory>>;
  dynamic_content?: Maybe<Array<Maybe<IPrepr_Prepr_Types>>>;
  filter?: Maybe<Array<IPreprFilter>>;
  image?: Maybe<Array<Maybe<IPreprAsset>>>;
  lead_paragraph?: Maybe<Scalars['String']>;
  metadata?: Maybe<IPreprMetadata>;
  other_resources?: Maybe<Array<Maybe<IPrepr_Prepr_Types>>>;
  primary_file?: Maybe<IPreprFeaturedFile>;
  secondary_file?: Maybe<IPreprFeaturedFile>;
  title?: Maybe<Scalars['String']>;
}

/** Single ToolArchive. */
export interface IPreprToolArchive {
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
  metadata?: Maybe<IPreprMetadata>;
  title?: Maybe<Scalars['String']>;
}

export enum IPreprToolSortInput {
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

export interface IPreprToolWhereInput {
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
  _search_options?: InputMaybe<IPreprSearchOptionsInput>;
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
  category?: InputMaybe<IPreprCategoryWhereInput>;
  filter?: InputMaybe<IPreprFilterWhereInput>;
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
}

/** List of Tools items. */
export interface IPreprTools {
  __typename?: 'Tools';
  items: Array<IPreprTool>;
  total: Scalars['Int'];
}

export interface IPreprTwitterPost {
  __typename?: 'TwitterPost';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}

export interface IPreprVimeoPost {
  __typename?: 'VimeoPost';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}

export interface IPreprYouTubePost {
  __typename?: 'YouTubePost';
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}

/** Event type is specifying the kind of event the customer has with your content. */
export enum IPrepr_Event {
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
export type IPrepr_Prepr_Types = IPreprAssets | IPreprContentIntegrations | IPreprContentSummary | IPreprCoordinates | IPreprExternalContentReference | IPreprFacebookPost | IPreprFeaturedContent | IPreprFeaturedFile | IPreprFeaturedText | IPreprFeaturedTool | IPreprHorizontalRule | IPreprIcon | IPreprInstagramPost | IPreprInternalContentReference | IPreprMetadata | IPreprNavigationItem | IPreprNumber | IPreprQuote | IPreprResource | IPreprSoundCloudPost | IPreprSpotifyPlaylist | IPreprText | IPreprTikTokPost | IPreprTwitterPost | IPreprVimeoPost | IPreprYouTubePost;
