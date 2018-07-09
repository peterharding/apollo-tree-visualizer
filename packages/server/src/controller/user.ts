import * as mongoose from "mongoose";
const User = mongoose.model("User");

export function getUsers() {
  return new Promise((resolve, reject) => {
    User.find({}, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(result);
    });
  });
}

export function getUser(id: string) {
  return new Promise((resolve, reject) => {
    User.findOne({_id: id}, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      if (result) {
        result.id = result._id;
        resolve(result);
      }
    });
  });
}

export function createUser(email: string) {
  return new Promise((resolve, reject) => {
    const user = new User({email});
    user.save((err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}
