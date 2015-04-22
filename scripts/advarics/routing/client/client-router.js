let page      = require('page');
import MenuLogic from '../../config/menu-logic.js';
//a simple client-side router based on PageJS
//more info: http://visionmedia.github.io/page.js/
export default class Router {
  constructor() {
      this.defaults  = window.app.defaults;
      this.basePath  = this.defaults.routing.basePath;
      this.menuLogic = MenuLogic;
      this.configureEvents();
  }
  start() {
      page.base(this.basePath);
      page('/:selection', (ctx) => {
          this.activatePath(ctx.params.selection);
      });
      page();
  }
  //analyze url-elements and find matching route
  activatePath(selection) {
      this.menuLogic.activate(selection);
  }
  stop() {
      page.stop();
  }
  configureEvents() {
      var that = this;
      //sidebar-logo
      var logo = document.querySelector('.sidebar-logo');
      if (logo) {
          logo.addEventListener('click', (e) => {
              page('/');
              e.preventDefault();
          });
      }

  }
}
