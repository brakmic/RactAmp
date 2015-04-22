var Ractive = require('ractive');
var MenuComponent = Ractive.extend(require('./t-menu.ract'));

export default class Menu {
  constructor() {
      this.instance = new MenuComponent({
          el: 'left-menu-acc'
      })
  }
}
