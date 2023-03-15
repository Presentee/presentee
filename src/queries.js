// main one to create a room, while it create a room is creates a session, a presentation and the presentation data.
//when we pass the file to s3, we want to have the s3 file path to be at the s3_path
mutation Create_Room {
  createSession(input: {Page_number: "1", _version: 1}) {
    id
    createdAt
  }
  createPresentation(input: {Access: "ALL", Userid: "Leo", _version: 1, createdAt: "", dtype: "PDF", numViews: 0}) {
    id
  }
  createPresentationData(input: {S3_Path: "s3://presentee-storage-edfa6fc8124948-staging/public/8cfa5c0c-9ce1-4113-bb9b-5d0983182eae-Assignment2.pdf", Title: "Assignment2"}) {
    id
  }
}

//get room is the join room option
query Get_room {
  getSession(id: "84bfa68f-7c3f-4e32-93a4-2d7574e56e08") {
    id
    Page_number
  }
  getPresentation(id: "1d61e42d-d6d8-4cf6-8004-3853f5fcc2eb") {
    Userid
    Access
    createdAt
    numViews
  }
  getPresentationData(id: "d836842f-aba3-49c9-8e7e-36a7aa1bb60d") {
    presentationDataOwnerId
    S3_Path
    Title
  }
}

subscription get_updated_pagenumber {
  onUpdateSession(filter: {}) {
    Page_number
  }
}