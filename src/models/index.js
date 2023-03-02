// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Presentation, User, PresentationData, Survey, Vote, Question, Response, Session } = initSchema(schema);

export {
  Presentation,
  User,
  PresentationData,
  Survey,
  Vote,
  Question,
  Response,
  Session
};