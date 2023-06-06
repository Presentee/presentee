/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePollAnswers = /* GraphQL */ `
  subscription OnCreatePollAnswers(
    $filter: ModelSubscriptionPollAnswersFilterInput
  ) {
    onCreatePollAnswers(filter: $filter) {
      id
      Answer
      pollID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePollAnswers = /* GraphQL */ `
  subscription OnUpdatePollAnswers(
    $filter: ModelSubscriptionPollAnswersFilterInput
  ) {
    onUpdatePollAnswers(filter: $filter) {
      id
      Answer
      pollID
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePollAnswers = /* GraphQL */ `
  subscription OnDeletePollAnswers(
    $filter: ModelSubscriptionPollAnswersFilterInput
  ) {
    onDeletePollAnswers(filter: $filter) {
      id
      Answer
      pollID
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePoll = /* GraphQL */ `
  subscription OnCreatePoll($filter: ModelSubscriptionPollFilterInput) {
    onCreatePoll(filter: $filter) {
      id
      PollJSON
      Question
      PollAnswers {
        items {
          id
          Answer
          pollID
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
export const onUpdatePoll = /* GraphQL */ `
  subscription OnUpdatePoll($filter: ModelSubscriptionPollFilterInput) {
    onUpdatePoll(filter: $filter) {
      id
      PollJSON
      Question
      PollAnswers {
        items {
          id
          Answer
          pollID
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
export const onDeletePoll = /* GraphQL */ `
  subscription OnDeletePoll($filter: ModelSubscriptionPollFilterInput) {
    onDeletePoll(filter: $filter) {
      id
      PollJSON
      Question
      PollAnswers {
        items {
          id
          Answer
          pollID
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
export const onCreateQuestionsAnswer = /* GraphQL */ `
  subscription OnCreateQuestionsAnswer(
    $filter: ModelSubscriptionQuestionsAnswerFilterInput
  ) {
    onCreateQuestionsAnswer(filter: $filter) {
      id
      Answer
      questionsID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuestionsAnswer = /* GraphQL */ `
  subscription OnUpdateQuestionsAnswer(
    $filter: ModelSubscriptionQuestionsAnswerFilterInput
  ) {
    onUpdateQuestionsAnswer(filter: $filter) {
      id
      Answer
      questionsID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuestionsAnswer = /* GraphQL */ `
  subscription OnDeleteQuestionsAnswer(
    $filter: ModelSubscriptionQuestionsAnswerFilterInput
  ) {
    onDeleteQuestionsAnswer(filter: $filter) {
      id
      Answer
      questionsID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuestions = /* GraphQL */ `
  subscription OnCreateQuestions(
    $filter: ModelSubscriptionQuestionsFilterInput
  ) {
    onCreateQuestions(filter: $filter) {
      id
      Question
      PageNum
      presentationID
      Questions_Answers {
        items {
          id
          Answer
          questionsID
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
export const onUpdateQuestions = /* GraphQL */ `
  subscription OnUpdateQuestions(
    $filter: ModelSubscriptionQuestionsFilterInput
  ) {
    onUpdateQuestions(filter: $filter) {
      id
      Question
      PageNum
      presentationID
      Questions_Answers {
        items {
          id
          Answer
          questionsID
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
export const onDeleteQuestions = /* GraphQL */ `
  subscription OnDeleteQuestions(
    $filter: ModelSubscriptionQuestionsFilterInput
  ) {
    onDeleteQuestions(filter: $filter) {
      id
      Question
      PageNum
      presentationID
      Questions_Answers {
        items {
          id
          Answer
          questionsID
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
export const onCreatePresentation = /* GraphQL */ `
  subscription OnCreatePresentation(
    $filter: ModelSubscriptionPresentationFilterInput
  ) {
    onCreatePresentation(filter: $filter) {
      id
      PresentationKey
      Name
      PageNum
      Presentation_Question {
        items {
          id
          Question
          PageNum
          presentationID
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
export const onUpdatePresentation = /* GraphQL */ `
  subscription OnUpdatePresentation(
    $filter: ModelSubscriptionPresentationFilterInput
  ) {
    onUpdatePresentation(filter: $filter) {
      id
      PresentationKey
      Name
      PageNum
      Presentation_Question {
        items {
          id
          Question
          PageNum
          presentationID
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
export const onDeletePresentation = /* GraphQL */ `
  subscription OnDeletePresentation(
    $filter: ModelSubscriptionPresentationFilterInput
  ) {
    onDeletePresentation(filter: $filter) {
      id
      PresentationKey
      Name
      PageNum
      Presentation_Question {
        items {
          id
          Question
          PageNum
          presentationID
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
