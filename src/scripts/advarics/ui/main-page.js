let Ractive = require('ractive');
let mainPageCom = require('./t-main-page');
let rcu = require('rcu');
//let load = require('ractive-load');
//let html = require('./t-main-page');
let data = {
    'logo': './styles/advarics/images/advarics_logo.png',
    header: {
        about: 'About',
        services: 'Services',
        contact: 'Contact',
        toggleInfo: 'Toggle navigation'
    },
    headerLinks: {
        about: 'http://www.ractivejs.org',
        services: 'http://ampersandjs.com/',
        contact: 'http://www.brakmic.de'
    }
};

export default class MainPage {
  constructor() {
      this.app                       = window.app || {};
      this.instance                  = new mainPageCom({
        el: 'app-container'
      });
      //Ractive.components['MainPage'] = this.html;
      /*Ractive.load = load;
      Ractive.load('./t-main-page.html').then(function(MainPage){
        Ractive.components['MainPage'] = MainPage;
        console.log('main page component registered');
        var mainPage = new MainPage({
          el: 'app-container'
        });
      });*/
      console.log('main page class');
      rcu.init(Ractive);
      console.log('rcu' + rcu);
      //this.MainPage                  = this.define(html);
      //Ractive.components['MainPage'] = this.MainPage;
      //this.init('app-container', data);
  }
  init(el = 'body', data = {}) {
      return new this.MainPage({
          el,
          data
      })
  }
  define(template) {
      return Ractive.extend({
          template
      });
  }
}
