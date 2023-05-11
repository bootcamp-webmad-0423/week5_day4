const { Schema, model } = require('mongoose')

const restaurantSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
})

restaurantSchema.index({ location: '2dsphere' })

const Restaurant = model('Restaurant', restaurantSchema)

module.exports = Restaurant