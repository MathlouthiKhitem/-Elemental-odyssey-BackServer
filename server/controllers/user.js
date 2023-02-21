import User from "../models/user.js";
import bcrypt from 'bcrypt';
import {generatePassword} from '../services/generatePassword.js'
var saltRounds = 10;
const password = generatePassword();
export async function signin(req, res) {
  const user = await User.findOne({ Email: req.body.Email });
  if (user) {
    // check user password with hashed password stored in the database
    const validPassword = await bcrypt.compare(req.body.Password, user.Password);
    if (validPassword) {
    res.status(200).json({ message: "Valid password" });
    }
  else {
    res.status(400).json({ error: "Invalid Password" });
  }
  } else {
  res.status(401).json({ error: "User does not exist" });
  }
  };
export async function signup(req, res) {
  const  hashedPwd = await bcrypt.hash(req.body.Password, saltRounds);
    User.create({
        FirstName: req.body.FirstName,
        Password:hashedPwd,	
        LastName:req.body.LastName,
        Age:req.body.Age,
        Email:req.body.Email,
        Rank:0
        })
      .then(
        res.status(200).json({
            FirstName: req.body.FirstName,
          Password: req.body.Password,
        }))
     
    }
    export function putOnce(req, res) {
      User
      //.findOneAndUpdate({  "Email": req.body.Email}, { "Image": req.body.Image,  "Password": req.body.Password,  "Age": req.body.Age ,  "UserName": req.body.UserName  },{new: true})
      .findOneAndUpdate({ "Email": req.body.Email }, { "Image": req.body.Image,  "Password": req.body.Password,  "Age": req.body.Age ,  "UserName": req.body.UserName},{new: true})

      .then(doc => {
        res.status(200).json(doc);
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
    
    }
    export async function getOne(req,res) {
      await User.findOne({ UserName: req.body.UserName }).then((doc)=>{
        res.status(200).json({
          UserName : doc.UserName ,
          Balance : doc.Balance,
          Rank : doc.Rank,
          ImageRank :doc.ImageRank,

        });
      })
      
      }
      export async function signup2(req, res) {
   
        User.create({
            FirstName: req.body.FirstName,
            Password:req.body.Password,	
            LastName:req.body.LastName,
            Age:req.body.Age,
            Email:req.body.Email,
            Image: `${req.protocol}://${req.get("host")}/img/${req.file.filename}`,
            Rank:0
            })
          .then(
            res.status(200).json({
                FirstName: req.body.FirstName,
              Password: req.body.Password,
            }))
         
        }