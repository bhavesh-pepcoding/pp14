const request = require("request");
const cheerio = require("cheerio");

request(
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard",
  requestCallback
);

let batsmanProfileUrls = [];

function requestCallback(err, res, html) {
  const $ = cheerio.load(html);
  const batsmanAnchorTags = $(".batsman-cell a");
  for(let i = 0; i < batsmanAnchorTags.length; i++) {
      batsmanProfileUrls.push({
          name: $(batsmanAnchorTags[i]).text(),
          url: "https://www.espncricinfo.com" + $(batsmanAnchorTags[i]).attr("href")
      })
  }

  for(let j in batsmanProfileUrls) {
    request(batsmanProfileUrls[j].url, fetchDateOfBirth.bind(this,j));
  }
  
}

let count = 0;

function fetchDateOfBirth(index, err, res, html) {
    count++;
    const $ = cheerio.load(html);
    const playerDateOfBirth = $($("h5.player-card-description.gray-900")[1]).text();
    batsmanProfileUrls[index]["Date Of Birth"] = playerDateOfBirth;
    if(count == batsmanProfileUrls.length) {
        console.log(batsmanProfileUrls);
    }
}
