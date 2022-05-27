import {User, userModel} from '../models/user.model'
import ApiError from '../utils/api-error';
import httpStatus from 'http-status';


/**
 * Create user by user model
 * @param {User} userBody
 * @returns {User}
 */
const createUser=async(userBody: any)=>{
    return await userModel.create(userBody)
}

/**
 * get user by it's id
 * @param {string} userID
 * @param selector
 * @returns {User}
 */
const getUserByID=async (userID: string, selector?: any)=>{
    return userModel.findById(userID).select(selector)
}

/**
 * get user by it's email
 * @param {string} email
 * @param selector
 * @returns {User}
 */
const getUserByEmail=async (email: string, selector?: any)=>{
    const user =  await getUser({email:email}, selector)
    if(!user){
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found')
    }
    return user
}

/**
 * get a user which comply with the filters
 * @param filter
 * @param selector
 * @param populate
 * @returns {User}
 */
const getUser=async (filter: any, selector?: any, populate?: any)=>{
    return userModel.findOne(filter).select(selector).populate(populate)
}

const getUsers=async (filter: any, selector?: any, populate?: any)=>{
    return userModel.find(filter).select(selector).populate(populate)
}

const updateUserByID=async (userID: string, updateBody: any)=>{
    const user = await getUserByID(userID);
    if(!user){
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found')
    }
    await userModel.updateOne({id: userID}, {'$set':updateBody}, {omitUndefined: true})
    return true
}

const updateUserByEmail=async (email: string, updateBody: any)=>{
    const user = await getUser({email: email});
    if(!user){
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found')
    }
    await userModel.findByIdAndUpdate(user._id, {'$set':updateBody}, {omitUndefined: true})
    return true
}

const deleteUserByID=async (userID:string)=>{
    const user = await getUserByID(userID);
    if(!user){
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found')
    }
    await user.remove();
    return user;
}


const userService = {
    createUser,
    getUser,
    getUsers,
    getUserByID,
    getUserByEmail,
    updateUserByID,
    updateUserByEmail,
    deleteUserByID,
}

export default userService;

