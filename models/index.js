const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');


const Page = db.define('page',{
    title:
        {type: Sequelize.STRING,
    allowNull: false},
    slug:{
        type: Sequelize.STRING,
    allowNull: false,
    isValidate: {
        isUrl: true}},
    content:
        {type: Sequelize.TEXT,
    allowNull: false},
    status: {type: Sequelize.ENUM('open','closed'),
    defaultValue: 'open'}
} )

const User = db.define('user', {
    name: {type: Sequelize.STRING,
        allowNull: false},
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{isEmail: true
        }
    }
})

module.exports = { db, Page, User }
// db.authenticate().
// then(() => {
//   console.log('connected to the database (index.js)');
// })
