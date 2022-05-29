import ApiController from '../controllers/api.controller';
import jwtTokenMiddleware from '../middlewares/jwttoken.middleware';
import RecommendationController from '../controllers/recommendation.controller';
import { RouterMap } from '../types/express';

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
            //todo: validate
            jwtTokenMiddleware,
            RecommendationController.getRecommendation
        ]
    },
];

export default apiRoutes;
