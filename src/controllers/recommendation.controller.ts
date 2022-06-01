import express from 'express';
import ApiError from '../utils/api-error';
import { sendResponse } from '../utils/api';
import httpStatus from 'http-status';
import catchAsync from '../utils/catch-async';
import axios from 'axios';
import config from '../config/config';
import { send } from 'process';


const getRecommendation = catchAsync(async (req: express.Request, res: express.Response)=>{
    const data={
        'member':1.0,
        'sport':1.0,
        'days':5.0,
        'time':2.0,
        'gender':1.0,
        'price':0.0,
        'berbelanja':0.0,
        'petualang':0.0,
        'foto':1.0,
        'jalan':1.0,
        'selfie':0.0,
        'museum':0.0,
        'pemandangan':1.0,
        'festival':0.0,
        'anak':1.0,
        'dewasa':1.0,
        'lansia':0.0,
        'remaja':1.0,
        'pertengahan':0.0
    
    }
    console.log('http://'+config.mlSvc+'/test')
    const x = await axios.post('http://'+config.mlSvc+'/test', data)
    sendResponse(res, {data: x.data})
    return 'hwllo'
    //TODO: process input and post to ML runner
})




const RecommendationController={
    getRecommendation

}

export default RecommendationController