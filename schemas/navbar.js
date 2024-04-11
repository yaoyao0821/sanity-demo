import subnav from './subnavbar'

export default {
    name: 'navbar',
    title: 'Navbar',
    type: 'document',
    fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          description: "Input the title of the main nav.",
        },
        {
          name: 'hasDropdown',
          title: 'Has Dropdown',
          type: 'boolean',
          description: "Choose if make this nav a dropdown.",
        },
        {
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                      description: 'Input the title of the dropdown item.',
                    },
                    {
                      name: 'link',
                      title: 'Link',
                      type: 'string',
                      description: 'Input the link URL or path of this dropdown item.',
                    },
                  ],
                },
              ],
            description: "Input all the dropdown links of this nav.",
            hidden: ({ parent }) => !parent.hasDropdown,
          },
        {
            name: 'link',
            title: 'Link',
            type: 'string',
            description: "Input the link of this nav.",
            hidden: ({ parent }) => parent.hasDropdown,
        }
    ],
  };
  