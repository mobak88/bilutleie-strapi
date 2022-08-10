'use strict';

/**
 * find-us router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::find-us.find-us');
