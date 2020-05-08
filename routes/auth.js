const router = require("express").Router();
const UserModel = require("../model/UserModel");
const joi = require("@hapi/joi");

//validation
const schema = joi.object({
  name: joi.string().min(6).max(255).required(),
  email: joi.string().min(6).max(255).required().email(),
  password: joi.string().min(6).max(255).required(),
});

router.post("/register", async (req, res) => {
  //validating user response
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    console.log(savedUser);
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

// router.post('/login', (req, res)=>{
//     res.send('Login')
// })
module.exports = router;
 
