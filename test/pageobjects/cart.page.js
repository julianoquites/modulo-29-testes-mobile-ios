import { $ } from "@wdio/globals";

class CartPage {
  async goToPayment() {
    return $(
      `-ios predicate string:name == "selectAddressOrContinueToPayment"`
    ).click();
  }
  async successTitle() {
    return $(`-ios predicate string:name == "Order Success"`);
  }
  async checkout() {
    return $(`-ios predicate string:name == "Checkout"`).click();
  }
}

export default new CartPage();
