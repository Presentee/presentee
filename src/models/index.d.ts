import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPresentation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Presentation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly PresentationKey?: string | null;
  readonly Name?: string | null;
  readonly PageNum?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPresentation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Presentation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly PresentationKey?: string | null;
  readonly Name?: string | null;
  readonly PageNum?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Presentation = LazyLoading extends LazyLoadingDisabled ? EagerPresentation : LazyPresentation

export declare const Presentation: (new (init: ModelInit<Presentation>) => Presentation) & {
  copyOf(source: Presentation, mutator: (draft: MutableModel<Presentation>) => MutableModel<Presentation> | void): Presentation;
}

type EagerPoll = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Poll, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly PollJSON?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPoll = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Poll, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly PollJSON?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Poll = LazyLoading extends LazyLoadingDisabled ? EagerPoll : LazyPoll

export declare const Poll: (new (init: ModelInit<Poll>) => Poll) & {
  copyOf(source: Poll, mutator: (draft: MutableModel<Poll>) => MutableModel<Poll> | void): Poll;
}

type EagerQuestions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Questions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Question?: string | null;
  readonly PageNum?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuestions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Questions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Question?: string | null;
  readonly PageNum?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Questions = LazyLoading extends LazyLoadingDisabled ? EagerQuestions : LazyQuestions

export declare const Questions: (new (init: ModelInit<Questions>) => Questions) & {
  copyOf(source: Questions, mutator: (draft: MutableModel<Questions>) => MutableModel<Questions> | void): Questions;
}