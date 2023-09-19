import { Request, Response } from 'express'
import { AuthService } from './auth.service'

export class AuthController {
  async unsecureSignIn(request: Request, response: Response) {
    const { email, password } = request.body

    const authService = new AuthService()
    
    const user = await authService.unsecureSignIn(email, password)
    
    if (!user) {
      return response.status(401).json({ error: 'User not found' })
    }

    return response.status(200).json({ message: 'Authenticated!', user})
  }

  async signIn(request: Request, response: Response) {
    const { email, password } = request.body

    const authService = new AuthService()
    
    const user = await authService.signIn(email, password)
    
    if (!user) {
      return response.status(401).json({ error: 'User not found' })
    }

    return response.status(200).json({ message: 'Authenticated!', user})
  }
}