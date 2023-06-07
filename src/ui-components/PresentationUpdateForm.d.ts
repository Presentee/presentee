/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Presentation } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PresentationUpdateFormInputValues = {
    PresentationKey?: string;
    Name?: string;
    PageNum?: number;
};
export declare type PresentationUpdateFormValidationValues = {
    PresentationKey?: ValidationFunction<string>;
    Name?: ValidationFunction<string>;
    PageNum?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PresentationUpdateFormOverridesProps = {
    PresentationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    PresentationKey?: PrimitiveOverrideProps<TextFieldProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    PageNum?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PresentationUpdateFormProps = React.PropsWithChildren<{
    overrides?: PresentationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    presentation?: Presentation;
    onSubmit?: (fields: PresentationUpdateFormInputValues) => PresentationUpdateFormInputValues;
    onSuccess?: (fields: PresentationUpdateFormInputValues) => void;
    onError?: (fields: PresentationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PresentationUpdateFormInputValues) => PresentationUpdateFormInputValues;
    onValidate?: PresentationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PresentationUpdateForm(props: PresentationUpdateFormProps): React.ReactElement;
