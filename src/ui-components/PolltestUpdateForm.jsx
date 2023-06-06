/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextAreaField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Polltest } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PolltestUpdateForm(props) {
  const {
    id: idProp,
    polltest: polltestModelProp,
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
  };
  const [PollJSON, setPollJSON] = React.useState(initialValues.PollJSON);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = polltestRecord
      ? { ...initialValues, ...polltestRecord }
      : initialValues;
    setPollJSON(
      typeof cleanValues.PollJSON === "string"
        ? cleanValues.PollJSON
        : JSON.stringify(cleanValues.PollJSON)
    );
    setErrors({});
  };
  const [polltestRecord, setPolltestRecord] = React.useState(polltestModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Polltest, idProp)
        : polltestModelProp;
      setPolltestRecord(record);
    };
    queryData();
  }, [idProp, polltestModelProp]);
  React.useEffect(resetStateValues, [polltestRecord]);
  const validations = {
    PollJSON: [{ type: "JSON" }],
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
          await DataStore.save(
            Polltest.copyOf(polltestRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PolltestUpdateForm")}
      {...rest}
    >
      <TextAreaField
        label="Poll json"
        isRequired={false}
        isReadOnly={false}
        value={PollJSON}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PollJSON: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || polltestModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || polltestModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
