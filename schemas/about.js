import { defineField, defineType } from 'sanity';

export default defineType ({
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'About title',
            type: 'string',
            description: "Input the title of the demo about page.",
        }),
        defineField({
            name: "content",
            title: "About content",
            type: "string",
            description: "Input the content of the about page.",
        }),
        defineField({
            // should match 'languageField' plugin configuration setting, if customized
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true,
        }),
        // defineField({
        //     name: 'image',
        //     title: 'Homepage image',
        //     type: 'image',
        // }),
    ],
});
