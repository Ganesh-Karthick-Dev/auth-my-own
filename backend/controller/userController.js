const userModel = require("../model/userModel");



// for signup
const createUser = async (req, res) => {
  let data = req.body;
  console.log(data);
  try {
    let existUser = await userModel.findOne({username:data.username});
    if (existUser) {
        throw new Error("user already found !")
    } else {
      await userModel.create(data);
      res.status(200).send({val:"user successfully created , now you can login !"});
    }
  } catch (err) {
    console.log(` error while inserting data into DB mongo - ${err}`);
    res.status(404).send("user already found !")
  }
};


// for login
const checkUser = async (req,res)=> {
  let clientData = req.body ;
  // console.log(clientData);
  try {
    let existUser = await userModel.findOne({username:clientData.username})
    // console.log(existUser);
    if(clientData.username  === existUser.username ){
      res.status(200).send({val:"user found - welcome to Dashboard !"})
    }
    else{
      throw new Error(`user not found !`)
    }
  }
  catch(err){
      console.log(err);
      res.status(404).send(`invalid user`)
  }
}




module.exports = {
  createUser,
  checkUser,
};
