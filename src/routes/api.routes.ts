import ApiController from '../controllers/api.controller';
import SeederController from '../controllers/seeder.controller';
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
        endpoint: '/seed',
        handlers: [
            SeederController.destinationSeeder
        ]
    },
];

export default apiRoutes;
