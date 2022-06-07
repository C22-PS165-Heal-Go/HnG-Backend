import express from 'express';
import ApiError from '../utils/api-error';
import { sendResponse } from '../utils/api';
import httpStatus from 'http-status';
import catchAsync from '../utils/catch-async';
import axios from 'axios';
import config from '../config/config';
import { send } from 'process';
import destinationService from '../services/destination.service';
import recommendationService from '../services/recommendation.service';


const getRecommendation = catchAsync(async (req: express.Request, res: express.Response)=>{
    const { member,age,activity,sport,day,time,gender, price}= req.body


    const data={
        'member':member/4.0,
        'sport':sport==1?0.0:1.0,
        'days':day/4.0,
        'time':time/3.0,
        'gender':gender,
        'price':price/3.0,
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
    const x = await axios.post('http://'+config.mlSvc+'/questionnaire', data)
    const result = x.data.destinations
    const destinations =[]
    for await(const dest of result){
        const detail = await destinationService.getDestination({name: dest})
        const rec = await recommendationService.createRecommendation({
            user: req.user?.email,
            destination: detail?.id,
            status: 0
        })
        destinations.push({id:rec.id, name: detail?.name, location: detail?.location, description: detail?.description, image: detail?.image})
    }

    sendResponse(res, {data: destinations})
})




const RecommendationController={
    getRecommendation

}

export default RecommendationController