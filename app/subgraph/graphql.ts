/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  /**
   * 8 bytes signed integer
   *
   */
  Int8: { input: any; output: any; }
  /**
   * A string representation of microseconds UNIX timestamp (16 digits)
   *
   */
  Timestamp: { input: any; output: any; }
};

export type AdminAdded_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addedBy?: InputMaybe<Scalars['Bytes']['input']>;
  addedBy_contains?: InputMaybe<Scalars['Bytes']['input']>;
  addedBy_gt?: InputMaybe<Scalars['Bytes']['input']>;
  addedBy_gte?: InputMaybe<Scalars['Bytes']['input']>;
  addedBy_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addedBy_lt?: InputMaybe<Scalars['Bytes']['input']>;
  addedBy_lte?: InputMaybe<Scalars['Bytes']['input']>;
  addedBy_not?: InputMaybe<Scalars['Bytes']['input']>;
  addedBy_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  addedBy_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AdminAdded_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newAdmin?: InputMaybe<Scalars['Bytes']['input']>;
  newAdmin_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newAdmin_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newAdmin_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newAdmin_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newAdmin_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newAdmin_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newAdmin_not?: InputMaybe<Scalars['Bytes']['input']>;
  newAdmin_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newAdmin_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AdminAdded_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum AdminAdded_OrderBy {
  AddedBy = 'addedBy',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewAdmin = 'newAdmin',
  TransactionHash = 'transactionHash'
}

export type AdminRegistered_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AdminRegistered_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  email_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  email_gt?: InputMaybe<Scalars['String']['input']>;
  email_gte?: InputMaybe<Scalars['String']['input']>;
  email_in?: InputMaybe<Array<Scalars['String']['input']>>;
  email_lt?: InputMaybe<Scalars['String']['input']>;
  email_lte?: InputMaybe<Scalars['String']['input']>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  email_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  email_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  email_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullName_contains?: InputMaybe<Scalars['String']['input']>;
  fullName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_ends_with?: InputMaybe<Scalars['String']['input']>;
  fullName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_gt?: InputMaybe<Scalars['String']['input']>;
  fullName_gte?: InputMaybe<Scalars['String']['input']>;
  fullName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fullName_lt?: InputMaybe<Scalars['String']['input']>;
  fullName_lte?: InputMaybe<Scalars['String']['input']>;
  fullName_not?: InputMaybe<Scalars['String']['input']>;
  fullName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fullName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fullName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fullName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fullName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_starts_with?: InputMaybe<Scalars['String']['input']>;
  fullName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  ipfsHash?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_gt?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_gte?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsHash_lt?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_lte?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<AdminRegistered_Filter>>>;
  registeredAt?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  registeredAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user?: InputMaybe<Scalars['Bytes']['input']>;
  user_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_gt?: InputMaybe<Scalars['Bytes']['input']>;
  user_gte?: InputMaybe<Scalars['Bytes']['input']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user_lt?: InputMaybe<Scalars['Bytes']['input']>;
  user_lte?: InputMaybe<Scalars['Bytes']['input']>;
  user_not?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum AdminRegistered_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Email = 'email',
  FullName = 'fullName',
  Id = 'id',
  IpfsHash = 'ipfsHash',
  RegisteredAt = 'registeredAt',
  TransactionHash = 'transactionHash',
  User = 'user'
}

export type AdminRemoved_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AdminRemoved_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AdminRemoved_Filter>>>;
  removedAdmin?: InputMaybe<Scalars['Bytes']['input']>;
  removedAdmin_contains?: InputMaybe<Scalars['Bytes']['input']>;
  removedAdmin_gt?: InputMaybe<Scalars['Bytes']['input']>;
  removedAdmin_gte?: InputMaybe<Scalars['Bytes']['input']>;
  removedAdmin_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  removedAdmin_lt?: InputMaybe<Scalars['Bytes']['input']>;
  removedAdmin_lte?: InputMaybe<Scalars['Bytes']['input']>;
  removedAdmin_not?: InputMaybe<Scalars['Bytes']['input']>;
  removedAdmin_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  removedAdmin_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  removedBy?: InputMaybe<Scalars['Bytes']['input']>;
  removedBy_contains?: InputMaybe<Scalars['Bytes']['input']>;
  removedBy_gt?: InputMaybe<Scalars['Bytes']['input']>;
  removedBy_gte?: InputMaybe<Scalars['Bytes']['input']>;
  removedBy_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  removedBy_lt?: InputMaybe<Scalars['Bytes']['input']>;
  removedBy_lte?: InputMaybe<Scalars['Bytes']['input']>;
  removedBy_not?: InputMaybe<Scalars['Bytes']['input']>;
  removedBy_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  removedBy_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum AdminRemoved_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  RemovedAdmin = 'removedAdmin',
  RemovedBy = 'removedBy',
  TransactionHash = 'transactionHash'
}

export enum Aggregation_Interval {
  Day = 'day',
  Hour = 'hour'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type DoctorRegistered_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DoctorRegistered_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  email_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  email_gt?: InputMaybe<Scalars['String']['input']>;
  email_gte?: InputMaybe<Scalars['String']['input']>;
  email_in?: InputMaybe<Array<Scalars['String']['input']>>;
  email_lt?: InputMaybe<Scalars['String']['input']>;
  email_lte?: InputMaybe<Scalars['String']['input']>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  email_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  email_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  email_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullName_contains?: InputMaybe<Scalars['String']['input']>;
  fullName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_ends_with?: InputMaybe<Scalars['String']['input']>;
  fullName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_gt?: InputMaybe<Scalars['String']['input']>;
  fullName_gte?: InputMaybe<Scalars['String']['input']>;
  fullName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fullName_lt?: InputMaybe<Scalars['String']['input']>;
  fullName_lte?: InputMaybe<Scalars['String']['input']>;
  fullName_not?: InputMaybe<Scalars['String']['input']>;
  fullName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fullName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fullName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fullName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fullName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_starts_with?: InputMaybe<Scalars['String']['input']>;
  fullName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hospitalAffiliation?: InputMaybe<Scalars['String']['input']>;
  hospitalAffiliation_contains?: InputMaybe<Scalars['String']['input']>;
  hospitalAffiliation_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hospitalAffiliation_ends_with?: InputMaybe<Scalars['String']['input']>;
  hospitalAffiliation_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hospitalAffiliation_gt?: InputMaybe<Scalars['String']['input']>;
  hospitalAffiliation_gte?: InputMaybe<Scalars['String']['input']>;
  hospitalAffiliation_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hospitalAffiliation_lt?: InputMaybe<Scalars['String']['input']>;
  hospitalAffiliation_lte?: InputMaybe<Scalars['String']['input']>;
  hospitalAffiliation_not?: InputMaybe<Scalars['String']['input']>;
  hospitalAffiliation_not_contains?: InputMaybe<Scalars['String']['input']>;
  hospitalAffiliation_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hospitalAffiliation_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hospitalAffiliation_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hospitalAffiliation_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hospitalAffiliation_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hospitalAffiliation_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hospitalAffiliation_starts_with?: InputMaybe<Scalars['String']['input']>;
  hospitalAffiliation_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  ipfsHash?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_gt?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_gte?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsHash_lt?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_lte?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  licensure?: InputMaybe<Scalars['String']['input']>;
  licensureEmail?: InputMaybe<Scalars['String']['input']>;
  licensureEmail_contains?: InputMaybe<Scalars['String']['input']>;
  licensureEmail_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  licensureEmail_ends_with?: InputMaybe<Scalars['String']['input']>;
  licensureEmail_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  licensureEmail_gt?: InputMaybe<Scalars['String']['input']>;
  licensureEmail_gte?: InputMaybe<Scalars['String']['input']>;
  licensureEmail_in?: InputMaybe<Array<Scalars['String']['input']>>;
  licensureEmail_lt?: InputMaybe<Scalars['String']['input']>;
  licensureEmail_lte?: InputMaybe<Scalars['String']['input']>;
  licensureEmail_not?: InputMaybe<Scalars['String']['input']>;
  licensureEmail_not_contains?: InputMaybe<Scalars['String']['input']>;
  licensureEmail_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  licensureEmail_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  licensureEmail_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  licensureEmail_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  licensureEmail_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  licensureEmail_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  licensureEmail_starts_with?: InputMaybe<Scalars['String']['input']>;
  licensureEmail_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  licensure_contains?: InputMaybe<Scalars['String']['input']>;
  licensure_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  licensure_ends_with?: InputMaybe<Scalars['String']['input']>;
  licensure_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  licensure_gt?: InputMaybe<Scalars['String']['input']>;
  licensure_gte?: InputMaybe<Scalars['String']['input']>;
  licensure_in?: InputMaybe<Array<Scalars['String']['input']>>;
  licensure_lt?: InputMaybe<Scalars['String']['input']>;
  licensure_lte?: InputMaybe<Scalars['String']['input']>;
  licensure_not?: InputMaybe<Scalars['String']['input']>;
  licensure_not_contains?: InputMaybe<Scalars['String']['input']>;
  licensure_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  licensure_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  licensure_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  licensure_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  licensure_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  licensure_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  licensure_starts_with?: InputMaybe<Scalars['String']['input']>;
  licensure_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  major?: InputMaybe<Scalars['String']['input']>;
  major_contains?: InputMaybe<Scalars['String']['input']>;
  major_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  major_ends_with?: InputMaybe<Scalars['String']['input']>;
  major_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  major_gt?: InputMaybe<Scalars['String']['input']>;
  major_gte?: InputMaybe<Scalars['String']['input']>;
  major_in?: InputMaybe<Array<Scalars['String']['input']>>;
  major_lt?: InputMaybe<Scalars['String']['input']>;
  major_lte?: InputMaybe<Scalars['String']['input']>;
  major_not?: InputMaybe<Scalars['String']['input']>;
  major_not_contains?: InputMaybe<Scalars['String']['input']>;
  major_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  major_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  major_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  major_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  major_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  major_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  major_starts_with?: InputMaybe<Scalars['String']['input']>;
  major_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  medicalSchoolEmail?: InputMaybe<Scalars['String']['input']>;
  medicalSchoolEmail_contains?: InputMaybe<Scalars['String']['input']>;
  medicalSchoolEmail_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  medicalSchoolEmail_ends_with?: InputMaybe<Scalars['String']['input']>;
  medicalSchoolEmail_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  medicalSchoolEmail_gt?: InputMaybe<Scalars['String']['input']>;
  medicalSchoolEmail_gte?: InputMaybe<Scalars['String']['input']>;
  medicalSchoolEmail_in?: InputMaybe<Array<Scalars['String']['input']>>;
  medicalSchoolEmail_lt?: InputMaybe<Scalars['String']['input']>;
  medicalSchoolEmail_lte?: InputMaybe<Scalars['String']['input']>;
  medicalSchoolEmail_not?: InputMaybe<Scalars['String']['input']>;
  medicalSchoolEmail_not_contains?: InputMaybe<Scalars['String']['input']>;
  medicalSchoolEmail_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  medicalSchoolEmail_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  medicalSchoolEmail_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  medicalSchoolEmail_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  medicalSchoolEmail_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  medicalSchoolEmail_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  medicalSchoolEmail_starts_with?: InputMaybe<Scalars['String']['input']>;
  medicalSchoolEmail_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  nationality_contains?: InputMaybe<Scalars['String']['input']>;
  nationality_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nationality_ends_with?: InputMaybe<Scalars['String']['input']>;
  nationality_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nationality_gt?: InputMaybe<Scalars['String']['input']>;
  nationality_gte?: InputMaybe<Scalars['String']['input']>;
  nationality_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nationality_lt?: InputMaybe<Scalars['String']['input']>;
  nationality_lte?: InputMaybe<Scalars['String']['input']>;
  nationality_not?: InputMaybe<Scalars['String']['input']>;
  nationality_not_contains?: InputMaybe<Scalars['String']['input']>;
  nationality_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nationality_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nationality_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nationality_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nationality_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nationality_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nationality_starts_with?: InputMaybe<Scalars['String']['input']>;
  nationality_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<DoctorRegistered_Filter>>>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  profilePicture_contains?: InputMaybe<Scalars['String']['input']>;
  profilePicture_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  profilePicture_ends_with?: InputMaybe<Scalars['String']['input']>;
  profilePicture_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profilePicture_gt?: InputMaybe<Scalars['String']['input']>;
  profilePicture_gte?: InputMaybe<Scalars['String']['input']>;
  profilePicture_in?: InputMaybe<Array<Scalars['String']['input']>>;
  profilePicture_lt?: InputMaybe<Scalars['String']['input']>;
  profilePicture_lte?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not_contains?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  profilePicture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profilePicture_starts_with?: InputMaybe<Scalars['String']['input']>;
  profilePicture_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  registeredAt?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  registeredAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  specialty?: InputMaybe<Scalars['String']['input']>;
  specialty_contains?: InputMaybe<Scalars['String']['input']>;
  specialty_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  specialty_ends_with?: InputMaybe<Scalars['String']['input']>;
  specialty_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  specialty_gt?: InputMaybe<Scalars['String']['input']>;
  specialty_gte?: InputMaybe<Scalars['String']['input']>;
  specialty_in?: InputMaybe<Array<Scalars['String']['input']>>;
  specialty_lt?: InputMaybe<Scalars['String']['input']>;
  specialty_lte?: InputMaybe<Scalars['String']['input']>;
  specialty_not?: InputMaybe<Scalars['String']['input']>;
  specialty_not_contains?: InputMaybe<Scalars['String']['input']>;
  specialty_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  specialty_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  specialty_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  specialty_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  specialty_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  specialty_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  specialty_starts_with?: InputMaybe<Scalars['String']['input']>;
  specialty_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user?: InputMaybe<Scalars['Bytes']['input']>;
  user_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_gt?: InputMaybe<Scalars['Bytes']['input']>;
  user_gte?: InputMaybe<Scalars['Bytes']['input']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user_lt?: InputMaybe<Scalars['Bytes']['input']>;
  user_lte?: InputMaybe<Scalars['Bytes']['input']>;
  user_not?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  yearOfExpiration?: InputMaybe<Scalars['BigInt']['input']>;
  yearOfExpiration_gt?: InputMaybe<Scalars['BigInt']['input']>;
  yearOfExpiration_gte?: InputMaybe<Scalars['BigInt']['input']>;
  yearOfExpiration_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  yearOfExpiration_lt?: InputMaybe<Scalars['BigInt']['input']>;
  yearOfExpiration_lte?: InputMaybe<Scalars['BigInt']['input']>;
  yearOfExpiration_not?: InputMaybe<Scalars['BigInt']['input']>;
  yearOfExpiration_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  yearOfGraduation?: InputMaybe<Scalars['BigInt']['input']>;
  yearOfGraduation_gt?: InputMaybe<Scalars['BigInt']['input']>;
  yearOfGraduation_gte?: InputMaybe<Scalars['BigInt']['input']>;
  yearOfGraduation_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  yearOfGraduation_lt?: InputMaybe<Scalars['BigInt']['input']>;
  yearOfGraduation_lte?: InputMaybe<Scalars['BigInt']['input']>;
  yearOfGraduation_not?: InputMaybe<Scalars['BigInt']['input']>;
  yearOfGraduation_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  yearsOfExperience?: InputMaybe<Scalars['BigInt']['input']>;
  yearsOfExperience_gt?: InputMaybe<Scalars['BigInt']['input']>;
  yearsOfExperience_gte?: InputMaybe<Scalars['BigInt']['input']>;
  yearsOfExperience_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  yearsOfExperience_lt?: InputMaybe<Scalars['BigInt']['input']>;
  yearsOfExperience_lte?: InputMaybe<Scalars['BigInt']['input']>;
  yearsOfExperience_not?: InputMaybe<Scalars['BigInt']['input']>;
  yearsOfExperience_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum DoctorRegistered_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Email = 'email',
  FullName = 'fullName',
  HospitalAffiliation = 'hospitalAffiliation',
  Id = 'id',
  IpfsHash = 'ipfsHash',
  Licensure = 'licensure',
  LicensureEmail = 'licensureEmail',
  Major = 'major',
  MedicalSchoolEmail = 'medicalSchoolEmail',
  Nationality = 'nationality',
  ProfilePicture = 'profilePicture',
  RegisteredAt = 'registeredAt',
  Specialty = 'specialty',
  TransactionHash = 'transactionHash',
  User = 'user',
  YearOfExpiration = 'yearOfExpiration',
  YearOfGraduation = 'yearOfGraduation',
  YearsOfExperience = 'yearsOfExperience'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PatientRegistered_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  additionalInformation?: InputMaybe<Scalars['String']['input']>;
  additionalInformation_contains?: InputMaybe<Scalars['String']['input']>;
  additionalInformation_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  additionalInformation_ends_with?: InputMaybe<Scalars['String']['input']>;
  additionalInformation_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  additionalInformation_gt?: InputMaybe<Scalars['String']['input']>;
  additionalInformation_gte?: InputMaybe<Scalars['String']['input']>;
  additionalInformation_in?: InputMaybe<Array<Scalars['String']['input']>>;
  additionalInformation_lt?: InputMaybe<Scalars['String']['input']>;
  additionalInformation_lte?: InputMaybe<Scalars['String']['input']>;
  additionalInformation_not?: InputMaybe<Scalars['String']['input']>;
  additionalInformation_not_contains?: InputMaybe<Scalars['String']['input']>;
  additionalInformation_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  additionalInformation_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  additionalInformation_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  additionalInformation_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  additionalInformation_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  additionalInformation_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  additionalInformation_starts_with?: InputMaybe<Scalars['String']['input']>;
  additionalInformation_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allergies?: InputMaybe<Scalars['String']['input']>;
  allergies_contains?: InputMaybe<Scalars['String']['input']>;
  allergies_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allergies_ends_with?: InputMaybe<Scalars['String']['input']>;
  allergies_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allergies_gt?: InputMaybe<Scalars['String']['input']>;
  allergies_gte?: InputMaybe<Scalars['String']['input']>;
  allergies_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allergies_lt?: InputMaybe<Scalars['String']['input']>;
  allergies_lte?: InputMaybe<Scalars['String']['input']>;
  allergies_not?: InputMaybe<Scalars['String']['input']>;
  allergies_not_contains?: InputMaybe<Scalars['String']['input']>;
  allergies_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allergies_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  allergies_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allergies_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allergies_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  allergies_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allergies_starts_with?: InputMaybe<Scalars['String']['input']>;
  allergies_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<PatientRegistered_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dateOfBirth?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth_contains?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth_ends_with?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth_gt?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth_gte?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth_in?: InputMaybe<Array<Scalars['String']['input']>>;
  dateOfBirth_lt?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth_lte?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth_not?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth_not_contains?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  dateOfBirth_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth_starts_with?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  email_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  email_gt?: InputMaybe<Scalars['String']['input']>;
  email_gte?: InputMaybe<Scalars['String']['input']>;
  email_in?: InputMaybe<Array<Scalars['String']['input']>>;
  email_lt?: InputMaybe<Scalars['String']['input']>;
  email_lte?: InputMaybe<Scalars['String']['input']>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  email_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  email_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  email_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emergencyContact1?: InputMaybe<Scalars['String']['input']>;
  emergencyContact1_contains?: InputMaybe<Scalars['String']['input']>;
  emergencyContact1_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emergencyContact1_ends_with?: InputMaybe<Scalars['String']['input']>;
  emergencyContact1_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emergencyContact1_gt?: InputMaybe<Scalars['String']['input']>;
  emergencyContact1_gte?: InputMaybe<Scalars['String']['input']>;
  emergencyContact1_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emergencyContact1_lt?: InputMaybe<Scalars['String']['input']>;
  emergencyContact1_lte?: InputMaybe<Scalars['String']['input']>;
  emergencyContact1_not?: InputMaybe<Scalars['String']['input']>;
  emergencyContact1_not_contains?: InputMaybe<Scalars['String']['input']>;
  emergencyContact1_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emergencyContact1_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  emergencyContact1_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emergencyContact1_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emergencyContact1_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  emergencyContact1_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emergencyContact1_starts_with?: InputMaybe<Scalars['String']['input']>;
  emergencyContact1_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emergencyContact2?: InputMaybe<Scalars['String']['input']>;
  emergencyContact2_contains?: InputMaybe<Scalars['String']['input']>;
  emergencyContact2_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emergencyContact2_ends_with?: InputMaybe<Scalars['String']['input']>;
  emergencyContact2_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emergencyContact2_gt?: InputMaybe<Scalars['String']['input']>;
  emergencyContact2_gte?: InputMaybe<Scalars['String']['input']>;
  emergencyContact2_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emergencyContact2_lt?: InputMaybe<Scalars['String']['input']>;
  emergencyContact2_lte?: InputMaybe<Scalars['String']['input']>;
  emergencyContact2_not?: InputMaybe<Scalars['String']['input']>;
  emergencyContact2_not_contains?: InputMaybe<Scalars['String']['input']>;
  emergencyContact2_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emergencyContact2_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  emergencyContact2_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emergencyContact2_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emergencyContact2_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  emergencyContact2_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emergencyContact2_starts_with?: InputMaybe<Scalars['String']['input']>;
  emergencyContact2_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullName_contains?: InputMaybe<Scalars['String']['input']>;
  fullName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_ends_with?: InputMaybe<Scalars['String']['input']>;
  fullName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_gt?: InputMaybe<Scalars['String']['input']>;
  fullName_gte?: InputMaybe<Scalars['String']['input']>;
  fullName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fullName_lt?: InputMaybe<Scalars['String']['input']>;
  fullName_lte?: InputMaybe<Scalars['String']['input']>;
  fullName_not?: InputMaybe<Scalars['String']['input']>;
  fullName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fullName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fullName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fullName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fullName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_starts_with?: InputMaybe<Scalars['String']['input']>;
  fullName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  gender_contains?: InputMaybe<Scalars['String']['input']>;
  gender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  gender_ends_with?: InputMaybe<Scalars['String']['input']>;
  gender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gender_gt?: InputMaybe<Scalars['String']['input']>;
  gender_gte?: InputMaybe<Scalars['String']['input']>;
  gender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  gender_lt?: InputMaybe<Scalars['String']['input']>;
  gender_lte?: InputMaybe<Scalars['String']['input']>;
  gender_not?: InputMaybe<Scalars['String']['input']>;
  gender_not_contains?: InputMaybe<Scalars['String']['input']>;
  gender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  gender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  gender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  gender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  gender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gender_starts_with?: InputMaybe<Scalars['String']['input']>;
  gender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hospitalContact?: InputMaybe<Scalars['String']['input']>;
  hospitalContact_contains?: InputMaybe<Scalars['String']['input']>;
  hospitalContact_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hospitalContact_ends_with?: InputMaybe<Scalars['String']['input']>;
  hospitalContact_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hospitalContact_gt?: InputMaybe<Scalars['String']['input']>;
  hospitalContact_gte?: InputMaybe<Scalars['String']['input']>;
  hospitalContact_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hospitalContact_lt?: InputMaybe<Scalars['String']['input']>;
  hospitalContact_lte?: InputMaybe<Scalars['String']['input']>;
  hospitalContact_not?: InputMaybe<Scalars['String']['input']>;
  hospitalContact_not_contains?: InputMaybe<Scalars['String']['input']>;
  hospitalContact_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hospitalContact_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hospitalContact_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hospitalContact_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hospitalContact_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hospitalContact_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hospitalContact_starts_with?: InputMaybe<Scalars['String']['input']>;
  hospitalContact_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hospitalEmail?: InputMaybe<Scalars['String']['input']>;
  hospitalEmail_contains?: InputMaybe<Scalars['String']['input']>;
  hospitalEmail_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hospitalEmail_ends_with?: InputMaybe<Scalars['String']['input']>;
  hospitalEmail_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hospitalEmail_gt?: InputMaybe<Scalars['String']['input']>;
  hospitalEmail_gte?: InputMaybe<Scalars['String']['input']>;
  hospitalEmail_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hospitalEmail_lt?: InputMaybe<Scalars['String']['input']>;
  hospitalEmail_lte?: InputMaybe<Scalars['String']['input']>;
  hospitalEmail_not?: InputMaybe<Scalars['String']['input']>;
  hospitalEmail_not_contains?: InputMaybe<Scalars['String']['input']>;
  hospitalEmail_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  hospitalEmail_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  hospitalEmail_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hospitalEmail_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  hospitalEmail_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  hospitalEmail_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hospitalEmail_starts_with?: InputMaybe<Scalars['String']['input']>;
  hospitalEmail_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  ipfsHash?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_gt?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_gte?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsHash_lt?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_lte?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  medicalCondition?: InputMaybe<Scalars['String']['input']>;
  medicalCondition_contains?: InputMaybe<Scalars['String']['input']>;
  medicalCondition_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  medicalCondition_ends_with?: InputMaybe<Scalars['String']['input']>;
  medicalCondition_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  medicalCondition_gt?: InputMaybe<Scalars['String']['input']>;
  medicalCondition_gte?: InputMaybe<Scalars['String']['input']>;
  medicalCondition_in?: InputMaybe<Array<Scalars['String']['input']>>;
  medicalCondition_lt?: InputMaybe<Scalars['String']['input']>;
  medicalCondition_lte?: InputMaybe<Scalars['String']['input']>;
  medicalCondition_not?: InputMaybe<Scalars['String']['input']>;
  medicalCondition_not_contains?: InputMaybe<Scalars['String']['input']>;
  medicalCondition_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  medicalCondition_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  medicalCondition_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  medicalCondition_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  medicalCondition_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  medicalCondition_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  medicalCondition_starts_with?: InputMaybe<Scalars['String']['input']>;
  medicalCondition_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  nationality_contains?: InputMaybe<Scalars['String']['input']>;
  nationality_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nationality_ends_with?: InputMaybe<Scalars['String']['input']>;
  nationality_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nationality_gt?: InputMaybe<Scalars['String']['input']>;
  nationality_gte?: InputMaybe<Scalars['String']['input']>;
  nationality_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nationality_lt?: InputMaybe<Scalars['String']['input']>;
  nationality_lte?: InputMaybe<Scalars['String']['input']>;
  nationality_not?: InputMaybe<Scalars['String']['input']>;
  nationality_not_contains?: InputMaybe<Scalars['String']['input']>;
  nationality_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nationality_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nationality_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nationality_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nationality_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nationality_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nationality_starts_with?: InputMaybe<Scalars['String']['input']>;
  nationality_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<PatientRegistered_Filter>>>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  profilePicture_contains?: InputMaybe<Scalars['String']['input']>;
  profilePicture_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  profilePicture_ends_with?: InputMaybe<Scalars['String']['input']>;
  profilePicture_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profilePicture_gt?: InputMaybe<Scalars['String']['input']>;
  profilePicture_gte?: InputMaybe<Scalars['String']['input']>;
  profilePicture_in?: InputMaybe<Array<Scalars['String']['input']>>;
  profilePicture_lt?: InputMaybe<Scalars['String']['input']>;
  profilePicture_lte?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not_contains?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  profilePicture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profilePicture_starts_with?: InputMaybe<Scalars['String']['input']>;
  profilePicture_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  registeredAt?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  registeredAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user?: InputMaybe<Scalars['Bytes']['input']>;
  user_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_gt?: InputMaybe<Scalars['Bytes']['input']>;
  user_gte?: InputMaybe<Scalars['Bytes']['input']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user_lt?: InputMaybe<Scalars['Bytes']['input']>;
  user_lte?: InputMaybe<Scalars['Bytes']['input']>;
  user_not?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PatientRegistered_OrderBy {
  AdditionalInformation = 'additionalInformation',
  Allergies = 'allergies',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  DateOfBirth = 'dateOfBirth',
  Email = 'email',
  EmergencyContact1 = 'emergencyContact1',
  EmergencyContact2 = 'emergencyContact2',
  FullName = 'fullName',
  Gender = 'gender',
  HospitalContact = 'hospitalContact',
  HospitalEmail = 'hospitalEmail',
  Id = 'id',
  IpfsHash = 'ipfsHash',
  MedicalCondition = 'medicalCondition',
  Nationality = 'nationality',
  ProfilePicture = 'profilePicture',
  RegisteredAt = 'registeredAt',
  TransactionHash = 'transactionHash',
  User = 'user'
}

export type ReportSubmitted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ReportSubmitted_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ReportSubmitted_Filter>>>;
  reason?: InputMaybe<Scalars['String']['input']>;
  reason_contains?: InputMaybe<Scalars['String']['input']>;
  reason_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_ends_with?: InputMaybe<Scalars['String']['input']>;
  reason_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_gt?: InputMaybe<Scalars['String']['input']>;
  reason_gte?: InputMaybe<Scalars['String']['input']>;
  reason_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_lt?: InputMaybe<Scalars['String']['input']>;
  reason_lte?: InputMaybe<Scalars['String']['input']>;
  reason_not?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  reason_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  reason_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_starts_with?: InputMaybe<Scalars['String']['input']>;
  reason_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reported?: InputMaybe<Scalars['Bytes']['input']>;
  reported_contains?: InputMaybe<Scalars['Bytes']['input']>;
  reported_gt?: InputMaybe<Scalars['Bytes']['input']>;
  reported_gte?: InputMaybe<Scalars['Bytes']['input']>;
  reported_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  reported_lt?: InputMaybe<Scalars['Bytes']['input']>;
  reported_lte?: InputMaybe<Scalars['Bytes']['input']>;
  reported_not?: InputMaybe<Scalars['Bytes']['input']>;
  reported_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  reported_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  reporter?: InputMaybe<Scalars['Bytes']['input']>;
  reporter_contains?: InputMaybe<Scalars['Bytes']['input']>;
  reporter_gt?: InputMaybe<Scalars['Bytes']['input']>;
  reporter_gte?: InputMaybe<Scalars['Bytes']['input']>;
  reporter_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  reporter_lt?: InputMaybe<Scalars['Bytes']['input']>;
  reporter_lte?: InputMaybe<Scalars['Bytes']['input']>;
  reporter_not?: InputMaybe<Scalars['Bytes']['input']>;
  reporter_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  reporter_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ReportSubmitted_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Reason = 'reason',
  Reported = 'reported',
  Reporter = 'reporter',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash'
}

export type SponsorRegistered_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SponsorRegistered_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  companyName_contains?: InputMaybe<Scalars['String']['input']>;
  companyName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  companyName_ends_with?: InputMaybe<Scalars['String']['input']>;
  companyName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  companyName_gt?: InputMaybe<Scalars['String']['input']>;
  companyName_gte?: InputMaybe<Scalars['String']['input']>;
  companyName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  companyName_lt?: InputMaybe<Scalars['String']['input']>;
  companyName_lte?: InputMaybe<Scalars['String']['input']>;
  companyName_not?: InputMaybe<Scalars['String']['input']>;
  companyName_not_contains?: InputMaybe<Scalars['String']['input']>;
  companyName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  companyName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  companyName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  companyName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  companyName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  companyName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  companyName_starts_with?: InputMaybe<Scalars['String']['input']>;
  companyName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  email_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  email_gt?: InputMaybe<Scalars['String']['input']>;
  email_gte?: InputMaybe<Scalars['String']['input']>;
  email_in?: InputMaybe<Array<Scalars['String']['input']>>;
  email_lt?: InputMaybe<Scalars['String']['input']>;
  email_lte?: InputMaybe<Scalars['String']['input']>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  email_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  email_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  email_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullName_contains?: InputMaybe<Scalars['String']['input']>;
  fullName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_ends_with?: InputMaybe<Scalars['String']['input']>;
  fullName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_gt?: InputMaybe<Scalars['String']['input']>;
  fullName_gte?: InputMaybe<Scalars['String']['input']>;
  fullName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fullName_lt?: InputMaybe<Scalars['String']['input']>;
  fullName_lte?: InputMaybe<Scalars['String']['input']>;
  fullName_not?: InputMaybe<Scalars['String']['input']>;
  fullName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fullName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fullName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fullName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fullName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_starts_with?: InputMaybe<Scalars['String']['input']>;
  fullName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  gender_contains?: InputMaybe<Scalars['String']['input']>;
  gender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  gender_ends_with?: InputMaybe<Scalars['String']['input']>;
  gender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gender_gt?: InputMaybe<Scalars['String']['input']>;
  gender_gte?: InputMaybe<Scalars['String']['input']>;
  gender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  gender_lt?: InputMaybe<Scalars['String']['input']>;
  gender_lte?: InputMaybe<Scalars['String']['input']>;
  gender_not?: InputMaybe<Scalars['String']['input']>;
  gender_not_contains?: InputMaybe<Scalars['String']['input']>;
  gender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  gender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  gender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  gender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  gender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gender_starts_with?: InputMaybe<Scalars['String']['input']>;
  gender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  ipfsHash?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_gt?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_gte?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsHash_lt?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_lte?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  nationality_contains?: InputMaybe<Scalars['String']['input']>;
  nationality_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nationality_ends_with?: InputMaybe<Scalars['String']['input']>;
  nationality_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nationality_gt?: InputMaybe<Scalars['String']['input']>;
  nationality_gte?: InputMaybe<Scalars['String']['input']>;
  nationality_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nationality_lt?: InputMaybe<Scalars['String']['input']>;
  nationality_lte?: InputMaybe<Scalars['String']['input']>;
  nationality_not?: InputMaybe<Scalars['String']['input']>;
  nationality_not_contains?: InputMaybe<Scalars['String']['input']>;
  nationality_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nationality_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nationality_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nationality_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nationality_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nationality_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nationality_starts_with?: InputMaybe<Scalars['String']['input']>;
  nationality_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<SponsorRegistered_Filter>>>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  profilePicture_contains?: InputMaybe<Scalars['String']['input']>;
  profilePicture_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  profilePicture_ends_with?: InputMaybe<Scalars['String']['input']>;
  profilePicture_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profilePicture_gt?: InputMaybe<Scalars['String']['input']>;
  profilePicture_gte?: InputMaybe<Scalars['String']['input']>;
  profilePicture_in?: InputMaybe<Array<Scalars['String']['input']>>;
  profilePicture_lt?: InputMaybe<Scalars['String']['input']>;
  profilePicture_lte?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not_contains?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  profilePicture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profilePicture_starts_with?: InputMaybe<Scalars['String']['input']>;
  profilePicture_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  registeredAt?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  registeredAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user?: InputMaybe<Scalars['Bytes']['input']>;
  user_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_gt?: InputMaybe<Scalars['Bytes']['input']>;
  user_gte?: InputMaybe<Scalars['Bytes']['input']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user_lt?: InputMaybe<Scalars['Bytes']['input']>;
  user_lte?: InputMaybe<Scalars['Bytes']['input']>;
  user_not?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum SponsorRegistered_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  CompanyName = 'companyName',
  Email = 'email',
  FullName = 'fullName',
  Gender = 'gender',
  Id = 'id',
  IpfsHash = 'ipfsHash',
  Nationality = 'nationality',
  ProfilePicture = 'profilePicture',
  RegisteredAt = 'registeredAt',
  TransactionHash = 'transactionHash',
  User = 'user'
}

export type VerificationApproved_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VerificationApproved_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VerificationApproved_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  volunteer?: InputMaybe<Scalars['Bytes']['input']>;
  volunteer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  volunteer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  volunteer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  volunteer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  volunteer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  volunteer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  volunteer_not?: InputMaybe<Scalars['Bytes']['input']>;
  volunteer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  volunteer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum VerificationApproved_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash',
  Volunteer = 'volunteer'
}

export type VerificationRequested_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VerificationRequested_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VerificationRequested_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  volunteer?: InputMaybe<Scalars['Bytes']['input']>;
  volunteer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  volunteer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  volunteer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  volunteer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  volunteer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  volunteer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  volunteer_not?: InputMaybe<Scalars['Bytes']['input']>;
  volunteer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  volunteer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum VerificationRequested_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Timestamp = 'timestamp',
  TransactionHash = 'transactionHash',
  Volunteer = 'volunteer'
}

export type VolunteerRegistered_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VolunteerRegistered_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  email_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  email_gt?: InputMaybe<Scalars['String']['input']>;
  email_gte?: InputMaybe<Scalars['String']['input']>;
  email_in?: InputMaybe<Array<Scalars['String']['input']>>;
  email_lt?: InputMaybe<Scalars['String']['input']>;
  email_lte?: InputMaybe<Scalars['String']['input']>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  email_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  email_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  email_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  fullName_contains?: InputMaybe<Scalars['String']['input']>;
  fullName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_ends_with?: InputMaybe<Scalars['String']['input']>;
  fullName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_gt?: InputMaybe<Scalars['String']['input']>;
  fullName_gte?: InputMaybe<Scalars['String']['input']>;
  fullName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fullName_lt?: InputMaybe<Scalars['String']['input']>;
  fullName_lte?: InputMaybe<Scalars['String']['input']>;
  fullName_not?: InputMaybe<Scalars['String']['input']>;
  fullName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fullName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fullName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fullName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fullName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fullName_starts_with?: InputMaybe<Scalars['String']['input']>;
  fullName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  gender_contains?: InputMaybe<Scalars['String']['input']>;
  gender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  gender_ends_with?: InputMaybe<Scalars['String']['input']>;
  gender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gender_gt?: InputMaybe<Scalars['String']['input']>;
  gender_gte?: InputMaybe<Scalars['String']['input']>;
  gender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  gender_lt?: InputMaybe<Scalars['String']['input']>;
  gender_lte?: InputMaybe<Scalars['String']['input']>;
  gender_not?: InputMaybe<Scalars['String']['input']>;
  gender_not_contains?: InputMaybe<Scalars['String']['input']>;
  gender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  gender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  gender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  gender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  gender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gender_starts_with?: InputMaybe<Scalars['String']['input']>;
  gender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  ipfsHash?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_gt?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_gte?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsHash_lt?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_lte?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  nationality_contains?: InputMaybe<Scalars['String']['input']>;
  nationality_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nationality_ends_with?: InputMaybe<Scalars['String']['input']>;
  nationality_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nationality_gt?: InputMaybe<Scalars['String']['input']>;
  nationality_gte?: InputMaybe<Scalars['String']['input']>;
  nationality_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nationality_lt?: InputMaybe<Scalars['String']['input']>;
  nationality_lte?: InputMaybe<Scalars['String']['input']>;
  nationality_not?: InputMaybe<Scalars['String']['input']>;
  nationality_not_contains?: InputMaybe<Scalars['String']['input']>;
  nationality_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nationality_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nationality_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nationality_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nationality_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nationality_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nationality_starts_with?: InputMaybe<Scalars['String']['input']>;
  nationality_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<VolunteerRegistered_Filter>>>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  profilePicture_contains?: InputMaybe<Scalars['String']['input']>;
  profilePicture_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  profilePicture_ends_with?: InputMaybe<Scalars['String']['input']>;
  profilePicture_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profilePicture_gt?: InputMaybe<Scalars['String']['input']>;
  profilePicture_gte?: InputMaybe<Scalars['String']['input']>;
  profilePicture_in?: InputMaybe<Array<Scalars['String']['input']>>;
  profilePicture_lt?: InputMaybe<Scalars['String']['input']>;
  profilePicture_lte?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not_contains?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  profilePicture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  profilePicture_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  profilePicture_starts_with?: InputMaybe<Scalars['String']['input']>;
  profilePicture_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  registeredAt?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  registeredAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  registeredAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user?: InputMaybe<Scalars['Bytes']['input']>;
  user_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_gt?: InputMaybe<Scalars['Bytes']['input']>;
  user_gte?: InputMaybe<Scalars['Bytes']['input']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user_lt?: InputMaybe<Scalars['Bytes']['input']>;
  user_lte?: InputMaybe<Scalars['Bytes']['input']>;
  user_not?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum VolunteerRegistered_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Email = 'email',
  FullName = 'fullName',
  Gender = 'gender',
  Id = 'id',
  IpfsHash = 'ipfsHash',
  Nationality = 'nationality',
  ProfilePicture = 'profilePicture',
  RegisteredAt = 'registeredAt',
  TransactionHash = 'transactionHash',
  User = 'user'
}

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type DoctorQueryVariables = Exact<{
  specialty: Scalars['String']['input'];
}>;


export type DoctorQuery = { __typename?: 'Query', doctorRegistereds: Array<{ __typename?: 'DoctorRegistered', ipfsHash: string }> };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const DoctorDocument = new TypedDocumentString(`
    query Doctor($specialty: String!) {
  doctorRegistereds(where: {specialty: $specialty}) {
    ipfsHash
  }
}
    `) as unknown as TypedDocumentString<DoctorQuery, DoctorQueryVariables>;