/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PolltestCreateFormInputValues = {
    PollJSON?: string;
};
export declare type PolltestCreateFormValidationValues = {
    PollJSON?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PolltestCreateFormOverridesProps = {
    PolltestCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    PollJSON?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type PolltestCreateFormProps = React.PropsWithChildren<{
    overrides?: PolltestCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PolltestCreateFormInputValues) => PolltestCreateFormInputValues;
    onSuccess?: (fields: PolltestCreateFormInputValues) => void;
    onError?: (fields: PolltestCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PolltestCreateFormInputValues) => PolltestCreateFormInputValues;
    onValidate?: PolltestCreateFormValidationValues;
} & React.CSSProperties>;
export default function PolltestCreateForm(props: PolltestCreateFormProps): React.ReactElement;
