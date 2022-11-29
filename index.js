// index.js 는 백엔드 시작점이라고 생각
// package.json 에서, script 부분 , start 하면 node 앱 시작. 시작점은 index .js
// 몽고 db id : sube,  password : 11
// mongodb+srv://subeen:<password>@project1solo.0yafbjz.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://subeen:<password>@project1solo.0yafbjz.mongodb.net/?retryWrites=true&w=majority

const { User } = require("./models/User.js")


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://subeen:1125@project1solo.0yafbjz.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser: true,
useUnifiedTopology: true,}).then(() => console.log('MongoDB Conneted ~!~!~!'))
.catch(err => console.log(err))

const express = require('express') // express module 가져옴
const app = express() // express function 을 이용해 새로운 app 을 만듬
const port = 5000 // port 번호는 딱히 상관 없음


const bodyParser = require('body-parser')


// application/x-www-form-urlencode 이렇게 된 데이터를 분석해서 가져올 수 있게 해준다
app.use(bodyParser.urlencoded({ extended: true })); // body parser는 클라이언트에서 오는 정보를 서버에서 분석해서 가져올 수 있게 해주는 것.
    
    



// application/json 이렇게 된 데이터를 분석해서 가져올 수 있게 해준다.
app.use(bodyParser.json());








app.get('/', (req,res) => res.send('Hello World!')) // root 디렉토리에오면 문자열 출력



app.post('/register', (req, res) => {
    // 회원 가입 할 때 필요한 정보들을 clinet 에서 가져오면
    // 그것들을 DB 에 넣어준다

    const user = new User(request.body)

    user.save((err, userInfo ) => { // mongodb method, req.body 정보들이 user.model에 저장됨
        if(err) return res.json({ success: false, err}) // err 전달할 때 json 형식으로 전달할 것.
        // 성공하지 못했다고 json 형식으로 전달.
        // err message 도 함께 전달.


        return res.status(200).json({ // 정보전달 성공
            // status(200) 은 성공했다는 뜻. json 형식으로 정보전달.
            success : true
        })

    }) 



})



app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 
// port 5000 에서 해당 앱 실행
// 해당 앱이 실행되면, 문자열 출력