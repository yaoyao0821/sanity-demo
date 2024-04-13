import { defineField, defineType } from 'sanity';

export default defineType ({
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Homepage title',
            type: 'string',
            description: "Input the title of the demo page homepage.",
        }),
        defineField({
            name: "content",
            title: "Homepage content",
            type: "string",
            description: "Input the content of the homepage.",
        }),
        // defineField({
        //     // should match 'languageField' plugin configuration setting, if customized
        //     name: 'language',
        //     type: 'string',
        //     readOnly: true,
        //     hidden: true,
        // }),
        // defineField({
        //     name: 'image',
        //     title: 'Homepage image',
        //     type: 'image',
        // }),
    ],
});
