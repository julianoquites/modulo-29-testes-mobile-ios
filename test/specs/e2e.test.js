import { expect } from "@wdio/globals";
import homePage from "../pageobjects/home.page.js";
import loginPage from "../pageobjects/login.page.js";
import productPage from "../pageobjects/product.page.js";
import browsePage from "../pageobjects/browse.page.js";
import cartPage from "../pageobjects/cart.page.js";

describe("Checkout process for a logged-in user", () => {
  it("should successfully complete a purchase", async () => {
    await homePage.openMenu("Account");

    await loginPage.login("cliente@ebac.art.br", "GD*peToHNJ1#c$sgk08EaYJQ");
    await homePage.openMenu("Browse");
    await browsePage.products[0].click();
    await productPage.addToCart();
    await cartPage.goToPayment();
    await cartPage.checkout();
    await expect(await (await cartPage.successTitle()).isDisplayed()).toBe(
      true
    );
  });
});
