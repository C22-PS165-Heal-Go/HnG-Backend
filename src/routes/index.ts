import express, { Router } from 'express';
import AdapterWrapperService from '../services/adapter-wrapper.service';
import { RouterMap } from '../types/express';
import apiRoutes from './api.routes';


const wrapRoutesMap = (routes: RouterMap) => {
    const router = Router();
    routes.forEach( route => {
        const handlers = route.handlers.map( handler => (
            AdapterWrapperService.wrapHttpHandler(handler)
        ))
        router?.[route.method](route.endpoint, ...handlers);
    });
    return router;
}

const endpoints = [
    {
        path: '',
        version: '1',
        routes: apiRoutes,
    },
];

const router = express.Router();

endpoints.forEach((route)=>{
    router.use(`/api/v${route.version}/${route.path}`, wrapRoutesMap(route.routes));
})

export default router;