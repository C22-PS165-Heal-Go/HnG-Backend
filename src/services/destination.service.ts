import {Destination, destinationModel} from '../models/destination.model'
import ApiError from '../utils/api-error';
import httpStatus from 'http-status';
import { ObjectId } from 'mongoose';


/**
 * Create destination by destinationmodel
 * @param {Destination} destinationBody
 * @returns {Destination}
 */
const createDestination=async(destinationBody: any)=>{
    const ext = await getDestination({name: destinationBody.name})
    if(ext) return
    return await destinationModel.create(destinationBody)
}

/**
 * get destination by it's id
 * @param {string} destinationID
 * @param selector
 * @returns {Destination}
 */
const getDestinationByID=async (destinationID: any, selector?: any)=>{
    return destinationModel.findById(destinationID).select(selector)
}

/**
 * get a destination which comply with the filters
 * @param filter
 * @param selector
 * @param populate
 * @returns {Destination}
 */
const getDestination=async (filter: any, selector?: any, populate?: any)=>{
    return destinationModel.findOne(filter).select(selector).populate(populate)
}

const getDestinations=async (filter: any, selector?: any, populate?: any)=>{
    return destinationModel.find(filter).select(selector).populate(populate)
}

const getDestinationsPaginate=async (filter: any, perPage: number, page: number)=>{
    return destinationModel.find(filter).limit(perPage).skip(page*perPage)
}

const updateDestinationByID=async (destinationID: string, updateBody: any)=>{
    const destination = await getDestinationByID(destinationID);
    if(!destination){
        throw new ApiError(httpStatus.NOT_FOUND, 'Destination not found')
    }
    await destinationModel.updateOne({id: destinationID}, {'$set':updateBody}, {omitUndefined: true})
    return true
}

const deleteDestinationByID=async (destinationID:string)=>{
    const destination = await getDestinationByID(destinationID);
    if(!destination){
        throw new ApiError(httpStatus.NOT_FOUND, 'Destination not found')
    }
    await destination.remove();
    return destination;
}


const destinationService = {
    createDestination,
    getDestination,
    getDestinations,
    getDestinationsPaginate,
    getDestinationByID,
    updateDestinationByID,
    deleteDestinationByID,
}

export default destinationService;

