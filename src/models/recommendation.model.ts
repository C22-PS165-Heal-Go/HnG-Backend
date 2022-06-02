import { string } from 'joi';
import * as mongoose from 'mongoose';
// import validator from "validator";

export interface Recommendation {
    user: string,
    destination: mongoose.Types.ObjectId,
    status: number
}

const recommendationSchema =  new mongoose.Schema<Recommendation>({
    user: {type: String},
    destination: {type: mongoose.Schema.Types.ObjectId},
    status: Number
},{
    timestamps: true,
});

recommendationSchema.set('toJSON',{
    virtuals: true,
    versionKey: false,
    transform: function (doc: any, ret: any){
        ret.id = ret._id;
        delete ret._id;
    }
})

export const recommendationModel = mongoose.model<Recommendation>('Recommendation', recommendationSchema)

