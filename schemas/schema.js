// schemas/schema.js
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Import both schemas
import homepage from './homepage';
// import siteheader from './siteheader';
import navbar from './navbar';
import subnav from './subnavbar';

export default createSchema({
  // We name our schema
  name: 'default',
  types: schemaTypes.concat([
    /* Append to the list of schemas */
    homepage,
    navbar,
    subnav,
  ]),
});
