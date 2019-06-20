const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const urlenccodedParser = bodyParser.urlencoded({extended: true});
const layout = require('./views/layout');
// const userRouter = require('./routes/user');
const wikiRouter = require('./routes/wiki');


const models = require('./models')
const app = express()



app.use('/wiki', wikiRouter);
// app.use('/user', userRouter);
app.use(express.static('views'))


app.get('/', (req,res) =>{
    res.send(layout())
})

const PORT = 1337;
const init = async () => {
    await models.db.sync ({force:true})
    // await models.Page.sync()

    app.listen(PORT, () => {
        console.log(`App listening in port ${PORT}`);
      });
}

init()




// db.authenticate().
// then(() => {
//   console.log('connected to the database (app.js)');
// })


