import express from 'express';
import ApiError from '../utils/api-error';
import { sendResponse } from '../utils/api';
import httpStatus from 'http-status';
import catchAsync from '../utils/catch-async';


const helloWorldHandler = catchAsync(async (req: express.Request, res:express.Response)=>{
    return sendResponse(res, {
        message: 'Hello World!'
    })
})

const ApiController={
    helloWorldHandler
}

export default ApiController