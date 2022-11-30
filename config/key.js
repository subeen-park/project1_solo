if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod');
} else {
    module.exports = require('./dev.js');
} // local 환경에서 development 에 있으면 process.env.NODE_ENV 는 development 로 나오고,
// Deploy , 배포한 이후면 process.env.NODE_ENV 는 production 으로 나옴