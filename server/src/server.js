const axios =  require('axios');
const api = axios.create({
  headers: {'X-Auth-Token':'2478948808e74b9ba839898ffefe7265'},
})
const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors())
const PORT = 3001;

let teams = [];
let results = [];

app.get('/', function(req, res) {

      res.status(200).send("Hello Eliran");

});

app.get('/teams', function (req,res) {
  return api.get('http://api.football-data.org/v2/competitions/2000/teams')
    .then(resp => {
      const data = resp.data.teams.map(team => {
        return {
          id: team.id,
          name: team.name
        }});
      teams = data;
      res.status(200).send(JSON.stringify(data));

    })
    .catch(e => {
      if(teams.length>0){
        res.status(200).send(JSON.stringify(teams));
      }

      res.status(400).send(e)
    });

  ;
});

app.get('/results/:teamId', function (req,res) {
  if(results.length>0){
    return res.status(200).send(JSON.stringify(results[req.params.teamId]));
  }

  return api.get('http://api.football-data.org/v2/competitions/2000/matches')
    .then(resp => {
      const data = resp.data.matches;
      for(let i= 0;i<data.length;i++)
      {
        if(results[data[i].homeTeam.id] == null)
        {
          results[data[i].homeTeam.id] = [];
        }
        if(results[data[i].awayTeam.id] == null)
        {
          results[data[i].awayTeam.id] = [];
        }
        let match = {
          stage:data[i].stage,
          homeTeam:data[i].homeTeam.name,
          awayTeam:data[i].awayTeam.name,
          homeTeamScore:data[i].score.fullTime.homeTeam,
          awayTeamScore:data[i].score.fullTime.awayTeam,


        }
        results[data[i].awayTeam.id].push(match);
        results[data[i].homeTeam.id].push(match);
      }
      res.status(200).send(JSON.stringify(results[req.params.teamId]));

    })
    .catch(e => {

      res.status(400).send(e)
    });

  ;
});

app.listen(PORT, function() {
  console.log('Server is running on PORT:',PORT);
});