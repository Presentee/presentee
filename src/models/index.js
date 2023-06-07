// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Presentation, PollAnswers, Poll, QuestionsAnswer, Questions } = initSchema(schema);

export {
  Presentation,
  PollAnswers,
  Poll,
  QuestionsAnswer,
  Questions
};