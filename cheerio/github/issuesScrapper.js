const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

request("https://www.github.com/topics", requestCallback);

let gitTopics = [];

function requestCallback(err, res, html) {
  const $ = cheerio.load(html);
  let topicUrlAnchorTags = $(
    ".no-underline.d-flex.flex-column.flex-justify-center"
  );
  for (let i = 0; i < topicUrlAnchorTags.length; i++) {
    let topicUrl =
      "https://www.github.com" + $(topicUrlAnchorTags[i]).attr("href");
    gitTopics.push({
      "topicUrl": topicUrl,
      "repos": [],
    });
    request(topicUrl, fetchRepos.bind(this, i));
  }
}

let topicCounts = 0;
function fetchRepos(index, err, res, html) {
    topicCounts++;
    const $ = cheerio.load(html);
    let repoAnchorTags = $(".wb-break-word.text-bold");
    for(let i = 0; i < 8 && i < repoAnchorTags.length; i++) {
        gitTopics[index].repos.push({
            "repoUrl" : "https://www.github.com" + $(repoAnchorTags[i]).attr("href"),
            "issues" : []
        })
    }
    if(topicCounts == 3) {
        fs.writeFileSync("temp.json", JSON.stringify(gitTopics));
    }
}
