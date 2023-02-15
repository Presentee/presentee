type Presentation @model{
  id: ID!
  Access: [String!]!
  dtype: String!
  createdAt: String!
  numViews: Int!
}
type User @model{
  id: ID!
  Ownership: [Presentation!]!
  createdAt: String!
  is_premium: Boolean!
}
type PresentationData @model{
  id: ID!
  Title: String!
  S3_Path: String!
}
type Survey @model{
  id: ID!
  Multi: Boolean!
  text: String!
  Possible_answer: [String!]!
  votes: [Vote] @connection(keyname : "bySurvey", fields: ["id"])
}

type Vote @model @key(name: "bySurvey", fields: ["SurveyID"]){
  id: ID!
  SurveyID: String!
  survey: Survey @connection(fields: ["SurveyID"])
  _vote: String!
}
type Question @model{
  id: ID!
  text: String!
  answer: [Response] @connection(keyname:"byQuestion", fields:["id"])
}

type Response @model @key(name : "byQuestion", fields: ["questionID"]){
  id: ID!
  questionID: String!
  question: Question @connection(fields: ["questionID"])
  Responseid: String!
  text: String!
}

type Session @model{
  id: ID!
  control: User!
  participants: [User!]!
  presentation_data: PresentationData!
  Page_number: String!
  Active_surveys: [Survey!]!
  Active_questions: [Question!]!
}
scalar Binary

type Document {
  id: ID!
  title: String!
  file: Binary!
}

type Mutation {
  uploadDocument(title: String!, file: Binary!): Document!
}
