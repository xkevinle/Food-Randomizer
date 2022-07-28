const mongoose = require('mongoose');

// local db
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/sp')
//   .then(() => console.log('Connected to Mongo DB.'))
//   .catch((err) => console.log(err));

const MONGO_URI = 'mongodb+srv://xkevinle:Lol123123@cluster0.uvftduh.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'foodies',
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  favFoods: Array,
});

const User = mongoose.model('user', userSchema);

module.exports = {
  User,
};
