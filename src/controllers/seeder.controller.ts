import express from 'express';
import ApiError from '../utils/api-error';
import { sendResponse } from '../utils/api';
import httpStatus from 'http-status';
import catchAsync from '../utils/catch-async';
import destinationService from '../services/destination.service';

const destinationSeeder = catchAsync(async (req: express.Request, res:express.Response)=>{
    await destinationService.createDestination({
        name: 'Malioboro',
        code: '1',
        location: 'Jawa Tengah', 
        description: 'test deh',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fid.wikipedia.org%2Fwiki%2FJalan_Malioboro&psig=AOvVaw2Wqt6SCZ8X6z61V24UpJnQ&ust=1654175826864000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIi81KerjPgCFQAAAAAdAAAAABAD'
    })
    await destinationService.createDestination({
        name: 'Malioboro2',
        code: '12',
        location: 'Jawa Tengah', 
        description: 'test deh',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fid.wikipedia.org%2Fwiki%2FJalan_Malioboro&psig=AOvVaw2Wqt6SCZ8X6z61V24UpJnQ&ust=1654175826864000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIi81KerjPgCFQAAAAAdAAAAABAD'
    })
    return sendResponse(res, {
        message: 'Sukses!'
    })
})

const SeederController={
    destinationSeeder
}

export default SeederController