/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuestionsAnswer = /* GraphQL */ `
  query GetQuestionsAnswer($id: ID!) {
    getQuestionsAnswer(id: $id) {
      id
      Answer
      newquestionsID
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
        newquestionsID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const questionsAnswersByNewquestionsID = /* GraphQL */ `
  query QuestionsAnswersByNewquestionsID(
    $newquestionsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuestionsAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    questionsAnswersByNewquestionsID(
      newquestionsID: $newquestionsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Answer
        newquestionsID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuestions = /* GraphQL */ `
  query GetQuestions($id: ID!) {
    getQuestions(id: $id) {
      id
      Question
      QuestionsAnswers {
        items {
          id
          Answer
          newquestionsID
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
        QuestionsAnswers {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
export const getPoll = /* GraphQL */ `
  query GetPoll($id: ID!) {
    getPoll(id: $id) {
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
        Question
        PollAnswers {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPresentation = /* GraphQL */ `
  query GetPresentation($id: ID!) {
    getPresentation(id: $id) {
      id
      PresentationKey
      Name
      PageNum
      createdAt
      updatedAt
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
      }
      nextToken
    }
  }
`;
