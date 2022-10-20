'use strict';

/**
 * daily-extra service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::daily-extra.daily-extra');
