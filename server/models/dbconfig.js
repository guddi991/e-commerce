const dotenv = require('dotenv');
dotenv.config();
const { Sequelize,DataTypes, Model } = require('sequelize')

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,{
        HOST:process.env.HOST,
        dialect:'mysql',
        pool: {
            max : 5,
            min : 0,
            acquire: 30000,
            idle: 10000
        },
        dielectOptions: {
            connectTimeOut:60000
        }
    },
    
)

const connectDB = async () => {
    try{
        await sequelize.authenticate()
        .then((req)=>{
            console.log("DB connected !")
        })
        .catch((err)=>{
            console.log("Error: "+err)
        })

    }catch(err){
        console.log("DB conncetion error" +err)
    }
}

connectDB()

const db = {}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

const Users = require('./userModel')(sequelize, DataTypes)

db.sequelize.sync({force:false})
.then(()=>{
    console.log("DB synced !")
})

Model.exports = db