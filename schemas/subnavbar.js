export default {
    name: 'subnav',
    title: 'Subnav',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: "Input the title of the sub nav.",
        },
        {
            name: 'hasDropdown',
            title: 'Has Dropdown',
            type: 'boolean',
            description: "Choose if make this sub nav a dropdown.",
        },
        {
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [{
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
            hidden: ({ parent }) => !parent.hasDropdown,
            description: "Input all the dropdown links of this sub nav.",
        },
        {
            name: 'link',
            title: 'Link',
            type: 'string',
            description: "Input the link of this subnav.",
            hidden: ({ parent }) => parent.hasDropdown,
        }
    ],
};