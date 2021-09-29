const puppy = require("puppeteer");
const id = "fesefig641@u461.com";
const password = "temp@123";
async function main() {
  let browser = await puppy.launch({
    headless: false,
    defaultViewport: false,
  });
  await browser.newPage();
  let tabs = await browser.pages();
  let tab = tabs[1];
  await tab.goto("https://www.hackerrank.com/auth/login");
  await tab.type("#input-1", id);
  await tab.type("#input-2", password);
  await tab.click('[data-analytics="LoginPassword"]');
  await tab.waitForSelector(
    ".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled"
  );
  await tab.click(
    ".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled"
  );
  await tab.waitForSelector('[data-attr2="one-week-preparation-kit"]');
  let solveChallengeButtons = await tab.$$(
    '[data-attr2="one-week-preparation-kit"]'
  );
  let solveChallengeUrls = [];
  solveChallengeUrls.push(
    await tab.evaluate(function (ele) {
      return "https://www.hackerrank.com" + ele.getAttribute("href");
    }, solveChallengeButtons[0])
  );
  solveChallengeUrls.push(
    await tab.evaluate(function (ele) {
      return "https://www.hackerrank.com" + ele.getAttribute("href");
    }, solveChallengeButtons[2])
  );

  for (let i = 0; i < solveChallengeUrls.length; i++) {

    solveChallenge(solveChallengeUrls[i], tabs[i]);
  }
    // await browser.close();
}

async function solveChallenge(url, tab) {
  let problemUrl = url.replace("?", "/problem?");
  let editorialUrl = url.replace("?", "/editorial?");
  await tab.goto(editorialUrl);
  let solutionsH3Tags = await tab.$$(".hackdown-content h3");
  let solutionLanguages = [];
  for (let solutionsH3Tag of solutionsH3Tags) {
    solutionLanguages.push(
      await tab.evaluate(function (ele) {
        return ele.innerText;
      }, solutionsH3Tag)
    );
  }
  let solutionsPreTags = await tab.$$(".highlight pre");
  let solution;
  for (let i = 0; i < solutionLanguages.length; i++) {
    if (solutionLanguages[i] == "C++") {
      solution = await tab.evaluate(function (ele) {
        return ele.innerText;
      }, solutionsPreTags[i]);
      break;
    }
  }
  await tab.goto(problemUrl);
  await tab.waitForSelector(".view-lines");
  await tab.click('[type="checkbox"]');
  await tab.type('#input-1',solution);
  await tab.keyboard.down("Control");
  await tab.keyboard.press("A");
  await tab.keyboard.press("X");
  await tab.keyboard.up("Control");
  await tab.click(".view-lines");
  await tab.keyboard.down("Control");
  await tab.keyboard.press("A");
  await tab.keyboard.press("V");
  await tab.keyboard.up("Control");
  await tab.click(".hr-monaco-submit");
  await tab.waitForSelector(".congrats-wrapper");
}
main();
