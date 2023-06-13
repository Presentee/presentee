// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Presentation, Poll, PollAnswer, Question, PollQuestion } = initSchema(schema);

export {
  Presentation,
  Poll,
  PollAnswer,
  Question,
  PollQuestion
};