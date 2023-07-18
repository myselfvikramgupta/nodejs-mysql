class CustomErrorHandler extends Error{
    constructor(status,message){
        super()
        this.status = status;
        this.message = message;
    }
    static serverError(message){
        return new CustomErrorHandler(500,message);
    }
   
}
export default CustomErrorHandler 