import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier, CustomIdentifier, OptionallyManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerPresentation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Presentation, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly Access: string[];
  readonly dtype: string;
  readonly createdAt: string;
  readonly numViews: number;
  readonly byUser?: User | null;
  readonly Userid: string;
  readonly Data: PresentationData;
  readonly updatedAt?: string | null;
}

type LazyPresentation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Presentation, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly Access: string[];
  readonly dtype: string;
  readonly createdAt: string;
  readonly numViews: number;
  readonly byUser: AsyncItem<User | undefined>;
  readonly Userid: string;
  readonly Data: AsyncItem<PresentationData>;
  readonly updatedAt?: string | null;
}

export declare type Presentation = LazyLoading extends LazyLoadingDisabled ? EagerPresentation : LazyPresentation

export declare const Presentation: (new (init: ModelInit<Presentation>) => Presentation) & {
  copyOf(source: Presentation, mutator: (draft: MutableModel<Presentation>) => MutableModel<Presentation> | void): Presentation;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<User, 'Userid'>;
    readOnlyFields: 'updatedAt';
  };
  readonly Userid: string;
  readonly Ownership: Presentation[];
  readonly createdAt: string;
  readonly is_premium: boolean;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<User, 'Userid'>;
    readOnlyFields: 'updatedAt';
  };
  readonly Userid: string;
  readonly Ownership: AsyncCollection<Presentation>;
  readonly createdAt: string;
  readonly is_premium: boolean;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerPresentationData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PresentationData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Title: string;
  readonly S3_Path: string;
  readonly owner?: Presentation | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly presentationDataOwnerId?: string | null;
}

type LazyPresentationData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PresentationData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Title: string;
  readonly S3_Path: string;
  readonly owner: AsyncItem<Presentation | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly presentationDataOwnerId?: string | null;
}

export declare type PresentationData = LazyLoading extends LazyLoadingDisabled ? EagerPresentationData : LazyPresentationData

export declare const PresentationData: (new (init: ModelInit<PresentationData>) => PresentationData) & {
  copyOf(source: PresentationData, mutator: (draft: MutableModel<PresentationData>) => MutableModel<PresentationData> | void): PresentationData;
}

type EagerSurvey = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Survey, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly SurveyID: string;
  readonly Multi: boolean;
  readonly text: string;
  readonly Possible_answer: string[];
  readonly votes?: (Vote | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySurvey = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Survey, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly SurveyID: string;
  readonly Multi: boolean;
  readonly text: string;
  readonly Possible_answer: string[];
  readonly votes: AsyncCollection<Vote>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Survey = LazyLoading extends LazyLoadingDisabled ? EagerSurvey : LazySurvey

export declare const Survey: (new (init: ModelInit<Survey>) => Survey) & {
  copyOf(source: Survey, mutator: (draft: MutableModel<Survey>) => MutableModel<Survey> | void): Survey;
}

type EagerVote = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Vote, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly SurveyID: string;
  readonly survey?: Survey | null;
  readonly _vote: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVote = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Vote, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly SurveyID: string;
  readonly survey: AsyncItem<Survey | undefined>;
  readonly _vote: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Vote = LazyLoading extends LazyLoadingDisabled ? EagerVote : LazyVote

export declare const Vote: (new (init: ModelInit<Vote>) => Vote) & {
  copyOf(source: Vote, mutator: (draft: MutableModel<Vote>) => MutableModel<Vote> | void): Vote;
}

type EagerQuestion = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly questionID: string;
  readonly text: string;
  readonly answer?: (Response | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuestion = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly questionID: string;
  readonly text: string;
  readonly answer: AsyncCollection<Response>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Question = LazyLoading extends LazyLoadingDisabled ? EagerQuestion : LazyQuestion

export declare const Question: (new (init: ModelInit<Question>) => Question) & {
  copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}

type EagerResponse = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Response, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly questionID: string;
  readonly question?: Question | null;
  readonly Responseid: string;
  readonly text: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyResponse = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Response, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly questionID: string;
  readonly question: AsyncItem<Question | undefined>;
  readonly Responseid: string;
  readonly text: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Response = LazyLoading extends LazyLoadingDisabled ? EagerResponse : LazyResponse

export declare const Response: (new (init: ModelInit<Response>) => Response) & {
  copyOf(source: Response, mutator: (draft: MutableModel<Response>) => MutableModel<Response> | void): Response;
}

type EagerSession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Session, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly control: User;
  readonly participants: User[];
  readonly presentation_data: PresentationData;
  readonly Page_number: string;
  readonly Active_surveys: Survey[];
  readonly Active_questions: Question[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Session, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly control: AsyncItem<User>;
  readonly participants: AsyncCollection<User>;
  readonly presentation_data: AsyncItem<PresentationData>;
  readonly Page_number: string;
  readonly Active_surveys: AsyncCollection<Survey>;
  readonly Active_questions: AsyncCollection<Question>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Session = LazyLoading extends LazyLoadingDisabled ? EagerSession : LazySession

export declare const Session: (new (init: ModelInit<Session>) => Session) & {
  copyOf(source: Session, mutator: (draft: MutableModel<Session>) => MutableModel<Session> | void): Session;
}