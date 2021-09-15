const request = require("request");
const cheerio = require("cheerio");

request(
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard",
  requestCallback
);

function requestCallback(err, res, html) {
  const $ = cheerio.load(html);
  const losingTeam = $(".team-gray .name-link p").text();
  const bothTeamsObject = $(".name-link p");
  const bothTeamScoreObject = $(
    ".match-info.match-info-MATCH.match-info-MATCH-half-width .score"
  );
  const winningTeamNameScoreArray =
    $(bothTeamsObject[0]).text() == losingTeam
      ? [$(bothTeamsObject[1]).text(), $(bothTeamScoreObject[1]).text()]
      : [$(bothTeamsObject[0]).text(), $(bothTeamScoreObject[0]).text()];
  console.log(winningTeamNameScoreArray);
}
