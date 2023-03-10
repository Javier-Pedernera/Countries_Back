const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('activity', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.ENUM("1", "2", "3", "4", "5"),
            allowNull: false,
        }, //array
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }, //array
        season: {
            type: DataTypes.ENUM("summer", "autumn", "winter", "spring"),
            allowNull: false,
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: false
        }
    },{timestamps:false});
};

// Actividad Turística con las siguientes propiedades:
// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)