const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize,DataTypes) => {
    const alias = "Genre"
    const cols = {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,/* tipo de dato entero, y unsigned significa que no acepta valores negativos */
            primaryKey : true, /* establece que id es la clave primaria */
            allowNull : false,/* indica que el campo id, no puede tener valores nulos */
            autoIncrement: true/* indica que se va a incrementar siempre que se agregue un nuevo registro */
        },
        name:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        ranking:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique : true
        },
        active:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1,
        }
    }
    const config = {
        tableName: "genres",/*  en plural y en ingles siempre es mejor, va a buscar movie */
        timeStamps : true,/* si las marcas de tiempo no estan, y nunca le dije a sequelize que no estan me va a tirar error */
        underscored : true
    }


    const Genre = Sequelize.define(alias,cols,config)

    return Genre
}