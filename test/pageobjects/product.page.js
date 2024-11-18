import { $, browser } from "@wdio/globals";

class ProductPage {
  async getProductTitle(name) {
    return $(`~${name}`);
  }

  async addToCart() {
    return $(`-ios predicate string:name == "addToCart"`).click();
  }

}

export default new ProductPage();
