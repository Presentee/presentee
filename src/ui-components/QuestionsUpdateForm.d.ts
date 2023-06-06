/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Questions } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type QuestionsUpdateFormInputValues = {
    Question?: string;
    PageNum?: number;
};
export declare type QuestionsUpdateFormValidationValues = {
    Question?: ValidationFunction<string>;
    PageNum?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuestionsUpdateFormOverridesProps = {
    QuestionsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Question?: PrimitiveOverrideProps<TextFieldProps>;
    PageNum?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QuestionsUpdateFormProps = React.PropsWithChildren<{
    overrides?: QuestionsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    questions?: Questions;
    onSubmit?: (fields: QuestionsUpdateFormInputValues) => QuestionsUpdateFormInputValues;
    onSuccess?: (fields: QuestionsUpdateFormInputValues) => void;
    onError?: (fields: QuestionsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuestionsUpdateFormInputValues) => QuestionsUpdateFormInputValues;
    onValidate?: QuestionsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function QuestionsUpdateForm(props: QuestionsUpdateFormProps): React.ReactElement;
