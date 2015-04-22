var Ractive = require('ractive');
var MainPageComponent = Ractive.extend(require('./t-main-page.ract'));

export default class MainPage {
  constructor() {
      this.instance = new MainPageComponent({
          el: 'app-container'
      });
  }
}
