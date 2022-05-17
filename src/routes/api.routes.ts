import ApiController from '../controllers/api.controller';
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
];

export default apiRoutes;
