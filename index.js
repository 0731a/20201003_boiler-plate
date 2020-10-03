const express = require('express'); /*익스프레스 모듈 가져옴 */
const app = express(); /* app 제작 */
const port = 3000;

const config = require('./config/key');

const mongoose = require('mongoose');
mongoose
  .connect(config.mongoURI, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB Connect'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello Worldssssssss!');
});

const bodyParser = require('body-parser');

//application/x-www-form-urlencoded 데이터를 분석해서 가져오게 해줌
app.use(bodyParser.urlencoded({ extended: true }));
// application/json파일을 분석해서 가져올수 있게 함
app.use(bodyParser.json());

const { User } = require('./models/User');

/*레지스터 라우터*/
app.post('/register', (req, res) => {
  //회원 가입 할때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어 준다.
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  }); // save = mongoDB 메소드
});

app.listen(port, () => {
  /*포트 3000에서 앱 실행*/
  console.log(`Example app listening at http://localhost:${port}`);
});
