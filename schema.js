//Schema for presentation
//type denotes the object, id is the presentation id, access means the accessibiity
//dtype means the type of presentation ppt, pdf, creat at is creation date
// num view
{
  "_type" : "presentation",
  "_id": { "$Pid": "573a1391f29313caabcd9637" },
  "Access" : {'["Public", "Read", "Private"]'},
  "dtype" : "PDF",
  "createdAt": { "$date": { "$numberLong": "1601499609" }},
  "numViews": { "$numberLong": "36520312" },
}
//Schema for user
// UID is the primary key to identify user
//Ownership denotes which presentation the user owns
//createAt is the user's registeration date
//is premium denotes premium status
{
  "_type" : "User",
  "_id" : {"$Uid" : "117231231sec119"},
  "Ownership" : {"$Pid" : '["573a1391f29313caabcd9637", "573a1391f29313caabcd9631"]'},
  "createdAt": { "$date": { "$numberLong": "1601499609" }},
  "is_premium" : "False"
}

//schema for actual presentation, this is a dependent table
// titles store the title
// BinaryData store the actual encoded pdf or pptx less than 16mb
{
"_type" : "presentation_data",
"$Pid" : "573a1391f29313caabcd9637",
"Title" : "Probability and statistics for stem",
"BinaryData" : "store the BSON encoded PDF here"}

//schema for survey
//survey id is the unique survye ID
// multi allows for user to answer with multiple selection like ice cream and cookie
//text is the actual Survey
//possible answer is the
{
  "_type" : "survey",
  "$Survey_id" : "1084_112983123",
  "Multi" : "False",
  "text" : "What is the best dessert?",
  "Possible answer" : ["Ice cream", "Cookie", "Cake"]
}
//schema for vote
//vote is a answer to survey
{
  "_type" : "vote",
  "$Survey_id" : "1084_112983123",
  "_vote" : "Ice cream"
}
//schema for question
//question id is the unique question ID
// text is the actual question
{
  "_type" : "question",
  "$Question_id" : "1084_113",
  "text" : "What is the difference between sphereical and circular coordinate"
}
//schema for response
//response is the respond to the question
// response_id goes by QUestionID_responseID
//text is the response
{
  "_type" : "response",
  "$Question_id" : "1084_113",
  "$Response_id" : "1084_113_1",
  "text" : "Sphereical coordinates uses a Y height where as circular use a Radius for intergration"
}
//schema for session
//SID is the unique session ID
// control is the controller of the session
// participants is the current active listener
//presentation data is the PID of the pdt being presentated
//page number is the page that the presentation is currently on
//Active Survey is the survey for this session, format is Sid_SurveyID
//Active questions is the queston for this session, format is Sid_QuestionID
{
  "_type" : "session",
  "_id" : {"$Sid" : "1084"},
  "control" : {"$Uid" : "117231231sec119"},
  "participants" : {"$Uid" : ["27331231sasdasd", "113331221ebc119"]}
  "presentation_data" : {"$Pid" : "573a1391f29313caabcd9637"},
  "Page_number" : '1',
  "Active_surveys" : {"$Survey_id" : ["1084_112983123", "1084_112984444"]},
  "Active_questions" : {"$Question_id" : ["1084_113", "1084_110"]}
}
