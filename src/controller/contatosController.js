const contatosCollection = require("../model/contatoSchema");

const getAll = (request, response) => {

  contatosCollection.find((error, contato) => {
    if(error){
      return response.status(500).send(error)
    } else {
      return response.status(200).send(contato)
    }
  })
};

const getByName = (request, response) => {
  const nomeParams = request.params.nome
  const regex = new RegExp(nomeParams, 'i')
  const filtro = {nome: regex}

  contatosCollection.find(filtro, (error, contato) => {
    if(error){
      return response.status(500).send(error)
    } else if (contato.length > 0) {
      return response.status(201).send(contato)
    } else {
      return response.status(404).send("Usuário não encontrado!")
    }
  })
};

const getById = (request, response) => {
  const idParams = request.params.id
  contatosCollection.findById(idParams, (error, contato) =>{
    if(error){
      return response.status(500).send(error)
    } else if (contato) {
      return response.status(200).send(contato)
    } else {
      return response.status(404).send("Usuário não encontrado!")
    }
  })
}

const deleteById = (request, response) => {
  const idToDelete = request.params.id
  contatosCollection.findByIdAndDelete(idToDelete, (contato) => {
    if (contato) {
      return response.status(200).send("Deletado com sucesso!")
    } else {
      return response.status(404).send("Não Encontrado!")
    }
  })
}

const updateUser = (request, response) => {
  const body = request.body
  const id = request.params.id
  const options = {new: true}

  contatosCollection.findByIdAndUpdate(id, body, options, (error, contato) => {
    if(error){
      return response.status(500).send(error)
    } else {
      return response.status(201).send(contato) 
    }
  })  
}

const add = (request, response) => {
  const contatoBody = request.body
  const contato = new contatosCollection(contatoBody)
 
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
  getByName,
  getById,
  deleteById,
  updateUser,
  add
}