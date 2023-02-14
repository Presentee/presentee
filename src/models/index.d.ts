import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerRestaurant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Restaurant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly city?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRestaurant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Restaurant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly city?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Restaurant = LazyLoading extends LazyLoadingDisabled ? EagerRestaurant : LazyRestaurant

export declare const Restaurant: (new (init: ModelInit<Restaurant>) => Restaurant) & {
  copyOf(source: Restaurant, mutator: (draft: MutableModel<Restaurant>) => MutableModel<Restaurant> | void): Restaurant;
}

type EagerPresentation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Presentation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly presentationName: string;
  readonly presenter?: string | null;
  readonly eventKey?: string | null;
  readonly qrcode?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPresentation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Presentation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly presentationName: string;
  readonly presenter?: string | null;
  readonly eventKey?: string | null;
  readonly qrcode?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Presentation = LazyLoading extends LazyLoadingDisabled ? EagerPresentation : LazyPresentation

export declare const Presentation: (new (init: ModelInit<Presentation>) => Presentation) & {
  copyOf(source: Presentation, mutator: (draft: MutableModel<Presentation>) => MutableModel<Presentation> | void): Presentation;
}