import mongoose from 'mongoose'
import bluebird from 'bluebird'
import config from './config'

export default callback => {
  mongoose.Promise = bluebird
  let db = mongoose.connection;
  mongoose.connect(config.mongoUrl, { useMongoClient: true })
    .then(function(){
        console.log("Connected to MongoDB ");
    }).catch(err => console.error(err));
  callback(db)
}
