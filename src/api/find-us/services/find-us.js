'use strict';

/**
 * find-us service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::find-us.find-us');
