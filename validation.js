const Joi = require("@hapi/joi");

//Register validation
const registerValidation = (data)=>{
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(255),
        email: Joi.string().required().min(5).max(255).email(),
        password: Joi.string().required().min(6).max(255),
      });
      return schema.validate(data);
}

const loginValidation = (data)=>{
    const schema = Joi.object({
        email: Joi.string().required().min(5).max(255).email(),
        password: Joi.string().required().min(6).max(255),
      });
      return schema.validate(data);
}
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
