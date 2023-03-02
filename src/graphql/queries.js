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
          startedAt
        }
        createdAt
        is_premium
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        presentationDataOwnerId
      }
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
        Access
        dtype
        createdAt
        numViews
        byUser {
          Userid
          createdAt
          is_premium
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Userid
        Data {
          id
          Title
          S3_Path
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          presentationDataOwnerId
        }
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
        Access
        dtype
        createdAt
        numViews
        byUser {
          Userid
          createdAt
          is_premium
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Userid
        Data {
          id
          Title
          S3_Path
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          presentationDataOwnerId
        }
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      is_premium
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        createdAt
        is_premium
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
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        Userid
        Ownership {
          nextToken
          startedAt
        }
        createdAt
        is_premium
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
          _version
          _deleted
          _lastChangedAt
        }
        Userid
        Data {
          id
          Title
          S3_Path
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          presentationDataOwnerId
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        presentationDataOwnerId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPresentationData = /* GraphQL */ `
  query SyncPresentationData(
    $filter: ModelPresentationDataFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPresentationData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        presentationDataOwnerId
      }
      nextToken
      startedAt
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
export const syncSurveys = /* GraphQL */ `
  query SyncSurveys(
    $filter: ModelSurveyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSurveys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        SurveyID
        Multi
        text
        Possible_answer
        votes {
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      _vote
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        _vote
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
export const syncVotes = /* GraphQL */ `
  query SyncVotes(
    $filter: ModelVoteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          _version
          _deleted
          _lastChangedAt
        }
        _vote
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
        questionID
        text
        answer {
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Responseid
      text
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        Responseid
        text
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
export const syncResponses = /* GraphQL */ `
  query SyncResponses(
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncResponses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          _version
          _deleted
          _lastChangedAt
        }
        Responseid
        text
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
export const getSession = /* GraphQL */ `
  query GetSession($id: ID!) {
    getSession(id: $id) {
      id
      control {
        Userid
        Ownership {
          nextToken
          startedAt
        }
        createdAt
        is_premium
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      participants {
        items {
          Userid
          createdAt
          is_premium
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Active_questions {
        items {
          id
          questionID
          text
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
          _version
          _deleted
          _lastChangedAt
        }
        participants {
          nextToken
          startedAt
        }
        presentation_data {
          id
          Title
          S3_Path
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          presentationDataOwnerId
        }
        Page_number
        Active_surveys {
          nextToken
          startedAt
        }
        Active_questions {
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
export const syncSessions = /* GraphQL */ `
  query SyncSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSessions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        control {
          Userid
          createdAt
          is_premium
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        participants {
          nextToken
          startedAt
        }
        presentation_data {
          id
          Title
          S3_Path
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          presentationDataOwnerId
        }
        Page_number
        Active_surveys {
          nextToken
          startedAt
        }
        Active_questions {
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
          _version
          _deleted
          _lastChangedAt
        }
        Userid
        Data {
          id
          Title
          S3_Path
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          presentationDataOwnerId
        }
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
