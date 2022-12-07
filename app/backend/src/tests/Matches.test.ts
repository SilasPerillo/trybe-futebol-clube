import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { Response } from 'superagent'
import { AllMatches, AllMatchesInProgress, AllMatchesFinished, teamsNotFounds } from './mock/Matches.mock'

import App from '../app';
import Matches from '../database/models/Matches';
import Token from '../utils/jwtToken';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY2OTkyMTk1NywiZXhwIjoxNjcxMjE3OTU3fQ.1Yq8cEOkYPyCS2tAQoZv3L4ZrZoJ2I0oOEg2VOMz8b0'

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

  it('Verifica retorno 200 no caso de sucesso na rota /matches?inProgress nas partidas em andamento ', async () => {
    sinon
    .stub(Matches, 'findAll')
    .resolves(AllMatchesInProgress as any);

    chaiHttpResponse = await chai
      .request(app)
      .get('/matches?inProgress=true');

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.be.deep.eq(AllMatchesInProgress);
  })

  it('Verifica retorno 200 no caso de sucesso na rota /matches?inProgress nas partidas finalizadas', async () => {
    sinon
    .stub(Matches, 'findAll')
    .resolves(AllMatchesFinished as any);

    chaiHttpResponse = await chai
      .request(app)
      .get('/matches?inProgress=false');

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.be.deep.eq(AllMatchesFinished);
  })

  it('Verifica se não é possível criar uma partida com times não cadastrados ', async () => {
    sinon.stub(Token, 'validateToken').returns(true as any);

    chaiHttpResponse = await chai
      .request(app)
      .post('/matches')
      .send({
        homeTeam: 55,
        awayTeam: 44,
        homeTeamScore: 0,
        awayTeamScore: 0,
      });

    expect(chaiHttpResponse.status).to.be.eq(404);
    expect(chaiHttpResponse.body).to.be.deep.eq({ message: 'There is no team with such id!' });
  })
  
  // it('Verifica se não é possível criar uma partida com o token invalido ', async () => {
  //   sinon.stub(Token, 'validateToken').returns('Token inválido' as any);

  //   chaiHttpResponse = await chai
  //     .request(app)
  //     .post('/matches')
  //     .set('authorization', 'token')
  //     .send({
  //       homeTeam: 1,
  //       awayTeam: 2,
  //       homeTeamScore: 0,
  //       awayTeamScore: 0,
  //     });

  //   console.log('aaaaaaa', chaiHttpResponse.body);
  //   console.log('aaaaaaa', chaiHttpResponse.body);
  //   console.log('aaaaaaa', chaiHttpResponse.body);
    

  //   expect(chaiHttpResponse.status).to.be.eq(401);
  //   expect(chaiHttpResponse.body).to.be.deep.eq({ message: 'Token must be a valid token' });
  // })

})