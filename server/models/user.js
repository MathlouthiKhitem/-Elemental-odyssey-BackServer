import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        FirstName: {
            type: String,
            
        },
        UserName: {
            type: String,
           
        },
        LastName: {
            type: String,
           
        },
        Email: {
            type: String,
           
        },
        Password: {
            type: String,
            
        },
        Age:{
            type:Number,
            
        },
    
        googleID:{
            type:String,
            
        },
        FbID:{
            type:String,
           
        },
        Image:{
            type:String,
           
        },
        Sexe:{
            type:String,
           
        },
        Balance:{
            type:String,
           
        },
        Rank:{
            type:Number,
            
        },
        ImageRank:{
            type:String,
           
        },
        Status: {
            type: Number,
            

        },
    },
    {
        timestamps: true
    }
);

export default model('User', userSchema);