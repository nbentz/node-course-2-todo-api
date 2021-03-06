let env = process.env.NODE_ENV || 'development';

if(env ==='development' || env ==='test') {
    let config = require('./config.json');
    let envConfig = config[env];
    Object.keys(envConfig).forEach(key => {
        process.env[key] = envConfig[key];
    });
}

// if(env === 'development'){
//     process.env.port = 3000;
//     process.env.MONGODB_URI = 'mongodb://localhost:27017/Todoapp';
// }else if (env === 'test'){
//     process.env.port = 3000;
//     process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/TodoappTest';
// }