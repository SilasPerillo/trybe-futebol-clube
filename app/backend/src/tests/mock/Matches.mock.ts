const AllMatches = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 1,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      id: 16,
      teamName: "São Paulo"
    },
    teamAway: {
      id: 8,
      teamName: "Grêmio"
    }
  },
  {
    "id": 2,
    "homeTeam": 9,
    "homeTeamGoals": 1,
    "awayTeam": 14,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 9,
      "teamName": "Internacional"
    },
    "teamAway": {
      "id": 14,
      "teamName": "Santos"
    }
  },
  {
    "id": 3,
    "homeTeam": 4,
    "homeTeamGoals": 3,
    "awayTeam": 11,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "id": 4,
      "teamName": "Corinthians"
    },
    "teamAway": {
      "id": 11,
      "teamName": "Napoli-SC"
    }
  },
  {
    "id": 4,
    "homeTeam": 3,
    "homeTeamGoals": 0,
    "awayTeam": 2,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "id": 3,
      "teamName": "Botafogo"
    },
    "teamAway": {
      "id": 2,
      "teamName": "Bahia"
    }
  },
  {
    "id": 5,
    "homeTeam": 7,
    "homeTeamGoals": 1,
    "awayTeam": 10,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 7,
      "teamName": "Flamengo"
    },
    "teamAway": {
      "id": 10,
      "teamName": "Minas Brasília"
    }
  }
];

const AllMatchesInProgress = [
  {
    "id": 1,
    "homeTeam": 16,
    "homeTeamGoals": 1,
    "awayTeam": 8,
    "awayTeamGoals": 1,
    "inProgress": true,
    "teamHome": {
      "id": 16,
      "teamName": "São Paulo"
    },
    "teamAway": {
      "id": 8,
      "teamName": "Grêmio"
    }
  },
  {
    "id": 2,

    "homeTeam": 9,
    "homeTeamGoals": 1,
    "awayTeam": 14,
    "awayTeamGoals": 1,
    "inProgress": true,
    "teamHome": {
      "id": 9,
      "teamName": "Internacional"
    },
    "teamAway": {
      "id": 14,
      "teamName": "Santos"
    }
  },
  {
    "id": 3,
    "homeTeam": 4,
    "homeTeamGoals": 3,
    "awayTeam": 11,
    "awayTeamGoals": 0,
    "inProgress": true,
    "teamHome": {
      "id": 4,
      "teamName": "Corinthians"
    },
    "teamAway": {
      "id": 11,
      "teamName": "Napoli-SC"
    }
  }
];

const AllMatchesFinished = [
  {
    "id": 1,
    "homeTeam": 16,
    "homeTeamGoals": 1,
    "awayTeam": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 16,
      "teamName": "São Paulo"
    },
    "teamAway": {
      "id": 8,
      "teamName": "Grêmio"
    }
  },
  {
    "id": 2,

    "homeTeam": 9,
    "homeTeamGoals": 1,
    "awayTeam": 14,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "id": 9,
      "teamName": "Internacional"
    },
    "teamAway": {
      "id": 14,
      "teamName": "Santos"
    }
  },
  {
    "id": 3,
    "homeTeam": 4,
    "homeTeamGoals": 3,
    "awayTeam": 11,
    "awayTeamGoals": 0,
    "inProgress": false,
    "teamHome": {
      "id": 4,
      "teamName": "Corinthians"
    },
    "teamAway": {
      "id": 11,
      "teamName": "Napoli-SC"
    }
  }
];

const teamsNotFounds = {
  checkHomeTeam: {
    statusCode: 404,
  },
  checkAwayTeam: {
    statusCode: 404,
  }
}

export { AllMatches, AllMatchesInProgress, AllMatchesFinished, teamsNotFounds };
