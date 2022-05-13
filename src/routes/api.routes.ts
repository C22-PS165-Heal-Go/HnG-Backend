import ApiController from '../controllers/api.controller';
import jwtTokenMiddleware from '../middlewares/jwttoken.middleware';
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
        method: 'get',
        endpoint: '/protected',
        handlers: [
            jwtTokenMiddleware,
            ApiController.testAuth
        ]
    }
];

export default apiRoutes;
