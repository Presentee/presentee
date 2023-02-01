// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Restaurant, Presentation } = initSchema(schema);

export {
  Restaurant,
  Presentation
};