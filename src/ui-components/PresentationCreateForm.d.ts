/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PresentationCreateFormInputValues = {
    PresentationKey?: string;
    Name?: string;
    PageNum?: number;
};
export declare type PresentationCreateFormValidationValues = {
    PresentationKey?: ValidationFunction<string>;
    Name?: ValidationFunction<string>;
    PageNum?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PresentationCreateFormOverridesProps = {
    PresentationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    PresentationKey?: PrimitiveOverrideProps<TextFieldProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    PageNum?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PresentationCreateFormProps = React.PropsWithChildren<{
    overrides?: PresentationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PresentationCreateFormInputValues) => PresentationCreateFormInputValues;
    onSuccess?: (fields: PresentationCreateFormInputValues) => void;
    onError?: (fields: PresentationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PresentationCreateFormInputValues) => PresentationCreateFormInputValues;
    onValidate?: PresentationCreateFormValidationValues;
} & React.CSSProperties>;
export default function PresentationCreateForm(props: PresentationCreateFormProps): React.ReactElement;
