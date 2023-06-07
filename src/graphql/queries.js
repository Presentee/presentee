/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPresentation = /* GraphQL */ `
  query GetPresentation($id: ID!) {
    getPresentation(id: $id) {
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
      PollJSON
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
        PollJSON
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
        PollJSON
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
export const getQuestions = /* GraphQL */ `
  query GetQuestions($id: ID!) {
    getQuestions(id: $id) {
      id
      Question
      PageNum
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
    $filter: ModelQuestionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Question
        PageNum
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
    $filter: ModelQuestionsFilterInput
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
        PageNum
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

export const getPollAnswers = /* GraphQL */ `
  query GetPollAnswers($id: ID!) {
    getPollAnswers(id: $id) {
      id
      Answer
      pollID
      createdAt
      updatedAt
    }
  }
`;
export const listPollAnswers = /* GraphQL */ `
  query ListPollAnswers(
    $filter: ModelPollAnswersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPollAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Answer
        pollID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const pollAnswersByPollID = /* GraphQL */ `
  query PollAnswersByPollID(
    $pollID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPollAnswersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pollAnswersByPollID(
      pollID: $pollID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Answer
        pollID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;


export const getQuestionsAnswer = /* GraphQL */ `
  query GetQuestionsAnswer($id: ID!) {
    getQuestionsAnswer(id: $id) {
      id
      Answer
      questionsID
      createdAt
      updatedAt
    }
  }
`;
export const listQuestionsAnswers = /* GraphQL */ `
  query ListQuestionsAnswers(
    $filter: ModelQuestionsAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionsAnswers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Answer
        questionsID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const questionsAnswersByQuestionsID = /* GraphQL */ `
  query QuestionsAnswersByQuestionsID(
    $questionsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuestionsAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    questionsAnswersByQuestionsID(
      questionsID: $questionsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Answer
        questionsID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;


export const questionsByPresentationID = /* GraphQL */ `
  query QuestionsByPresentationID(
    $presentationID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuestionsFilterInput
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
        PageNum
        presentationID
        Questions_Answers {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
