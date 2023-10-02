/* es la forma en la cual le decimos a sequelize como se componen nuestras tabalas de base de datos */

const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize,DataTypes) => {

    const alias = "Movie" /* como se va a llamar la base de datos */

    const cols ={
        id:{
            type: DataTypes.INTEGER.UNSIGNED,/* tipo de dato entero, y unsigned significa que no acepta valores negativos */
            primaryKey : true, /* establece que id es la clave primaria */
            allowNull : false,/* indica que el campo id, no puede tener valores nulos */
            autoIncrement: true/* indica que se va a incrementar siempre que se agregue un nuevo registro */
        },
        title: {
            type :DataTypes.STRING(500),
            allowNull: false
        },
        rating:{
            type:DataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull:false,
        },
        awards:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue:0
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        length:{
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        genre_id:{
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: null   
        }
    }

    const config = {
        tableName: "movies",/*  en plural y en ingles siempre es mejor, va a buscar movie */
        timeStamps : true,/* si las marcas de tiempo no estan, y nunca le dije a sequelize que no estan me va a tirar error */
        underscored : true
    }



    const Movie = Sequelize.define(alias,cols,config)

    return Movie
}