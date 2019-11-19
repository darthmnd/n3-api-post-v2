const contatosCollection = require("../model/contatoSchema");

const getAll = (request, response) => {

  contatosCollection.find((error, contatos) => {
    if(error){
      return response.status(500).send(error)
    } else {
      return response.status(200).send(contatos)
    }
  })
};

const add = (request, response) => {

  const contatoDoBody = request.body
  const contato = new contatosCollection(contatoDoBody)
 
  contato.save((error) => {
    if (error) {
      return response.status(400).send(error)
    } else {
      return response.status(201).send(contato)
    }
  })
}

module.exports = {
  getAll,
  add
}