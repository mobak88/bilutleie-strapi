'use strict';

/**
 * car-price service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::car-price.car-price');
