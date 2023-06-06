/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const getQuestions = /* GraphQL */ `
  query GetQuestions($id: ID!) {
    getQuestions(id: $id) {
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
export const getPresentation = /* GraphQL */ `
  query GetPresentation($id: ID!) {
    getPresentation(id: $id) {
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
        Presentation_Question {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
