/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      ShortCode
      Questions {
        items {
          id
          Question
          presentationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Polls {
        items {
          id
          presentationID
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
      ShortCode
      Questions {
        items {
          id
          Question
          presentationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Polls {
        items {
          id
          presentationID
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
      ShortCode
      Questions {
        items {
          id
          Question
          presentationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Polls {
        items {
          id
          presentationID
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
export const createPoll = /* GraphQL */ `
  mutation CreatePoll(
    $input: CreatePollInput!
    $condition: ModelPollConditionInput
  ) {
    createPoll(input: $input, condition: $condition) {
      id
      presentationID
      PollQuestions {
        items {
          id
          Question
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
      presentationID
      PollQuestions {
        items {
          id
          Question
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
      presentationID
      PollQuestions {
        items {
          id
          Question
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
export const createPollAnswer = /* GraphQL */ `
  mutation CreatePollAnswer(
    $input: CreatePollAnswerInput!
    $condition: ModelPollAnswerConditionInput
  ) {
    createPollAnswer(input: $input, condition: $condition) {
      id
      Answer
      pollquestionID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePollAnswer = /* GraphQL */ `
  mutation UpdatePollAnswer(
    $input: UpdatePollAnswerInput!
    $condition: ModelPollAnswerConditionInput
  ) {
    updatePollAnswer(input: $input, condition: $condition) {
      id
      Answer
      pollquestionID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePollAnswer = /* GraphQL */ `
  mutation DeletePollAnswer(
    $input: DeletePollAnswerInput!
    $condition: ModelPollAnswerConditionInput
  ) {
    deletePollAnswer(input: $input, condition: $condition) {
      id
      Answer
      pollquestionID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      Question
      presentationID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      Question
      presentationID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      Question
      presentationID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPollQuestion = /* GraphQL */ `
  mutation CreatePollQuestion(
    $input: CreatePollQuestionInput!
    $condition: ModelPollQuestionConditionInput
  ) {
    createPollQuestion(input: $input, condition: $condition) {
      id
      Question
      pollID
      PollAnswers {
        items {
          id
          Answer
          pollquestionID
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
export const updatePollQuestion = /* GraphQL */ `
  mutation UpdatePollQuestion(
    $input: UpdatePollQuestionInput!
    $condition: ModelPollQuestionConditionInput
  ) {
    updatePollQuestion(input: $input, condition: $condition) {
      id
      Question
      pollID
      PollAnswers {
        items {
          id
          Answer
          pollquestionID
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
export const deletePollQuestion = /* GraphQL */ `
  mutation DeletePollQuestion(
    $input: DeletePollQuestionInput!
    $condition: ModelPollQuestionConditionInput
  ) {
    deletePollQuestion(input: $input, condition: $condition) {
      id
      Question
      pollID
      PollAnswers {
        items {
          id
          Answer
          pollquestionID
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
