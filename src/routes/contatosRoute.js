const express = require("express")
const router = express.Router()
// const bodyParser = require("body-parser")
const controller = require("../controller/contatosController")

router.get("/", controller.getAll)
router.get("/nome/:nome", controller.getByName)
router.get("/id/:id", controller.getById)
router.post("/criar", /*bodyParser.json(),*/ controller.add)
router.delete("/apagar/:id", controller.deleteById)
router.patch("/atualizar/:id", /*bodyParser.json(),*/ controller.updateUser)

module.exports = router
