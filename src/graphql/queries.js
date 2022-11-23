/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPresentation = /* GraphQL */ `
  query GetPresentation($id: ID!) {
    getPresentation(id: $id) {
      id
      presentationName
      presenter
      eventKey
      qrcode
      owner
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
        presentationName
        presenter
        eventKey
        qrcode
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
