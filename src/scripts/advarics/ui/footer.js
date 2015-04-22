let Ractive = require('ractive');
let html = require('./t-footer')

export default class Footer {
  constructor() {
      this.app                     = window.app || {};
      this.instance                = {};
      this.Footer = new html();
      //this.Footer                  = this.define(html);
      //Ractive.components['Footer'] = this.Footer;
      //this.init('footer-container');
  }
  init(el = 'body', data = { year: new Date().getFullYear() }) {
      return new this.Footer({
          el,
          data
      });
  }
  define(template) {
      return Ractive.extend({
          template,
          onrender: function() {
              console.log('footer init');
          }
      });
  }
}
