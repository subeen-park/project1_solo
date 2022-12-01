const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10; // salt 를 이용해서 비밀번호를 암호화 해야됨. saltrounds 는 salt 몇글자인지..
// 10자리인 salt 만들어서 이 salt 이용해 비밀번호 암호화 한다.
//즉, saltRound 생성 -> salt 생성 ( saltRounds 사용) -> bcrypt 사용 ( salt 사용 )

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // 스페이스를 없애주는 역할
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: { // 토큰 유효기간
        type: Number
    }
})

userSchema.pre('save', function (next) { // next 하면 index.js 의 user.save 로 넘어감.

    var user = this // this 는 userschema 나타냄

    if (user.isModified('password')) {//비밀번호를 바꿀 때만 암호화 해야댐
        // 이메일, 이름 바꿀 때도 시도때도 없이 비밀번호 바꾸면 안되잫아여


        //비밀번호를 암호화 시킨다. 

        bcrypt.genSalt(saltRounds, function (err, salt) {
            //err 가 나면 가져오고 안나면 salt 가져왕
            if (err) return next(err)

            // salt 를 제대로 생성했다면
            bcrypt.hash(user.password, salt, function (err, hash) {
                //hash 가 암호화된 비빌번호
                if (err) return next(err)

                // 만약 암호화된 비밀번호 만드는 것을 성공했다면, 
                user.password = hash
                next()
            })
        })

    } else {
        // 만약 비밀번호 바꾸는게 아니라 다른 것을 바꿀 때는 그냥 next 를 해줘야 한다
        next()
    }

}) // user 모델의 정보를 저장하기 전에, 함수 실행하고 save 한다.

const User = mongoose.model('User', userSchema); // (모델이름, 스키마이름). 모델은 스키마를 감싸고 있다

module.exports = { User };