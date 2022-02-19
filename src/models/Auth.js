import { Model } from "@vuex-orm/core";

export default class Auth extends Model {
  static entity = "auth";

  static state() {
    return {
      token: "",
      check: false,
    };
  }

  static fields() {
    return {
      id: this.attr(null),
      name: this.string(""),
      email: this.string(""),
    };
  }
}
