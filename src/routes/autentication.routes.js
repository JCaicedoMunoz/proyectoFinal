import express from 'express'
import { AutenticacionController } from '../controller/autentication.controller'

const router = express.Router()

router.post('/login', AutenticacionController.login)
router.get('/roles', AutenticacionController.obtenerRoles)

export default router
