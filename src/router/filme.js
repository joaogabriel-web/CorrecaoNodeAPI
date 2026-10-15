import express from 'express'
import ControllerFilmes from '../controller/filme.js'

const router = express.Router()

// Busca Todos
router.get("/buscar", ControllerFilmes.Buscar)
// Busca um - ID
router.get("/buscarUm/:id", ControllerFilmes.BuscarUm)
// Criar
router.post("/criar", ControllerFilmes.Criar)
// Alterar
router.put("/alterar/:id", ControllerFilmes.Alterar)
// AlterarStatus
router.put("/alterarStatus/:id", ControllerFilmes.AlterarStatus)
// Deletar
router.delete("/deleter/:id", ControllerFilmes.Deletar)


export default router