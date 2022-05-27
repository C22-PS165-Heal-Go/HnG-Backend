import express from 'express';
import { User } from '../models/user.model';
import {sendResponse} from '../utils/api';
import authService from '../services/auth.service';
import catchAsync from '../utils/catch-async';

const profile= catchAsync(async(req: express.Request, res: express.Response) =>{
    const user: User = req.user as User;
    return sendResponse(res, { message: '', 
        data: {
            user: user
        }
    });
})

const login = catchAsync(async(req: express.Request, res: express.Response)=> {
    const data = await authService.login(req?.body?.email, req?.body?.password)
    sendResponse( res, {
        data: data
    })
})

// const updateProfile = catchAsync(async(req: express.Request, res: express.Response, next: express.NextFunction)=> {
//     const data = await updateUserProfileService(req.user as User, req.body)
//     sendResponse( res, {
//         data: data
//     })

// })

const register = catchAsync(async(req: express.Request, res: express.Response, next: express.NextFunction)=> {
    const user = await authService.register(req.body)
    sendResponse( res, {
        data: user
    })
})

const AuthController={
    profile, login, register
}

export default AuthController;