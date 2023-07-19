import CustomErrorHandler from '../services/CustomErrorHandler' 
import {DEBUG_MODE} from '../config';
export const errorHandler=(err,req,res,next) => {
    let statusCode="";
    let data={ };     
    
    if(err instanceof CustomErrorHandler) {
        statusCode=err.status;
        data={
            massage:"Internal Server Error",
            ...(DEBUG_MODE=="true" && {errorMassage: err.message})
        }
       
    }
    return res.status(statusCode).json(data)

}