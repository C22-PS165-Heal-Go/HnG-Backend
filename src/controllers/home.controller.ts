import express from 'express';
import ApiError from '../utils/api-error';
import { sendResponse } from '../utils/api';
import httpStatus from 'http-status';
import catchAsync from '../utils/catch-async';
import axios from 'axios';
import config from '../config/config';
import destinationService from '../services/destination.service';
import recommendationService from '../services/recommendation.service';

const zeroPad = (num, places) => String(num).padStart(places, '0')


const getHome = catchAsync(async (req: express.Request, res: express.Response)=>{
    const home=[]
    const recommendation = await recommendationService.getRecommendations({user: req.user?.email}, '','destination')
    if(recommendation.length>0){
        for (let i=0;i<5;i++){
            home.push({name: recommendation[i].destination.name, 
                description: recommendation[i].destination.description, 
                location: recommendation[i].destination.location, 
                image: recommendation[i].destination.image})
        }
    }else{
        for(let i=0;i<5;i++){
            const x = await Math.floor((Math.random() * 39) + 1);
            const dest = await destinationService.getDestination({code:zeroPad(x,3)})
            home.push({name: dest.name, 
                description: dest.description, 
                location: dest.location, 
                image: dest.image})
        }
    }
    sendResponse(res, {data: home})
})




const HomeController={
    getHome

}

export default HomeController