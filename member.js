function skillsMember() {
  return {
    name: 'skills',
    title: 'Skills',
    type: 'array',
    of: [
      {
        type: 'reference',
        to: [{ type: 'skill' }],
      },
    ],
  };
}