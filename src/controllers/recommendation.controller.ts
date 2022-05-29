import express from 'express';
import ApiError from '../utils/api-error';
import { sendResponse } from '../utils/api';
import httpStatus from 'http-status';
import catchAsync from '../utils/catch-async';


const getRecommendation = catchAsync(async (req: express.Request, res: express.Response)=>{
    return "hello"
    //TODO: process input and post to ML runner
})




const RecommendationController={
    getRecommendation

}

export default RecommendationController