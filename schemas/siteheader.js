// schemas/siteheader.js
export default {
  name: 'siteheader',
  title: 'Site Header',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site header title',
      type: 'string',
    },
    {
      name: 'siteURL',
      title: 'Website URL',
      type: 'slug',
    },
  ],
};
