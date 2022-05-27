import Joi from 'joi';

const authSchemas = {
    login: {
        body: Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        })
    },
    register: {
        body: Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        })
    },
    updateProfile: {
        body: Joi.object({
            name: Joi.string()
        })
    },
};

export default authSchemas;