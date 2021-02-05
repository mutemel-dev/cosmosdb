var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://mucosmos:iMe6E00zqEAxfby7G7Sy3VgKFef7qIcFuMNl6ZgAIZq2Ofbp9mKtJS5LbFJGTLUQob1HPNojFGtpETkH0SvkkA==@mucosmos.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@mucosmos@&retrywrites=false', {
    useNewUrlParser: true,
    socketTimeoutMS: 5000,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.catch((err) => {
    console.log({err})
})

module.exports = {mongoose};