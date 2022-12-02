import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { Response } from 'superagent'
import { AllMatches, AllMatchesInProgress } from './mock/Matches.mock'

import App from '../app';
import Matches from '../database/models/Matches';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Teste para rota de partidas', () => {
  let chaiHttpResponse: Response;

  afterEach(() => {
    sinon.restore();
  });

  it('Verifica retorno 200 no caso de sucesso na rota /matches', async () => {
    sinon
    .stub(Matches, 'findAll')
    .resolves(AllMatches as any);

    chaiHttpResponse = await chai
      .request(app)
      .get('/matches');

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.be.deep.eq(AllMatches);
  })

  it('Verifica retorno 200 no caso de sucesso na rota /matches?inProgress', async () => {
    sinon
    .stub(Matches, 'findAll')
    .resolves(AllMatchesInProgress as any);

    chaiHttpResponse = await chai
      .request(app)
      .get('/matches?inProgress=true');

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.be.deep.eq(AllMatchesInProgress);
  })

})