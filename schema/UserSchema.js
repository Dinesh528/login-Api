const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
          },
          email: {
            type: String,
            required: true
          },
          password: {
            type: String,
            required: true
          },
          date: {
            type: Date,
            default: Date.now
          }

},
{
    collection:"user"
}

);
module.exports = mongoose.model('UserSchema',userSchema);