const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: false,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then((con) => {
    console.log('connection successful');
}).catch((err) => {
    console.log("the error is "+err);
});

