import { defineField, defineType } from 'sanity';

export default defineType ({
    name: "subnav",
    title: "Subnav",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: 'Title',
            type: 'string',
            description: "Input the title of the sub nav.",
        }),
        defineField({
            name: 'hasDropdown',
            title: 'Has Dropdown',
            type: 'boolean',
            description: "Choose if make this sub nav a dropdown.",
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
                        }),
                    ],
                },
            ],
            hidden: ({ parent }) => !parent.hasDropdown,
            description: "Input all the dropdown links of this sub nav.",
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'string',
            description: "Input the link of this subnav.",
            hidden: ({ parent }) => parent.hasDropdown,
        }),
    ],
});