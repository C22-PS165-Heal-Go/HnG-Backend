import express, { RequestHandler } from 'express';
import {User} from '../data/entities/user.entity';

declare module 'express' {
    export interface Request {
      user?: User
    }
}


type ControllerHandler<T = any> = {( req: express.Request, res: express.Response, next: express.NextFunction ): Promise<T>}

export interface IController {
    [x: string]: ControllerHandler
}

export type RouterMap = {
    method: 'get' | 'post' | 'put' | 'patch' | 'delete';
    endpoint: string;
    handlers: RequestHandler[]
}[]