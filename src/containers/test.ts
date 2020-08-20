import { Builder, By, Key, until } from "selenium-webdriver";
const { ServiceBuilder } = require("selenium-webdriver/chrome");
const path = require("path");

export async function example() {
  const geckoDriverPath = path.join(__dirname, "chromedriver_linux"); // or wherever you've your geckodriver
  const serviceBuilder = new ServiceBuilder(geckoDriverPath);
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeService(serviceBuilder)
    .build();

  try {
    await driver.get("http://www.google.com/ncr");
    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
    // __dirname
    // chromedriver_linux
    return driver;
  } finally {
    await driver.quit();
  }
}
