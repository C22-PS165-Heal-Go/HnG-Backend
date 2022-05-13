import express from 'express';
import ApiError from '../utils/api-error';
import { sendResponse } from '../utils/api';
import httpStatus from 'http-status';

class ApiController{
    static helloWorldHandler(req: express.Request, res: express.Response) {
        return sendResponse(res, {
            message: 'Hello World!'
        })
    }

    static testAuth(req: express.Request, res: express.Response) {
        return sendResponse(res, {
            data: 'Ok'
        })
    }

}

export default ApiController;