import express from 'express';
import ApiError from '../utils/api-error';
import { sendResponse } from '../utils/api';
import httpStatus from 'http-status';
import catchAsync from '../utils/catch-async';
import axios from 'axios';
import config from '../config/config';
import destinationService from '../services/destination.service';
import recommendationService from '../services/recommendation.service';
import { send } from 'process';

const zeroPad = (num: number, places: number) => String(num).padStart(places, '0')


const getHome = catchAsync(async (req: express.Request, res: express.Response)=>{
    const home=[]
    const recommendation = await recommendationService.getRecommendations({user: req.user?.email})
    if(recommendation.length>0){
        const picker= recommendation.length >=5? 5: recommendation.length
        for (let i=0;i<picker;i++){
            const dest = await destinationService.getDestinationByID(recommendation[i].destination)
            home.push({name: dest?.name, 
                description: dest?.description, 
                location: dest?.location, 
                image: dest?.image})
        }
    }
    for(let i=home.length;i<10;i++){
        const x = await Math.floor((Math.random() * 39) + 1);
        const dest = await destinationService.getDestination({code:zeroPad(x,3)})
        home.push({name: dest?.name, 
            description: dest?.description, 
            location: dest?.location, 
            image: dest?.image})
    }
    
    sendResponse(res, {data: home})
})

const discover= catchAsync(async(req: express.Request, res: express.Response)=>{
    const {category, destination, page=0} = req.body
    const perPage =10
    let destinations;
    if (category!= undefined && destination != undefined){
        destinations = await destinationService.getDestinationsPaginate({$and:[{name:{$regex: destination, $options:'i'}},{category:category}]},perPage,page)
    }else if(category != undefined){
        destinations = await destinationService.getDestinationsPaginate({category: category},perPage,page)
    }else if(destination != undefined){
        destinations = await destinationService.getDestinationsPaginate({name:{$regex: destination, $options:'i'}},perPage,page)
    }else{
        destinations = await destinationService.getDestinationsPaginate({},perPage,page)
    }
    sendResponse(res, {data:destinations})
})



const HomeController={
    getHome,
    discover

}

export default HomeController