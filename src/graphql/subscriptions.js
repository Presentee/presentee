/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePresentation = /* GraphQL */ `
  subscription OnCreatePresentation(
    $filter: ModelSubscriptionPresentationFilterInput
  ) {
    onCreatePresentation(filter: $filter) {
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
export const onUpdatePresentation = /* GraphQL */ `
  subscription OnUpdatePresentation(
    $filter: ModelSubscriptionPresentationFilterInput
  ) {
    onUpdatePresentation(filter: $filter) {
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
export const onDeletePresentation = /* GraphQL */ `
  subscription OnDeletePresentation(
    $filter: ModelSubscriptionPresentationFilterInput
  ) {
    onDeletePresentation(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreatePresentationData = /* GraphQL */ `
  subscription OnCreatePresentationData(
    $filter: ModelSubscriptionPresentationDataFilterInput
  ) {
    onCreatePresentationData(filter: $filter) {
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
export const onUpdatePresentationData = /* GraphQL */ `
  subscription OnUpdatePresentationData(
    $filter: ModelSubscriptionPresentationDataFilterInput
  ) {
    onUpdatePresentationData(filter: $filter) {
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
export const onDeletePresentationData = /* GraphQL */ `
  subscription OnDeletePresentationData(
    $filter: ModelSubscriptionPresentationDataFilterInput
  ) {
    onDeletePresentationData(filter: $filter) {
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
export const onCreateSurvey = /* GraphQL */ `
  subscription OnCreateSurvey($filter: ModelSubscriptionSurveyFilterInput) {
    onCreateSurvey(filter: $filter) {
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
export const onUpdateSurvey = /* GraphQL */ `
  subscription OnUpdateSurvey($filter: ModelSubscriptionSurveyFilterInput) {
    onUpdateSurvey(filter: $filter) {
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
export const onDeleteSurvey = /* GraphQL */ `
  subscription OnDeleteSurvey($filter: ModelSubscriptionSurveyFilterInput) {
    onDeleteSurvey(filter: $filter) {
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
export const onCreateVote = /* GraphQL */ `
  subscription OnCreateVote($filter: ModelSubscriptionVoteFilterInput) {
    onCreateVote(filter: $filter) {
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
export const onUpdateVote = /* GraphQL */ `
  subscription OnUpdateVote($filter: ModelSubscriptionVoteFilterInput) {
    onUpdateVote(filter: $filter) {
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
export const onDeleteVote = /* GraphQL */ `
  subscription OnDeleteVote($filter: ModelSubscriptionVoteFilterInput) {
    onDeleteVote(filter: $filter) {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onCreateQuestion(filter: $filter) {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onUpdateQuestion(filter: $filter) {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onDeleteQuestion(filter: $filter) {
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
export const onCreateResponse = /* GraphQL */ `
  subscription OnCreateResponse($filter: ModelSubscriptionResponseFilterInput) {
    onCreateResponse(filter: $filter) {
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
export const onUpdateResponse = /* GraphQL */ `
  subscription OnUpdateResponse($filter: ModelSubscriptionResponseFilterInput) {
    onUpdateResponse(filter: $filter) {
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
export const onDeleteResponse = /* GraphQL */ `
  subscription OnDeleteResponse($filter: ModelSubscriptionResponseFilterInput) {
    onDeleteResponse(filter: $filter) {
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
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession($filter: ModelSubscriptionSessionFilterInput) {
    onCreateSession(filter: $filter) {
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
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession($filter: ModelSubscriptionSessionFilterInput) {
    onUpdateSession(filter: $filter) {
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
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession($filter: ModelSubscriptionSessionFilterInput) {
    onDeleteSession(filter: $filter) {
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
