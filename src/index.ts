import express from 'express'
import bodyParser from 'body-parser'
import { AuthController } from './auth/auth.controller'

const app = express()
const port = 3000

app.use(bodyParser.json())

const authController = new AuthController()

app.post('/unsecure-sign-in', authController.unsecureSignIn)
app.post('/sign-in', authController.signIn)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

export { app }