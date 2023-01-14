/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  getUsers: async (req, res) => {
    User.find((err, user) => {
      if(err){
        return res.serverError({
          success: false,
          message: "server error"
        });
      }
      return res.ok({
        success: true,
        user:user
      })
    })
   },

};

