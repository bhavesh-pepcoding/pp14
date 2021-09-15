const request = require("request");
const cheerio = require("cheerio");

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard", requestCallback);

function requestCallback (err, res, html) {
    const $ = cheerio.load(html);
    console.log($(".playerofthematch-name").length);
    console.log($($(".playerofthematch-name")[1]).get(0).attribs);
}
