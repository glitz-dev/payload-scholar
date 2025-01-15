import type { CollectionConfig } from 'payload'

const AnnotationRatings: CollectionConfig = {
  slug: 'annotation_ratings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'ratings_id',
      label: 'Ratings',
      type: 'number',
      required: true,
    },
    {
      name: 'is_liked',
      label: 'Liked ?',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'user_id',
      label: 'User',
      type: 'number',
    },
    {
      name: 'question_id',
      label: 'Question',
      type: 'number',
    },
    {
      name: 'answer_id',
      label: 'Answer',
      type: 'number',
    },
  ],
}

export default AnnotationRatings
