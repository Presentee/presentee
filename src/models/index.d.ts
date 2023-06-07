import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerPresentation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Presentation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly PresentationKey: string;
  readonly Name?: string | null;
  readonly PageNum?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPresentation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Presentation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly PresentationKey: string;
  readonly Name?: string | null;
  readonly PageNum?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Presentation = LazyLoading extends LazyLoadingDisabled ? EagerPresentation : LazyPresentation

export declare const Presentation: (new (init: ModelInit<Presentation>) => Presentation) & {
  copyOf(source: Presentation, mutator: (draft: MutableModel<Presentation>) => MutableModel<Presentation> | void): Presentation;
}

type EagerPollAnswers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PollAnswers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Answer?: string | null;
  readonly pollID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPollAnswers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PollAnswers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Answer?: string | null;
  readonly pollID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PollAnswers = LazyLoading extends LazyLoadingDisabled ? EagerPollAnswers : LazyPollAnswers

export declare const PollAnswers: (new (init: ModelInit<PollAnswers>) => PollAnswers) & {
  copyOf(source: PollAnswers, mutator: (draft: MutableModel<PollAnswers>) => MutableModel<PollAnswers> | void): PollAnswers;
}

type EagerPoll = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Poll, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly PollJSON?: string | null;
  readonly Question?: string | null;
  readonly PollAnswers?: (PollAnswers | null)[] | null;
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
  readonly Question?: string | null;
  readonly PollAnswers: AsyncCollection<PollAnswers>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Poll = LazyLoading extends LazyLoadingDisabled ? EagerPoll : LazyPoll

export declare const Poll: (new (init: ModelInit<Poll>) => Poll) & {
  copyOf(source: Poll, mutator: (draft: MutableModel<Poll>) => MutableModel<Poll> | void): Poll;
}

type EagerQuestionsAnswer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<QuestionsAnswer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Answer?: string | null;
  readonly newquestionsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuestionsAnswer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<QuestionsAnswer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Answer?: string | null;
  readonly newquestionsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type QuestionsAnswer = LazyLoading extends LazyLoadingDisabled ? EagerQuestionsAnswer : LazyQuestionsAnswer

export declare const QuestionsAnswer: (new (init: ModelInit<QuestionsAnswer>) => QuestionsAnswer) & {
  copyOf(source: QuestionsAnswer, mutator: (draft: MutableModel<QuestionsAnswer>) => MutableModel<QuestionsAnswer> | void): QuestionsAnswer;
}

type EagerQuestions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Questions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Question?: string | null;
  readonly QuestionsAnswers?: (QuestionsAnswer | null)[] | null;
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
  readonly QuestionsAnswers: AsyncCollection<QuestionsAnswer>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Questions = LazyLoading extends LazyLoadingDisabled ? EagerQuestions : LazyQuestions

export declare const Questions: (new (init: ModelInit<Questions>) => Questions) & {
  copyOf(source: Questions, mutator: (draft: MutableModel<Questions>) => MutableModel<Questions> | void): Questions;
}