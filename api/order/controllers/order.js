'use strict';
const { sanitizeEntity } = require('strapi-utils');
const finder = require('strapi-utils/lib/finder');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    const { user } = ctx.state //This is the magic user

    let entities
    if(ctx.query._q) {
      entities = await strapi.services.order.search({...ctx.query, user: user.id})

    } else {
      entities = await strapi.services.order.find({...ctx.query, user: user.id})
    }

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.order }))
  },
  async findOne(ctx) {
    const { user } = ctx.state //This is the magic user
    const { id } = ctx.params //This is the magic user

  
      const entity = await strapi.services.order.findOne({id, user: user.id})

    return sanitizeEntity(entity, { model: strapi.models.order })
  }
};
