import request from 'supertest';
import { app } from '../index'; 

describe('AuthController', () => {
  it('Simulating a signin without password thoughout SQL injection', async () => {
    const response = await request(app)
      .post('/unsecure-sign-in') 
      .send({ email: "teste@test.com'--", password: "" });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Authenticated!', user: expect.any(Object) });
  });

  it('Simulating a signin without password thoughout SQL injection', async () => {
    const response = await request(app)
      .post('/sign-in')
      .send({ email: "teste@test.com'--", password: "" });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({ error: 'User not found' });
  });
});
