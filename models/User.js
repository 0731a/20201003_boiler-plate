const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true /*빈칸 제거*/,
    unique: 1 /*중복 불가*/,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    /*token 유효기간*/ type: Number,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = { User }; /*다른 곳에서 사용할 수 있게 함*/
