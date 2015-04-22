let page      = require('page');
import MenuLogic from '../config/menu-logic.js';
//a simple client-side router based on PageJS
//more info: http://visionmedia.github.io/page.js/
class Router {
  constructor() {
      this.defaults  = window.app.defaults;
      this.basePath  = this.defaults.routing.basePath;
      this.menuLogic = MenuLogic;
      this.configureEvents();
  }
  start() {
      page.base(this.basePath);
      page('/', (ctx) => {
          this.activatePath(ctx);
      });
      page('/customers', (ctx) => {
          this.activatePath(ctx);
      });
      page('*', (ctx) => {
          page('/');
      });
      page();
  }
  //analyze url-elements and find matching route
  activatePath(ctx) {
      this.menuLogic.activate(ctx.path.replace(/^\/|\/$/g, ''));
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

module.exports = new Router();
