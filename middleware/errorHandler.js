import CustomErrorHandler from '../services/CustomErrorHandler' 
export const errorHandler=(err,req,res,next) => {
    let statusCode="";
    let data={ };     

    if(err instanceof CustomErrorHandler) {
        statusCode=err.status;
        data={
            massage:"Internal Server Error",
            errorMassage: err.message
        }
       
    }
    return res.status(statusCode).json(data)

}