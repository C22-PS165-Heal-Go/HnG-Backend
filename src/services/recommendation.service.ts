import {Recommendation, recommendationModel} from '../models/recommendation.model'
import ApiError from '../utils/api-error';
import httpStatus from 'http-status';


/**
 * Create recommendation by recommendationmodel
 * @param {Recommendation} recommendationBody
 * @returns {Recommendation}
 */
const createRecommendation=async(recommendationBody: any)=>{
    return await recommendationModel.create(recommendationBody)
}

/**
 * get recommendation by it's id
 * @param {string} recommendationID
 * @param selector
 * @returns {Recommendation}
 */
const getRecommendationByID=async (recommendationID: string, selector?: any)=>{
    return recommendationModel.findById(recommendationID).select(selector)
}

/**
 * get a recommendation which comply with the filters
 * @param filter
 * @param selector
 * @param populate
 * @returns {Recommendation}
 */
const getRecommendation=async (filter: any, selector?: any, populate?: any)=>{
    return recommendationModel.findOne(filter).select(selector).populate(populate)
}

const getRecommendations=async (filter: any, selector?: any, populate?: any)=>{
    return recommendationModel.find(filter).select(selector).populate(populate)
}

const updateRecommendationByID=async (recommendationID: string, updateBody: any)=>{
    const recommendation = await getRecommendationByID(recommendationID);
    if(!recommendation){
        throw new ApiError(httpStatus.NOT_FOUND, 'Recommendation not found')
    }
    await recommendationModel.updateOne({id: recommendationID}, {'$set':updateBody}, {omitUndefined: true})
    return true
}

const deleteRecommendationByID=async (recommendationID:string)=>{
    const recommendation = await getRecommendationByID(recommendationID);
    if(!recommendation){
        throw new ApiError(httpStatus.NOT_FOUND, 'Recommendation not found')
    }
    await recommendation.remove();
    return recommendation;
}


const recommendationService = {
    createRecommendation,
    getRecommendation,
    getRecommendations,
    getRecommendationByID,
    updateRecommendationByID,
    deleteRecommendationByID,
}

export default recommendationService;

