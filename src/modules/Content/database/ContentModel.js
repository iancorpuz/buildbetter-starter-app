import Model from 'realm-orm/Model';

import { MODELS } from './constants';

export default class ContentModel extends Model {
  static schema = {
    name: MODELS.CONTENT,
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

  static stringFields = ['title', 'slug'];
}
