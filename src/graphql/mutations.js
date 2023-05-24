/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPresentation = /* GraphQL */ `
  mutation CreatePresentation(
    $input: CreatePresentationInput!
    $condition: ModelPresentationConditionInput
  ) {
    createPresentation(input: $input, condition: $condition) {
      id
      Access
      dtype
      createdAt
      numViews
      byUser {
        Userid
        Ownership {
          nextToken
        }
        createdAt
        is_premium
        updatedAt
      }
      Userid
      Data {
        id
        Title
        S3_Path
        owner {
          id
          Access
          dtype
          createdAt
          numViews
          Userid
          updatedAt
        }
        createdAt
        updatedAt
        presentationDataOwnerId
      }
      updatedAt
    }
  }
`;
export const updatePresentation = /* GraphQL */ `
  mutation UpdatePresentation(
    $input: UpdatePresentationInput!
    $condition: ModelPresentationConditionInput
  ) {
    updatePresentation(input: $input, condition: $condition) {
      id
      Access
      dtype
      createdAt
      numViews
      byUser {
        Userid
        Ownership {
          nextToken
        }
        createdAt
        is_premium
        updatedAt
      }
      Userid
      Data {
        id
        Title
        S3_Path
        owner {
          id
          Access
          dtype
          createdAt
          numViews
          Userid
          updatedAt
        }
        createdAt
        updatedAt
        presentationDataOwnerId
      }
      updatedAt
    }
  }
`;
export const deletePresentation = /* GraphQL */ `
  mutation DeletePresentation(
    $input: DeletePresentationInput!
    $condition: ModelPresentationConditionInput
  ) {
    deletePresentation(input: $input, condition: $condition) {
      id
      Access
      dtype
      createdAt
      numViews
      byUser {
        Userid
        Ownership {
          nextToken
        }
        createdAt
        is_premium
        updatedAt
      }
      Userid
      Data {
        id
        Title
        S3_Path
        owner {
          id
          Access
          dtype
          createdAt
          numViews
          Userid
          updatedAt
        }
        createdAt
        updatedAt
        presentationDataOwnerId
      }
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      Userid
      Ownership {
        items {
          id
          Access
          dtype
          createdAt
          numViews
          Userid
          updatedAt
        }
        nextToken
      }
      createdAt
      is_premium
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      Userid
      Ownership {
        items {
          id
          Access
          dtype
          createdAt
          numViews
          Userid
          updatedAt
        }
        nextToken
      }
      createdAt
      is_premium
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      Userid
      Ownership {
        items {
          id
          Access
          dtype
          createdAt
          numViews
          Userid
          updatedAt
        }
        nextToken
      }
      createdAt
      is_premium
      updatedAt
    }
  }
`;
export const createPresentationData = /* GraphQL */ `
  mutation CreatePresentationData(
    $input: CreatePresentationDataInput!
    $condition: ModelPresentationDataConditionInput
  ) {
    createPresentationData(input: $input, condition: $condition) {
      id
      Title
      S3_Path
      owner {
        id
        Access
        dtype
        createdAt
        numViews
        byUser {
          Userid
          createdAt
          is_premium
          updatedAt
        }
        Userid
        Data {
          id
          Title
          S3_Path
          createdAt
          updatedAt
          presentationDataOwnerId
        }
        updatedAt
      }
      createdAt
      updatedAt
      presentationDataOwnerId
    }
  }
`;
export const updatePresentationData = /* GraphQL */ `
  mutation UpdatePresentationData(
    $input: UpdatePresentationDataInput!
    $condition: ModelPresentationDataConditionInput
  ) {
    updatePresentationData(input: $input, condition: $condition) {
      id
      Title
      S3_Path
      owner {
        id
        Access
        dtype
        createdAt
        numViews
        byUser {
          Userid
          createdAt
          is_premium
          updatedAt
        }
        Userid
        Data {
          id
          Title
          S3_Path
          createdAt
          updatedAt
          presentationDataOwnerId
        }
        updatedAt
      }
      createdAt
      updatedAt
      presentationDataOwnerId
    }
  }
`;
export const deletePresentationData = /* GraphQL */ `
  mutation DeletePresentationData(
    $input: DeletePresentationDataInput!
    $condition: ModelPresentationDataConditionInput
  ) {
    deletePresentationData(input: $input, condition: $condition) {
      id
      Title
      S3_Path
      owner {
        id
        Access
        dtype
        createdAt
        numViews
        byUser {
          Userid
          createdAt
          is_premium
          updatedAt
        }
        Userid
        Data {
          id
          Title
          S3_Path
          createdAt
          updatedAt
          presentationDataOwnerId
        }
        updatedAt
      }
      createdAt
      updatedAt
      presentationDataOwnerId
    }
  }
`;
export const createSurvey = /* GraphQL */ `
  mutation CreateSurvey(
    $input: CreateSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    createSurvey(input: $input, condition: $condition) {
      id
      SurveyID
      Multi
      text
      Possible_answer
      votes {
        items {
          id
          SurveyID
          _vote
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSurvey = /* GraphQL */ `
  mutation UpdateSurvey(
    $input: UpdateSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    updateSurvey(input: $input, condition: $condition) {
      id
      SurveyID
      Multi
      text
      Possible_answer
      votes {
        items {
          id
          SurveyID
          _vote
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSurvey = /* GraphQL */ `
  mutation DeleteSurvey(
    $input: DeleteSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    deleteSurvey(input: $input, condition: $condition) {
      id
      SurveyID
      Multi
      text
      Possible_answer
      votes {
        items {
          id
          SurveyID
          _vote
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createVote = /* GraphQL */ `
  mutation CreateVote(
    $input: CreateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    createVote(input: $input, condition: $condition) {
      id
      SurveyID
      survey {
        id
        SurveyID
        Multi
        text
        Possible_answer
        votes {
          nextToken
        }
        createdAt
        updatedAt
      }
      _vote
      createdAt
      updatedAt
    }
  }
`;
export const updateVote = /* GraphQL */ `
  mutation UpdateVote(
    $input: UpdateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    updateVote(input: $input, condition: $condition) {
      id
      SurveyID
      survey {
        id
        SurveyID
        Multi
        text
        Possible_answer
        votes {
          nextToken
        }
        createdAt
        updatedAt
      }
      _vote
      createdAt
      updatedAt
    }
  }
`;
export const deleteVote = /* GraphQL */ `
  mutation DeleteVote(
    $input: DeleteVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    deleteVote(input: $input, condition: $condition) {
      id
      SurveyID
      survey {
        id
        SurveyID
        Multi
        text
        Possible_answer
        votes {
          nextToken
        }
        createdAt
        updatedAt
      }
      _vote
      createdAt
      updatedAt
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      id
      questionID
      text
      answer {
        items {
          id
          questionID
          Responseid
          text
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      id
      questionID
      text
      answer {
        items {
          id
          questionID
          Responseid
          text
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      id
      questionID
      text
      answer {
        items {
          id
          questionID
          Responseid
          text
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createResponse = /* GraphQL */ `
  mutation CreateResponse(
    $input: CreateResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    createResponse(input: $input, condition: $condition) {
      id
      questionID
      question {
        id
        questionID
        text
        answer {
          nextToken
        }
        createdAt
        updatedAt
      }
      Responseid
      text
      createdAt
      updatedAt
    }
  }
`;
export const updateResponse = /* GraphQL */ `
  mutation UpdateResponse(
    $input: UpdateResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    updateResponse(input: $input, condition: $condition) {
      id
      questionID
      question {
        id
        questionID
        text
        answer {
          nextToken
        }
        createdAt
        updatedAt
      }
      Responseid
      text
      createdAt
      updatedAt
    }
  }
`;
export const deleteResponse = /* GraphQL */ `
  mutation DeleteResponse(
    $input: DeleteResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    deleteResponse(input: $input, condition: $condition) {
      id
      questionID
      question {
        id
        questionID
        text
        answer {
          nextToken
        }
        createdAt
        updatedAt
      }
      Responseid
      text
      createdAt
      updatedAt
    }
  }
`;
export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $input: CreateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    createSession(input: $input, condition: $condition) {
      id
      control {
        Userid
        Ownership {
          nextToken
        }
        createdAt
        is_premium
        updatedAt
      }
      participants {
        items {
          Userid
          createdAt
          is_premium
          updatedAt
        }
        nextToken
      }
      presentation_data {
        id
        Title
        S3_Path
        owner {
          id
          Access
          dtype
          createdAt
          numViews
          Userid
          updatedAt
        }
        createdAt
        updatedAt
        presentationDataOwnerId
      }
      Page_number
      Active_surveys {
        items {
          id
          SurveyID
          Multi
          text
          Possible_answer
          createdAt
          updatedAt
        }
        nextToken
      }
      Active_questions {
        items {
          id
          questionID
          text
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $input: UpdateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    updateSession(input: $input, condition: $condition) {
      id
      control {
        Userid
        Ownership {
          nextToken
        }
        createdAt
        is_premium
        updatedAt
      }
      participants {
        items {
          Userid
          createdAt
          is_premium
          updatedAt
        }
        nextToken
      }
      presentation_data {
        id
        Title
        S3_Path
        owner {
          id
          Access
          dtype
          createdAt
          numViews
          Userid
          updatedAt
        }
        createdAt
        updatedAt
        presentationDataOwnerId
      }
      Page_number
      Active_surveys {
        items {
          id
          SurveyID
          Multi
          text
          Possible_answer
          createdAt
          updatedAt
        }
        nextToken
      }
      Active_questions {
        items {
          id
          questionID
          text
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $input: DeleteSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    deleteSession(input: $input, condition: $condition) {
      id
      control {
        Userid
        Ownership {
          nextToken
        }
        createdAt
        is_premium
        updatedAt
      }
      participants {
        items {
          Userid
          createdAt
          is_premium
          updatedAt
        }
        nextToken
      }
      presentation_data {
        id
        Title
        S3_Path
        owner {
          id
          Access
          dtype
          createdAt
          numViews
          Userid
          updatedAt
        }
        createdAt
        updatedAt
        presentationDataOwnerId
      }
      Page_number
      Active_surveys {
        items {
          id
          SurveyID
          Multi
          text
          Possible_answer
          createdAt
          updatedAt
        }
        nextToken
      }
      Active_questions {
        items {
          id
          questionID
          text
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
