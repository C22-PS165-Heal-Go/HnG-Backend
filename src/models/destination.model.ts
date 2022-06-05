import { string } from 'joi';
import * as mongoose from 'mongoose';
// import validator from "validator";

export interface Destination {
    code: string,
    caategory: string,
    name: string,
    location: string, 
    description: string,
    image: string
}

const destinationSchema =  new mongoose.Schema<Destination>({
    code: { type: String},
    name: {
        type: String,
        required: true,
        trim: true,
    },
    category: String,
    location:{
        type: String,
    },
    description:{
        type: String,
    },
    image:{
        type: String,
    }
},{
    timestamps: true,
});

destinationSchema.index({
    code:1,
    name:1,
});

destinationSchema.set('toJSON',{
    virtuals: true,
    versionKey: false,
    transform: function (doc: any, ret: any){
        ret.id = ret._id;
        delete ret._id;
    }
})

export const destinationModel = mongoose.model<Destination>('Destination', destinationSchema)

