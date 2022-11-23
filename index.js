// index.js 는 백엔드 시작점이라고 생각
// package.json 에서, script 부분 , start 하면 node 앱 시작. 시작점은 index .js
// 몽고 db id : sube,  password : 11
// mongodb+srv://subeen:<password>@project1solo.0yafbjz.mongodb.net/?retryWrites=true&w=majority

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://subeen:1125@project1solo.0yafbjz.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser: true,
useUnifiedTopology: true,}).then(() => console.log('MongoDB Conneted ~!~!~!'))
.catch(err => console.log(err))

const express = require('express') // express module 가져옴
const app = express() // express function 을 이용해 새로운 app 을 만듬
const port = 5000 // port 번호는 딱히 상관 없음

app.get('/', (req,res) => res.send('Hello World!')) // root 디렉토리에오면 문자열 출력

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 
// port 5000 에서 해당 앱 실행
// 해당 앱이 실행되면, 문자열 출력