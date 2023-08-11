const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = () => {
    mongoose.connect(process.env.MONGOOSE_CONNECTION_URL, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    .then(()=>{
        console.log("Database connected");
    })
    .catch((err)=>{
        console.log(err);
    })
};
