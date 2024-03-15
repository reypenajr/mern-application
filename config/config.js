const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
    mongoUri: process.env.MONGODB_URI || "mongodb+srv://Reynaldo:Fc01hO5guUEW82Nh@cluster0.gklil1y.mongodb.net/Skeleton?retryWrites=true&w=majority"||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' + 
   (process.env.MONGO_PORT || '27017') +
    '/mernproject'
    }
    export default config
//uZByLphBNU0A1pci
//mongodb+srv://reynaldopena2018:<password>@cluster0.q33pwjn.mongodb.net/?retryWrites=true&w=majority