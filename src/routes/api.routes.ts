import ApiController from '../controllers/api.controller';

import jwtTokenMiddleware from '../middlewares/jwttoken.middleware';
import RecommendationController from '../controllers/recommendation.controller';
import SeederController from '../controllers/seeder.controller';
import { RouterMap } from '../types/express';
import validator from '../middlewares/validator.middleware';
import apiSchemas from '../validations/api.validation';
import HomeController from '../controllers/home.controller';

// General API Routes /v1
const apiRoutes: RouterMap = [
    {
        method: 'get',
        endpoint: '/',
        handlers: [
            ApiController.helloWorldHandler
        ]
    },
    {
        method: 'get',
        endpoint: '/home',
        handlers: [
            jwtTokenMiddleware,
            HomeController.getHome
        ]
    },
    {
        method: 'post',
        endpoint: '/recommendation',
        handlers: [
            validator(apiSchemas.recommendation),
            jwtTokenMiddleware,
            RecommendationController.getRecommendation
        ]
    },{
        method: 'get',
        endpoint: '/seed',
        handlers: [
            SeederController.destinationSeeder
        ]
    },
];

export default apiRoutes;
