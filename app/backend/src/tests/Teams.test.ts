import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { Response } from 'superagent'
import { AllTeams } from './mock/Teams.mock'

import App from '../app';
import Teams from '../database/models/Teams';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Teste para rota de times', () => {
  let chaiHttpResponse: Response;

  afterEach(() => {
    sinon.restore();
  });

  it('Verifica retorno 200 no caso de sucesso', async () => {
    sinon
    .stub(Teams, 'findAll')
    .resolves(AllTeams as Array<Teams>);

    chaiHttpResponse = await chai
      .request(app)
      .get('/teams');

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.be.deep.eq(AllTeams);
  })

  it('Verifica retorno 404 no caso de não encontrar o time', async () => {
    sinon
    .stub(Teams, 'findByPk')
    .resolves(null);

    chaiHttpResponse = await chai
      .request(app)
      .get('/teams/1');

    expect(chaiHttpResponse.status).to.be.eq(404);
    expect(chaiHttpResponse.body).to.be.deep.eq({ message: 'There is no team with such id!' });
  }
  )
})