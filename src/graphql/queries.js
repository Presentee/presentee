/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPresentation = /* GraphQL */ `
  query GetPresentation($id: ID!) {
    getPresentation(id: $id) {
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
export const listPresentations = /* GraphQL */ `
  query ListPresentations(
    $filter: ModelPresentationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPresentations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($Userid: ID!) {
    getUser(Userid: $Userid) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $Userid: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      Userid: $Userid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        Userid
        Ownership {
          nextToken
        }
        createdAt
        is_premium
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPresentationData = /* GraphQL */ `
  query GetPresentationData($id: ID!) {
    getPresentationData(id: $id) {
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
export const listPresentationData = /* GraphQL */ `
  query ListPresentationData(
    $filter: ModelPresentationDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPresentationData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getSurvey = /* GraphQL */ `
  query GetSurvey($id: ID!) {
    getSurvey(id: $id) {
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
export const listSurveys = /* GraphQL */ `
  query ListSurveys(
    $id: ID
    $filter: ModelSurveyFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSurveys(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getVote = /* GraphQL */ `
  query GetVote($id: ID!) {
    getVote(id: $id) {
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
export const listVotes = /* GraphQL */ `
  query ListVotes(
    $id: ID
    $filter: ModelVoteFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listVotes(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        SurveyID
        survey {
          id
          SurveyID
          Multi
          text
          Possible_answer
          createdAt
          updatedAt
        }
        _vote
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
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
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $id: ID
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listQuestions(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        questionID
        text
        answer {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getResponse = /* GraphQL */ `
  query GetResponse($id: ID!) {
    getResponse(id: $id) {
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
export const listResponses = /* GraphQL */ `
  query ListResponses(
    $id: ID
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listResponses(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        questionID
        question {
          id
          questionID
          text
          createdAt
          updatedAt
        }
        Responseid
        text
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSession = /* GraphQL */ `
  query GetSession($id: ID!) {
    getSession(id: $id) {
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
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        control {
          Userid
          createdAt
          is_premium
          updatedAt
        }
        participants {
          nextToken
        }
        presentation_data {
          id
          Title
          S3_Path
          createdAt
          updatedAt
          presentationDataOwnerId
        }
        Page_number
        Active_surveys {
          nextToken
        }
        Active_questions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const presentationsById = /* GraphQL */ `
  query PresentationsById(
    $id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPresentationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    presentationsById(
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
