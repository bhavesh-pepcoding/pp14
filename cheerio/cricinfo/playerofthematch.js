const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results", requestCallback);

function requestCallback (err, csv) {
    fs.writeFileSync("result.csv", csv)
}
