/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Presentation } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PresentationCreateForm(props) {
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
    PresentationKey: "",
    Name: "",
    PageNum: "",
  };
  const [PresentationKey, setPresentationKey] = React.useState(
    initialValues.PresentationKey
  );
  const [Name, setName] = React.useState(initialValues.Name);
  const [PageNum, setPageNum] = React.useState(initialValues.PageNum);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPresentationKey(initialValues.PresentationKey);
    setName(initialValues.Name);
    setPageNum(initialValues.PageNum);
    setErrors({});
  };
  const validations = {
    PresentationKey: [],
    Name: [],
    PageNum: [],
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
          PresentationKey,
          Name,
          PageNum,
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
          await DataStore.save(new Presentation(modelFields));
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
      {...getOverrideProps(overrides, "PresentationCreateForm")}
      {...rest}
    >
      <TextField
        label="Presentation key"
        isRequired={false}
        isReadOnly={false}
        value={PresentationKey}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PresentationKey: value,
              Name,
              PageNum,
            };
            const result = onChange(modelFields);
            value = result?.PresentationKey ?? value;
          }
          if (errors.PresentationKey?.hasError) {
            runValidationTasks("PresentationKey", value);
          }
          setPresentationKey(value);
        }}
        onBlur={() => runValidationTasks("PresentationKey", PresentationKey)}
        errorMessage={errors.PresentationKey?.errorMessage}
        hasError={errors.PresentationKey?.hasError}
        {...getOverrideProps(overrides, "PresentationKey")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PresentationKey,
              Name: value,
              PageNum,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <TextField
        label="Page num"
        isRequired={false}
        isReadOnly={false}
        value={PageNum}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PresentationKey,
              Name,
              PageNum: value,
            };
            const result = onChange(modelFields);
            value = result?.PageNum ?? value;
          }
          if (errors.PageNum?.hasError) {
            runValidationTasks("PageNum", value);
          }
          setPageNum(value);
        }}
        onBlur={() => runValidationTasks("PageNum", PageNum)}
        errorMessage={errors.PageNum?.errorMessage}
        hasError={errors.PageNum?.hasError}
        {...getOverrideProps(overrides, "PageNum")}
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
