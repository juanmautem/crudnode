module.exports = (sequelize, Sequelize) => {
  const Persona = sequelize.define("personas", {
    rfc: {
      type: Sequelize.STRING
    },
    nombre: {
      type: Sequelize.STRING
    },
    app: {
      type: Sequelize.STRING
    },
    apm: {
      type: Sequelize.STRING
    },
    sexo: {
      type: Sequelize.STRING
    },
    edociv: {
      type: Sequelize.STRING
    }
  });

  return Persona;
};