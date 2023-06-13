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
  readonly ShortCode?: string | null;
  readonly Questions?: (Question | null)[] | null;
  readonly Polls?: (Poll | null)[] | null;
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
  readonly ShortCode?: string | null;
  readonly Questions: AsyncCollection<Question>;
  readonly Polls: AsyncCollection<Poll>;
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
  readonly presentationID: string;
  readonly PollQuestions?: (PollQuestion | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPoll = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Poll, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly presentationID: string;
  readonly PollQuestions: AsyncCollection<PollQuestion>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Poll = LazyLoading extends LazyLoadingDisabled ? EagerPoll : LazyPoll

export declare const Poll: (new (init: ModelInit<Poll>) => Poll) & {
  copyOf(source: Poll, mutator: (draft: MutableModel<Poll>) => MutableModel<Poll> | void): Poll;
}

type EagerPollAnswer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PollAnswer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Answer?: string | null;
  readonly pollquestionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPollAnswer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PollAnswer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Answer?: string | null;
  readonly pollquestionID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PollAnswer = LazyLoading extends LazyLoadingDisabled ? EagerPollAnswer : LazyPollAnswer

export declare const PollAnswer: (new (init: ModelInit<PollAnswer>) => PollAnswer) & {
  copyOf(source: PollAnswer, mutator: (draft: MutableModel<PollAnswer>) => MutableModel<PollAnswer> | void): PollAnswer;
}

type EagerQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Question?: string | null;
  readonly presentationID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Question?: string | null;
  readonly presentationID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Question = LazyLoading extends LazyLoadingDisabled ? EagerQuestion : LazyQuestion

export declare const Question: (new (init: ModelInit<Question>) => Question) & {
  copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}

type EagerPollQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PollQuestion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Question?: string | null;
  readonly pollID: string;
  readonly PollAnswers?: (PollAnswer | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPollQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PollQuestion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Question?: string | null;
  readonly pollID: string;
  readonly PollAnswers: AsyncCollection<PollAnswer>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PollQuestion = LazyLoading extends LazyLoadingDisabled ? EagerPollQuestion : LazyPollQuestion

export declare const PollQuestion: (new (init: ModelInit<PollQuestion>) => PollQuestion) & {
  copyOf(source: PollQuestion, mutator: (draft: MutableModel<PollQuestion>) => MutableModel<PollQuestion> | void): PollQuestion;
}