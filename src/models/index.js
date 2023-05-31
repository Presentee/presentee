// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Presentation, Poll, Questions } = initSchema(schema);

export {
  Presentation,
  Poll,
  Questions
};