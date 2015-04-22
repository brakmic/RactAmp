var Ractive = require('ractive');
var FooterComponent = Ractive.extend(require('./t-footer.ract'));

export default class Footer {
  constructor() {
      this.instance = new FooterComponent({
          el: 'footer-container'
      });
  }
}
