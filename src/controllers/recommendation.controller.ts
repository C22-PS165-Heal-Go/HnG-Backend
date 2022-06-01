import express from 'express';
import ApiError from '../utils/api-error';
import { sendResponse } from '../utils/api';
import httpStatus from 'http-status';
import catchAsync from '../utils/catch-async';
import axios from 'axios';
import config from '../config/config';
import { send } from 'process';


const getRecommendation = catchAsync(async (req: express.Request, res: express.Response)=>{
    const { member,age,activity,sport,day,time,gender, price}= req.body


    const data={
        'member':(member+1)/5.0,
        'sport':sport==1?0.0:1.0,
        'days':(day+1)/5.0,
        'time':(time+1)/4.0,
        'gender':gender,
        'price':(price+1)/4.0,
        'berbelanja':activity.includes(7)?1.0:0.0,
        'petualang':activity.includes(1)?1.0:0.0,
        'foto':activity.includes(5)?1.0:0.0,
        'jalan':activity.includes(6)?1.0:0.0,
        'selfie':activity.includes(3)?1.0:0.0,
        'museum':activity.includes(0)?1.0:0.0,
        'pemandangan':activity.includes(2)?1.0:0.0,
        'festival':activity.includes(4)?1.0:0.0,
        'anak':age.includes(0)?1.0:0.0,
        'dewasa':age.includes(2)?1.0:0.0,
        'lansia':age.includes(4)?1.0:0.0,
        'remaja':age.includes(1)?1.0:0.0,
        'pertengahan':age.includes(3)?1.0:0.0
    
    }
    console.log('http://'+config.mlSvc+'/test')
    const x = await axios.post('http://'+config.mlSvc+'/test', data)
    sendResponse(res, {data: x.data.destinations})
    //TODO: process input and post to ML runner
})




const RecommendationController={
    getRecommendation

}

export default RecommendationController