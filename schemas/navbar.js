import { defineField, defineType } from 'sanity';

export default defineType ({
    name: 'navbar',
    title: 'Navbar',
    type: 'document',
    fields: [
      // defineField({
      //   // should match 'languageField' plugin configuration setting, if customized
      //   name: 'language',
      //   type: 'string',
      //   readOnly: true,
      //   hidden: true,
      // }),
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        description: "Input the title of the main nav.",
      }),
      defineField({
        name: 'hasDropdown',
        title: 'Has Dropdown',
        type: 'boolean',
        description: "Choose if make this nav a dropdown.",
      }),
      defineField({
        name: 'links',
        title: 'Links',
        type: 'array',
        of: [{
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  description: 'Input the title of the dropdown item.',
                }),
                defineField({
                  name: 'link',
                  title: 'Link',
                  type: 'string',
                  description: 'Input the link URL or path of this dropdown item.',
                  // options: {
                  //   documentInternationalization: {
                  //     exclude: true,
                  //   },
                  // },
                }),
              ],
            }],
          description: "Input all the dropdown links of this nav.",
          hidden: ({ parent }) => !parent.hasDropdown,
      }),
      defineField({
        name: 'link',
        title: 'Link',
        type: 'string',
        description: "Input the link of this nav.",
        hidden: ({ parent }) => parent.hasDropdown,
        // options: {
        //   documentInternationalization: {
        //     exclude: true,
        //   },
        // },
      })
    ],
});
  