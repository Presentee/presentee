/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPresentation = /* GraphQL */ `
  query GetPresentation($id: ID!) {
    getPresentation(id: $id) {
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
export const listPresentations = /* GraphQL */ `
  query ListPresentations(
    $filter: ModelPresentationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPresentations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        PresentationKey
        Name
        PageNum
        ShortCode
        Questions {
          nextToken
          startedAt
        }
        Polls {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPresentations = /* GraphQL */ `
  query SyncPresentations(
    $filter: ModelPresentationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPresentations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        PresentationKey
        Name
        PageNum
        ShortCode
        Questions {
          nextToken
          startedAt
        }
        Polls {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPoll = /* GraphQL */ `
  query GetPoll($id: ID!) {
    getPoll(id: $id) {
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
export const listPolls = /* GraphQL */ `
  query ListPolls(
    $filter: ModelPollFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPolls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        presentationID
        PollQuestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPolls = /* GraphQL */ `
  query SyncPolls(
    $filter: ModelPollFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPolls(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        presentationID
        PollQuestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const pollsByPresentationID = /* GraphQL */ `
  query PollsByPresentationID(
    $presentationID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPollFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pollsByPresentationID(
      presentationID: $presentationID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        presentationID
        PollQuestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPollAnswer = /* GraphQL */ `
  query GetPollAnswer($id: ID!) {
    getPollAnswer(id: $id) {
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
export const listPollAnswers = /* GraphQL */ `
  query ListPollAnswers(
    $filter: ModelPollAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPollAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncPollAnswers = /* GraphQL */ `
  query SyncPollAnswers(
    $filter: ModelPollAnswerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPollAnswers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const pollAnswersByPollquestionID = /* GraphQL */ `
  query PollAnswersByPollquestionID(
    $pollquestionID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPollAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pollAnswersByPollquestionID(
      pollquestionID: $pollquestionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
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
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncQuestions = /* GraphQL */ `
  query SyncQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const questionsByPresentationID = /* GraphQL */ `
  query QuestionsByPresentationID(
    $presentationID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    questionsByPresentationID(
      presentationID: $presentationID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getPollQuestion = /* GraphQL */ `
  query GetPollQuestion($id: ID!) {
    getPollQuestion(id: $id) {
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
export const listPollQuestions = /* GraphQL */ `
  query ListPollQuestions(
    $filter: ModelPollQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPollQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Question
        pollID
        PollAnswers {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPollQuestions = /* GraphQL */ `
  query SyncPollQuestions(
    $filter: ModelPollQuestionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPollQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Question
        pollID
        PollAnswers {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const pollQuestionsByPollID = /* GraphQL */ `
  query PollQuestionsByPollID(
    $pollID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPollQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pollQuestionsByPollID(
      pollID: $pollID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Question
        pollID
        PollAnswers {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
