const puppy = require("puppeteer");

let moderators = ["bansalbhavesh47", "bansalbhavesh50"];

async function openBrowser(url) {
  const browser = await puppy.launch({
    headless: false,
    defaultViewport: false,
    args: [
      "--start-maximized", // you can also use '--start-fullscreen'
    ]
  });
  // browser.pages().then(function(tabs) {
  //     tabs[0].goto("https://www.google.com");
  // })
  // for(let i = 0; i < 9; i++) {
  //     browser.newPage().then(function(tab) {
  //         tab.goto("https://www.google.com");
  //     })
  // }

  const tabs = await browser.pages();
  const tab = tabs[0];
  await tab.goto("https://www.hackerrank.com/auth/login");
  let usernameInputTab = await tab.$("#input-1");
  let passwordInputTab = await tab.$("#input-2");
  let rememberCheckbox = await tab.$(".checkbox-input");
  let loginButton = await tab.$('[data-analytics="LoginPassword"]');
  await usernameInputTab.type("fesefig641@u461.com");
  await passwordInputTab.type("temp@123");
  await rememberCheckbox.click();
  await loginButton.click();
  await tab.waitForNavigation({ waitUntil: "networkidle2" });
  await tab.waitForSelector('[data-analytics="NavBarProfileDropDown"]', {
    visible: true,
  });
  let myProfileButton = await tab.$('[data-analytics="NavBarProfileDropDown"]');
  await myProfileButton.click();
  let administrationButton = await tab.$(
    '[data-analytics="NavBarProfileDropDownAdministration"]'
  );
  await administrationButton.click();
  await tab.waitForSelector(".admin-tabbed-nav a");
  let administrationTabs = await tab.$$(".admin-tabbed-nav a");
  await administrationTabs[1].click();
  await tab.waitForSelector(".btn.btn-green.backbone.pull-right", {visible: true});
  let createChallengeButton = await tab.$(".btn.btn-green.backbone.pull-right");
  await createChallengeButton.click();
  await tab.waitForSelector("#input_format-container .CodeMirror-code");
  let challengeNameInput = await tab.$("#name");
  let challengeDescriptionInput = await tab.$("#preview");
  await challengeNameInput.type("kjdsbf");
  await challengeDescriptionInput.type("kjdsbf");
  let codeTextAreas = await tab.$$(".CodeMirror-code");
//   let informatTextArea = await tab.$("#input_format-container .CodeMirror-code");
//   await informatTextArea.click();
//     await informatTextArea.type("kjdsbf");
await tab.evaluate( () => {
    window.scrollBy(0, window.innerHeight);
});
for(let i in codeTextAreas) {
        await codeTextAreas[i].click();
        await codeTextAreas[i].type("kjdsbf");
}
await tab.waitForSelector("#tags_tagsinput");
let tagsTextArea = await tab.$("#tags_tagsinput");
await tagsTextArea.click();
await tagsTextArea.type("kjdsbf");
await tab.keyboard.press("Enter");
let saveChangesButton = await tab.$(".save-challenge.btn.btn-green");
await saveChangesButton.click();
    // await codeTextAreas[1].click();
    // await codeTextAreas[1].type("kjdsbf");
await tab.waitForSelector('[data-tab="moderators"]');
let moderatorButton = await tab.$('[data-tab="moderators"]');
await moderatorButton.click();
await tab.waitForSelector("#moderator")
let moderatorTextArea = await tab.$("#moderator");
for(let moderator of moderators) {
    await moderatorTextArea.type(moderator);
    await tab.keyboard.press("Enter");
}
await tab.waitForSelector(".save-challenge.btn.btn-green");
saveChangesButton = await tab.$(".save-challenge.btn.btn-green");
await saveChangesButton.click();
}
openBrowser("https://www.google.com");
