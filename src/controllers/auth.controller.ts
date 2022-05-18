import express from 'express';
import { User } from '../data/entities/user.entity';
import {sendResponse} from '../utils/api';
import { loginService, registerUserService, updateUserProfileService } from '../services/auth.service';
import catchAsync from '../utils/catch-async';

const profile= catchAsync(async(req: express.Request, res: express.Response) =>{
    const user: User = req.user as User;
    return sendResponse(res, { message: '', 
        data: {
            user: user.toDomain()
        }
    });
})

const login = catchAsync(async(req: express.Request, res: express.Response)=> {
    const data = await loginService(req?.body?.email, req?.body?.password)
    sendResponse( res, {
        data: data
    })
})

const updateProfile = catchAsync(async(req: express.Request, res: express.Response, next: express.NextFunction)=> {
    const data = await updateUserProfileService(req.user as User, req.body)
    sendResponse( res, {
        data: data
    })

})

const register = catchAsync(async(req: express.Request, res: express.Response, next: express.NextFunction)=> {
    const user = await registerUserService(req.body)
    sendResponse( res, {
        data: user
    })
})

const AuthController={
    profile, login, updateProfile, register
}

export default AuthController;