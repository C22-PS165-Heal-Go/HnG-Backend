import Joi from 'joi';
import path from 'path';
import dotenv from 'dotenv';

const nodeEnv = process.env.NODE_ENV || 'development';

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
    .keys({
        PORT: Joi.number().default(5000),

        MONGO_USERNAME: Joi.string().required(),
        MONGO_PASSWORD: Joi.string().required(),
        MONGO_HOST: Joi.string().required(),
        MONGO_DB: Joi.string().required(),

        JWT_SECRET: Joi.string().required().description('JWT secret key'),
        JWT_ACCESS_EXPIRATION: Joi.string().default('1d').description('jwt expiration'),

        CORS_WHITELIST: Joi.string().default('*'),
        ML: Joi.string().required()
    })
    .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env, { stripUnknown: true });

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

type EnvConfig = {
  env: string,
  corsWhitelist: string,
  port: string,
  mongo:{
    url: string,
    options:{
        useNewUrlParser: boolean,
        useUnifiedTopology: boolean,
        useCreateIndex: boolean,
    }
},
  jwt: {
    secret: string,
    accessExpiration: string,
  },
  mlSvc: string
}

const config: EnvConfig = {
    env: nodeEnv,
    corsWhitelist: envVars?.CORS_WHITELIST,
    port: envVars?.PORT,
    mongo:{
        url: `mongodb://${envVars?.MONGO_USERNAME}:${envVars?.MONGO_PASSWORD}@${envVars?.MONGO_HOST}/${envVars?.MONGO_DB}?authSource=admin`,
        options:{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex: true,
        }
    },
    jwt: {
        secret: envVars?.JWT_SECRET,
        accessExpiration: envVars?.JWT_ACCESS_EXPIRATION,
    },
    mlSvc: envVars?.ML,
}

export default config;