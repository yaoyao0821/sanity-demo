// sanity.config.js
import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {deskTool} from 'sanity/desk';
import schemas from './schemas/schema';
import {internationalizedArray} from 'sanity-plugin-internationalized-array';
import {documentInternationalization} from '@sanity/document-internationalization';
import {visionTool} from '@sanity/vision';

const langs =[{id: 'cn', title: 'Chinese'},{id: 'en', title: 'English'}];

export default defineConfig({
    title: 'demo-cms',
    projectId: '5sye697u',
    dataset: 'production',
    plugins: [
        structureTool(),
        deskTool(),
        visionTool(),
        documentInternationalization({
            // Required configuration
            supportedLanguages: langs,
            schemaTypes: ['about'],
            defaultLanguages: ['en'],
        }),
        // internationalizedArray({
        //     languages: langs,
        //     defaultLanguages: ['en'],
        //     fieldTypes: ['string'],
        // })
    ],
    schema: {
        types: schemas,
    },
})