/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Polltest } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PolltestUpdateFormInputValues = {
    PollJSON?: string;
};
export declare type PolltestUpdateFormValidationValues = {
    PollJSON?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PolltestUpdateFormOverridesProps = {
    PolltestUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    PollJSON?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type PolltestUpdateFormProps = React.PropsWithChildren<{
    overrides?: PolltestUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    polltest?: Polltest;
    onSubmit?: (fields: PolltestUpdateFormInputValues) => PolltestUpdateFormInputValues;
    onSuccess?: (fields: PolltestUpdateFormInputValues) => void;
    onError?: (fields: PolltestUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PolltestUpdateFormInputValues) => PolltestUpdateFormInputValues;
    onValidate?: PolltestUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PolltestUpdateForm(props: PolltestUpdateFormProps): React.ReactElement;
