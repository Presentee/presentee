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
export declare type QuestionsCreateFormInputValues = {
    Question?: string;
    PageNum?: number;
};
export declare type QuestionsCreateFormValidationValues = {
    Question?: ValidationFunction<string>;
    PageNum?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuestionsCreateFormOverridesProps = {
    QuestionsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Question?: PrimitiveOverrideProps<TextFieldProps>;
    PageNum?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QuestionsCreateFormProps = React.PropsWithChildren<{
    overrides?: QuestionsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: QuestionsCreateFormInputValues) => QuestionsCreateFormInputValues;
    onSuccess?: (fields: QuestionsCreateFormInputValues) => void;
    onError?: (fields: QuestionsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuestionsCreateFormInputValues) => QuestionsCreateFormInputValues;
    onValidate?: QuestionsCreateFormValidationValues;
} & React.CSSProperties>;
export default function QuestionsCreateForm(props: QuestionsCreateFormProps): React.ReactElement;
