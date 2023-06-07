/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Poll } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PollCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    PollJSON: "",
    Question: "",
  };
  const [PollJSON, setPollJSON] = React.useState(initialValues.PollJSON);
  const [Question, setQuestion] = React.useState(initialValues.Question);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPollJSON(initialValues.PollJSON);
    setQuestion(initialValues.Question);
    setErrors({});
  };
  const validations = {
    PollJSON: [{ type: "JSON" }],
    Question: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          PollJSON,
          Question,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Poll(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PollCreateForm")}
      {...rest}
    >
      <TextAreaField
        label="Poll json"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PollJSON: value,
              Question,
            };
            const result = onChange(modelFields);
            value = result?.PollJSON ?? value;
          }
          if (errors.PollJSON?.hasError) {
            runValidationTasks("PollJSON", value);
          }
          setPollJSON(value);
        }}
        onBlur={() => runValidationTasks("PollJSON", PollJSON)}
        errorMessage={errors.PollJSON?.errorMessage}
        hasError={errors.PollJSON?.hasError}
        {...getOverrideProps(overrides, "PollJSON")}
      ></TextAreaField>
      <TextField
        label="Question"
        isRequired={false}
        isReadOnly={false}
        value={Question}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PollJSON,
              Question: value,
            };
            const result = onChange(modelFields);
            value = result?.Question ?? value;
          }
          if (errors.Question?.hasError) {
            runValidationTasks("Question", value);
          }
          setQuestion(value);
        }}
        onBlur={() => runValidationTasks("Question", Question)}
        errorMessage={errors.Question?.errorMessage}
        hasError={errors.Question?.hasError}
        {...getOverrideProps(overrides, "Question")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
