import { User } from "../models";
import CustomErrorHandler from "../services/CustomErrorHandler";
const userController = {
  async getAllUsers(req, res, next) {
    try {
      const users = await User.query();
      res.status(200).json(users);
    } catch (err) {
      return next(CustomErrorHandler.serverError(err));
    }
  },
  async saveUsers(req, res, next) {
    try {
      const { ...data } = req.body;
      const users = await User.query().insert({
                first_name:data.first_name,
                last_name:data.last_name,
                about:data.about

      });
     
      if(users){
        res.status(200).json({status: "success","msg":"Users added successfully"});
      }else{
         return next(CustomErrorHandler.serverError(err));
      }
      
    } catch (err) {
      return next(CustomErrorHandler.serverError(err));
    }
  },
};

export default userController;
