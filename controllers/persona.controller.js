const db = require("../models");
const Personas = db.agenda;
const Op = db.Sequelize.Op;

// Create and Save a new Personas



exports.create = (req, res) => {
  //Validar que hay un dato en rfc
  if(!req.body.rfc){
  	res.status(400).send({
  		message: "No puedes dejar el rfc vacío"
  	});
  	return;
  }*/

  //Crear una nueva persona
  persona={
   'rfc' : req.body.rfc,
  	'nombre' : req.body.nombre,
  	'app' : req.body.app,
  	'apm' : req.body.apm,
  	'sexo' : req.body.sexo,
  	'edociv' : req.body.edociv
  };

//Guardar una persona en la base de datos
	Personas.create(persona)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrió un error al crear la persona."
      });
    });
};



// Mostrar todas las personas de la base de datos.
exports.findAll = (req, res) => {
  
  Personas.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrió un error al realizar la consulta"
      });
    });
};

// Encontrar una persona por rfc
exports.findOne = (req, res) => {
  const rfc = req.params.rfc;

  Personas.findByPk(rfc)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "NO se encuentra la persona persona con rfc=" + rfc
      });
    });
};

// Actualizar una persona por rfc
exports.update = (req, res) => {
  const rfc = req.params.rfc;

  Personas.update(req.body, {
    where: { rfc: rfc }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Se ha actualizado la persona"
        });
      } else {
        res.send({
          message: `No se pudo actualizar la persona con rfc=$ rfc}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al intentar actualizar a la persona con rfc=" + rfc
      });
    });
};

// Eliminar una persona por rfc
exports.delete = (req, res) => {
	const rfc = req.params.rfc;

  Personas.destroy({
    where: { rfc: rfc }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Se ha eliminado la persona"
        });
      } else {
        res.send({
          message: `NO se puede eliminar la persona con rfc=$ rfc}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al intentar eliminar a la persona con rfc=" + rfc
      });
    });
};

// Eliminar todas las personas de la BD
exports.deleteAll = (req, res) => {
  Personas.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums}, se han eliminado de la BD!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrió un error al intentar eliminar los registros"
      });
    });
};

