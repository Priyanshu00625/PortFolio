const User = require("../Model/user.Model.js");

const contect = async (req , res)=>{
    const {firstname , lastname , email , message} = req.body
     try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(httpStatus.FOUND)
        .json({ message: "user already exists" });
    }

    const newContect = new User({
      firstname: firstname,
    lastname: lastname,
      email: email,
      message:message
    });
    await newContect.save();
    res.status(httpStatus.CREATED).json({ message: "User Registerd" });
}catch(e){
    res.json({ message: `Something went wronge ${e}` });
    }
}

module.exports = {contect}