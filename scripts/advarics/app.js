require('./config/deps');
import MainPage from './ui/main-page.js';
import Footer  from './ui/footer.js';
import Menu from './ui/menu.js';
import Router from './routing/client/client-router.js';

class App {

  constructor() {
      this.app = window.app;
      document.addEventListener('DOMContentLoaded', this.domLoaded.bind(this), false);
  }
  //execute when DOM gets ready
  domLoaded() {
      this.setUI();
      this.setRouting();
  }
  //load Ractive components
  setUI() {
      this.mainPage = new MainPage();
      this.menu = new Menu();
      this.footer = new Footer();
  }
  //init simple client-side routing
  setRouting() {
      this.router = new Router();
      this.router.start();
  }
}

module.exports = window.App = new App();
