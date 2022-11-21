import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type PresentationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerPresentation = {
  readonly id: string;
  readonly presentationName: string;
  readonly presenter?: string | null;
  readonly eventKey?: string | null;
  readonly qrcode?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPresentation = {
  readonly id: string;
  readonly presentationName: string;
  readonly presenter?: string | null;
  readonly eventKey?: string | null;
  readonly qrcode?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Presentation = LazyLoading extends LazyLoadingDisabled ? EagerPresentation : LazyPresentation

export declare const Presentation: (new (init: ModelInit<Presentation, PresentationMetaData>) => Presentation) & {
  copyOf(source: Presentation, mutator: (draft: MutableModel<Presentation, PresentationMetaData>) => MutableModel<Presentation, PresentationMetaData> | void): Presentation;
}