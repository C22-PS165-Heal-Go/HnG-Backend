import httpStatus from 'http-status';
import { stripObjectKeys } from '../utils/common';
import { User } from '../data/entities/user.entity';
import ApiError from '../utils/api-error';
import jwt from '../utils/jwt';

export const loginService = async (email: string, password: string): Promise<{
  user: any, 
  token: string, 
  expiresIn: string 
}>=>{
    return new Promise((resolve, reject)=>{
        User.findOne({...(stripObjectKeys({ email }))})
            .then((user)=>{
                if(!user){
                    return reject(new ApiError(httpStatus.UNAUTHORIZED, 'user not found'))
                }

                const isValid = jwt.validPassword(password, user?.hash, user?.salt);

                if(isValid){
                    const tokenObj = jwt.issueJWT(user);
                    resolve({ 
                        user: user.toDomain(), 
                        token: tokenObj.token, 
                        expiresIn: tokenObj.expires 
                    })  
                }else
                    reject(new ApiError(httpStatus.UNAUTHORIZED, 'wrong credentials'))
            });
    })
}

export const registerUserService = async (body: { password: string, name: string, email: string })=>{
    const { email, name, password } = body;

    if ( await User.findOne(stripObjectKeys({email})) ) {
        throw new ApiError(httpStatus.FORBIDDEN, 'User already exists');
    }

    const saltHash = jwt.genPassword(password);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new User();
    newUser.email = email;
    newUser.name = name;
    newUser.hash = hash;
    newUser.salt = salt;

    await newUser.save();

    const tokenObj = jwt.issueJWT(newUser);
    return { 
        user: newUser, 
        token: tokenObj.token, 
        expiresIn: tokenObj.expires 
    } 
}

export const updateUserProfileService = async (user: User, body: {
    name?: string
})=>{
    const { name } = body;

    if ( name )
        user.name = name;
    await user.save();
    return {
        user: user.toDomain()
    };
}