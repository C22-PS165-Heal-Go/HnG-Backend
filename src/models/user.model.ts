import * as mongoose from 'mongoose';
// import validator from "validator";

export interface User {
    name: string,
    email: string, 
    hash: string,
    salt: string
}

const userSchema =  new mongoose.Schema<User>({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
    },
    hash:{
        type: String,
        select: false,
    },
    salt:{
        type: String,
        select: false,
    }
},{
    timestamps: true,
});

userSchema.index({
    email:1,
});

userSchema.set('toJSON',{
    virtuals: true,
    versionKey: false,
    transform: function (doc: any, ret: any){
        ret.id = ret._id;
        delete ret._id;
    }
})

export const userModel = mongoose.model<User>('User', userSchema)

