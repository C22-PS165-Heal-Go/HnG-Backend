import httpStatus from 'http-status';
import { User } from '../models/user.model';
import ApiError from '../utils/api-error';
import jwt from '../utils/jwt';
import userService from './user.service';

const login =async (email:string, password:string) => {
    const user: User = await userService.getUserByEmail(email, '+hash +salt');
    const isValid = jwt.validPassword(password, user?.hash, user?.salt);
    if(isValid){
        const tokenObj = jwt.issueJWT(user);
        return { 
            user: {
                name: user.name,
                email: user.email
            }, 
            token: tokenObj.token, 
            expiresIn: tokenObj.expires 
        }
    }
    throw new ApiError(403,'Wrong credential')
}

const register=async(body: { password: string, name: string, email: string })=>{
    const { email, name, password } = body;

    const user = await userService.getUser({email:email})
    if(user)
        throw new ApiError(400, 'User already registered')

    const saltHash = jwt.genPassword(password);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = await userService.createUser({
        name: name,
        email: email,
        salt: salt,
        hash: hash
    })

    const tokenObj = jwt.issueJWT(newUser);
    return { 
        user: newUser, 
        token: tokenObj.token, 
        expiresIn: tokenObj.expires 
    } 
}

const authService = {
    login,
    register
}

export default authService;

