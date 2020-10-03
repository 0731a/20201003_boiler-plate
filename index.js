const express = require('express'); /*익스프레스 모듈 가져옴 */
const app = express(); /* app 제작 */
const port = 5000;

const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://SeoYeong:1234@boilerplate.xyyfx.mongodb.net/<dbname>?retryWrites=true&w=majority',
    {
      userNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log('MongoDB Connect'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  /*포트 3000에서 앱 실행*/
  console.log(`Example app listening at http://localhost:${port}`);
});
