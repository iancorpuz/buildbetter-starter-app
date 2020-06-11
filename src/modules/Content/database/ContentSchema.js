import { CONSTANTS } from './constants';

export default {
  name: CONSTANTS.CONTENT,
  primaryKey: 'id',
  properties: {
    id: {
      type: 'string',
      length: 36,
    },
    title: 'string',
    slug: 'string',
    body: 'string',
    createdAt: 'date',
  },
};
