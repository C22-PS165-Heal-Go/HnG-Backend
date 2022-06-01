import ApiController from '../controllers/api.controller';
import jwtTokenMiddleware from '../middlewares/jwttoken.middleware';
import RecommendationController from '../controllers/recommendation.controller';
import { RouterMap } from '../types/express';
import validator from '../middlewares/validator.middleware';
import apiSchemas from '../validations/api.validation';

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
        method: 'post',
        endpoint: '/recommendation',
        handlers: [
            validator(apiSchemas.recommendation),
            // jwtTokenMiddleware,
            RecommendationController.getRecommendation
        ]
    },
];

export default apiRoutes;
