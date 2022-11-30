import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { Response } from 'superagent'

import App from '../app';
import Users from '../database/models/Users';
import ValidatePassword from '../utils/validatePassword';
import Token from '../utils/jwtToken';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Teste para rota login', () => {
  let chaiHttpResponse: Response;

  afterEach(() => {
    sinon.restore();
  });

  it('Verifica retorno 400 no caso do campo email ausente', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({password: '123456'});

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body.message).to.be.eq('All fields must be filled');
  })

  it('Verifica retorno 400 no caso do campo password ausente', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({email: 'valid@admin.com'});
    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body.message).to.be.eq('All fields must be filled');
  })

  it('Verifica retorno 401 no caso de email inválido', async () => {
    sinon
    .stub(Users, 'findOne')
    .resolves(undefined);

    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({email: 'invalid@admin.com', password: 'secret_admin'});

    expect(chaiHttpResponse.status).to.be.eq(401);
    expect(chaiHttpResponse.body.message).to.be.eq('Incorrect email or password');
  })

  it('Verifica retorno 401 no caso de senha inválida', async () => {
    sinon.stub(ValidatePassword, "isEqual").resolves(false);
    sinon.stub(Users, "findOne").resolves({
      id: 1,
      username: "Sinon Stark",
      email: "valid@admin.com",
      role: "admin",
  } as Users);

    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({email: "valid@admin.com", password: "invalid"});

    expect(chaiHttpResponse.status).to.be.eq(401);
    expect(chaiHttpResponse.body.message).to.be.eq('Incorrect email or password');
    })

    it('Verifica retorno 200 no caso de login válido', async () => {
      sinon.stub(ValidatePassword, "isEqual").resolves(true);

      sinon.stub(Token, "createToken").returns("token");
      
      sinon.stub(Users, "findOne").resolves({
        id: 1,
        username: "Sinon Stark",
        email: "valid@admin.com",
        role: "admin",
    } as Users);

    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({email: "valid@admin.com", password: "invalid"});

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body.message).to.deep.eq({token: 'token'});

  })
});