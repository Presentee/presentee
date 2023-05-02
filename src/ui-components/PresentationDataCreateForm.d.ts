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
export declare type PresentationDataCreateFormInputValues = {
    Title?: string;
    S3_Path?: string;
};
export declare type PresentationDataCreateFormValidationValues = {
    Title?: ValidationFunction<string>;
    S3_Path?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PresentationDataCreateFormOverridesProps = {
    PresentationDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
    S3_Path?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PresentationDataCreateFormProps = React.PropsWithChildren<{
    overrides?: PresentationDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PresentationDataCreateFormInputValues) => PresentationDataCreateFormInputValues;
    onSuccess?: (fields: PresentationDataCreateFormInputValues) => void;
    onError?: (fields: PresentationDataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PresentationDataCreateFormInputValues) => PresentationDataCreateFormInputValues;
    onValidate?: PresentationDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function PresentationDataCreateForm(props: PresentationDataCreateFormProps): React.ReactElement;
