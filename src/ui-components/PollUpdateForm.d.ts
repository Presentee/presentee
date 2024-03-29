/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Poll } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PollUpdateFormInputValues = {
    PollJSON?: string;
    Question?: string;
};
export declare type PollUpdateFormValidationValues = {
    PollJSON?: ValidationFunction<string>;
    Question?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PollUpdateFormOverridesProps = {
    PollUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    PollJSON?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Question?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PollUpdateFormProps = React.PropsWithChildren<{
    overrides?: PollUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    poll?: Poll;
    onSubmit?: (fields: PollUpdateFormInputValues) => PollUpdateFormInputValues;
    onSuccess?: (fields: PollUpdateFormInputValues) => void;
    onError?: (fields: PollUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PollUpdateFormInputValues) => PollUpdateFormInputValues;
    onValidate?: PollUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PollUpdateForm(props: PollUpdateFormProps): React.ReactElement;
