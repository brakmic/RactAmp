require('./config/deps.js');
import MainPage from './ui/main-page.js';
//import Footer  from './ui/footer.js';
//import Menu from './ui/menu.js';

class App {

  constructor() {
      this.app = window.app;
      document.addEventListener('DOMContentLoaded', this.domLoaded.bind(this), false);
  }
  domLoaded() {
      this.setUI();
      this.setRouting();
  }
  setUI() {
    console.log('booting ui');
      this.mainPage = new MainPage();
      //this.menu = new Menu();
      //this.footer = new Footer();
  }
  setRouting() {
      this.router = require('./routing/client-router');
      this.router.start();
  }
}

module.exports = window.App = new App();
