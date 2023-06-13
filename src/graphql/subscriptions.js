/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePresentation = /* GraphQL */ `
  subscription OnCreatePresentation(
    $filter: ModelSubscriptionPresentationFilterInput
  ) {
    onCreatePresentation(filter: $filter) {
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
export const onUpdatePresentation = /* GraphQL */ `
  subscription OnUpdatePresentation(
    $filter: ModelSubscriptionPresentationFilterInput
  ) {
    onUpdatePresentation(filter: $filter) {
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
export const onDeletePresentation = /* GraphQL */ `
  subscription OnDeletePresentation(
    $filter: ModelSubscriptionPresentationFilterInput
  ) {
    onDeletePresentation(filter: $filter) {
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
export const onCreatePoll = /* GraphQL */ `
  subscription OnCreatePoll($filter: ModelSubscriptionPollFilterInput) {
    onCreatePoll(filter: $filter) {
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
export const onUpdatePoll = /* GraphQL */ `
  subscription OnUpdatePoll($filter: ModelSubscriptionPollFilterInput) {
    onUpdatePoll(filter: $filter) {
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
export const onDeletePoll = /* GraphQL */ `
  subscription OnDeletePoll($filter: ModelSubscriptionPollFilterInput) {
    onDeletePoll(filter: $filter) {
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
export const onCreatePollAnswer = /* GraphQL */ `
  subscription OnCreatePollAnswer(
    $filter: ModelSubscriptionPollAnswerFilterInput
  ) {
    onCreatePollAnswer(filter: $filter) {
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
export const onUpdatePollAnswer = /* GraphQL */ `
  subscription OnUpdatePollAnswer(
    $filter: ModelSubscriptionPollAnswerFilterInput
  ) {
    onUpdatePollAnswer(filter: $filter) {
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
export const onDeletePollAnswer = /* GraphQL */ `
  subscription OnDeletePollAnswer(
    $filter: ModelSubscriptionPollAnswerFilterInput
  ) {
    onDeletePollAnswer(filter: $filter) {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onCreateQuestion(filter: $filter) {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onUpdateQuestion(filter: $filter) {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onDeleteQuestion(filter: $filter) {
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
export const onCreatePollQuestion = /* GraphQL */ `
  subscription OnCreatePollQuestion(
    $filter: ModelSubscriptionPollQuestionFilterInput
  ) {
    onCreatePollQuestion(filter: $filter) {
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
export const onUpdatePollQuestion = /* GraphQL */ `
  subscription OnUpdatePollQuestion(
    $filter: ModelSubscriptionPollQuestionFilterInput
  ) {
    onUpdatePollQuestion(filter: $filter) {
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
export const onDeletePollQuestion = /* GraphQL */ `
  subscription OnDeletePollQuestion(
    $filter: ModelSubscriptionPollQuestionFilterInput
  ) {
    onDeletePollQuestion(filter: $filter) {
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
