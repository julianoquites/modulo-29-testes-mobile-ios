import { $, $$ } from "@wdio/globals";

class BrowsePage {
  get products() {
    return $$(`-ios predicate string:name == "productDetails"`);
  }
}

export default new BrowsePage();
