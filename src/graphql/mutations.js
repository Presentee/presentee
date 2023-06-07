/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuestionsAnswer = /* GraphQL */ `
  mutation CreateQuestionsAnswer(
    $input: CreateQuestionsAnswerInput!
    $condition: ModelQuestionsAnswerConditionInput
  ) {
    createQuestionsAnswer(input: $input, condition: $condition) {
      id
      Answer
      newquestionsID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateQuestionsAnswer = /* GraphQL */ `
  mutation UpdateQuestionsAnswer(
    $input: UpdateQuestionsAnswerInput!
    $condition: ModelQuestionsAnswerConditionInput
  ) {
    updateQuestionsAnswer(input: $input, condition: $condition) {
      id
      Answer
      newquestionsID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteQuestionsAnswer = /* GraphQL */ `
  mutation DeleteQuestionsAnswer(
    $input: DeleteQuestionsAnswerInput!
    $condition: ModelQuestionsAnswerConditionInput
  ) {
    deleteQuestionsAnswer(input: $input, condition: $condition) {
      id
      Answer
      newquestionsID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createQuestions = /* GraphQL */ `
  mutation CreateQuestions(
    $input: CreateQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    createQuestions(input: $input, condition: $condition) {
      id
      Question
      QuestionsAnswers {
        items {
          id
          Answer
          newquestionsID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateQuestions = /* GraphQL */ `
  mutation UpdateQuestions(
    $input: UpdateQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    updateQuestions(input: $input, condition: $condition) {
      id
      Question
      QuestionsAnswers {
        items {
          id
          Answer
          newquestionsID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteQuestions = /* GraphQL */ `
  mutation DeleteQuestions(
    $input: DeleteQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    deleteQuestions(input: $input, condition: $condition) {
      id
      Question
      QuestionsAnswers {
        items {
          id
          Answer
          newquestionsID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPollAnswers = /* GraphQL */ `
  mutation CreatePollAnswers(
    $input: CreatePollAnswersInput!
    $condition: ModelPollAnswersConditionInput
  ) {
    createPollAnswers(input: $input, condition: $condition) {
      id
      Answer
      pollID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePollAnswers = /* GraphQL */ `
  mutation UpdatePollAnswers(
    $input: UpdatePollAnswersInput!
    $condition: ModelPollAnswersConditionInput
  ) {
    updatePollAnswers(input: $input, condition: $condition) {
      id
      Answer
      pollID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePollAnswers = /* GraphQL */ `
  mutation DeletePollAnswers(
    $input: DeletePollAnswersInput!
    $condition: ModelPollAnswersConditionInput
  ) {
    deletePollAnswers(input: $input, condition: $condition) {
      id
      Answer
      pollID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPoll = /* GraphQL */ `
  mutation CreatePoll(
    $input: CreatePollInput!
    $condition: ModelPollConditionInput
  ) {
    createPoll(input: $input, condition: $condition) {
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePoll = /* GraphQL */ `
  mutation UpdatePoll(
    $input: UpdatePollInput!
    $condition: ModelPollConditionInput
  ) {
    updatePoll(input: $input, condition: $condition) {
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePoll = /* GraphQL */ `
  mutation DeletePoll(
    $input: DeletePollInput!
    $condition: ModelPollConditionInput
  ) {
    deletePoll(input: $input, condition: $condition) {
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPresentation = /* GraphQL */ `
  mutation CreatePresentation(
    $input: CreatePresentationInput!
    $condition: ModelPresentationConditionInput
  ) {
    createPresentation(input: $input, condition: $condition) {
      id
      PresentationKey
      Name
      PageNum
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      PresentationKey
      Name
      PageNum
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      PresentationKey
      Name
      PageNum
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
