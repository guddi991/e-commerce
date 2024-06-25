
const sequelize = require('sequelize')

module.exports = (sequelize, DataTypes)=>{
    const users = sequelize.define("Users",
        {
            firstname:{
                type: DataTypes.STRING,
                allowNull: false
            },
            lastName:{
                type: DataTypes.STRING
            },
            email:{
                type:DataTypes.STRING,
                allowNull: false
            },
            phone:{
                type: DataTypes.INTERGER,
                allowNull: false
            },
        },{
            timeStamps: true,
            createAt:'created_at',
            updatedAt: 'updated_at'
        })
        return users
}

