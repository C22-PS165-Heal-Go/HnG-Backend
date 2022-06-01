import Joi from 'joi';

const apiSchemas = {
    recommendation: {
        body: Joi.object({
            member: Joi.number().required(),
            age: Joi.array().items(Joi.number()),
            activity:Joi.array(),
            sport: Joi.number().required(),
            day: Joi.number().required(),
            time: Joi.number().required(),
            gender: Joi.number().required(),
            price: Joi.number().required(),
        })
    },

};

export default apiSchemas;