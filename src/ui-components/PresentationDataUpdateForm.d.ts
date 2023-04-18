/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PresentationData } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PresentationDataUpdateFormInputValues = {
    Title?: string;
    S3_Path?: string;
};
export declare type PresentationDataUpdateFormValidationValues = {
    Title?: ValidationFunction<string>;
    S3_Path?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PresentationDataUpdateFormOverridesProps = {
    PresentationDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
    S3_Path?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PresentationDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: PresentationDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    presentationData?: PresentationData;
    onSubmit?: (fields: PresentationDataUpdateFormInputValues) => PresentationDataUpdateFormInputValues;
    onSuccess?: (fields: PresentationDataUpdateFormInputValues) => void;
    onError?: (fields: PresentationDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PresentationDataUpdateFormInputValues) => PresentationDataUpdateFormInputValues;
    onValidate?: PresentationDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PresentationDataUpdateForm(props: PresentationDataUpdateFormProps): React.ReactElement;
