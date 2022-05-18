import Joi from 'joi';

const authSchemas = {
    login: {
        body: Joi.object({
            username: Joi.string(),
            email: Joi.string().email(),
            password: Joi.string().required(),
        }).xor('username', 'email')
    },
    register: {
        body: Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            username: Joi.string().required(),
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